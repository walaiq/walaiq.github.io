// Service Worker بسيط — غرضه الأساسي تفعيل شرط "قابلية التثبيت" (Installability)
// حتى يقدر المتصفح يعرض خيار "إضافة إلى الشاشة الرئيسية / تثبيت التطبيق" تلقائياً.
// ما نسوي أي تخزين مؤقت (Cache) حالياً — بس تمرير الطلبات عادي زي ما هي.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

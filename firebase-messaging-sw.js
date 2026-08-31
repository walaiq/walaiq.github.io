// هذا الملف لازم يكون بجذر الموقع (نفس مستوى index.html) — مو داخل أي مجلد
// GitHub Pages: حطه بجنب index.html مباشرة بنفس الـ repository

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// نفس إعدادات المشروع الموجودة بـ index.html بالضبط
firebase.initializeApp({
  apiKey: "AIzaSyBGZ0UfENYGsClarETAIz4OozxRNOxBHXs",
  authDomain: "wala-loyalty-b59bf.firebaseapp.com",
  projectId: "wala-loyalty-b59bf",
  storageBucket: "wala-loyalty-b59bf.firebasestorage.app",
  messagingSenderId: "984588037982",
  appId: "1:984588037982:web:5596fe62228dc3e6dda9cf",
  measurementId: "G-94YZ91K1VX"
});

const messaging = firebase.messaging();

// يشتغل هذا لما توصل رسالة والزبون مو فاتح صفحة الموقع بذيك اللحظة (الصفحة مسكّرة أو بالخلفية)
messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'خَتم';
  const options = {
    body: (payload.notification && payload.notification.body) || '',
    icon: '/icon-192.png', // اختياري: لو ما عندك أيقونة بهذا الاسم بجذر الموقع، احذف هذا السطر أو ضيف صورة
    dir: 'rtl'
  };
  self.registration.showNotification(title, options);
});

# ToolBoxPro 🛠️

موقع أدوات مجانية عبر الإنترنت مبني بـ HTML/CSS/JS خالص

## الأدوات المتاحة
- 🖼️ ضاغط الصور
- 🔐 مولد كلمات المرور
- 🎨 محول الألوان (HEX/RGB/HSL)
- 📝 عداد الكلمات
- ⚖️ حاسبة BMI
- 🔄 مرمّز Base64

## هيكل المشروع
```
toolboxpro/
├── index.html          # الصفحة الرئيسية
├── css/style.css       # التصميم الكامل
├── js/main.js          # JavaScript مشترك
├── tools/              # صفحات الأدوات
│   ├── image-compressor.html
│   ├── password-generator.html
│   ├── color-converter.html
│   ├── word-counter.html
│   ├── bmi-calculator.html
│   └── base64.html
└── pages/              # الصفحات القانونية
    ├── about.html
    ├── privacy.html
    └── contact.html
```

## النشر على GitHub Pages
1. ارفع المجلد على GitHub
2. اذهب إلى Settings → Pages
3. اختر Branch: main
4. احفظ — الموقع سيكون جاهزاً خلال دقيقة

## ربط AdSense
في `index.html` فعّل الكود:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
```
واستبدل `XXXXXXXX` بمعرف حسابك.

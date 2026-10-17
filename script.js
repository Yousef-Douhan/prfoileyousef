const translations = {
    ar: {
        nav_about: "نبذة عني",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_cert: "الشهادات",
        nav_contact: "تواصل معي",
        heroTitle: "مرحباً، أنا <br><span>يوسف حسن دوحان</span>",
        typedRole: "Backend Developer | PHP & Laravel",
        heroDesc: "طالب هندسة حاسوب في السنة الأخيرة، متخصص في تطوير الـ Backend بـ PHP وLaravel. أبني واجهات RESTful API قوية، وأصمم قواعد بيانات MySQL محسّنة ومؤمنة.",
        btnProjects: "استعرض مشاريعي",
        btnContact: "تواصل معي",
        aboutTitle: "نبذة تعريفيّة",
        aboutSubtitle: "شغوف بهندسة البرمجيات وبناء أنظمة خلفية ذات كفاءة عالية",
        aboutText: "أنا طالب هندسة حاسوب في الجامعة الإسلامية بغزة (2023–2027)، متخصص في تطوير الـ Backend باستخدام PHP وLaravel. أمتلك خبرة عملية في تصميم قواعد بيانات MySQL، بناء واجهات RESTful API، وتنفيذ أنظمة المصادقة والصلاحيات (Sanctum/Passport & RBAC). أهتم بكتابة كود نظيف (Clean Code) وتطبيق مبادئ البرمجة كائنية التوجه (OOP) لضمان أعلى أداء وقابلية للتوسع في التطبيقات.",
        skillsTitle: "المهارات التقنية",
        skillsSubtitle: "التقنيات والأدوات التي أستخدمها في بناء وتطوير الأنظمة",
        skillCat1: "تطوير الـ Backend",
        skillCat2: "قواعد البيانات",
        skillCat3: "الأمان والصلاحيات",
        skillCat4: "الأدوات والمفاهيم",
        projectsTitle: "المشاريع البارزة",
        projectsSubtitle: "نماذج من أعمالي الهندسية وتطبيقات الـ Backend",
        proj1Title: "نظام لوحة تحكم لإدارة المطاعم",
        proj1Desc: "تطوير نظام إدارة متكامل مع نقاط API شاملة لإدارة قوائم الطعام، التصنيفات، وطلبات العملاء مع الالتزام بمعايير الحماية واستخدام Form Requests و API Resources.",
        proj2Title: "نظام مصادقة وصلاحيات لتجارة إلكترونية",
        proj2Desc: "بناء البنية التحتية الخلفية لنظام متجر إلكتروني يركز على أمن المصادقة متعددة الأدوار، حماية المسارات، وإدارة كتالوج المنتجات مع تحسين استعلامات قاعدة البيانات.",
        certTitle: "الشهادات والتدريب المهني",
        certSubtitle: "التطوير المستمر للقدرات التقنية والأكاديمية",
        cert1Name: "تطوير Laravel (70 ساعة)",
        cert1Desc: "تدريب متقدم في بناء التطبيقات الاحترافية باستخدام إطار العمل Laravel وتطوير الـ APIs.",
        cert2Name: "دبلوم تطوير الويب (230 ساعة)",
        cert2Desc: "تدريب شامل في تطوير الويب وتقنياته المختلفة.",
        cert3Name: "العمل الحر والعلامة الشخصية (30 ساعة)",
        cert3Desc: "تطوير المهارات المهنية وإدارة المشاريع الحرّة.",
        cert4Name: "شهادة ICDL التدريبية",
        cert4Desc: "إتقان المهارات الأساسية لاستخدام الحاسوب وتطبيقات المكتب.",
        contactTitle: "تواصل معي",
        contactSubtitle: "متاح للفرص الوظيفية، مشاريع الـ Backend، والتعاون التقني",
        letsTalk: "لنبدأ العمل معاً",
        contactDesc: "يسعدني تواصلكم معي لأي استفسار تقني، فرصة عمل، أو مشروع جديد.",
        locText: "غزة، فلسطين",
        sendBtn: "إرسال الرسالة"
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_cert: "Certificates",
        nav_contact: "Contact",
        heroTitle: "Hello, I'm <br><span>Yousef Hassan Douhan</span>",
        typedRole: "Backend Developer | PHP & Laravel",
        heroDesc: "Dedicated Computer Engineering senior student specializing in Backend Development with PHP and Laravel. I build robust RESTful APIs and design optimized, secure MySQL databases.",
        btnProjects: "Explore Projects",
        btnContact: "Contact Me",
        aboutTitle: "About Me",
        aboutSubtitle: "Passionate about software engineering and building efficient backend systems",
        aboutText: "I am a Computer Engineering senior student at the Islamic University of Gaza (2023–2027), specializing in Backend Development using PHP and Laravel. I have hands-on experience in designing MySQL databases, building RESTful APIs, and implementing authentication & authorization systems (Sanctum/Passport & RBAC). I prioritize Clean Code and Object-Oriented Programming (OOP) to ensure optimal application performance and scalability.",
        skillsTitle: "Technical Skills",
        skillsSubtitle: "Technologies and tools I use to engineer modern backend systems",
        skillCat1: "Backend Development",
        skillCat2: "Database Management",
        skillCat3: "Security & Auth",
        skillCat4: "Tools & Concepts",
        projectsTitle: "Featured Projects",
        projectsSubtitle: "Selected case studies showcasing my backend engineering capabilities",
        proj1Title: "Restaurant Management Control Panel System",
        proj1Desc: "Developed a restaurant management administration system with API endpoints for managing menus, categories, and customer orders using Form Requests and API Resources.",
        proj2Title: "E-Commerce Authentication & Authorization System",
        proj2Desc: "Architected secure backend infrastructure handling multi-role user authentication, protected routes, and product catalog management with database query optimization.",
        certTitle: "Certifications & Training",
        certSubtitle: "Continuous professional growth and technical learning",
        cert1Name: "Laravel Development (70 Hrs)",
        cert1Desc: "Advanced training in building professional web applications and APIs using Laravel.",
        cert2Name: "Web Development Diploma (230 Hrs)",
        cert2Desc: "Comprehensive training in web development technologies certified by MOEHE.",
        cert3Name: "Freelancing & Personal Branding (30 Hrs)",
        cert3Desc: "Developing professional freelance skills and personal brand positioning.",
        cert4Name: "ICDL Training Certification",
        cert4Desc: "Proficiency in essential computer skills and office productivity tools.",
        contactTitle: "Get In Touch",
        contactSubtitle: "Available for career opportunities, backend projects, and technical collaboration",
        letsTalk: "Let's Build Together",
        contactDesc: "Feel free to reach out for technical inquiries, job opportunities, or potential collaborations.",
        locText: "Gaza, Palestine",
        sendBtn: "Send Message"
    }
};

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

const langToggle = document.getElementById('langToggle');
let currentLang = 'ar';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    for (const key in translations[currentLang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[currentLang][key];
        }
    }
});
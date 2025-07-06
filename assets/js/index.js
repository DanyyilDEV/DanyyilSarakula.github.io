// /assets/js/index.js

// Language translations
const translations = {
    it: {
        // Navigation
        'Home': 'Home',
        'Chi Sono': 'Chi Sono',
        'Tecnologie': 'Tecnologie',
        'Progetti': 'Progetti',
        'Contatti': 'Contatti',
        
        // Hero Section
        'Ciao, sono': 'Ciao, sono',
        'Studente appassionato di sviluppo web e programmazione': 'Studente appassionato di sviluppo web e programmazione',
        'Vedi i miei progetti': 'Vedi i miei progetti',
        'Contattami': 'Contattami',
        
        // About Section
        'Chi Sono': 'Chi Sono',
        'Sono un giovane studente italiano che ha da poco conseguito il diploma presso IISS G.Ferraris Acireale e sta considerando l\'università. La mia passione per la programmazione è nata durante gli studi superiori, dove ho scoperto il mondo affascinante dello sviluppo web e della programmazione.': 'Sono un giovane studente italiano che ha da poco conseguito il diploma presso IISS G.Ferraris Acireale e sta considerando l\'università. La mia passione per la programmazione è nata durante gli studi superiori, dove ho scoperto il mondo affascinante dello sviluppo web e della programmazione.',
        'Amo creare soluzioni innovative e funzionali, sperimentando con diverse tecnologie e linguaggi di programmazione. Ogni progetto è per me un\'opportunità di apprendimento e crescita personale.': 'Amo creare soluzioni innovative e funzionali, sperimentando con diverse tecnologie e linguaggi di programmazione. Ogni progetto è per me un\'opportunità di apprendimento e crescita personale.',
        'Tecnologie': 'Tecnologie',
        'Progetti': 'Progetti',
        'Anni di studio': 'Anni di studio',
        
        // Technologies Section
        'Tecnologie che conosco': 'Tecnologie che conosco',
        'Tecnologie che voglio imparare': 'Tecnologie che voglio imparare',
        'Livello di competenza:': 'Livello di competenza:',
        
        // Projects Section
        'I Miei Progetti': 'I Miei Progetti',
        'Applicazione Web E-commerce': 'Applicazione Web E-commerce',
        'Un\'applicazione web completa per e-commerce sviluppata con React e Node.js, con sistema di pagamento integrato e gestione inventario.': 'Un\'applicazione web completa per e-commerce sviluppata con React e Node.js, con sistema di pagamento integrato e gestione inventario.',
        'Gioco Educativo LUAU': 'Gioco Educativo LUAU',
        'Un gioco educativo sviluppato in LUAU per la piattaforma Roblox, con meccaniche di apprendimento interattive e sistema di punteggi.': 'Un gioco educativo sviluppato in LUAU per la piattaforma Roblox, con meccaniche di apprendimento interattive e sistema di punteggi.',
        'Strumento di Analisi Dati': 'Strumento di Analisi Dati',
        'Un\'applicazione Python per l\'analisi e visualizzazione di dati con interfaccia grafica intuitiva e generazione di report automatici.': 'Un\'applicazione Python per l\'analisi e visualizzazione di dati con interfaccia grafica intuitiva e generazione di report automatici.',
        'Demo Live': 'Demo Live',
        'Codice': 'Codice',
        'Gioca': 'Gioca',
        'Demo': 'Demo',
        
        // Contact Section
        'Sono sempre interessato a nuove opportunità e collaborazioni. Non esitare a contattarmi!': 'Sono sempre interessato a nuove opportunità e collaborazioni. Non esitare a contattarmi!',
        'Italia': 'Italia',
        
        // Footer
        'Tutti i diritti riservati.': 'Tutti i diritti riservati.'
    },
    en: {
        // Navigation
        'Home': 'Home',
        'Chi Sono': 'About',
        'Tecnologie': 'Technologies',
        'Progetti': 'Projects',
        'Contatti': 'Contact',
        
        // Hero Section
        'Ciao, sono': 'Hi, I\'m',
        'Studente appassionato di sviluppo web e programmazione': 'Passionate student of web development and programming',
        'Vedi i miei progetti': 'View My Projects',
        'Contattami': 'Contact Me',
        
        // About Section
        'Chi Sono': 'About Me',
        'Sono un giovane studente italiano che ha da poco conseguito il diploma presso IISS G.Ferraris Acireale e sta considerando l\'università. La mia passione per la programmazione è nata durante gli studi superiori, dove ho scoperto il mondo affascinante dello sviluppo web e della programmazione.': 'I\'m a young Italian student who just finished high school and is considering university. My passion for programming was born during high school, where I discovered the fascinating world of web development and programming.',
        'Amo creare soluzioni innovative e funzionali, sperimentando con diverse tecnologie e linguaggi di programmazione. Ogni progetto è per me un\'opportunità di apprendimento e crescita personale.': 'I love creating innovative and functional solutions, experimenting with different technologies and programming languages. Every project is an opportunity for learning and personal growth for me.',
        'Tecnologie': 'Technologies',
        'Progetti': 'Projects',
        'Anni di studio': 'Years of Study',
        
        // Technologies Section
        'Tecnologie che conosco': 'Technologies I Know',
        'Tecnologie che voglio imparare': 'Technologies I Want to Learn',
        'Livello di competenza:': 'Skill Level:',
        
        // Projects Section
        'I Miei Progetti': 'My Projects',
        'Applicazione Web E-commerce': 'E-commerce Web Application',
        'Un\'applicazione web completa per e-commerce sviluppata con React e Node.js, con sistema di pagamento integrato e gestione inventario.': 'A complete e-commerce web application developed with React and Node.js, with integrated payment system and inventory management.',
        'Gioco Educativo LUAU': 'Educational LUAU Game',
        'Un gioco educativo sviluppato in LUAU per la piattaforma Roblox, con meccaniche di apprendimento interattive e sistema di punteggi.': 'An educational game developed in LUAU for the Roblox platform, with interactive learning mechanics and scoring system.',
        'Strumento di Analisi Dati': 'Data Analysis Tool',
        'Un\'applicazione Python per l\'analisi e visualizzazione di dati con interfaccia grafica intuitiva e generazione di report automatici.': 'A Python application for data analysis and visualization with intuitive GUI and automatic report generation.',
        'Demo Live': 'Live Demo',
        'Codice': 'Code',
        'Gioca': 'Play',
        'Demo': 'Demo',
        
        // Contact Section
        'Sono sempre interessato a nuove opportunità e collaborazioni. Non esitare a contattarmi!': 'I\'m always interested in new opportunities and collaborations. Don\'t hesitate to contact me!',
        'Italia': 'Italy',
        
        // Footer
        'Tutti i diritti riservati.': 'All rights reserved.'
    }
};

let currentLanguage = 'it';
let currentTheme = 'dark';
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const skillTooltip = document.getElementById('skillTooltip');
const techItems = document.querySelectorAll('.tech-item[data-skill]');

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeNavigation();
    initializeSkillTooltips();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeParticles();
});

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    document.body.className = currentTheme + '-theme';
    updateThemeIcon();
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = currentTheme + '-theme';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'it';
    currentLanguage = savedLang;
    updateLanguageText();
    updateLanguageButton();
    
    langToggle.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'it' ? 'en' : 'it';
    localStorage.setItem('language', currentLanguage);
    updateLanguageText();
    updateLanguageButton();
}

function updateLanguageText() {
    const elements = document.querySelectorAll('[data-it][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute('data-' + currentLanguage);
        if (text) {
            element.textContent = text;
        }
    });
}

function updateLanguageButton() {
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'it' ? 'EN' : 'IT';
}

function initializeNavigation() {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}
let isHoveringSkill = false;
let currentHoveredSkill = null;

function initializeSkillTooltips() {
    techItems.forEach(item => {
        item.addEventListener('mouseenter', showSkillTooltip);
        item.addEventListener('mouseleave', hideSkillTooltip);
        item.addEventListener('mousemove', moveSkillTooltip);
    });

    window.addEventListener('scroll', updateTooltipOnScroll);

    if (!skillTooltip) {
        const tooltip = document.createElement('div');
        tooltip.id = 'skillTooltip';
        tooltip.className = 'skill-tooltip';
        tooltip.innerHTML = `
            <div class="skill-level">
                <span class="skill-text" data-it="Livello di competenza:" data-en="Skill Level:">Livello di competenza:</span>
                <div class="skill-bar">
                    <div class="skill-fill"></div>
                </div>
                <span class="skill-number"></span>
            </div>
        `;
        document.body.appendChild(tooltip);
        skillTooltip = document.getElementById('skillTooltip');
    }
}

function showSkillTooltip(e) {
    isHoveringSkill = true;
    currentHoveredSkill = e.currentTarget;
    
    const skillLevel = parseInt(currentHoveredSkill.getAttribute('data-skill'));
    const skillText = skillTooltip.querySelector('.skill-text');
    const skillFill = skillTooltip.querySelector('.skill-fill');
    const skillNumber = skillTooltip.querySelector('.skill-number');

    skillText.textContent = translations[currentLanguage]['Livello di competenza:'];
    skillFill.style.width = (skillLevel * 10) + '%';
    skillNumber.textContent = skillLevel + '/10';

    positionTooltip();
    skillTooltip.classList.add('visible');
}

function hideSkillTooltip() {
    isHoveringSkill = false;
    currentHoveredSkill = null;
    skillTooltip.classList.remove('visible');
}

function moveSkillTooltip(e) {
    if (!isHoveringSkill) return;
    currentHoveredSkill = e.currentTarget;
    positionTooltip();
}

function updateTooltipOnScroll() {
    if (isHoveringSkill && currentHoveredSkill) {
        positionTooltip();
    }
}

function positionTooltip() {
    if (!currentHoveredSkill) return;
    
    const itemRect = currentHoveredSkill.getBoundingClientRect();
    const tooltipRect = skillTooltip.getBoundingClientRect();

    let left = itemRect.left + (itemRect.width / 2) - (tooltipRect.width / 2);
    let top = itemRect.bottom + 10;

    left = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
    top = Math.max(10, Math.min(top, window.innerHeight - tooltipRect.height - 10));

    skillTooltip.style.left = `${left}px`;
    skillTooltip.style.top = `${top}px`;
}


function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.tech-item, .project-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

function initializeParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    heroSection.appendChild(canvas);
    
    let particles = [];
    const particleCount = 50;
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(79, 70, 229, ${particle.opacity})`;
            ctx.fill();
        });
    }
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', function() {
        resizeCanvas();
        initParticles();
    });
    
    resizeCanvas();
    initParticles();
    animate();
}
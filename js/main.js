document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initMobileMenu();
    initTypedAnimation();
    initScrollspy();
    initBackToTopButton();
    initHeaderScrollShadow();
    updateFooterYear();
});

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const sunIcons = [document.getElementById('sunIcon'), document.getElementById('sunIconMobile')];
    const moonIcons = [document.getElementById('moonIcon'), document.getElementById('moonIconMobile')];
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            sunIcons.forEach(icon => icon.classList.add('hidden'));
            moonIcons.forEach(icon => icon.classList.remove('hidden'));
        } else {
            htmlElement.classList.remove('dark');
            sunIcons.forEach(icon => icon.classList.remove('hidden'));
            moonIcons.forEach(icon => icon.classList.add('hidden'));
        }
    };

    const toggleDarkMode = () => {
        const isDarkMode = !htmlElement.classList.contains('dark');
        const theme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    };

    darkModeToggle.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);

    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');

    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

function initTypedAnimation() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;

    const words = ["Network Engineer", "System Administrator", "Blockchain Developer", "Cybersecurity Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let typeSpeed = 150;

        if (isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75;
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const headerHeight = document.getElementById('header').offsetHeight;

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        allNavLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('nav-active');
            }
        });
    });
}

function initBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.remove('opacity-100', 'visible');
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initHeaderScrollShadow() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
    });
}

function updateFooterYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}
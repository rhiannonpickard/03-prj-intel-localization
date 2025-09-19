// Language and RTL/LTR Support
class IntelLocalization {
    constructor() {
        this.currentLang = 'en';
        this.currentDir = 'ltr';
        this.init();
    }

    init() {
        this.detectBrowserLanguage();
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.setupFormValidation();
        this.updatePlaceholders();
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const isArabic = browserLang.startsWith('ar') || 
                        browserLang.includes('ar') ||
                        browserLang.startsWith('he') ||
                        browserLang.startsWith('fa');
        
        if (isArabic) {
            this.switchLanguage('ar', 'rtl');
        }
    }

    setupEventListeners() {
        // Language toggle button
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                this.handleNewsletterSubmission(e);
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    toggleLanguage() {
        if (this.currentLang === 'en') {
            this.switchLanguage('ar', 'rtl');
        } else {
            this.switchLanguage('en', 'ltr');
        }
    }

    switchLanguage(lang, dir) {
        this.currentLang = lang;
        this.currentDir = dir;

        // Update HTML attributes
        const htmlRoot = document.getElementById('html-root');
        const body = document.body;
        
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', dir);
        body.setAttribute('dir', dir);

        // Update all translatable elements
        this.updateTextContent();
        this.updatePlaceholders();
        this.updateLanguageToggleButton();

        // Store preference in localStorage
        localStorage.setItem('preferred-language', lang);
        localStorage.setItem('preferred-direction', dir);

        // Announce change to screen readers
        this.announceLanguageChange(lang);
    }

    updateTextContent() {
        const elements = document.querySelectorAll('[data-en][data-ar]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    updatePlaceholders() {
        const inputs = document.querySelectorAll(`[data-${this.currentLang}-placeholder]`);
        inputs.forEach(input => {
            const placeholder = input.getAttribute(`data-${this.currentLang}-placeholder`);
            if (placeholder) {
                input.setAttribute('placeholder', placeholder);
            }
        });
    }

    updateLanguageToggleButton() {
        const langText = document.getElementById('lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'en' ? 'العربية' : 'English';
        }
    }

    announceLanguageChange(lang) {
        const announcement = lang === 'ar' ? 
            'تم تغيير اللغة إلى العربية' : 
            'Language changed to English';
        
        // Create temporary announcement for screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.textContent = announcement;
        
        document.body.appendChild(announcer);
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    }

    setupSmoothScrolling() {
        // Enhanced smooth scrolling with offset for fixed header
        const offset = 80; // Height of fixed navbar
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupFormValidation() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;

        const firstName = document.getElementById('firstName');
        const email = document.getElementById('email');
        const consent = document.getElementById('updates-consent');

        // Real-time validation
        firstName.addEventListener('blur', () => this.validateName(firstName));
        email.addEventListener('blur', () => this.validateEmail(email));
        
        // Custom validation messages
        this.setupCustomValidationMessages();
    }

    validateName(input) {
        const value = input.value.trim();
        const isValid = value.length >= 2 && /^[a-zA-Z\u0600-\u06FF\s]+$/.test(value);
        
        this.setValidationState(input, isValid, 
            this.currentLang === 'en' ? 
                'Please enter a valid name (at least 2 characters)' :
                'يرجى إدخال اسم صحيح (حرفان على الأقل)'
        );
        
        return isValid;
    }

    validateEmail(input) {
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        
        this.setValidationState(input, isValid,
            this.currentLang === 'en' ?
                'Please enter a valid email address' :
                'يرجى إدخال عنوان بريد إلكتروني صحيح'
        );
        
        return isValid;
    }

    setValidationState(input, isValid, message) {
        const feedback = input.nextElementSibling?.nextElementSibling || 
                        this.createFeedbackElement(input);
        
        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            feedback.style.display = 'none';
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            feedback.textContent = message;
            feedback.style.display = 'block';
            feedback.className = 'invalid-feedback';
        }
    }

    createFeedbackElement(input) {
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        input.parentNode.appendChild(feedback);
        return feedback;
    }

    setupCustomValidationMessages() {
        const form = document.getElementById('newsletter-form');
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            input.addEventListener('invalid', (e) => {
                e.preventDefault();
                const messages = {
                    en: {
                        valueMissing: 'This field is required.',
                        typeMismatch: 'Please enter a valid value.',
                        tooShort: 'Please enter at least 2 characters.'
                    },
                    ar: {
                        valueMissing: 'هذا الحقل مطلوب.',
                        typeMismatch: 'يرجى إدخال قيمة صحيحة.',
                        tooShort: 'يرجى إدخال حرفين على الأقل.'
                    }
                };
                
                const validity = input.validity;
                let message = messages[this.currentLang].valueMissing;
                
                if (validity.typeMismatch) {
                    message = messages[this.currentLang].typeMismatch;
                } else if (validity.tooShort) {
                    message = messages[this.currentLang].tooShort;
                }
                
                input.setCustomValidity(message);
                this.setValidationState(input, false, message);
            });
            
            input.addEventListener('input', () => {
                input.setCustomValidity('');
            });
        });
    }

    handleNewsletterSubmission(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Validate all fields
        const firstName = document.getElementById('firstName');
        const email = document.getElementById('email');
        const consent = document.getElementById('updates-consent');
        
        const isValidName = this.validateName(firstName);
        const isValidEmail = this.validateEmail(email);
        const hasConsent = consent.checked;
        
        if (!hasConsent) {
            consent.focus();
            alert(this.currentLang === 'en' ? 
                'Please agree to receive updates.' :
                'يرجى الموافقة على تلقي التحديثات.');
            return;
        }
        
        if (isValidName && isValidEmail && hasConsent) {
            this.submitNewsletter(formData);
        }
    }

    async submitNewsletter(formData) {
        const submitButton = document.querySelector('#newsletter-form button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = this.currentLang === 'en' ? 
            '<i class="bi bi-hourglass-split me-2"></i>Subscribing...' :
            '<i class="bi bi-hourglass-split me-2"></i>جاري الاشتراك...';
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success message
            this.showSuccessMessage();
            document.getElementById('newsletter-form').reset();
            
        } catch (error) {
            this.showErrorMessage();
        } finally {
            // Restore button
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
    }

    showSuccessMessage() {
        const message = this.currentLang === 'en' ?
            'Thank you for subscribing! Check your email for confirmation.' :
            'شكراً لك على الاشتراك! تحقق من بريدك الإلكتروني للتأكيد.';
        
        this.showToast(message, 'success');
    }

    showErrorMessage() {
        const message = this.currentLang === 'en' ?
            'Something went wrong. Please try again later.' :
            'حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.';
        
        this.showToast(message, 'error');
    }

    showToast(message, type) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed`;
        toast.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 5000);
    }
}

// Initialize localization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IntelLocalization();
});

// Performance monitoring
window.addEventListener('load', () => {
    // Check for Lighthouse accessibility score
    if (typeof window.performance !== 'undefined') {
        const perfData = window.performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
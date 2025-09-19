// src/js/localization.js

const supportedLanguages = ['en', 'ar', 'he', 'es'];
let currentLanguage = 'en';

// Load translations based on the selected language
function loadTranslations(language) {
    fetch(`locales/${language}/translations.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                element.textContent = translations[key] || key;
            });
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Detect the user's browser language and set the layout direction
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.split('-')[0]; // Get the language code (e.g., 'en', 'ar')

    if (supportedLanguages.includes(lang)) {
        currentLanguage = lang;
    }

    setLayoutDirection(currentLanguage);
    loadTranslations(currentLanguage);
}

// Set the layout direction based on the language
function setLayoutDirection(language) {
    const isRtl = ['ar', 'he'].includes(language);
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
}

// Initialize localization
function initLocalization() {
    detectLanguage();
}

// Call the initialization function
initLocalization();
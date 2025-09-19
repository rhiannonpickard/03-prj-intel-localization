// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize localization
    initializeLocalization();

    // Set up accessibility features
    setupAccessibility();

    // Add event listener for newsletter subscription form
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubscription);
    }
});

// Function to initialize localization
function initializeLocalization() {
    // Load user's preferred language
    const userLang = navigator.language || navigator.userLanguage;
    loadTranslations(userLang);
}

// Function to load translations based on the user's language
function loadTranslations(lang) {
    const supportedLanguages = ['en', 'ar', 'he', 'es'];
    const language = supportedLanguages.includes(lang) ? lang : 'en';
    
    fetch(`locales/${language}/translations.json`)
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations);
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Function to apply translations to the webpage
function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Function to handle newsletter subscription
function handleNewsletterSubscription(event) {
    event.preventDefault();
    const emailInput = document.querySelector('#newsletter-email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        // Perform subscription logic (e.g., send to server)
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to set up accessibility features
function setupAccessibility() {
    // Ensure all form fields have associated labels
    document.querySelectorAll('input, textarea').forEach(field => {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label) {
            field.setAttribute('aria-labelledby', label.id);
        }
    });
}
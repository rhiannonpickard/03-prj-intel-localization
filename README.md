# 🚀 Intel Website Localization Project

A responsive, accessible website for Intel Corporation with full RTL language support, showcasing technology innovation for global audiences.

## 🌟 Features

### ✅ Complete Implementation
- **RTL Language Support**: Full Arabic/English switching with proper layout adjustments
- **Responsive Design**: Mobile-first approach using Bootstrap 5 grid system
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and semantic HTML
- **Interactive Components**: Bootstrap carousel and modal for enhanced user experience
- **Form Validation**: Real-time validation with bilingual error messages
- **Performance Optimized**: Smooth animations, efficient loading, and clean code

### 🎨 Design Features
- **Intel Branding**: Official Intel blue (#0071C5) color scheme
- **Three-Column Layout**: Responsive product showcase with icons and hover effects
- **Newsletter Form**: Accessible subscription form with validation
- **Professional Footer**: Social media links and corporate information
- **Smooth Navigation**: Sticky header with smooth scrolling to sections

### 🌐 Localization
- **Auto-Detection**: Automatic browser language detection
- **Language Toggle**: Easy switching between English and Arabic
- **RTL Support**: Complete right-to-left layout adaptation
- **Cultural Adaptation**: Appropriate content for different regions

## 📁 Project Structure

```
/
├── index.html          # Main website file
├── styles.css          # Custom CSS with Intel branding and RTL support
├── script.js           # JavaScript for localization and interactivity
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Test** the language toggle button to switch between English and Arabic
4. **Try** the newsletter form with validation
5. **Explore** the interactive carousel and modal

## 🔧 Technical Implementation

### HTML Structure
- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Bootstrap 5 components and grid system
- Proper ARIA labels and accessibility attributes
- Bilingual data attributes for dynamic content switching

### CSS Features
- CSS custom properties for consistent theming
- RTL-specific styles for proper Arabic layout
- Responsive design with mobile optimizations
- Smooth transitions and hover effects
- High contrast and reduced motion support

### JavaScript Functionality
- `IntelLocalization` class for language management
- Browser language auto-detection
- Real-time form validation
- Smooth scrolling navigation
- Toast notifications for user feedback
- Performance monitoring

## 🎯 Accessibility Features

- **WCAG 2.1 Compliance**: Proper color contrast and readable fonts
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators and management
- **Semantic Structure**: Meaningful heading hierarchy and landmarks
- **Error Handling**: Clear, accessible error messages

## 🌍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- RTL language support in all modern browsers

## 🎨 Color Palette

- **Primary Blue**: #0071C5 (Intel brand color)
- **Dark Blue**: #005496 (hover states)
- **Gray**: #6B7280 (secondary text)
- **Light Gray**: #F3F4F6 (backgrounds)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column layout)
- **Desktop**: > 1024px (full 3-column layout)

## 🔍 Performance

- Optimized images and assets
- Efficient CSS and JavaScript
- Smooth animations with performance considerations
- Lazy loading capabilities (when needed)

## 📋 Testing Checklist

- [x] RTL language switching functionality
- [x] Responsive design on all screen sizes
- [x] Form validation and submission
- [x] Navigation smooth scrolling
- [x] Accessibility with screen readers
- [x] Color contrast compliance
- [x] Interactive components (carousel, modal)
- [x] Cross-browser compatibility

## 🚀 Future Enhancements

- Additional language support (Spanish, Hebrew, French)
- Progressive Web App (PWA) features
- Content Management System integration
- Analytics and user tracking
- Advanced accessibility features

## 📞 Support

For questions or support, please refer to the Intel Corporation website or contact the development team.

---

**© 2025 Intel Corporation. All rights reserved.**
    </header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="home" class="hero-section">
            <div class="container">
                <div class="row align-items-center min-vh-75">
                    <div class="col-lg-6">
                        <h1 class="display-4 fw-bold text-intel-blue mb-4" data-en="Powering Global Innovation" data-ar="تشغيل الابتكار العالمي">
                            Powering Global Innovation
                        </h1>
                        <p class="lead mb-4" data-en="Intel processors and technologies enable breakthrough innovations across the globe, connecting people and possibilities." data-ar="تمكن معالجات وتقنيات إنتل من الابتكارات الرائدة في جميع أنحاء العالم، وتربط بين الأشخاص والإمكانيات.">
                            Intel processors and technologies enable breakthrough innovations across the globe, connecting people and possibilities.
                        </p>
                        <button type="button" class="btn btn-intel-blue btn-lg" data-bs-toggle="modal" data-bs-target="#innovation-modal" data-en="Explore Innovation" data-ar="استكشف الابتكار">
                            Explore Innovation
                        </button>
                    </div>
                    <div class="col-lg-6">
                        <img src="https://via.placeholder.com/600x400/0071C5/FFFFFF?text=Intel+Innovation" 
                             alt="Intel Innovation Technology" 
                             class="img-fluid rounded shadow">
                    </div>
                </div>
            </div>
        </section>

        <!-- Three-Column Products Section -->
        <section id="products" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5 text-intel-blue" data-en="Our Product Portfolio" data-ar="محفظة منتجاتنا">
                    Our Product Portfolio
                </h2>
                
                <div class="row g-4">
                    <!-- Column 1: Processors -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <div class="mb-3">
                                    <i class="bi bi-cpu text-intel-blue" style="font-size: 3rem;"></i>
                                </div>
                                <h4 class="card-title">
                                    <i class="bi bi-processor me-2"></i>
                                    <span data-en="Advanced Processors" data-ar="معالجات متقدمة">Advanced Processors</span>
                                </h4>
                                <p class="card-text" data-en="High-performance CPUs designed for computing excellence across desktop, mobile, and server applications." data-ar="وحدات معالجة مركزية عالية الأداء مصممة للتميز الحاسوبي عبر تطبيقات سطح المكتب والهاتف المحمول والخادم.">
                                    High-performance CPUs designed for computing excellence across desktop, mobile, and server applications.
                                </p>
                                <a href="#" class="btn btn-outline-intel-blue" data-en="Learn More" data-ar="اعرف أكثر">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <!-- Column 2: Graphics -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <div class="mb-3">
                                    <i class="bi bi-display text-intel-blue" style="font-size: 3rem;"></i>
                                </div>
                                <h4 class="card-title">
                                    <i class="bi bi-gpu-card me-2"></i>
                                    <span data-en="Graphics Solutions" data-ar="حلول الرسومات">Graphics Solutions</span>
                                </h4>
                                <p class="card-text" data-en="Cutting-edge graphics technology for gaming, content creation, and professional visualization needs." data-ar="تقنية رسومات متطورة للألعاب وإنشاء المحتوى واحتياجات التصور المهني.">
                                    Cutting-edge graphics technology for gaming, content creation, and professional visualization needs.
                                </p>
                                <a href="#" class="btn btn-outline-intel-blue" data-en="Learn More" data-ar="اعرف أكثر">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <!-- Column 3: AI Solutions -->
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body text-center">
                                <div class="mb-3">
                                    <i class="bi bi-robot text-intel-blue" style="font-size: 3rem;"></i>
                                </div>
                                <h4 class="card-title">
                                    <i class="bi bi-lightning me-2"></i>
                                    <span data-en="AI & Machine Learning" data-ar="الذكاء الاصطناعي والتعلم الآلي">AI & Machine Learning</span>
                                </h4>
                                <p class="card-text" data-en="Intelligent solutions powered by AI acceleration for transformative business and research applications." data-ar="حلول ذكية مدعومة بتسريع الذكاء الاصطناعي لتطبيقات الأعمال والبحث التحويلية.">
                                    Intelligent solutions powered by AI acceleration for transformative business and research applications.
                                </p>
                                <a href="#" class="btn btn-outline-intel-blue" data-en="Learn More" data-ar="اعرف أكثر">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Innovation Carousel Section -->
        <section id="innovation" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5 text-intel-blue" data-en="Innovation Highlights" data-ar="أبرز الابتكارات">
                    Innovation Highlights
                </h2>
                
                <div id="innovation-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#innovation-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#innovation-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#innovation-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://via.placeholder.com/1200x400/0071C5/FFFFFF?text=Quantum+Computing" class="d-block w-100" alt="Quantum Computing Innovation">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 data-en="Quantum Computing" data-ar="الحاسوب الكمي">Quantum Computing</h5>
                                <p data-en="Advancing the frontiers of computational possibility." data-ar="تطوير حدود الإمكانيات الحاسوبية.">Advancing the frontiers of computational possibility.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/1200x400/6B7280/FFFFFF?text=5G+Technology" class="d-block w-100" alt="5G Technology Innovation">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 data-en="5G Connectivity" data-ar="اتصال 5G">5G Connectivity</h5>
                                <p data-en="Enabling ultra-fast, low-latency global communications." data-ar="تمكين الاتصالات العالمية فائقة السرعة ومنخفضة زمن الاستجابة.">Enabling ultra-fast, low-latency global communications.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/1200x400/059669/FFFFFF?text=Edge+Computing" class="d-block w-100" alt="Edge Computing Innovation">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 data-en="Edge Computing" data-ar="الحاسوب الطرفي">Edge Computing</h5>
                                <p data-en="Bringing intelligence closer to where data is created." data-ar="جلب الذكاء أقرب إلى حيث يتم إنشاء البيانات.">Bringing intelligence closer to where data is created.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button class="carousel-control-prev" type="button" data-bs-target="#innovation-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#innovation-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Newsletter Subscription Section -->
        <section id="newsletter" class="py-5 bg-intel-blue text-white">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-center mb-4" data-en="Stay Connected with Intel" data-ar="ابق على اتصال مع إنتل">
                            Stay Connected with Intel
                        </h2>
                        <p class="text-center mb-5" data-en="Get the latest updates on technology innovations, product launches, and industry insights." data-ar="احصل على آخر التحديثات حول الابتكارات التقنية وإطلاق المنتجات ورؤى الصناعة.">
                            Get the latest updates on technology innovations, product launches, and industry insights.
                        </p>
                        
                        <form id="newsletter-form" class="bg-white p-4 rounded shadow">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="firstName" class="form-label text-dark" data-en="First Name" data-ar="الاسم الأول">First Name</label>
                                    <input type="text" class="form-control" id="firstName" name="firstName" required 
                                           aria-describedby="firstName-help" data-en-placeholder="Enter your first name" data-ar-placeholder="أدخل اسمك الأول">
                                    <div id="firstName-help" class="form-text text-muted">
                                        <span data-en="We'll use this to personalize your experience." data-ar="سنستخدم هذا لتخصيص تجربتك.">We'll use this to personalize your experience.</span>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <label for="email" class="form-label text-dark" data-en="Email Address" data-ar="عنوان البريد الإلكتروني">Email Address</label>
                                    <input type="email" class="form-control" id="email" name="email" required 
                                           aria-describedby="email-help" data-en-placeholder="Enter your email" data-ar-placeholder="أدخل بريدك الإلكتروني">
                                    <div id="email-help" class="form-text text-muted">
                                        <span data-en="Your email will never be shared with third parties." data-ar="لن يتم مشاركة بريدك الإلكتروني مع أطراف ثالثة.">Your email will never be shared with third parties.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="updates-consent" name="updates" required>
                                        <label class="form-check-label text-dark" for="updates-consent">
                                            <span data-en="I agree to receive marketing updates and newsletters from Intel." data-ar="أوافق على تلقي التحديثات التسويقية والنشرات الإخبارية من إنتل.">
                                                I agree to receive marketing updates and newsletters from Intel.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-intel-blue btn-lg px-5" data-en="Subscribe Now" data-ar="اشترك الآن">
                                        <i class="bi bi-envelope me-2"></i>Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <h5 data-en="Intel Corporation" data-ar="شركة إنتل">Intel Corporation</h5>
                    <p data-en="Advancing technology innovation to create a better world for everyone." data-ar="تطوير الابتكار التكنولوجي لخلق عالم أفضل للجميع.">
                        Advancing technology innovation to create a better world for everyone.
                    </p>
                </div>
                
                <div class="col-lg-6 mb-4">
                    <h5 data-en="Follow Us" data-ar="تابعنا">Follow Us</h5>
                    <div class="social-links">
                        <a href="#" class="text-white me-3" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white me-3" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-white me-3" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                        <a href="#" class="text-white me-3" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="#" class="text-white" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            
            <hr class="my-4">
            
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="mb-0" data-en="© 2025 Intel Corporation. All rights reserved." data-ar="© 2025 شركة إنتل. جميع الحقوق محفوظة.">
                        © 2025 Intel Corporation. All rights reserved.
                    </p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-white text-decoration-none me-3" data-en="Privacy Policy" data-ar="سياسة الخصوصية">Privacy Policy</a>
                    <a href="#" class="text-white text-decoration-none" data-en="Terms of Service" data-ar="شروط الخدمة">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Innovation Modal -->
    <div class="modal fade" id="innovation-modal" tabindex="-1" aria-labelledby="innovation-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="innovation-modal-label" data-en="Intel Innovation Hub" data-ar="مركز ابتكار إنتل">Intel Innovation Hub</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p data-en="Discover how Intel's breakthrough technologies are shaping the future of computing, from artificial intelligence to quantum processing." data-ar="اكتشف كيف تشكل تقنيات إنتل الرائدة مستقبل الحاسوب، من الذكاء الاصطناعي إلى المعالجة الكمية.">
                        Discover how Intel's breakthrough technologies are shaping the future of computing, from artificial intelligence to quantum processing.
                    </p>
                    <img src="https://via.placeholder.com/600x300/0071C5/FFFFFF?text=Innovation+Details" class="img-fluid mb-3" alt="Intel Innovation Details">
                    <p data-en="Our commitment to research and development drives continuous innovation across all product lines." data-ar="التزامنا بالبحث والتطوير يقود الابتكار المستمر عبر جميع خطوط الإنتاج.">
                        Our commitment to research and development drives continuous innovation across all product lines.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-en="Close" data-ar="إغلاق">Close</button>
                    <button type="button" class="btn btn-intel-blue" data-en="Learn More" data-ar="اعرف أكثر">Learn More</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="script.js"></script>

    <!-- Language and RTL/LTR Support -->
    <script>
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
                           
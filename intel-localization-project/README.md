# Intel Localization Project

## Overview
The Intel Localization Project aims to adapt the Intel webpage for localization, accessibility, and responsive design. This project includes support for right-to-left (RTL) languages, a responsive three-column layout using Bootstrap, a newsletter subscription form, and a footer with social media icons. The project adheres to high accessibility standards to ensure an inclusive user experience.

## Project Structure
```
intel-localization-project
├── src
│   ├── index.html               # Main HTML file
│   ├── css
│   │   ├── style.css            # Custom styles for Intel branding
│   │   ├── rtl.css              # RTL language support styles
│   │   └── responsive.css        # Responsive design styles
│   ├── js
│   │   ├── main.js              # Main JavaScript functionality
│   │   ├── localization.js       # Language detection and layout switching
│   │   └── accessibility.js      # Accessibility enhancements
│   ├── locales
│   │   ├── en
│   │   │   └── translations.json # English translations
│   │   ├── ar
│   │   │   └── translations.json # Arabic translations
│   │   ├── he
│   │   │   └── translations.json # Hebrew translations
│   │   └── es
│   │       └── translations.json # Spanish translations
│   ├── img
│   │   ├── intel-header-logo.svg # Intel logo
│   │   ├── 1.jpg                # Timeline image 1
│   │   ├── 2.jpg                # Timeline image 2
│   │   ├── 3.jpg                # Timeline image 3
│   │   ├── 4.jpg                # Timeline image 4
│   │   └── social-icons
│   │       ├── facebook.svg      # Facebook icon
│   │       ├── twitter.svg       # Twitter icon
│   │       └── linkedin.svg      # LinkedIn icon
│   └── components
│       ├── header.html           # Header component
│       ├── timeline.html         # Timeline component
│       ├── three-column.html     # Responsive three-column component
│       ├── newsletter.html       # Newsletter subscription form
│       └── footer.html           # Footer component
├── package.json                  # npm configuration
├── webpack.config.js             # Webpack configuration
├── .babelrc                      # Babel configuration
└── README.md                     # Project documentation
```

## Features
- **Localization Support**: The project supports multiple languages, including English, Arabic, Hebrew, and Spanish, with appropriate translations.
- **Responsive Design**: The layout is fully responsive, ensuring a seamless experience across devices of all sizes.
- **Accessibility**: High accessibility standards are maintained, including proper labeling of form fields and keyboard navigation support.
- **RTL Language Support**: The project includes specific styles for right-to-left languages to ensure proper text alignment and layout.
- **Newsletter Subscription**: Users can subscribe to a newsletter through a dedicated form.
- **Social Media Integration**: The footer includes icons linking to Intel's social media profiles.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd intel-localization-project
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the project:
   ```
   npm run build
   ```
5. Open `src/index.html` in a web browser to view the project.

## Usage
- Modify the translations in the `src/locales` directory to add or update language support.
- Customize styles in the `src/css` directory to align with branding requirements.
- Use the `src/js` directory to implement additional functionality or enhancements.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
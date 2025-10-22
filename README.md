# BelovethDev - Professional Profile Portfolio

A modern, responsive, and accessible multi-page portfolio website showcasing professional profile, contact form, and personal reflections. Built with semantic HTML, modern CSS, and vanilla JavaScript.

## 🚀 Live Demo

[*View Live Website*](https://profile-card-et-a-c-pages.vercel.app/)

---

## 📁 Project Structure

belovethdev-portfolio/
├──index.html          # Home page - Profile Card
├──about.html          # About Me page
├──contact.html        # Contact Us page
├──styles.css          # Global styles & responsive design
├──script.js           # Interactive functionality
└──README.md          # Project documentation

---

## ✨ Features

### 🎯 Core Features
- *Responsive Design* - Mobile-first approach with tablet and desktop breakpoints
- *Accessibility First* - WCAG compliant with semantic HTML and ARIA labels
- *Multi-page Navigation* - Seamless navigation between Home, About, and Contact pages
- *Modern UI/UX* - Clean design with BelovethDev purple branding

### 📄 Pages Overview

#### 🏠 Home Page (index.html)
- Interactive profile card with real-time clock
- Social media links with SVG icons
- Hobbies and dislikes sections
- Avatar upload functionality
- Responsive grid layout

#### 👤 About Me Page (about.html)
- Personal journey and background
- Program goals and aspirations
- Areas of growth and development
- Future self reflections
- Additional thoughts and insights

#### 📞 Contact Page (contact.html)
- Fully validated contact form
- Real-time form validation
- Accessible error messages
- Success confirmation
- Alternative contact methods

### ♿ Accessibility Features
- Semantic HTML5 elements
- Proper heading hierarchy
- Keyboard navigation support
- Focus indicators
- ARIA labels and descriptions
- Color contrast compliance
- Screen reader friendly

### 🎨 Design System
- *Primary Color*: Purple (#8B5FBF)
- *Accent Color*: Pink (#FF6B9D)
- *Typography*: System fonts stack
- *Icons*: Custom SVG icons
- *Layout*: CSS Grid & Flexbox
- *Effects*: Smooth transitions and hover states

## 🛠 Technologies Used

- *HTML5* - Semantic markup
- *CSS3* - Custom properties, Grid, Flexbox
- *JavaScript* - ES6+ features
- *SVG* - Scalable vector icons
- *Git* - Version control

## 📱 Responsive Breakpoints

- *Mobile*: < 768px
- *Tablet*: 768px - 1024px
- *Desktop*: > 1024px

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local server (for full functionality)

### Installation

## Clone the repository
   bash
   git clone https://github.com/Belovethdev/profile_card_et_A-C_pages
   cd Stage_one
   
   ---

## 🧪 Testing

Automated Testing

All elements include data-testid attributes for automated testing:

· test-profile-card - Main container
· test-user-name - Profile name
· test-user-bio - Biography text
· test-user-time - Current time display
· test-user-avatar - Profile image
· test-user-social-links - Social media container
· test-contact-* - Contact form elements
· test-about-* - About page sections

Manual Testing Checklist

· All pages load correctly
· Responsive design works on all screen sizes
· Navigation functions properly
· Contact form validation works
· Time updates in real-time
· Avatar upload functionality
· Keyboard navigation accessible
· No console errors

---

## 📋 Project Requirements Met

✅ Stage 0 Requirements

· Profile card with all required data-testid attributes
· Semantic HTML structure
· Accessible images and alt text
· Responsive design
· Real-time clock functionality
· Social links open in new tabs

✅ Stage 1 Requirements

· Contact page with form validation
· About page with reflective content
· Multi-page navigation
· Accessible form with proper labels
· Success message handling
· Semantic section structure

---

## 🎯 Key Components

Profile Card

html
<article data-testid="test-profile-card">
  <h2 data-testid="test-user-name">Ayanfeoluwa Popola</h2>
  <p data-testid="test-user-bio">Frontend developer...</p>
  <img data-testid="test-user-avatar" alt="Profile photo">
</article>


Contact Form

html
<form data-testid="test-contact-form">
  <input data-testid="test-contact-name" required>
  <input data-testid="test-contact-email" type="email" required>
  <!-- ... other fields -->
</form>


About Sections

html
<main data-testid="test-about-page">
  <section data-testid="test-about-bio">...</section>
  <section data-testid="test-about-goals">...</section>
  <!-- ... other sections -->
</main>

---

## 🔧 Customization

Colors

Modify CSS custom properties in styles.css:

css
:root {
  --primary-color: #8B5FBF;
  --accent-color: #FF6B9D;
  /* Add your colors */
}


Content

Update personal information in:

· index.html - Profile details
· about.html - Personal reflections
· contact.html - Contact information

## 🌐 Browser Support

· Chrome 90+
· Firefox 88+
· Safari 14+
· Edge 90+

---

## 📞 Support

For issues and questions:

1. Check existing GitHub Issues
2. Create a new issue with detailed description
3. Contact via LinkedIn

---

## 👥 Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

---

## 🙏 Acknowledgments

· Icons from Heroicons
· UI inspiration from modern design systems
· Accessibility guidelines from W3C WAI
· CSS techniques from MDN Web Docs

---

## 👨‍💻 Author

Oluwagbemiga Popoola
Frontend Developer in training | Passionate about accessible UI & clean design.

## 🔗 LinkedIn
https://www.linkedin.com/in/oluwagbemigapopoola
## 💻 GitHub
https://github.com/Belovethdev

---

## 📄 License

This project is open source and available under the MIT License.

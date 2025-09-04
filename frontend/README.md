# Car Sale Campaign Website

A modern React.js car sale campaign website with responsive design, animations, and form validation.


## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173/
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── landing-page/
│   │   ├── HomePage.jsx          # Landing page
│   │   ├── RegistrationForm.jsx  # Form component
│   │   ├── Navbar.jsx            # Navigation
│   │   └── styles.js             # Landing page styles
│   └── success-page/
│       ├── SuccessPage.jsx       # Success page
│       └── styles.js             # Success page styles
├── constants/
│   └── index.js                  # Static data
├── utils/
│   └── validation.js            # Validation functions
└── App.jsx                      # Main app
```

## 🛠️ Technologies

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two-column grid
- **Desktop**: Three-column grid

## ✅ Form Validation

- Name: Required, minimum 2 characters
- Email: Required, valid format
- Phone: Required, valid number format
- Real-time error clearing
- Visual feedback with icons

## 🎨 Animations

- Hero section fade-in
- Feature cards staggered animations
- Form hover effects
- Success page scale animations
- Smooth scrolling navigation

## 🎨 Styles Architecture

- **Component-Specific Styles**: Each component folder has its own `styles.js`
- **Modular Organization**: Landing page and success page styles separated
- **Reusable Patterns**: Common styling patterns within each component
- **Consistent Naming**: Clear, descriptive style object names
- **Easy Maintenance**: Local styles for each component group

## 🧹 Clean Code Principles

- **DRY**: No code duplication
- **Single Responsibility**: Each component has one purpose
- **Modular**: Reusable components
- **Consistent**: Proper naming conventions
- **Documented**: Clear comments and structure

## 🎯 How It Works

1. **Homepage** displays campaign information with animated sections
2. **Registration Form** validates user input in real-time
3. **Success Page** confirms submission and shows next steps
4. **Navigation** provides smooth scrolling between sections

The website is fully responsive, accessible, and follows modern React best practices.

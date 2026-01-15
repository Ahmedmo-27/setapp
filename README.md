# Setapp Landing Page Replica

A high-fidelity landing page replica for **Setapp**, built with a focus on modern aesthetics, performance, and responsive design. This project demonstrates advanced layout techniques using Tailwind CSS, performance optimizations with React Lazy Loading, and custom SVG illustrations.

## 🚀 Live Demo
*https://setapp-vert.vercel.app*

## ✨ Key Features

- **Modern Tech Stack**: Built with React 18 and Vite for a lightning-fast development experience.
- **Tailwind CSS Styling**: Precision styling using Tailwind's utility-first framework, including custom design tokens for Setapp's unique color palette and typography.
- **Optimized Performance**: 
  - **Lazy Loading**: Below-the-fold components are loaded on-demand using `React.lazy` and `Suspense` to minimize initial bundle size.
  - **Asset Optimization**: Efficient use of SVGs and optimized image formats.
- **Fully Responsive**: Meticulously designed for all screen sizes, from mobile-first navigation drawers to desktop-grade grid layouts.
- **Interactive Elements**:
  - Custom Language Switcher menu.
  - Floating badge animations in the Hero section.
  - Video Testimonial layout and Social Proof carousels.
  - High-fidelity SVG icons and branding elements.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting & Formatting**: [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedmo-27/setapp.git
   cd setapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components (Navbar, Hero, Features, etc.)
├── assets/              # Component-specific assets (if any)
├── App.jsx              # Main application entry and lazy-loading logic
├── main.jsx             # React DOM entry point
└── index.css            # Global styles and Tailwind directives
public/                  # Static assets (SVGs, PNGs, Icons)
tailwind.config.cjs      # Custom theme, colors, and design tokens
```

## 🧩 Components Overview

- **HeroSection**: Features a bold headline and floating app badges that represent the diversity of the Setapp library.
- **FeaturesGrid**: Showcases the value proposition using varied card sizes (`FeatureCardLarge`, `FeatureCardSmall`).
- **Testimonial**: A premium video testimonial component with custom styling and pagination.
- **SocialProof**: A grid of customer quotes with integrated social media brand iconography.
- **Navbar & Footer**: Fully accessible navigation systems with multi-language support mockups.

*Disclaimer: This project is a UI/UX replica created for educational and portfolio purposes. All brand assets and trademarked names belong to their respective owners (Setapp Limited).*
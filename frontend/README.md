# 🏡 Eden Estates - Real Estate Landing Page & Admin CMS

A premium, production-ready Real Estate Frontend built with **React.js (Vite)** and **Tailwind CSS**, featuring a dynamic **Admin Dashboard** for content management.

## ✨ Features

### 🌐 Public Landing Page
- **Hero Section**: Cinematic background with clear CTA for brochures and virtual tours.
- **Project Overview**: Elegant collage layout with detailed project descriptions.
- **Nearby Connectivity**: Icon-based grid highlighting strategic location proximity.
- **Amenities Grid**: 6-8 luxury feature cards with interactive hover effects.
- **About Us**: Developer legacy section with a professional dark luxury theme.
- **Construction Updates**: Real-time progress bars for project milestones.
- **FAQ Section**: Smooth accordion UI for project-related queries.

### 🔐 Admin Panel CMS
- **Secure Authentication**: Protected route with JWT-based login.
- **Live Content Editing**: Update titles, subtitles, and descriptions instantly.
- **Dynamic List Management**: Add or remove Amenities, Construction Milestones, and FAQs.
- **State Management**: Integrated with backend APIs for persistence.

## 🛠️ Tech Stack

- **Frontend**: React.js 19 (Vite)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **API Client**: Axios with Request Interceptors
- **Routing**: React Router DOM 7

## 🚀 Getting Started

### Prerequisites
- Node.js (v21 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project folder.
2. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

### Running Locally

1. **Start the Frontend**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

2. **Ensure Backend is Running**:
   The frontend expects the backend at `http://localhost:5000/api`. Make sure your Node.js/Express server is active.

### Admin Credentials
- **Default Email**: `admin@gmail.com`
- **Default Password**: `1234`
- **Dashboard URL**: `/admin`

## 📁 Directory Structure

```text
src/
 ├── components/      # UI Components (Hero, Header, Footer, etc.)
 ├── pages/           # Page Layouts (Home, Admin Dashboard)
 ├── services/        # API configuration and service calls
 ├── context/         # Auth State Management
 ├── index.css        # Global styles & Tailwind layers
 └── App.jsx          # Route definitions
```

## 🎨 UI Style Guide
- **Theme**: Luxury Real Estate
- **Colors**: Light Pastel Greens, Professional Whites, Dark Slate
- **Typography**: Outfit (Headings), Inter (Body)
- **Aesthetics**: Glassmorphism, Rounded Cards (3xl), Soft Shadows

---
Built with ❤️ for Eden Estates.

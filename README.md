# PMC Feedback Kiosk System

A production-ready, multilingual customer feedback collection platform designed for public kiosk/tablet deployment in healthcare facilities. Built with modern web technologies and real-time data integration.

## Project Overview

This application replaces traditional paper-based feedback collection with a digital, automated system that:
- Collects customer feedback via an intuitive emoji-based interface
- Supports multiple languages (English, Arabic, Urdu) with RTL text support
- Automatically stores responses in Microsoft Excel SHeets for real-time analytics
- Provides a seamless, touch-optimized experience for public kiosks

## Key Features

### User Experience
- **Emoji-Driven Ratings**: Intuitive 5-point rating system using recognizable emoji expressions
- **Multilingual Support**: Full interface translation (English, Arabic, Urdu) with proper RTL rendering
- **Auto-Reset**: 6-second countdown timer automatically returns kiosk to home screen
- **Responsive Design**: Optimized for tablet/kiosk displays (iPad resolution tested)
- **Accessibility**: Touch-friendly large targets, clear visual feedback

### Technical Capabilities
- **Real-time Data Sync**: Automated submission to Google Sheets via Google Apps Script API
- **Form Validation**: Client-side validation with error handling and user feedback
- **Secure API Integration**: Environment-based configuration with secret key authentication
- **Serverless Architecture**: No backend server required - leverages Microsoft Power Automate
- **Type Safety**: Full TypeScript implementation for reliability

## Tech Stack

### Frontend
- **React 18** - Modern hooks-based architecture
- **TypeScript** - Full type safety and IDE support
- **Vite** - Fast build tool and HMR
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library

### Backend/Integration
- **Microsoft Power Automate Workflow Integration**

## Architecture

```
User Interaction (React SPA)
         ↓
React Router Navigation
         ↓
Form Submission (TypeScript/Axios)
         ↓
Microsoft Power Automate Workflow Setup
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pmc-feedback-kiosk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## Features Breakdown

### Emoji Rating Component
- Dynamic emoji rendering with Twemoji
- Hover states and selection animations
- Responsive sizing for touch targets
- Multilingual label support

### Form Handling
- Required field validation (Name, Phone)
- Optional email with format validation
- Character limits and input sanitization
- Loading states during submission
- Error handling with user-friendly messages

### Data Flow
- Client-side form validation
- Secure API calls via Microsoft Power Automate
- Automatic retry logic
- Success/error toast notifications
- Auto-redirect post-submission

## Deployment Considerations

- Optimized for tablet kiosks (landscape orientation recommended)
- Tested on iPad Air/Pro resolutions
- No user authentication required (public kiosk use case)
- Auto-reset prevents data leakage between users
- Deployed using Android Development Kit (ADK)

## Design System

- **Primary Color**: `#1E8549` (PMC Green)
- **Typography**: Poppins font family
- **Spacing**: 8px base unit system
- **Breakpoints**: Mobile-first responsive design
- **Accessibility**: WCAG AA compliant contrast ratios

## Performance

- Fast initial load (~1-2s on tablet devices)
- Optimized bundle size with code splitting
- Lazy-loaded routes for faster navigation
- Debounced form inputs to reduce re-renders

## Security

- Environment variables for all sensitive data
- Secret key authentication on API calls
- No PII stored in client-side storage

## Developer

Built by Hiba Wajeeh as a production system for PMC healthcare facilities, and deployed by Muhammad Areeb.

**Skills Demonstrated:**
- Full-stack development (React + Serverless)
- API integration and authentication
- Internationalization (i18n) and RTL support
- Form validation and error handling
- State management and routing
- Responsive UI/UX design
- TypeScript best practices
- Environment-based configuration

# Blancbeu Beauty Salon App

## Overview

Blancbeu is a premium beauty salon booking application designed with a mobile-first approach, targeting Gen-Z users with sophisticated aesthetics inspired by high-end beauty platforms like Glossier and Sephora. The app provides seamless appointment scheduling, service browsing, staff selection, and customer communication features. Built as a full-stack web application with React frontend and Express.js backend, it emphasizes visual luxury and effortless user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Library**: Radix UI primitives with shadcn/ui components for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design system implementing beauty salon brand colors (Deep Rose, Soft Blush, Champagne Gold)
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **API Design**: RESTful API endpoints with /api prefix convention

### Mobile-First Design System
- **Responsive Approach**: Mobile-first responsive design with app-like experience
- **Navigation**: Fixed bottom navigation with 5 primary actions (Home, Booking, Chat, Locate, Settings)
- **Typography**: Inter for body text, Playfair Display for elegant headings
- **Color Palette**: Premium beauty-focused colors with dark mode support
- **Component Library**: Reusable components (ServiceCard, StaffCard, BookingCalendar, ChatInterface)

### Data Models
- **Users**: Basic user authentication with username/password
- **Services**: Predefined beauty services with pricing, duration, ratings, and categories
- **Booking System**: Calendar-based appointment scheduling with staff selection
- **Staff**: Service providers with specialties, ratings, and experience information

### Development Tools
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Development**: Hot module replacement via Vite, runtime error overlay for debugging

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon Database serverless platform (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations and schema management

### UI Components & Styling
- **Radix UI**: Comprehensive set of accessible component primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: For component variant management

### State Management & HTTP
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form handling with @hookform/resolvers for validation

### Payment Processing
- **Stripe**: Payment processing integration (@stripe/stripe-js, @stripe/react-stripe-js)

### Development & Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Fast JavaScript bundler for production builds

### Fonts & Assets
- **Google Fonts**: Inter and Playfair Display font families
- **Generated Images**: Custom beauty service images stored in attached_assets directory

### Session & Security
- **Express Session**: Session management with PostgreSQL store
- **CORS**: Cross-origin resource sharing configuration
- **Input Validation**: Zod schema validation for API endpoints
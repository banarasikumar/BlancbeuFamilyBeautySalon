# Blancbeu Beauty Salon App - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from premium beauty and wellness apps like Glossier, Sephora, and modern service booking platforms like ClassPass and Fresha. The design emphasizes visual appeal, premium aesthetics, and seamless user experience to attract Gen-Z users.

## Core Design Principles
- **Premium Mobile-First**: App-like experience with native mobile patterns
- **Visual Luxury**: High-end beauty salon aesthetic with sophisticated color treatments
- **Effortless Booking**: Streamlined appointment scheduling with minimal friction
- **Gen-Z Appeal**: Bold yet refined visuals with modern interaction patterns

## Color Palette

### Primary Colors
- **Deep Rose**: 330 65% 25% - Primary brand color for headers and CTAs
- **Soft Blush**: 340 45% 85% - Light accent for backgrounds and cards
- **Warm White**: 20 15% 98% - Clean backgrounds and content areas

### Accent Colors
- **Champagne Gold**: 45 35% 75% - Premium highlights and success states
- **Sage Green**: 120 20% 70% - Calming accent for wellness elements

### Dark Mode
- **Charcoal Black**: 240 15% 12% - Primary dark background
- **Soft Rose**: 330 25% 85% - Light elements in dark mode
- **Deep Gold**: 45 45% 65% - Accent elements in dark mode

## Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif
- **Display Font**: Playfair Display (Google Fonts) - Elegant serif for headings
- **Font Sizes**: Scale from 14px (body) to 32px (hero headings)

## Layout System
**Spacing Units**: Consistent use of Tailwind units 2, 4, 6, and 8
- `p-4, m-4` for standard component spacing
- `gap-6` for grid layouts
- `h-8, w-8` for icons and small elements
- `p-2` for tight spacing in navigation

## Component Library

### Bottom Navigation
- Fixed bottom navigation with 4 primary actions: Home, Booking, Chat, Locate
- Rounded icons with subtle glow effects
- Active state with rose gradient background
- Height: 80px with safe area padding

### Booking System Components
- **Service Cards**: Large image thumbnails with overlay pricing
- **Calendar Widget**: Custom styled date picker with availability indicators
- **Time Slots**: Pill-shaped buttons with available/booked states
- **Staff Selection**: Profile cards with ratings and specializations

### Content Cards
- **Service Showcase**: Hero images with gradient overlays
- **Testimonial Cards**: Elegant quote styling with customer photos
- **Appointment Cards**: Clean layout with service details and timing

### Forms & Inputs
- **Floating Labels**: Modern input styling with smooth transitions
- **Buttons**: Rounded corners (12px) with subtle shadows
- **Toggle States**: Custom styling for preferences and notifications

## Visual Treatments

### Gradients
- **Hero Gradients**: Soft rose to champagne gold (330 65% 25% to 45 35% 75%)
- **Card Overlays**: Subtle gradients from transparent to 20% opacity
- **Button Gradients**: Deep rose to lighter rose for primary actions

### Background Treatments
- **Primary Backgrounds**: Clean warm whites with subtle texture
- **Section Dividers**: Gentle rose-tinted gradients
- **Card Backgrounds**: Elevated surfaces with soft shadows

## Images
### Hero Section
- **Large Hero Image**: Full-width salon interior or beauty treatment showcase
- **Overlay Treatment**: Soft gradient overlay for text readability
- **CTA Placement**: Centered with blurred background outline buttons

### Service Gallery
- **Before/After Images**: Side-by-side comparison layouts
- **Treatment Photos**: High-quality service imagery with consistent styling
- **Staff Photos**: Professional headshots in circular frames

### Iconography
- **Icon Library**: Heroicons for consistency
- **Custom Beauty Icons**: Placeholder comments for salon-specific icons (scissors, makeup brush, etc.)
- **Navigation Icons**: Outlined style for inactive, filled for active states

## Animations
**Minimal and Purposeful**:
- Subtle fade transitions between screens
- Gentle bounce effect on booking confirmations
- Smooth bottom sheet animations for booking flow

## Accessibility
- Consistent dark mode across all components including form inputs
- High contrast ratios maintained in both light and dark themes
- Touch targets minimum 44px for mobile interaction
- Clear focus states for keyboard navigation

This design creates a premium, app-like experience that feels native while maintaining the sophisticated aesthetic expected by Gen-Z users seeking luxury beauty services.
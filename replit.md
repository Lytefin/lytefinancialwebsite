# Lyte Financial - SME Business Lending Platform

## Overview

Lyte Financial is a professional financial advisory platform specializing in SME (Small-Medium Enterprise) business lending solutions. The application serves as a comprehensive client-facing website showcasing various financing services including business purchases, commercial property financing, SMSF (Self-Managed Super Fund) lending, and residential lending. The platform features detailed case studies, multi-stage process flows, and an inquiry/contact system to connect potential clients with Lyte's financial advisory services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18+ with TypeScript
- **Routing:** Wouter (lightweight React router)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Shadcn/ui component library (Radix UI primitives)
- **State Management:** TanStack React Query for server state
- **Build Tool:** Vite

**Design System:**
The application follows a professional financial services design language inspired by companies like Stripe and Wise:

- **Typography:** 
  - Display serif fonts (Playfair Display) for headlines and emphasis
  - Clean sans-serif (Inter, Open Sans) for body content
  - Hierarchical scaling from 3xl-6xl for headings

- **Color Palette:**
  - Primary Navy (#1a2332) - headers, cards, primary text
  - Soft Beige/Cream (#e8dcc4) - CTAs and accents
  - Neutral grays for backgrounds and borders
  - CSS custom properties for theme consistency

- **Component Patterns:**
  - Card-based layouts with rounded corners and subtle shadows
  - Hero sections with gradient overlays on professional imagery
  - Multi-stage flow visualizations for process documentation
  - Consistent spacing using Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24, 32)

**Page Structure:**
The application uses a route-based architecture with the following main pages:
- Home: Landing page with service overview
- Business Purchase: Business lending information and case studies
- Commercial Property: Commercial financing solutions
- SMSF Lending: Self-managed super fund property investment
- Residential Lending: Home loan solutions
- Process pages: Step-by-step lending processes for each service type
- Scenario pages: Real-world case studies
- Contact: Client inquiry form
- Team: Team member information

**Component Organization:**
- Reusable UI components in `/client/src/components/ui/` (Shadcn components)
- Feature components in `/client/src/components/` (Header, HeroSection, CTASection, etc.)
- Page components in `/client/src/pages/`
- Shared TypeScript types in `/shared/`

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Database ORM:** Drizzle ORM
- **Database:** PostgreSQL (via Neon serverless)
- **Build Tool:** esbuild for production bundling
- **Development:** tsx for TypeScript execution

**API Architecture:**
The backend follows a minimal API server pattern:
- Express server handles API routes (prefixed with `/api`)
- Vite dev server middleware for development hot-reload
- Static file serving for production builds
- Request/response logging middleware
- Storage abstraction layer for database operations

**Data Layer:**
- Drizzle ORM provides type-safe database operations
- Schema definitions in `/shared/schema.ts`
- Database migrations in `/migrations/`
- In-memory storage implementation (`MemStorage`) for development/testing
- Abstract storage interface (`IStorage`) allows swapping implementations

**Current Schema:**
- `users` table with id, username, password fields
- `contact_inquiries` table for storing contact form submissions with firstName, lastName, phone, email, lendingType, createdAt
- UUID-based primary keys for users, serial IDs for contact inquiries
- Prepared for expansion with additional business entities

**Contact Form System:**
The contact form is implemented as a modal dialog accessible via the Header's "Contact" button. It captures:
- First Name, Last Name (text inputs)
- Phone Number (tel input)
- Email Address (email input)
- Lending Type (dropdown with 7 options: Business Funding, Residential Funding, Commercial Property Funding, SMSF Funding Residential Property, SMSF Funding Commercial Property, Asset and Equipment Finance, More than one of the above types)

**Note:** Email notifications to admin@lytefinancial.com.au are not yet configured. To enable email sending, set up one of the email integrations (Resend, SendGrid) via Replit's integration system and update the `/api/contact` endpoint in `server/routes.ts` to send emails upon form submission. Currently, submissions are stored in the database and logged to console.

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives (accordion, dialog, dropdown, navigation, toast, etc.)
- Embla Carousel for image/content carousels
- Lucide React for iconography
- class-variance-authority (CVA) for component variant management
- cmdk for command palette interfaces

**Development Tools:**
- Vite plugins for development experience:
  - Runtime error overlay (@replit/vite-plugin-runtime-error-modal)
  - Cartographer for code navigation (@replit/vite-plugin-cartographer)
  - Development banner (@replit/vite-plugin-dev-banner)

**Form Handling:**
- React Hook Form with Zod validation
- @hookform/resolvers for validation schema integration
- drizzle-zod for automatic Zod schema generation from database schemas

**Database:**
- Neon serverless PostgreSQL (@neondatabase/serverless)
- Drizzle Kit for migrations and schema management
- connect-pg-simple for session storage (prepared but not actively used)

**Styling & Utilities:**
- Tailwind CSS with PostCSS
- clsx and tailwind-merge for className management
- date-fns for date manipulation

**Asset Management:**
- Professional business imagery in `/attached_assets/`
- Logo and hero images referenced via Vite's asset handling
- Generated images for scenarios and hero sections

**Notable Architectural Decisions:**

1. **Monorepo Structure:** Single repository with client, server, and shared code for simplified development and type sharing
2. **Type Safety:** Full TypeScript coverage with strict mode enabled
3. **Component Library:** Shadcn/ui chosen for customizable, accessible components that don't abstract away implementation details
4. **Lightweight Routing:** Wouter selected over React Router for smaller bundle size
5. **Server-Side Integration:** Vite middleware mode allows seamless development experience with Express API
6. **Design Token System:** CSS custom properties enable theme consistency and potential dark mode support
7. **Storage Abstraction:** Interface-based storage layer enables easy transition from in-memory to PostgreSQL without changing application code
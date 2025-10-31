# SME Business Lending Flow Chart - Lyte Advisory

## Overview

This is a professional marketing website for Lyte Advisory's SME (Small and Medium Enterprise) business lending services. The application presents a visual flow chart showcasing the 5-stage lending process, from initial discovery to ongoing advice. The website is designed with a corporate, trustworthy aesthetic using navy blue and soft beige/cream colors, targeting business owners seeking financing for business purchases or commercial property acquisitions.

The application is a single-page website with a hero section, interactive flow chart, and call-to-action sections, built to provide clear information about Lyte Advisory's lending expertise and encourage consultation bookings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application currently has a single main page (Home) with a 404 fallback page.

**UI Component Library**: Shadcn UI (New York style variant) with Radix UI primitives. The design system uses:
- Tailwind CSS for styling with custom configuration
- CSS variables for theming with HSL color values
- Custom border radius values (9px, 6px, 3px)
- Elevation system using `hover-elevate` and `active-elevate-2` utility classes

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. The query client is configured with:
- Custom fetch wrapper with error handling
- Credentials included for API requests
- Disabled refetching on window focus
- Infinite stale time

**Typography**: Google Fonts integration with:
- Playfair Display (serif) for headings
- Inter (sans-serif) for body text
- Open Sans (sans-serif) as alternative body font

**Component Structure**: 
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Shadcn UI primitives in `client/src/components/ui/`
- Example/documentation components in `client/src/components/examples/`

### Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript.

**Server Setup**: HTTP server created using Node's built-in `http` module, with Express middleware for:
- JSON body parsing with raw body preservation for webhook compatibility
- URL-encoded form data parsing
- Request logging with duration tracking for API routes
- Response capture for debugging

**Development Mode**: Vite integration for HMR (Hot Module Replacement) in development, with custom middleware that:
- Serves the Vite dev server in middleware mode
- Handles SSR template transformation
- Provides error overlay integration via Replit plugin

**Production Mode**: Static file serving from `dist/public` directory.

**Storage Layer**: In-memory storage implementation using Map data structures. The storage interface (IStorage) defines CRUD operations for users, with methods like `getUser`, `getUserByUsername`, and `createUser`. This is designed to be easily swapped with a database implementation.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definitions in `shared/schema.ts`
- Migration output directory: `./migrations`
- Neon Database serverless driver (`@neondatabase/serverless`)
- Zod schema validation via `drizzle-zod`

**Current Schema**: Minimal user table with:
- UUID primary key (auto-generated)
- Username (unique, not null)
- Password (not null)
- Zod validation schema for inserts

**Session Management**: `connect-pg-simple` included for PostgreSQL-backed session storage (not yet implemented in routes).

**Note**: The database is configured but routes currently use in-memory storage. The architecture supports easy migration to PostgreSQL by swapping the storage implementation.

### Design System

**Color Palette**:
- Primary Navy: `#1a2332` - Headers, cards, text
- Soft Beige/Cream: `#e8dcc4` - CTAs, accents, backgrounds  
- Neutrals: White, light gray, off-white for backgrounds
- HSL-based color system with CSS variables for dynamic theming

**Layout System**:
- Container: `max-w-7xl` with responsive horizontal padding
- Consistent spacing using Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: `py-16 md:py-24`
- Card padding: `p-8 md:p-10`

**Component Patterns**:
- Cards with rounded corners, borders, and shadows
- Buttons with elevation states (hover/active)
- Responsive grid layouts (mobile-first approach)
- Test IDs on all interactive elements for testing

### External Dependencies

**UI and Component Libraries**:
- Radix UI: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, tooltip, etc.)
- Embla Carousel: Touch-enabled carousel implementation
- Lucide React: Icon library
- CMDK: Command palette component
- React Hook Form with Zod resolvers for form validation
- Class Variance Authority (CVA): Utility for creating variant-based component APIs
- Tailwind Merge & CLSX: Class name merging utilities

**Data Management**:
- TanStack Query: Server state synchronization
- Date-fns: Date manipulation and formatting

**Development Tools**:
- Replit-specific plugins: Cartographer, dev banner, runtime error modal
- Vite plugins for React and development experience
- PostCSS with Tailwind CSS and Autoprefixer

**Database and ORM**:
- Drizzle Kit: Database migration tool
- Drizzle ORM: TypeScript ORM
- Neon Database Serverless: PostgreSQL driver optimized for serverless
- PostgreSQL: Target database (via DATABASE_URL environment variable)

**Build and Runtime**:
- TypeScript: Type safety across frontend and backend
- ESBuild: Server bundling for production
- TSX: TypeScript execution for development
- Vite: Frontend build tool and dev server

**Path Aliases**:
- `@/*`: Maps to `client/src/*`
- `@shared/*`: Maps to `shared/*` (shared types/schemas)
- `@assets/*`: Maps to `attached_assets/*` (images, files)
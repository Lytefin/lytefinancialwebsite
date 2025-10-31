# Design Guidelines: Lyte Advisory SME Business Lending Flow Chart

## Design Approach
Reference-Based Approach inspired by professional financial services websites (Stripe, Wise) with emphasis on trust, clarity, and corporate sophistication matching Lyte Advisory's existing design system.

## Core Design Elements

### Typography
- **Headings**: Modern display serif (Playfair Display, Lora, or Fraunces) for main headlines and section titles
- **Body Text**: Clean sans-serif (Inter, Helvetica Neue, or Open Sans) for descriptions and content
- **Hierarchy**: 
  - H1: 3xl-4xl, serif, navy
  - H2: 2xl-3xl, serif, navy
  - H3: xl-2xl, sans-serif, navy
  - Body: base-lg, sans-serif, dark gray
  - Stage numbers: 5xl-6xl, serif, beige/30% opacity

### Color Palette
- **Primary Navy**: #1a2332 (headers, cards, text)
- **Soft Beige/Cream**: #e8dcc4 (CTAs, accents, backgrounds)
- **White**: #ffffff (text on dark, card backgrounds)
- **Light Gray**: #f8f9fa (section backgrounds)
- **Off-White**: #fafbfc (alternate sections)

### Layout System
Use Tailwind spacing units: 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Container: max-w-7xl with px-6 md:px-12
- Section padding: py-16 md:py-24
- Card padding: p-8 md:p-10
- Gap spacing: gap-8 md:gap-12 between flow chart stages

### Component Library

**Navigation Header**
- Dark navy background (#1a2332)
- Lyte Advisory logo (left)
- Menu items: About, Services, Contact (right), white text
- Fixed height, subtle shadow
- Full-width, responsive collapse on mobile

**Hero Section**
- Full-width professional business image (office, handshake, or consultation scene)
- Navy gradient overlay (navy to transparent, 70% opacity)
- Centered content: serif headline, sans-serif subheadline, beige CTA button
- Height: 60vh md:70vh
- Button: "Start Your Funding Journey" with blurred background backdrop

**Flow Chart Section**
- Light gray background (#f8f9fa)
- Vertical layout on mobile, horizontal on desktop (lg:grid-cols-5)
- 5 connected cards: dark navy (#1a2332), rounded-xl, white text
- Connecting arrows/lines: beige color, 2-3px width, positioned between cards
- Each card contains: large stage number (beige/30%), stage title (white, serif), description (white/90%, sans-serif)
- Card spacing: gap-0 with connecting elements, or gap-6 with arrow overlays
- Subtle hover effect: slight scale or glow

**Stage Cards Design**
- Background: Navy (#1a2332)
- Border-radius: 16px (rounded-xl)
- Padding: p-8 md:p-10
- Stage number: Positioned top-left or top-center, large, semi-transparent beige
- Title: White, serif, text-xl md:text-2xl, mb-4
- Description: White/90%, sans-serif, text-base, leading-relaxed
- Min-height consistency across all cards
- Box shadow: subtle on white backgrounds

**CTA Section**
- Beige/cream background (#e8dcc4)
- Centered content with Lyte logo above heading
- Navy text for headline and subheading
- Button: Navy background with white text, hover state darker
- Generous padding: py-20 md:py-28

### Images
**Hero Image**: Professional business consultation or office environment - modern, bright, people-focused. Position: Full-width background with navy gradient overlay (top to bottom, 70% opacity).

**Optional Stage Icons**: Simple line icons in beige color - magnifying glass (Discovery), building/document (Review), file/checklist (Proposal), handshake/gears (Lending Process), growth chart (Ongoing Advice). Position: Top of each stage card, 24px-32px size.

### Responsive Behavior
- Mobile (base): Single column flow, stacked stages, full-width cards
- Tablet (md): Two-column where appropriate, maintained vertical flow for stages
- Desktop (lg): Horizontal flow chart with 5 columns, full navigation visible

### Interactions
- Smooth scroll behavior for "Start Your Funding Journey" CTA
- Fade-in animations on scroll for stage cards (stagger by 100ms)
- Subtle hover states on cards (transform: scale(1.02))
- No distracting animations - focus on content clarity

### Visual Hierarchy
- Hero grabs attention with professional imagery and clear value proposition
- Flow chart stages presented as journey with clear progression
- Generous whitespace between sections maintains breathing room
- Consistent card styling reinforces process structure
- Final CTA provides clear next step without overwhelming
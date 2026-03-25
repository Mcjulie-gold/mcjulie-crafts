# Planning Guide

A premium waitlist landing page for **McJulie Crafts**, a luxury motherhood brand **founded by women, for women**—selling thoughtfully designed bags for modern working mothers, capturing sophisticated style with warm, approachable elegance.

**Experience Qualities**:
1. **Luxuriously Aspirational** - The site should feel like walking into a high-end boutique, with every detail whispering quality and exclusivity.
2. **Warmly Welcoming** - Despite the premium positioning, the experience should feel personally inviting, like a trusted friend sharing something special.
3. **Confidently Modern** - Clean, contemporary design that reflects the target audience's sophisticated taste and forward-thinking lifestyle.

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page designed to capture waitlist signups through compelling storytelling and strategic conversion optimization. The primary goal is lead generation rather than complex application functionality.

## Essential Features

### Waitlist Email Capture Form
- **Functionality**: Collects email addresses and stores them persistently
- **Purpose**: Build a database of interested founding members for launch
- **Trigger**: User enters email and clicks "Secure My Spot" CTA
- **Progression**: User scrolls to form → Reads compelling benefits → Enters email → Clicks CTA → Receives confirmation toast → Email persists in database
- **Success criteria**: Email successfully stored in KV storage, user receives visual confirmation, form shows success state

### Hero Section with Value Proposition
- **Functionality**: Immediately communicates brand positioning and core message, emphasizing the **"founded by women, for women"** ethos prominently
- **Purpose**: Hook visitors within 3 seconds and establish brand identity rooted in female entrepreneurship and authentic understanding of women's needs
- **Trigger**: Page load
- **Progression**: Page loads → Hero animates in → User reads headline with prominent **"Founded by women, for women"** messaging highlighted in brand pink → Scrolls for more
- **Success criteria**: Clear hierarchy, legible typography, emotionally resonant messaging that connects deeply with female audience and establishes trust through shared experience

### Social Media Integration
- **Functionality**: Links to brand Instagram account
- **Purpose**: Build multi-channel community and showcase behind-the-scenes content
- **Trigger**: User clicks social icon/link
- **Progression**: User sees "Follow our journey" → Clicks Instagram link → Opens in new tab
- **Success criteria**: Link opens correctly to specified Instagram account

### Benefits Showcase
- **Functionality**: Displays founding member exclusive benefits
- **Purpose**: Incentivize immediate signup with clear value proposition
- **Trigger**: User scrolls to waitlist section
- **Progression**: Section enters viewport → Benefits animate in → User reads benefits → Motivated to sign up
- **Success criteria**: Benefits are scannable, visually distinct, and compelling

### Responsive Mobile Experience
- **Functionality**: Adapts layout for mobile devices
- **Purpose**: Ensure premium experience across all devices (majority of users will be mobile)
- **Trigger**: Site loads on mobile device
- **Progression**: Mobile user lands → Layout adjusts → Navigation simplifies → Touch targets are adequate → Form works seamlessly
- **Success criteria**: All content readable, CTAs accessible, form functional on mobile

## Edge Case Handling

- **Duplicate Email Submission**: Allow resubmission but show friendly message confirming they're already on the list
- **Invalid Email Format**: Provide inline validation before submission to guide correct input
- **Empty Form Submission**: Disable submit button until valid email is entered
- **Slow Network**: Show loading state on button during submission
- **Form Already Submitted**: Persist submission state and show alternative messaging on return visits

## Design Direction

The design should evoke the feeling of discovering an exclusive boutique recommendation from a stylish friend—premium but not pretentious, luxurious but warm. The brand story of being **"founded by women, for women"** should be woven throughout as the foundation of authentic connection and trust. It should feel like soft cashmere, champagne gold hardware, and the quiet confidence of a woman who has nothing to prove. The aesthetic should balance aspirational luxury with genuine warmth and sisterhood, using sophisticated restraint rather than maximalist opulence. Every design choice should reinforce the message that this brand truly understands women because it was created by women who live the same journey.

## Color Selection

A warm, sophisticated palette that feels distinctly feminine without being childish—think high-end fashion boutiques and premium leather goods.

- **Primary Color (Soft Rose Pink #ff93bd)**: The hero color representing the brand's warm, modern femininity. This is the signature color used for primary CTAs, hover states, and key accent moments. It communicates approachability within luxury.
- **Secondary Color (Champagne Gold #f4d4a7)**: A warm, golden neutral that adds richness and premium feel. Used for subtle backgrounds, decorative elements, and secondary accents. Elevates the overall sophistication.
- **Accent Color (Deep Warm Gold #d4af8c)**: A deeper, more grounded gold for borders, icons, and emphasis. Provides visual weight and complements the lighter champagne while maintaining warmth.
- **Background (Gradient #FFF9F5 to #FFF5F0)**: Soft peachy-cream gradient that creates an enveloping warmth without overwhelming. The subtle gradient adds depth and premium feel.
- **Foreground Colors**: Deep charcoal (#2D2A2E) for headlines, medium warm gray (#6B6568) for body text, creating excellent readability while maintaining the warm aesthetic.

**Foreground/Background Pairings**:
- Background Gradient (#FFF9F5): Deep Charcoal (#2D2A2E) - Ratio 12.5:1 ✓
- Primary (Soft Rose Pink #ff93bd): White (#FFFFFF) - Ratio 4.6:1 ✓
- Champagne Gold (#f4d4a7): Deep Charcoal (#2D2A2E) - Ratio 8.2:1 ✓
- Deep Warm Gold (#d4af8c): White (#FFFFFF) - Ratio 4.9:1 ✓

## Font Selection

Typography should feel refined and contemporary while maintaining excellent readability—editorial quality that respects the reader's time while communicating sophistication.

**Primary Typeface**: Montserrat - A geometric sans-serif that balances modern elegance with approachability. Its clean lines and subtle character give text a premium feel without sacrificing warmth.

**Secondary Typeface**: Crimson Pro - A refined serif for selected headlines and emphasized text, adding editorial sophistication and traditional luxury cues.

- **Typographic Hierarchy**:
  - **H1 (Hero Headline)**: Crimson Pro Bold/56px/tight leading/-0.5px tracking - Commanding presence with classic elegance
  - **H2 (Section Headers)**: Montserrat Bold/40px/1.2 leading - Clear hierarchy with modern confidence
  - **H3 (Subsection Headers)**: Montserrat SemiBold/28px/1.3 leading - Balanced emphasis
  - **Body Large (Subheadlines)**: Montserrat Regular/20px/1.6 leading - Comfortable reading
  - **Body (Main Text)**: Montserrat Regular/16px/1.7 leading - Optimal legibility
  - **Small (Benefits, Footer)**: Montserrat Medium/14px/1.5 leading - Clear secondary information
  - **CTA Buttons**: Montserrat SemiBold/16px/uppercase tracking - Confident action invitation

## Animations

Animations should feel like soft luxury materials—cashmere draping, silk flowing, gold jewelry catching light. Every movement should be purposeful and elegant, never rushed or mechanical.

**Scroll Animations**: Subtle fade-up on scroll for section reveals (300ms ease-out), creating a sense of content elegantly presenting itself as the user explores.

**Hover States**: Smooth color transitions (200ms) on CTAs and links, slight scale increase (1.02) on primary buttons to feel responsive without being aggressive.

**Form Interactions**: Input fields gently lift with subtle shadow on focus (150ms), providing tactile feedback that feels premium.

**Loading States**: Elegant spinner or subtle pulse on button during form submission, maintaining the refined aesthetic even in waiting states.

**Hero Entrance**: Gentle fade-in with slight upward movement on page load (600ms ease-out), creating a welcoming reveal.

**Benefit Cards**: Staggered fade-in when scrolling to benefits section (100ms delay between each), creating rhythm and drawing the eye through the content.

## Component Selection

**Components**:
- **Button (shadcn)**: Primary CTA with custom styling—larger size, soft rose background, rounded-lg corners, generous padding for premium feel
- **Input (shadcn)**: Email input with refined border styling, focus states with subtle shadow and color shift
- **Card (shadcn)**: For benefit items and feature showcases, with soft shadows and rounded corners
- **Separator (shadcn)**: Subtle dividers between sections using warm gold accent color
- **Badge (shadcn)**: For "Limited to 2000 members" trust element, styled with champagne gold

**Customizations**:
- Custom gradient backgrounds using Tailwind
- Decorative blob shapes created with CSS for visual interest
- Custom social media icon buttons with brand colors
- Testimonial cards with custom quote styling
- Navigation bar with backdrop blur effect for modern depth

**States**:
- **Buttons**: Default (soft rose), Hover (deeper rose with subtle lift), Active (slightly pressed), Loading (spinner with reduced opacity), Success (green checkmark animation)
- **Inputs**: Default (warm gray border), Focus (rose border with shadow), Error (red border with message), Filled (validated checkmark)
- **Form**: Empty state, Filling state, Submitting state, Success state with confirmation message

**Icon Selection**:
- Sparkles (@phosphor-icons/react) for premium benefits
- Package for priority access
- Gift for exclusive offerings
- Phone for personal consultations
- Target for early access
- Instagram logo for social media
- Check for validated inputs
- Arrow Right for CTAs

**Spacing**:
- Container max-width: 1280px with px-6 on mobile, px-8 on tablet, px-12 on desktop
- Section vertical spacing: py-16 on mobile, py-24 on tablet, py-32 on desktop
- Component gaps: gap-4 for tight groupings, gap-8 for related content, gap-16 for distinct sections
- Consistent 8px base spacing unit throughout

**Mobile**:
- Single column layout on mobile (<768px)
- Hero headline size reduces to 36px on mobile
- Navigation collapses to minimal logo-centered header
- Email form becomes full-width on mobile
- Benefit cards stack vertically with full-width
- Reduced padding on cards (p-6 → p-4)
- Touch-friendly button sizes (min-height 48px)
- Social icons remain accessible in footer on mobile

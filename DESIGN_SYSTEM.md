# Design System: Nakoda Real Estate (Nipania, Indore)

## 1. Brand Essence

**Nakoda Real Estate** combines the precision of an architectural developer with the warmth of a bespoke property advisory in Indore. The visual language avoids the typical busy broker portal aesthetics, opting instead for **architectural editorialism, generous whitespace, refined typography, and purposeful micro-interactions**.

---

## 2. Color Palette & Design Tokens

```css
:root {
  /* Brand Primaries */
  --color-charcoal-900: #0F1216; /* Deep architectural charcoal */
  --color-charcoal-800: #171B21; /* Card backgrounds on dark, nav solid */
  --color-charcoal-700: #222730; /* Sub-elements, borders */
  
  /* Canvas & Warm Neutrals */
  --color-bg-primary: #FAF8F5;   /* Warm off-white canvas */
  --color-bg-surface: #FFFFFF;   /* Pure white card and container surface */
  --color-bg-sand: #F3EFEA;      /* Sand/stone accent section background */
  --color-bg-stone-muted: #E8E3DB;/* Subtle separators and borders */

  /* Architectural Warm Bronze Accent */
  --color-bronze-primary: #B88746; /* Rich warm bronze */
  --color-bronze-hover: #9E7134;   /* Darker bronze hover */
  --color-bronze-light: #F7F0E6;   /* Bronze tint for badges */

  /* Text & Contrast Hierarchy */
  --color-text-primary: #14171A;   /* Primary high-contrast text (WCAG AAA) */
  --color-text-secondary: #565F69; /* Supporting / subtitle text */
  --color-text-muted: #838E99;     /* Meta details, captions */
  --color-text-inverse: #FFFFFF;   /* Light text on dark surfaces */

  /* Status Colors */
  --color-status-ongoing: #2D6A4F;
  --color-status-ongoing-bg: #E8F4EC;
  --color-status-upcoming: #9A6700;
  --color-status-upcoming-bg: #FEF6E6;
  --color-status-completed: #1D4ED8;
  --color-status-completed-bg: #EFF6FF;

  /* Elevation */
  --shadow-sm: 0 1px 3px rgba(15, 18, 22, 0.05);
  --shadow-md: 0 4px 16px rgba(15, 18, 22, 0.08);
  --shadow-lg: 0 12px 36px rgba(15, 18, 22, 0.12);
  --shadow-drawer: -8px 0 32px rgba(15, 18, 22, 0.2);

  /* Geometry */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 3. Typography Hierarchy

- **Headlines & Display**: `Playfair Display`, `Georgia`, serif (statuesque, luxury real estate editorial).
- **Body & Controls**: `Plus Jakarta Sans`, `Inter`, -apple-system, sans-serif (legible, responsive, clean).

---

## 4. UI Components

### A. Navigation & Mobile Drawer
- Sticky navigation with scroll state change (transparent to solid charcoal with backdrop blur).
- Mobile menu with full-screen or slide-out drawer, accessible keyboard trap, and quick contact buttons.

### B. Property Cards
- 16:10 aspect ratio image showcase with zoom-on-hover effect.
- Status badge (*Under Construction*, *New Launch*, *Ready to Move*).
- Details: Title, Locality (`Nipania, Indore`), Configuration pills, carpet areas, and instant CTA buttons ("View Property" & "Book Visit").

### C. Home Loan & EMI Calculator
- Real-time client-side calculation with Indian number formatting (`₹ xx,xx,xxx`).
- Sliders: Loan Amount (`₹ 25 Lakhs to ₹ 5 Crores`), Interest Rate (`7.0% to 12.0%`), Tenure (`5 to 30 Years`).
- Dynamic visual summary of Monthly EMI, Total Interest, and Total Repayment.

### D. Lead Capture Modals
- "Book a Site Visit", "Enquire Now", and "Download Brochure" modals.
- Real-time client-side validation for Indian phone numbers (`/^[6-9]\d{9}$/`), valid email, date selection, and consent.
- Immediate visual confirmation modal with fallback to direct WhatsApp or Call if offline/unconfigured.

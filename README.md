# Nakoda Real Estate — Production Static Website

A fast, modern, premium, responsive, and SEO-optimized **100% static multi-page website** for **Nakoda Real Estate** located in **Nipania, Indore, Madhya Pradesh, India**.

Designed with architectural editorialism, client-side financial utilities (interactive Indian Rupee EMI calculator inspired by best-in-class Indore platforms), and a zero-server **Google Forms → Google Sheets** lead generation pipeline.

---

## 1. Quick Start

### Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### Installation
From the root directory:
```bash
npm install
```

### Run Locally for Development
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
This bundles all multi-page HTML entry points, optimized CSS, and client-side JavaScript into a pure static directory at `dist/`.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 2. Technology & Architecture

- **Architecture**: 100% Static Multi-Page Architecture (MPA). Zero server runtime, zero Node.js/PHP/Python backend required in production.
- **Frontend Core**: Semantic HTML5, Modern CSS (Design Tokens, CSS Grid, Flexbox), Vanilla ES6+ JavaScript.
- **Tooling**: Vite for sub-second hot-reloading and static compilation (`rollupOptions.input` multi-page mapping).
- **Customer Data Backend**: Google Forms HTTP endpoint with zero-CORS submission and direct recording into Google Sheets.
- **Styling**: Tailored design tokens (`src/styles/tokens.css`, `base.css`, `components.css`, `utilities.css`) featuring deep charcoal, warm stone, and architectural bronze accents.

---

## 3. Website Structure & Routes

```text
/                                   Homepage (Hero, Portfolio, EMI Calculator, Why Nipania, Trust Pillars)
/projects/                          Properties Directory (Filterable by Ongoing, Upcoming, Completed)
/projects/nakoda-solitaire/         Flagship Project Detail Page (Specs, Floor Plans, Amenities, Timeline, RERA)
/why-nakoda/                        Quality, Engineering Standards & Transparency Page
/why-nipania/                       Nipania Regional Infrastructure, Transit Matrix & Google Map
/about/                             Company Story, Philosophy & Commitment
/contact/                           Sales Office Address, Interactive Scheduler, Call/WhatsApp Links
/privacy-policy/                    Data Protection & Lead Generation Privacy Statement
/terms/                             Terms of Use & Regulatory Disclaimers
/404.html                           Branded Error Page
```

---

## 4. Content Management & Data Layer Guide

Non-developers can easily update business information without touching core markup:

### A. Updating Contact Information & Phone Numbers
Edit **`src/config/contact.js`**:
```javascript
export const CONTACT_CONFIG = {
  brandName: "Nakoda Real Estate",
  owner: "Abhijeet Raj Kanungo",
  phone: "+91 70004 22377",
  phoneSecondary: "+91 74155 7709",
  whatsapp: "+91 70004 22377",
  email: "nbrproperty@gmail.com",
  address: {
    line1: "Plot No. 363, Sector A",
    line2: "Main Road, Mahalaxmi Nagar (Near Bombay Hospital)",
    city: "Indore",
    pincode: "452010"
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Plot+No.+363,+Sector+A,+Main+Road,+Mahalaxmi+Nagar,+Indore,+Madhya+Pradesh+452010"
};
```

### B. Configuring the Google Form Lead Integration
Edit **`src/config/google-form.js`**:
```javascript
export const GOOGLE_FORM_CONFIG = {
  formUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
  fields: {
    name: "entry.123456789",
    phone: "entry.987654321",
    email: "entry.112233445",
    ...
  }
};
```
*See `GOOGLE_FORM_SETUP.md` for a complete step-by-step walkthrough.*

### C. Adding or Modifying Residential Projects
Edit **`src/data/projects.js`**:
- Update project name, status (`ongoing`, `upcoming`, `completed`), description, and carpet area.
- Add floor plan specifications, gallery images, amenities, and RERA registration numbers.

### D. Adding Project Images
Place high-resolution project photos into:
```text
public/assets/images/
```
Reference them in your data files as `/assets/images/your_image_name.jpg`.

### E. Configuring Analytics & Pixels
Place your Google Analytics (GA4) or Google Tag Manager script directly into the `<head>` of each HTML file:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 5. Deployment Options

Because the output is 100% static HTML, CSS, and JS, this website can be deployed anywhere at zero hosting cost:

### Vercel
1. Run `npx vercel` or link your Git repository to Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`

### Netlify
1. Run `npx netlify deploy --prod` or import via Netlify dashboard.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

### GitHub Pages
1. Build the site: `npm run build`
2. Deploy the generated `dist/` directory to your repository's `gh-pages` branch.

### Cloudflare Pages or AWS S3 + CloudFront
Upload the contents of the `dist/` folder directly to your S3 bucket or Cloudflare Pages project.

---

## 6. Information Nakoda Real Estate Needs to Supply for Production Launch

Before launching paid advertising campaigns, replace the clearly labeled placeholders with verified business details:
1. **Official Phone Number**: Replace `+91 98930 [OFFICIAL NUMBER]` in `src/config/contact.js` and HTML files.
2. **Official WhatsApp Number**: Replace `+91 98930 [WHATSAPP NUMBER]` in `src/config/contact.js`.
3. **Exact Office Address**: Update plot/suite number on Nipania Main Road in `src/config/contact.js`.
4. **Google Form Entry IDs**: Follow `GOOGLE_FORM_SETUP.md` to populate `src/config/google-form.js`.
5. **RERA Registration Numbers**: Replace `[MP RERA APPLICATION PENDING]` with official numbers on project pages.
6. **Project Brochures**: Upload official PDF brochures to `public/assets/brochures/` and add URLs to `src/data/projects.js`.

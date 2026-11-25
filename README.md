# Uplink Enterprises — Corporate IT Services & Custom Software

A modern, responsive, executive-tier landing page and multi-page web platform engineered for **Uplink Enterprises**. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

Designed according to multinational enterprise design standards (inspired by Accenture, IBM, and Infosys) with a clean light-first aesthetic, high-contrast typography, zero dark-pattern clutter, and strict adherence to WCAG AA accessibility standards.

---

## 🏢 Business Architecture

Uplink Enterprises operates across two primary strategic practices:

1. **Division A: IT Services & Infrastructure**
   * Enterprise Cloud Architecture & Migration (AWS, Azure, GCP)
   * Network Engineering & Zero-Trust Security Perimeters
   * 24/7 Managed NOC & Technical Helpdesk Support
   * Strategic IT Consulting & vCIO Technology Roadmaps
   * Enterprise Web Development & Cloud Portals
   * Cross-Platform Mobile Applications & UI/UX Systems

2. **Division B: Software & Automation**
   * Bespoke Enterprise Software Engineering
   * Multi-Tenant B2B SaaS Platform Development
   * Business Process Automation (BPA) & Workflow RPA
   * Applied Enterprise AI & Knowledge Retrieval Systems
   * Enterprise CRM & ERP Bi-Directional Synchronization
   * Microservices Architecture & Modern API Gateways

---

## 🎨 Design System Specifications

* **Theme**: Light-first executive design. Pure white (`#FFFFFF`) and subtle light slate (`#F8FAFC`, `#F1F5F9`) backgrounds for content sections.
* **Controlled Dark Navy Band**: Dark navy (`#0A1F44` / `#07152F`) is restricted exclusively to the **Hero Band**, the **Contact CTA Band**, and the **Global Footer**.
* **Primary Brand Blue**: `#0B3D91` (Corporate Deep Blue), with hover state `#082B69` and active link `#1D4ED8`.
* **Practice Accent Colors** (used sparingly for small tags, icons, and borders only):
  * IT Services: `#0E7490` (Deep Teal)
  * Software & Automation: `#4338CA` (Deep Indigo)
* **Typography**: Clean, single-family **Inter** across all UI elements. Sentence-case headings (no screaming all-caps). WCAG AA compliant contrast (`#0F172A` headings, `#475569` body).
* **Grid Symmetry**: Capability grids feature exactly 6 cards per view, filling 3 columns on desktop, 2 columns on tablet, and 1 column on mobile with zero half-empty rows.

---

## 📁 Project Structure

```
├── public/                     # Static assets and favicons
├── scripts/
│   └── verify-design.mjs       # Automated design system & grid balance auditor
├── src/
│   ├── types/
│   │   └── index.ts            # TypeScript data models (Services, Case Studies, Quizzes)
│   ├── data/
│   │   └── content.ts          # Centralized content store (6 IT + 6 Software services, FAQs)
│   ├── components/
│   │   ├── BrandLogo.tsx       # Custom SVG corporate geometric monogram
│   │   ├── Navbar.tsx          # Sticky corporate header with mobile drawer & quote CTA
│   │   ├── EnterpriseHero.tsx  # Hero band with photography & dual equal-weight panels
│   │   ├── EnterpriseServiceCard.tsx  # White card with single CTA, photo & features
│   │   ├── DualCapabilitiesSection.tsx # Balanced 6-card grid with filter tabs & scope modal
│   │   ├── EnterpriseStatsAndLogos.tsx # Corporate SLA benchmark cards & client logo grid
│   │   ├── DiscoveryQuiz.tsx   # 3-step interactive questionnaire with progress bar
│   │   ├── ProcessTimeline.tsx # 4-stage technical delivery methodology
│   │   ├── CaseStudiesSection.tsx     # Enterprise case studies with metrics & tech stack
│   │   ├── TestimonialsSection.tsx    # Executive endorsements with outcome notes
│   │   ├── FaqSection.tsx      # Accessible keyboard-navigable FAQ accordion
│   │   ├── ContactSection.tsx  # Contact hub with form, 4h SLA, & calendar modal
│   │   └── Footer.tsx          # Dark navy footer with sitemap & compliance note
│   ├── pages/
│   │   ├── HomePage.tsx        # Main dual-vertical landing overview
│   │   ├── ITServicesPage.tsx  # Dedicated IT Services & Infrastructure practice page
│   │   ├── SoftwarePage.tsx    # Dedicated Software & Automation practice page
│   │   ├── QuizPage.tsx        # Standalone 60-second solution assessment
│   │   ├── AboutPage.tsx       # Corporate philosophy, principles & leadership matrix
│   │   └── ContactPage.tsx     # Dedicated consultation & scheduling page
│   ├── App.tsx                 # Root layout with reactive URL hash routing
│   ├── index.css               # Design tokens and base styles
│   └── main.tsx                # React 19 application entrypoint
├── CLIENT_DATA_REQUEST.md      # Questionnaire to gather real assets from the client
├── index.html                  # HTML5 shell, Inter font import, Open Graph metadata
├── package.json                # Project dependencies and npm scripts
├── vercel.json                 # Vercel deployment configuration & SPA rewrites
└── vite.config.ts              # Vite 8 configuration with React & Tailwind plugins
```

---

## 🚀 Running Locally

### Prerequisites
* Node.js (version 18+ or 20+ recommended)
* npm or pnpm

### 1. Installation
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser. Hot Module Replacement (HMR) is active.

### 3. Build for Production
```bash
npm run build
```
Generates a minified, tree-shaken production bundle inside `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

### 5. Automated Design Audit
```bash
node scripts/verify-design.mjs
```

---

## ☁️ Deployment Guide (Vercel)

The repository includes a ready-to-deploy [`vercel.json`](file:///c:/Users/gurug/OneDrive/Desktop/Corporate%20IT%20Services%20Website%20(Community)/vercel.json) pre-configured with SPA route rewrites:

### Method A: Via Vercel Web Dashboard (1-Click)
1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and click **Import** next to your repository.
3. Vercel automatically detects:
   * **Framework**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on an SSL-secured `.vercel.app` domain.

### Method B: Via Vercel CLI
Run the following in the project root:
```powershell
npx vercel
```
To deploy directly to production:
```powershell
npx vercel --prod
```

---

## 🔒 Content Customization

All website content (service descriptions, case studies, logos, and testimonials) is centralized in:
👉 [`src/data/content.ts`](file:///c:/Users/gurug/OneDrive/Desktop/Corporate%20IT%20Services%20Website%20(Community)/src/data/content.ts)

To replace placeholders with authentic client assets, refer to the step-by-step checklist in:
👉 [`CLIENT_DATA_REQUEST.md`](file:///c:/Users/gurug/OneDrive/Desktop/Corporate%20IT%20Services%20Website%20(Community)/CLIENT_DATA_REQUEST.md)

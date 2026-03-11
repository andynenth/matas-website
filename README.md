# MS Law Office Website - สำนักกฎหมายมิตรแสนสุข

Bilingual (Thai/English) law office website for MS Law Office in Chonburi, Thailand.

## 🌐 Live Website Access

### Multiple URLs Available:

**Primary Access:**
- 🏠 **Main Domain**: https://mataslawoffice.com
- 📄 **Cloudflare Pages**: https://matas-website.pages.dev

**Alternative Access (for regions with DNS issues):**
- 🔧 **Preview Deployment**: https://fd6904ff.matas-website.pages.dev

### Regional Access Notes:
- **Canada**: `matas-website.pages.dev` works normally
- **Thailand**: May need to use `fd6904ff.matas-website.pages.dev` due to DNS filtering
- **Global**: `mataslawoffice.com` should work everywhere once fully propagated

> 📋 **Having access issues?** See [DNS_ACCESS_GUIDE.md](./DNS_ACCESS_GUIDE.md) for troubleshooting steps

## 🚀 Project Overview

**Attorney**: Matas Srisookcharoen
**Phone**: 081-514-4783
**LINE**: @Matas.s
**Location**: Chonburi, Thailand

### Technology Stack:
- **Framework**: Astro 5.18.0 (Static Site Generator)
- **Styling**: Pages Frontend + Bootstrap Grid
- **Deployment**: Cloudflare Pages
- **Languages**: Thai (primary) + English
- **Analytics**: Google Analytics 4

## 🏗️ Project Structure

```text
src/
├── components/          # Reusable Astro components
│   ├── Header.astro    # Navigation with contact info
│   ├── Footer.astro    # Footer with contact details
│   ├── HeroSection.astro  # Unified hero section component
│   └── ContactButtons.astro
├── layouts/
│   └── Layout.astro    # Global layout with SEO
├── templates/          # Page templates
│   ├── HomePage.astro
│   ├── AboutPage.astro
│   ├── ServicesPage.astro
│   ├── ContactPage.astro
│   └── FAQPage.astro
├── pages/              # Route definitions
│   ├── [...path].astro # Dynamic routing handler
│   └── en/            # English routes
├── i18n/              # Internationalization
│   ├── index.ts       # Central translations export
│   └── translations/  # Modular translation files
└── public/
    └── assets/images/ # Static assets
```

## 🌍 Bilingual Setup

### Route Structure:
- **Thai** (default): `/`, `/about`, `/services`, `/contact`, `/faq`
- **English**: `/en/`, `/en/about`, `/en/services`, `/en/contact`, `/en/faq`

### Translation Architecture:
- **Modular translations**: 7 organized files instead of 1,199-line monolith
- **Type-safe**: Full TypeScript support
- **Maintainable**: Easy to update content per language

## 🧞 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 📱 Contact Conversion Features

### Mobile-First Design:
- Sticky contact bar on mobile
- Prominent phone/LINE buttons
- GA4 tracking for contact clicks
- No contact forms - direct communication only

### Contact Methods:
- 📞 **Phone**: Direct click-to-call
- 💬 **LINE**: Direct link to @Matas.s
- 📧 **Email**: contact@mataslawoffice.com

## 🎨 Styling Framework

Uses **Pages Frontend Framework** - "Light Weight, Hardware Accelerated UI Framework"

### Common Classes:
- **Layout**: `container`, `row`, `col-md-8`, `col-md-offset-2`
- **Spacing**: `p-t-85`, `p-b-85`, `m-t-30`, `m-b-20`
- **Backgrounds**: `bg-master-darker`, `bg-primary`, `bg-success`
- **Typography**: `text-white`, `fs-16`, `hint-text`, `block-title`

> 📖 Full documentation: `/documentation/index.html`

## 🚀 Recent Major Updates

### ✅ Completed Features:
1. **Modular Translations**: Reorganized 1,199-line file into 7 maintainable modules
2. **Unified Hero Sections**: Created reusable HeroSection component across all pages
3. **Service Icons**: Fixed to use proper PNG images instead of Font Awesome
4. **Profile Image**: Added attorney profile photo to About page
5. **Geographic Access**: Multiple URLs for global accessibility

### 🔧 Infrastructure:
- **Fast-forward merge** to master completed
- **Build optimization**: Net -423 lines of code
- **Component reusability**: DRY architecture
- **Type safety**: Full TypeScript compliance

## 🌐 Deployment Configuration

### Cloudflare Pages Setup:
```toml
# wrangler.toml
name = "matas-website"
route = "mataslawoffice.com/*"
pages_build_output_dir = "dist"
```

### DNS Configuration:
- **Custom Domain**: mataslawoffice.com → Cloudflare Pages
- **Pages Domain**: matas-website.pages.dev (may be filtered in some regions)
- **Preview Domain**: fd6904ff.matas-website.pages.dev (alternative access)

## 📈 Analytics & Performance

### Google Analytics 4:
- Custom events: `trackPhoneClick()`, `trackLineClick()`
- Conversion tracking for contact methods
- Mobile engagement metrics

### SEO Optimization:
- Structured data for local business
- Proper meta tags for both languages
- Mobile-first responsive design

## 🔧 Troubleshooting

### Common Issues:
1. **DNS Access Problems**: Use alternative URLs or change DNS servers
2. **Build Errors**: Run `npm install` and `npm run build`
3. **Mobile Layout**: Test on actual devices, especially iPad

### Development Tips:
- Use `npm run dev` for development
- Test both languages: `/` (Thai) and `/en/` (English)
- Verify contact buttons work on mobile devices

---

**Contact for Support**: 081-514-4783 | @Matas.s | contact@mataslawoffice.com

*Last Updated: March 2026*
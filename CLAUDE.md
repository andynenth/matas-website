# CLAUDE.md - MS Law Office Website

## Project Overview
Bilingual (Thai/English) law office website for MS Law Office (สำนักกฎหมายมิตรแสนสุข) in Chonburi, Thailand. **Primary goal: Generate phone calls and LINE contacts** from potential Thai clients.

**Attorney**: Matas Srisookcharoen
**Phone**: 081-514-4783
**LINE**: @Matas.s
**Site**: https://mataslawoffice.com

## Technical Stack & Architecture

### Framework Choice: Astro + Pages Frontend + Bootstrap
- **Astro 5.18.0** - Static site generator with TypeScript support
- **Pages Frontend Framework** - "Beautifully Hand Crafted, Light Weight, Hardware Accelerated UI Framework" (NOT Tailwind - removed due to conflicts)
- **Bootstrap Grid System** - Responsive layout system (`col-md-8`, `container`, `row`)
- **Font Awesome** - Icons (`fa fa-phone`, `fa fa-comments`)
- **Google Fonts** - Noto Sans Thai / Noto Sans for proper Thai typography
- **Documentation**: Full framework docs available at `/documentation/index.html`

### Why This Stack?
1. **Pages Frontend** provides professional business website components - "Light Weight, Hardware Accelerated UI Framework"
2. **Bootstrap Grid** offers proven responsive layout system (`col-md-*`, `col-sm-*`, `col-lg-*`)
3. **Astro** enables bilingual static generation with excellent SEO
4. **No CSS conflicts** after Tailwind removal
5. **Mobile-first** design with contact conversion priority

### Pages Framework Classes Used
Common utility classes from the framework:
- **Layout**: `container`, `container-fixed-lg`, `row`, `col-md-8`, `col-md-offset-2`
- **Spacing**: `p-t-85` (padding-top), `p-b-85` (padding-bottom), `m-t-30` (margin-top), `m-b-20` (margin-bottom)
- **Background**: `bg-master-darker`, `bg-master-lighter`, `bg-master-lightest`, `bg-primary`, `bg-success`, `bg-complete`
- **Typography**: `text-white`, `text-center`, `fs-16` (font-size), `hint-text`, `block-title`, `light`, `bold`
- **Responsive**: `visible-lg-inline`, `visible-md-inline`, `visible-sm-inline`, `visible-xs-block`, `hidden-lg`
- **Layout**: `pull-left`, `pull-right`, `padding-20`, `padding-30`, `no-padding`

## Development Commands

```bash
# Development server
npm run dev           # Runs on http://localhost:4321
npx astro dev        # Alternative if npm fails

# Build
npm run build        # Production build
npm run preview      # Preview production build

# Dependencies
npm install          # Clean install after changes
```

## Critical Architecture Decisions

### 1. Bilingual Structure
- **Thai** (default): `/`, `/about`, `/services`, `/contact`, `/faq`
- **English**: `/en/`, `/en/about`, `/en/services`, `/en/contact`, `/en/faq`
- **i18n routing**: No prefix for Thai (default), `/en/` prefix for English
- **Language switching**: Automatic path conversion in Header.astro

### 2. Styling Consolidation
- **Global CSS** in `src/layouts/Layout.astro` using `html[lang="th"]` and `html[lang="en"]` selectors
- **No duplicate styles** across pages - everything inherits from Layout
- **Language-aware fonts**: Noto Sans Thai for Thai, Noto Sans for English
- **Responsive design**: Custom iPad/tablet optimizations in Header.astro

### 3. Contact Conversion Priority
- **Header contact info** visible on desktop/tablet
- **Mobile sticky bar** at bottom with call/LINE buttons
- **GA4 tracking** with custom events (`trackPhoneClick()`, `trackLineClick()`)
- **No contact forms** - direct phone/LINE contact only

## Key Files & Components

### Core Layout
- `src/layouts/Layout.astro` - Global layout with SEO, fonts, analytics
- `src/components/Header.astro` - Navigation with responsive contact info
- `src/components/Footer.astro` - Footer with contact details

### Pages Structure
```
src/pages/
├── index.astro          # Thai homepage
├── about.astro          # Thai about page
├── services.astro       # Thai services
├── contact.astro        # Thai contact
├── faq.astro           # Thai FAQ
└── en/
    ├── index.astro      # English homepage
    ├── about.astro      # English about
    ├── services.astro   # English services
    ├── contact.astro    # English contact
    └── faq.astro       # English FAQ
```

## Responsive Design - iPad/Tablet Fixes

**Critical**: Header has three responsive layouts:
- **Large Desktop (1200px+)**: Full contact info + language toggle
- **Tablet/iPad (768-1199px)**: Phone + compact language flags only
- **Mobile (<768px)**: Hamburger menu + sticky bottom contact bar

Classes used:
- `visible-lg-inline` (desktop)
- `visible-md-inline hidden-lg` (tablet)
- `visible-sm-inline visible-xs-inline` (mobile)

## Content Strategy

### Mobile-First Design
- Contact buttons prominently displayed
- Essential information above fold
- Professional/trustworthy tone
- Clear service descriptions
- Free consultation emphasis

### SEO Optimization
- Structured data (JSON-LD) for local business
- Proper meta tags for both languages
- Canonical URLs configured
- Open Graph and Twitter cards

## Analytics & Tracking

### Google Analytics 4 Setup
- Replace `YOUR_GA_MEASUREMENT_ID` with real tracking ID
- Custom events: `trackPhoneClick()` and `trackLineClick()`
- Configured in Layout.astro head section

### Contact Tracking
```javascript
// Phone clicks
onclick="trackPhoneClick()"

// LINE clicks
onclick="trackLineClick()"
```

## Common Development Tasks

### Adding New Pages
1. Create `.astro` file in appropriate language folder
2. Import Layout, Header, Footer components
3. Set proper meta data (title, description, lang)
4. Add navigation link to Header.astro if needed

### Content Updates
- Edit content directly in `.astro` files
- No external CMS - all content is in components
- Maintain consistency between Thai/English versions

### Styling Changes
- Global styles: Edit `src/layouts/Layout.astro`
- Component styles: Edit component `.astro` files
- Use **Pages Frontend classes** (see class list above): `bg-master-darker`, `text-white`, `p-t-85`, etc.
- Bootstrap grid: `container`, `row`, `col-md-8`, etc.
- **Reference**: Check `/documentation/index.html` for complete class documentation

## Deployment Notes

### Configuration
- Site URL: `https://mataslawoffice.com` (set in astro.config.mjs)
- Favicon: Uses `/favicon.svg`
- Logo references: Fixed to use favicon.svg (not logo.png)

### Production Checklist
1. Replace GA tracking ID with real value
2. Verify all contact links work
3. Test responsive design on actual devices
4. Check Thai typography rendering
5. Validate SEO meta tags

## Important Gotchas

### Font Loading
- Thai text MUST use Noto Sans Thai for proper rendering
- Language-aware CSS handles this automatically
- Don't override font declarations without checking both languages

### Responsive Breakpoints
- iPad layout is specifically handled - don't modify tablet CSS without testing
- Mobile sticky bar only shows on `visible-xs-block visible-sm-block`

### Framework Conflicts
- **Never re-add Tailwind** - causes conflicts with Pages CSS
- Use Pages CSS utility classes instead
- Bootstrap provides grid, Pages provides components

### Contact Links
- Phone: `tel:+66815144783` (Thailand format)
- LINE: `https://line.me/ti/p/~Matas.s` (official LINE URL format)
- Always include tracking onclick events

## Testing Requirements

### Browser Testing
- Test on actual iPad (both orientations)
- Verify Thai font rendering on all devices
- Check contact button functionality
- Validate language switching works

### Build Testing
Always run before deployment:
```bash
npm run build
npm run preview
```

## Future Development Notes

### Performance Optimized
- Static site generation for fast loading
- Minimal JavaScript (only GA + contact tracking)
- Optimized images and assets

### SEO Focused
- Bilingual sitemap generation
- Proper hreflang if needed in future
- Local business schema markup

### Conversion Optimized
- Clear value propositions
- Trust indicators (experience, credentials)
- Multiple contact methods
- Free consultation emphasis

---

**Remember**: This is a conversion-focused business website, not a complex web app. Keep it fast, professional, and focused on generating client contacts.
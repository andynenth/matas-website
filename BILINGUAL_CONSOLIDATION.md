# Bilingual Site Consolidation Project

**Goal**: Eliminate duplicate files by using single templates that handle both Thai and English automatically.

**Problem**: Currently maintaining separate files for each language creates maintenance burden and inconsistency risk.

---

## Phase 1: Investigation and Analysis ✏️

### 1.1 Current State Assessment
- [ ] List all current page files in `src/pages/`
- [ ] List all template files in `src/templates/`
- [ ] Identify which pages have both direct files AND templates
- [ ] Test current dynamic routing (`[...path].astro`) - does it work?
- [ ] Check which routes are actually being served by dynamic routing vs direct files
- [ ] Verify if English pages exist in `src/pages/en/` directory

### 1.2 Template Completeness Check
- [ ] Test `HomePage.astro` template renders correctly for Thai
- [ ] Test `HomePage.astro` template renders correctly for English
- [ ] Test `ContactPage.astro` template renders correctly for Thai
- [ ] Test `ContactPage.astro` template renders correctly for English
- [ ] Test `AboutPage.astro` template renders correctly for Thai
- [ ] Test `AboutPage.astro` template renders correctly for English
- [ ] Test `ServicesPage.astro` template renders correctly for Thai
- [ ] Test `ServicesPage.astro` template renders correctly for English
- [ ] Test `FAQPage.astro` template renders correctly for Thai
- [ ] Test `FAQPage.astro` template renders correctly for English

### 1.3 Dynamic Routing Analysis
- [ ] Verify `getStaticPaths()` generates all required routes
- [ ] Test accessing `/` (Thai homepage) through dynamic routing
- [ ] Test accessing `/en` (English homepage) through dynamic routing
- [ ] Test accessing `/contact` (Thai contact) through dynamic routing
- [ ] Test accessing `/en/contact` (English contact) through dynamic routing
- [ ] Test accessing `/about` (Thai about) through dynamic routing
- [ ] Test accessing `/en/about` (English about) through dynamic routing
- [ ] Test accessing `/services` (Thai services) through dynamic routing
- [ ] Test accessing `/en/services` (English services) through dynamic routing
- [ ] Test accessing `/faq` (Thai FAQ) through dynamic routing
- [ ] Test accessing `/en/faq` (English FAQ) through dynamic routing

### 1.4 Translation System Check
- [ ] Verify all required translations exist in `src/i18n/translations.ts`
- [ ] Check for any missing translation keys used by templates
- [ ] Verify language detection works correctly
- [ ] Test translation utilities (`t()`, `getContactConfig()`, etc.)

---

## Phase 2: Fix Dynamic Routing ⚙️

### 2.1 Route Configuration
- [ ] Review current `getStaticPaths()` in `[...path].astro`
- [ ] Add missing Thai contact route (`/contact`) if needed
- [ ] Verify all language prefixes are correct
- [ ] Test route generation produces expected URLs

### 2.2 Template Integration
- [ ] Verify all templates are properly imported in `[...path].astro`
- [ ] Check template component mapping is complete
- [ ] Test error handling for missing templates
- [ ] Verify language prop is passed correctly to all templates

---

## Phase 3: Testing Before Migration 🧪

### 3.1 Build Testing
- [ ] Run `npm run build` - verify no errors
- [ ] Check build output for all expected static pages
- [ ] Verify both languages generate correctly
- [ ] Test production preview (`npm run preview`)

### 3.2 Functionality Testing
- [ ] Test all navigation links work in Thai
- [ ] Test all navigation links work in English
- [ ] Test language switching works on all pages
- [ ] Test contact buttons work on all pages
- [ ] Test mobile responsive design on all pages
- [ ] Test SEO meta tags are correct for both languages

---

## Phase 4: Gradual Migration 🚚

### 4.1 Backup Current State
- [ ] Create git branch for consolidation work
- [ ] Commit current working state
- [ ] Document current file structure

### 4.2 One-by-One Migration
- [ ] Remove `src/pages/index.astro` (test homepage still works)
- [ ] Remove `src/pages/about.astro` (test about page still works)
- [ ] Remove `src/pages/services.astro` (test services page still works)
- [ ] Remove `src/pages/faq.astro` (test FAQ page still works)
- [ ] Remove `src/pages/contact.astro` (test contact page still works)

### 4.3 Post-Migration Testing
- [ ] Test all pages load correctly
- [ ] Test all internal links work
- [ ] Test language switching works
- [ ] Test contact functionality works
- [ ] Test mobile layout works
- [ ] Run full build and verify output

---

## Phase 5: Cleanup and Optimization 🧹

### 5.1 File Cleanup
- [ ] Remove any unused template files
- [ ] Remove unused translation keys
- [ ] Clean up unused imports
- [ ] Update any documentation references

### 5.2 Final Verification
- [ ] Run `npm run build` - verify clean build
- [ ] Test all pages in production preview
- [ ] Verify Google Maps still works (Thai version)
- [ ] Test analytics tracking still works
- [ ] Verify contact form submissions work

---

## Success Criteria ✅

**Before**: Making a layout change requires editing 2 files (Thai + English)
**After**: Making a layout change requires editing 1 file (template automatically handles both languages)

### Final Checklist
- [ ] Only `src/pages/[...path].astro` exists in pages directory
- [ ] All page content comes from `src/templates/` directory
- [ ] Both Thai and English versions work identically
- [ ] SEO and meta tags work correctly
- [ ] Build process generates all static pages
- [ ] No broken links or missing content
- [ ] Contact functionality works on both languages
- [ ] Mobile responsiveness maintained

---

## Risk Mitigation 🛡️

### Rollback Plan
- [ ] Keep git branch with working state
- [ ] Document exact steps for reverting changes
- [ ] Test rollback procedure before starting

### Validation Steps
- [ ] Create automated test script for critical paths
- [ ] Set up before/after comparison screenshots
- [ ] Verify analytics tracking continues working

---

## Notes Section 📝

### Issues Discovered
_(Fill in as issues are found)_

### Decisions Made
_(Document any architectural decisions)_

### Future Improvements
_(Ideas for further consolidation or improvements)_
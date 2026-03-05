# Complete Website Language Management Refactor
## All-at-Once Implementation Plan

**Goal:** Eliminate `/en` folder duplication, create single-template system with centralized translations

**Strategy:** Convert from duplicate page files to dynamic routing with translation system

---

## **Current Problems to Solve:**
- [ ] Phone button text `โทร 081-514-4783` duplicated in **6+ files**
- [ ] LINE button text `แชท LINE` duplicated in **6+ files**
- [ ] Services data copy-pasted in every page (Thai + English)
- [ ] Page titles/descriptions scattered across individual files
- [ ] Any structural change requires editing **both** Thai and English versions
- [ ] `/en` folder creates maintenance nightmare

---

## **Phase 1: Foundation Setup**
**Estimated Time: 1 hour**

### **Task 1.1: Create Translation System** ✅
**File: `/src/i18n/translations.ts`**

**Subtasks:**
- [x] Set up basic translation object structure (th/en)
- [x] Extract site-wide elements:
  - [x] Site names: `สำนักกฎหมายมิตรแสนสุข` / `MS Law Office`
  - [x] Taglines: `บริการใกล้ตัว มาตรฐานระดับสากล` / `Local Care, International Confidence`
- [x] Extract navigation items:
  - [x] `หน้าแรก` / `Home`
  - [x] `เกี่ยวกับเรา` / `About Us`
  - [x] `บริการ` / `Services`
  - [x] `คำถามที่พบบ่อย` / `FAQ`
  - [x] `ติดต่อเรา` / `Contact`
- [x] Extract button text:
  - [x] `โทร 081-514-4783` / `Call 081-514-4783`
  - [x] `แชท LINE` / `LINE Chat`
  - [x] `เรียนรู้เพิ่มเติม` / `Learn More`
- [x] Extract homepage content:
  - [x] Hero section titles and descriptions
  - [x] Services section headers
  - [x] Call-to-action text
- [x] Extract about page content:
  - [x] Page title and description
  - [x] All about page sections
- [x] Extract services page content:
  - [x] Service titles and descriptions
  - [x] Page headers and text
- [x] Extract contact page content:
  - [x] Contact form labels
  - [x] Contact information text
- [x] Extract FAQ content:
  - [x] Questions and answers
  - [x] FAQ page headers
- [x] Extract services data array:
  - [x] All 7 service items with titles/descriptions/icons
- [x] Add TypeScript type annotations

### **Task 1.2: Create Translation Utilities** ✅
**File: `/src/i18n/utils.ts`**

**Subtasks:**
- [x] Create `t(key, lang)` function with dot notation support
- [x] Create `getCurrentLang(url)` function for URL-based detection
- [x] Create `getLocalizedUrl(path, lang)` for navigation links
- [x] Create `detectLanguageFromPath(pathname)` for dynamic routing
- [x] Add error handling for missing translation keys
- [x] Add TypeScript type safety for translation keys
- [x] Export all utility functions

### **Task 1.3: Update TypeScript Types** ✅
**File: `/src/types/i18n.ts`**

**Subtasks:**
- [x] Create `Language` type (`'th' | 'en'`)
- [x] Create `TranslationKey` type with all possible keys
- [x] Update existing component Props interfaces
- [x] Add translation-aware component prop types
- [x] Export all new types

---

## **Phase 2: Core Components Refactor**
**Estimated Time: 1.5 hours**

### **Task 2.1: Header System Refactor** ⏸️

**Subtasks:**
- [ ] Update `/src/components/Header.astro`:
  - [ ] Import translation utilities
  - [ ] Replace hardcoded navigation with `t()` calls
  - [ ] Update language detection logic
- [ ] Update `/src/components/header/Logo.astro`:
  - [ ] Replace hardcoded site name with translation
  - [ ] Add language prop support
- [ ] Update `/src/components/header/ContactInfo.astro`:
  - [ ] Replace phone display text with translation
  - [ ] Update button text to use `t()` calls
- [ ] Update `/src/components/header/MobileSticky.astro`:
  - [ ] Replace `callText` with translation system
  - [ ] Replace `lineText` with translation system
  - [ ] Remove hardcoded language conditionals
- [ ] Update `/src/components/header/MobileNavigation.astro`:
  - [ ] Replace hardcoded menu items with translations
  - [ ] Update contact button text
  - [ ] Fix language toggle text
- [ ] Update `/src/components/header/LanguageToggle.astro`:
  - [ ] Fix URL switching logic for new routing
  - [ ] Update language display text
- [ ] Update `/src/components/header/constants.ts`:
  - [ ] Move all text to translation system
  - [ ] Keep only non-text configuration
- [ ] Test header functionality:
  - [ ] Verify navigation works in both languages
  - [ ] Test mobile menu functionality
  - [ ] Test language switching

### **Task 2.2: Create Reusable Contact Buttons Component** ⏸️
**File: `/src/components/ContactButtons.astro`**

**Subtasks:**
- [ ] Create new component file
- [ ] Add language prop support
- [ ] Implement phone button with translation
- [ ] Implement LINE button with translation
- [ ] Add proper icon support (phone icon + LINE logo)
- [ ] Add tracking functionality (`trackPhoneClick`, `trackLineClick`)
- [ ] Add responsive styling classes
- [ ] Support different button sizes (large, medium)
- [ ] Export component with proper TypeScript props

### **Task 2.3: Footer Component Update** ⏸️
**File: `/src/components/Footer.astro`**

**Subtasks:**
- [ ] Read current footer content
- [ ] Extract any hardcoded text to translations
- [ ] Update footer with translation system
- [ ] Test footer in both languages

---

## **Phase 3: Dynamic Routing Setup**
**Estimated Time: 1 hour**

### **Task 3.1: Create Dynamic Route Handler** ⏸️
**File: `/src/pages/[...path].astro`**

**Subtasks:**
- [ ] Create dynamic route file
- [ ] Implement language detection from URL:
  - [ ] `/` → Thai homepage
  - [ ] `/about` → Thai about page
  - [ ] `/en/` → English homepage
  - [ ] `/en/about` → English about page
- [ ] Add route mapping for all page types:
  - [ ] Home (`/`, `/en/`)
  - [ ] About (`/about`, `/en/about`)
  - [ ] Services (`/services`, `/en/services`)
  - [ ] Contact (`/contact`, `/en/contact`)
  - [ ] FAQ (`/faq`, `/en/faq`)
- [ ] Handle 404 cases for invalid routes
- [ ] Pass language parameter to appropriate templates

### **Task 3.2: Configure Route Redirects** ⏸️

**Subtasks:**
- [ ] Ensure trailing slash handling (`/en/` vs `/en`)
- [ ] Test all URL patterns work correctly:
  - [ ] `/` loads Thai homepage
  - [ ] `/en/` loads English homepage
  - [ ] `/about` loads Thai about
  - [ ] `/en/about` loads English about
  - [ ] All other page routes work
- [ ] Handle edge cases and malformed URLs
- [ ] Verify proper HTTP status codes

---

## **Phase 4: Page Template Conversion**
**Estimated Time: 2 hours**

### **Task 4.1: Create Master Page Templates** ⏸️

**Files to create in `/src/templates/`:**

#### **HomePage.astro** ⏸️
- [ ] Create template file
- [ ] Add language prop
- [ ] Convert hero section to use translations
- [ ] Convert services section to use translations
- [ ] Convert CTA section to use translations
- [ ] Replace ContactButtons with new component
- [ ] Add proper meta tags with translations

#### **AboutPage.astro** ⏸️
- [ ] Read current `/src/pages/about.astro`
- [ ] Extract all text content to translations
- [ ] Create template with translation calls
- [ ] Replace hardcoded content sections
- [ ] Add proper meta tags

#### **ServicesPage.astro** ⏸️
- [ ] Read current `/src/pages/services.astro`
- [ ] Extract all text content to translations
- [ ] Create template with translation calls
- [ ] Replace services data with translated version
- [ ] Add proper meta tags

#### **ContactPage.astro** ⏸️
- [ ] Read current `/src/pages/contact.astro`
- [ ] Extract all text content to translations
- [ ] Create template with translation calls
- [ ] Update contact form labels
- [ ] Add proper meta tags

#### **FAQPage.astro** ⏸️
- [ ] Read current `/src/pages/faq.astro`
- [ ] Extract all FAQ content to translations
- [ ] Create template with translation calls
- [ ] Replace Q&A sections with translated version
- [ ] Add proper meta tags

### **Task 4.2: Update Dynamic Router to Use Templates** ⏸️

**Subtasks:**
- [ ] Import all page templates into `[...path].astro`
- [ ] Map URL patterns to appropriate templates:
  - [ ] `/`, `/en/` → HomePage
  - [ ] `/about`, `/en/about` → AboutPage
  - [ ] `/services`, `/en/services` → ServicesPage
  - [ ] `/contact`, `/en/contact` → ContactPage
  - [ ] `/faq`, `/en/faq` → FAQPage
- [ ] Pass correct language parameter to each template
- [ ] Ensure proper meta data and SEO tags
- [ ] Test routing for all combinations

### **Task 4.3: Extract Content Data** ⏸️

**Subtasks:**
- [ ] Move services array from individual pages to translation file
- [ ] Extract FAQ questions/answers to translations:
  - [ ] All Thai FAQ content
  - [ ] All English FAQ content
- [ ] Move page-specific hero content to translations
- [ ] Extract all call-to-action text
- [ ] Remove duplicate content definitions
- [ ] Ensure translation completeness for both languages

---

## **Phase 5: Remove Old System**
**Estimated Time: 30 minutes**

### **Task 5.1: Delete Duplicate Files** ⏸️

**Files to delete:**
- [ ] `/src/pages/en/` (entire folder)
  - [ ] `/src/pages/en/index.astro`
  - [ ] `/src/pages/en/about.astro`
  - [ ] `/src/pages/en/services.astro`
  - [ ] `/src/pages/en/contact.astro`
  - [ ] `/src/pages/en/faq.astro`
- [ ] `/src/pages/index.astro` (replaced by template)
- [ ] `/src/pages/about.astro` (replaced by template)
- [ ] `/src/pages/services.astro` (replaced by template)
- [ ] `/src/pages/contact.astro` (replaced by template)
- [ ] `/src/pages/faq.astro` (replaced by template)

### **Task 5.2: Update Imports and References** ⏸️

**Subtasks:**
- [ ] Scan for any remaining imports pointing to old files
- [ ] Remove hardcoded language-specific logic from components
- [ ] Clean up unused constants or utilities
- [ ] Update any internal links or references
- [ ] Remove old translation logic (like `lang === 'th' ? 'text' : 'text'`)

---

## **Phase 6: Testing & Validation**
**Estimated Time: 1 hour**

### **Task 6.1: Functional Testing** ⏸️

**Thai Pages:**
- [ ] Test `/` (homepage) loads correctly
- [ ] Test `/about` loads correctly
- [ ] Test `/services` loads correctly
- [ ] Test `/contact` loads correctly
- [ ] Test `/faq` loads correctly

**English Pages:**
- [ ] Test `/en/` (homepage) loads correctly
- [ ] Test `/en/about` loads correctly
- [ ] Test `/en/services` loads correctly
- [ ] Test `/en/contact` loads correctly
- [ ] Test `/en/faq` loads correctly

**Interactive Elements:**
- [ ] Contact buttons work (phone tracking, LINE links)
- [ ] Language switching functionality works
- [ ] Navigation menu works in both languages
- [ ] Mobile hamburger menu functions
- [ ] Mobile sticky bar works

**Responsive Testing:**
- [ ] Desktop layout works (1200px+)
- [ ] Tablet layout works (768-1199px)
- [ ] Mobile layout works (< 768px)

### **Task 6.2: Content Verification** ⏸️

**Subtasks:**
- [ ] Compare new site with original Thai version:
  - [ ] All homepage content matches
  - [ ] All about content matches
  - [ ] All services content matches
  - [ ] All contact content matches
  - [ ] All FAQ content matches
- [ ] Compare new site with original English version:
  - [ ] All `/en/*` content matches original
  - [ ] Translations are accurate
- [ ] Verify no content loss occurred during migration
- [ ] Check all service descriptions are complete
- [ ] Verify FAQ Q&As are complete
- [ ] Test contact information displays correctly

### **Task 6.3: SEO & Technical Validation** ⏸️

**Subtasks:**
- [ ] Verify proper hreflang tags in HTML head
- [ ] Test canonical URLs are correct for both languages
- [ ] Check page titles use translated text
- [ ] Check meta descriptions use translated text
- [ ] Validate Open Graph meta tags work for both languages
- [ ] Test Google Analytics tracking still works:
  - [ ] Phone click tracking functional
  - [ ] LINE click tracking functional
- [ ] Verify all URLs return proper HTTP status codes
- [ ] Test social sharing shows correct content

---

## **Phase 7: Documentation & Cleanup**
**Estimated Time: 30 minutes**

### **Task 7.1: Update Documentation** ⏸️

**Subtasks:**
- [ ] Update project README with new language system
- [ ] Document translation system usage:
  - [ ] How to add new translations
  - [ ] How to add new pages
  - [ ] Translation key naming conventions
- [ ] Add examples of common translation tasks
- [ ] Document new file structure

### **Task 7.2: Final Code Cleanup** ⏸️

**Subtasks:**
- [ ] Remove any unused imports from all files
- [ ] Remove console.log statements from development
- [ ] Ensure TypeScript compilation passes without errors
- [ ] Run final build test: `npm run build`
- [ ] Clean up any temporary files
- [ ] Verify dev server runs without errors

---

## **Risk Mitigation Checklist:**
- [ ] **Backup**: Create complete backup of current site before starting
- [ ] **Staging**: Test on local development server throughout process
- [ ] **Rollback Plan**: Keep old files in backup until validation complete
- [ ] **Progressive Validation**: Test each phase before moving to next
- [ ] **Content Verification**: Double-check no translations are lost

---

## **Success Criteria:**
✅ **Single Source of Truth**: All text centralized in `/src/i18n/translations.ts`
✅ **Zero Duplication**: No more `/en` folder or duplicate page files
✅ **Functional Parity**: All features work identically to before refactor
✅ **SEO Maintained**: Same URL structure (`/en/about`) and meta tags
✅ **Easy Maintenance**: Single template changes affect both languages automatically
✅ **TypeScript Safety**: Full type checking for translation keys
✅ **Performance**: No additional overhead from new system

---

## **Progress Tracking:**

### **Phase 1: Foundation** ✅ COMPLETED
- Task 1.1: ✅ Translation System
- Task 1.2: ✅ Translation Utilities
- Task 1.3: ✅ TypeScript Types

### **Phase 2: Components** ⏸️ Not Started
- Task 2.1: ⏸️ Header Refactor
- Task 2.2: ⏸️ Contact Buttons
- Task 2.3: ⏸️ Footer Update

### **Phase 3: Routing** ⏸️ Not Started
- Task 3.1: ⏸️ Dynamic Routes
- Task 3.2: ⏸️ Route Config

### **Phase 4: Templates** ⏸️ Not Started
- Task 4.1: ⏸️ Page Templates
- Task 4.2: ⏸️ Router Update
- Task 4.3: ⏸️ Content Extraction

### **Phase 5: Cleanup** ⏸️ Not Started
- Task 5.1: ⏸️ Delete Old Files
- Task 5.2: ⏸️ Update References

### **Phase 6: Testing** ⏸️ Not Started
- Task 6.1: ⏸️ Functional Testing
- Task 6.2: ⏸️ Content Verification
- Task 6.3: ⏸️ SEO Validation

### **Phase 7: Documentation** ⏸️ Not Started
- Task 7.1: ⏸️ Update Docs
- Task 7.2: ⏸️ Code Cleanup

---

## **Estimated Total Time: 7 hours**
- Phase 1: 1 hour (foundation setup)
- Phase 2: 1.5 hours (component refactoring)
- Phase 3: 1 hour (dynamic routing)
- Phase 4: 2 hours (template conversion)
- Phase 5: 0.5 hours (old system removal)
- Phase 6: 1 hour (comprehensive testing)
- Phase 7: 0.5 hours (documentation & cleanup)

**Final Result**: Zero maintenance duplication, maximum development efficiency! 🎯

*Created: 2026-03-05*
*Last Updated: 2026-03-05 - Phase 1 Complete*
*Status: Phase 1 Complete - Foundation established*
*Next Phase: Phase 2 - Core Components Refactor*
# CMS Spreadsheet Implementation Progress

## Project Overview
Implementing Google Sheets as CMS for dynamic content in MS Law Office website (Astro 5.18.0 + TypeScript + bilingual support).

**Goal**: Enable non-technical content updates for services, FAQs, and contact information through Google Sheets interface.

---

## Implementation Strategy

### File-Based Spreadsheet Organization
Based on existing translation file structure in `src/i18n/translations/`:

- ✅ **services.ts** → Services sheet (services array + page content + hero)
- ✅ **home.ts** → Home sheet (hero + sections + features + CTA)
- ✅ **faq.ts** → FAQ sheet (FAQ array + page content + hero)
- ✅ **contact.ts** → Contact sheet (special services + page content + office info)
- ⚠️ **about.ts** → About sheet (optional - stable attorney content)
- ❌ **common.ts** → Keep in code (navigation, buttons, contact info)
- ❌ **footer.ts** → Keep in code (footer links, legal info)

### Technical Approach
- **Package**: `astro-sheet-loader` (Official Astro 5+ support)
- **Data source**: Google Sheets (free tier sufficient)
- **Integration**: Astro Content Collections + existing shared assets system
- **Strategy**: File-based hybrid approach (one sheet per translation file)

---

## Phase 1: Research & Planning
**Status**: ✅ COMPLETED

### Task Breakdown:
- [x] **1.1** Research available spreadsheet CMS solutions for Astro
- [x] **1.2** Analyze current content structure and identify suitable data types
- [x] **1.3** Evaluate Google Sheets vs Airtable options
- [x] **1.4** Design spreadsheet schemas for each content type
- [x] **1.5** Plan integration strategy with existing asset system
- [x] **1.6** Create implementation roadmap and timeline

---

## Phase 2: Environment Setup
**Status**: ⏳ PENDING

### Task Breakdown:

#### 2.1 Package Installation
- [ ] **2.1.1** Install `astro-sheet-loader` package: `npm install astro-sheet-loader`
- [ ] **2.1.2** Verify package compatibility with Astro 5.18.0
- [ ] **2.1.3** Check for any peer dependency requirements
- [ ] **2.1.4** Update package.json and commit changes

#### 2.2 Google Sheets Preparation
- [ ] **2.2.1** Create Google account for law office (if needed)
- [ ] **2.2.2** Create master spreadsheet: "MS Law Office Content"
- [ ] **2.2.3** Create file-based sheets: "Services", "Home", "FAQ", "Contact"
- [ ] **2.2.4** Set sharing permissions to "Anyone with link can view"
- [ ] **2.2.5** Extract and document spreadsheet ID from URL
- [ ] **2.2.6** Create backup of current content data

#### 2.3 Content Collections Setup
- [ ] **2.3.1** Create `src/content/config.ts` file if not exists
- [ ] **2.3.2** Configure TypeScript types for content collections
- [ ] **2.3.3** Set up base configuration for sheet loaders
- [ ] **2.3.4** Test basic loader connection to ensure API works

---

## Phase 3: Services Sheet Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 3.1 Services Sheet Design (from services.ts)
- [ ] **3.1.1** Create "Services" sheet with columns:
  ```
  Content_Type | ID | Key | Title_TH | Title_EN | Description_TH | Description_EN | Icon_Key | Extra_Data
  ```
- [ ] **3.1.2** Define content types: service, page_title, page_description, hero_title, hero_subtitle
- [ ] **3.1.3** Add data validation for Service_Key (dropdown)
- [ ] **3.1.4** Add data validation for Icon_Key (must match shared assets)
- [ ] **3.1.5** Add conditional formatting for content types
- [ ] **3.1.6** Document column descriptions and content type usage

#### 3.2 Data Migration
- [ ] **3.2.1** Extract current services data from `src/i18n/translations/services.ts`
- [ ] **3.2.2** Transform data into spreadsheet format
- [ ] **3.2.3** Populate Google Sheet with current services data
- [ ] **3.2.4** Verify all icon keys map to existing shared assets
- [ ] **3.2.5** Test spreadsheet data integrity

#### 3.3 Loader Implementation
- [ ] **3.3.1** Configure services loader in `src/content/config.ts`:
  ```typescript
  import { defineCollection } from 'astro:content';
  import { sheetLoader } from 'astro-sheet-loader';

  const servicesSheet = defineCollection({
    loader: sheetLoader({
      spreadsheetId: 'SHEET_ID',
      range: 'Services!A:I',
    }),
  });
  ```
- [ ] **3.3.2** Create type definitions for mixed content schema
- [ ] **3.3.3** Implement data transformation layer to recreate services.ts structure
- [ ] **3.3.4** Create helper functions to filter by content_type
- [ ] **3.3.5** Test loader functionality with sample data

#### 3.4 Template Updates
- [ ] **3.4.1** Update `src/templates/ServicesPage.astro` to use content collections
- [ ] **3.4.2** Update `src/templates/HomePage.astro` services section
- [ ] **3.4.3** Ensure AssetResolver integration works correctly
- [ ] **3.4.4** Maintain bilingual support for both languages
- [ ] **3.4.5** Test template rendering with new data source

#### 3.5 Testing & Validation
- [ ] **3.5.1** Run development server: `npm run dev`
- [ ] **3.5.2** Test Thai services page: `http://localhost:4321/services`
- [ ] **3.5.3** Test English services page: `http://localhost:4321/en/services`
- [ ] **3.5.4** Test homepage services section (both languages)
- [ ] **3.5.5** Verify icons display correctly
- [ ] **3.5.6** Test build process: `npm run build`
- [ ] **3.5.7** Validate generated static files

---

## Phase 4: Home Sheet Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 4.1 Home Sheet Design (from home.ts)
- [ ] **4.1.1** Create "Home" sheet with columns:
  ```
  Section | Content_Type | Key | Title_TH | Title_EN | Description_TH | Description_EN | Icon_Key | Extra_Data
  ```
- [ ] **4.1.2** Define sections: hero, services, why_choose, testimonials, cta
- [ ] **4.1.3** Define content types: title, subtitle, description, feature
- [ ] **4.1.4** Add data validation for sections and content types
- [ ] **4.1.5** Set up text wrapping for long descriptions

#### 4.2 Data Migration
- [ ] **4.2.1** Extract current home data from `src/i18n/translations/home.ts`
- [ ] **4.2.2** Transform hero, services, why_choose, testimonials, cta sections
- [ ] **4.2.3** Map why_choose features to feature content type
- [ ] **4.2.4** Populate Google Sheet with current home data
- [ ] **4.2.5** Verify icon key mappings for why_choose features

#### 4.3 Loader Implementation
- [ ] **4.3.1** Add Home loader configuration to content collections
- [ ] **4.3.2** Create home content schema type definitions
- [ ] **4.3.3** Implement transformation layer to recreate home.ts structure
- [ ] **4.3.4** Create section and content type filtering functions
- [ ] **4.3.5** Test loader with home data

#### 4.4 Template Updates
- [ ] **4.4.1** Update `src/templates/HomePage.astro` to use content collections
- [ ] **4.4.2** Maintain existing section structure (hero, services, why_choose, etc.)
- [ ] **4.4.3** Preserve why_choose features functionality
- [ ] **4.4.4** Test bilingual home page rendering

#### 4.5 Testing & Validation
- [ ] **4.5.1** Test Thai home page functionality
- [ ] **4.5.2** Test English home page functionality
- [ ] **4.5.3** Verify why_choose features and icons
- [ ] **4.5.4** Test hero section and CTA sections
- [ ] **4.5.5** Validate build process with home data

---

## Phase 5: FAQ Sheet Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 5.1 FAQ Sheet Design (from faq.ts)
- [ ] **5.1.1** Create "FAQ" sheet with columns:
  ```
  Content_Type | ID | Key | Question_TH | Question_EN | Answer_TH | Answer_EN | Category_TH | Category_EN | Extra_Data
  ```
- [ ] **5.1.2** Define content types: faq, page_title, page_description, hero_title, hero_subtitle
- [ ] **5.1.3** Add data validation for categories
- [ ] **5.1.4** Set up text wrapping for long answers and questions
- [ ] **5.1.5** Add conditional formatting for content types

#### 5.2 Data Migration
- [ ] **5.2.1** Extract FAQ data from `src/i18n/translations/faq.ts`
- [ ] **5.2.2** Transform FAQ objects and page content into spreadsheet rows
- [ ] **5.2.3** Map FAQ categories to both languages
- [ ] **5.2.4** Populate FAQ sheet with current data
- [ ] **5.2.5** Verify character encoding for Thai text

#### 5.3 Loader Implementation
- [ ] **5.3.1** Add FAQ loader to content collections
- [ ] **5.3.2** Create FAQ content schema
- [ ] **5.3.3** Implement transformation layer to recreate faq.ts structure
- [ ] **5.3.4** Create FAQ filtering and categorization functions
- [ ] **5.3.5** Test loader functionality

#### 5.4 Template Updates
- [ ] **5.4.1** Update `src/templates/FAQPage.astro` to use content collections
- [ ] **5.4.2** Maintain FAQ categorization and filtering logic
- [ ] **5.4.3** Preserve accordion/expand functionality
- [ ] **5.4.4** Test bilingual FAQ rendering

#### 5.5 Testing & Validation
- [ ] **5.5.1** Test Thai FAQ page functionality
- [ ] **5.5.2** Test English FAQ page functionality
- [ ] **5.5.3** Verify FAQ categories and display
- [ ] **5.5.4** Test FAQ interaction and search
- [ ] **5.5.5** Validate build process with FAQ data

---

## Phase 6: Contact Sheet Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 6.1 Contact Sheet Design (from contact.ts)
- [ ] **6.1.1** Create "Contact" sheet with columns:
  ```
  Content_Type | Section | ID | Title_TH | Title_EN | Description_TH | Description_EN | Icon_Key | Icon_Color | Extra_Data
  ```
- [ ] **6.1.2** Define sections: page, hero, main_contact, office_info, special_services, google_maps, cta
- [ ] **6.1.3** Add FontAwesome icon validation for special services
- [ ] **6.1.4** Add color class validation (text-success, text-primary, etc.)
- [ ] **6.1.5** Set up data validation rules

#### 6.2 Data Migration
- [ ] **6.2.1** Extract contact data from `src/i18n/translations/contact.ts`
- [ ] **6.2.2** Map special services with FontAwesome icons
- [ ] **6.2.3** Transform office info and Google Maps content
- [ ] **6.2.4** Populate Contact sheet with current data
- [ ] **6.2.5** Verify icon and color mappings

#### 6.3 Loader Implementation
- [ ] **6.3.1** Add Contact loader to content collections
- [ ] **6.3.2** Create contact content schema
- [ ] **6.3.3** Implement transformation layer to recreate contact.ts structure
- [ ] **6.3.4** Create section filtering functions
- [ ] **6.3.5** Test loader functionality

#### 6.4 Template Updates
- [ ] **6.4.1** Update `src/templates/ContactPage.astro` to use content collections
- [ ] **6.4.2** Maintain special services section with FontAwesome icons
- [ ] **6.4.3** Preserve color styling classes and layout
- [ ] **6.4.4** Test contact page rendering

#### 6.5 Testing & Validation
- [ ] **6.5.1** Test Thai contact page functionality
- [ ] **6.5.2** Test English contact page functionality
- [ ] **6.5.3** Verify special services icons and colors
- [ ] **6.5.4** Test Google Maps integration
- [ ] **6.5.5** Validate responsive layout

---

## Phase 7: Integration & Optimization
**Status**: ⏳ PENDING

### Task Breakdown:

#### 7.1 Error Handling
- [ ] **7.1.1** Implement fallback mechanism for sheet API failures
- [ ] **7.1.2** Add local backup data for emergency builds
- [ ] **7.1.3** Create error logging for sheet loading issues
- [ ] **7.1.4** Add validation for required fields across all sheets
- [ ] **7.1.5** Handle empty or malformed sheet data

#### 7.2 Performance Optimization
- [ ] **7.2.1** Configure sheet data caching during build
- [ ] **7.2.2** Optimize API calls to reduce build time
- [ ] **7.2.3** Implement incremental builds if supported
- [ ] **7.2.4** Monitor build performance before/after

#### 7.3 Data Validation
- [ ] **7.3.1** Create schema validation for each sheet content type
- [ ] **7.3.2** Add required field validation across all sheets
- [ ] **7.3.3** Validate icon key references against shared assets
- [ ] **7.3.4** Check bilingual content completeness
- [ ] **7.3.5** Implement data sanitization for security

#### 7.4 Build Process Integration
- [ ] **7.4.1** Test full build with all sheet data (Services, Home, FAQ, Contact)
- [ ] **7.4.2** Verify Cloudflare Pages deployment compatibility
- [ ] **7.4.3** Test build performance and timing
- [ ] **7.4.4** Document any build process changes needed

---

## Phase 8: Documentation & Training
**Status**: ⏳ PENDING

### Task Breakdown:

#### 7.1 Technical Documentation
- [ ] **7.1.1** Document loader configuration and setup
- [ ] **7.1.2** Create troubleshooting guide for common issues
- [ ] **7.1.3** Document spreadsheet schema requirements
- [ ] **7.1.4** Update README with CMS integration details
- [ ] **7.1.5** Document fallback and recovery procedures

#### 7.2 Client Training Materials
- [ ] **7.2.1** Create Google Sheets tutorial for law office staff
- [ ] **7.2.2** Document content update procedures
- [ ] **7.2.3** Create video walkthrough for updating services
- [ ] **7.2.4** Document FAQ addition process
- [ ] **7.2.5** Create troubleshooting guide for non-technical users

#### 7.3 Content Management Guidelines
- [ ] **7.3.1** Define content approval workflow
- [ ] **7.3.2** Create style guide for content writing
- [ ] **7.3.3** Document required fields and formatting
- [ ] **7.3.4** Create backup and recovery procedures
- [ ] **7.3.5** Set up content change notification system

---

## Phase 9: Testing & Deployment
**Status**: ⏳ PENDING

### Task Breakdown:

#### 9.1 Comprehensive Testing
- [ ] **9.1.1** Test all pages with sheet data (Services, Home, FAQ, Contact - Thai/English)
- [ ] **9.1.2** Test build process multiple times
- [ ] **9.1.3** Test with modified sheet data
- [ ] **9.1.4** Test error scenarios (sheet unavailable)
- [ ] **9.1.5** Test performance on mobile devices
- [ ] **9.1.6** Cross-browser compatibility testing

#### 8.2 Production Deployment
- [ ] **8.2.1** Deploy to staging environment first
- [ ] **8.2.2** Verify staging functionality
- [ ] **8.2.3** Create production deployment checklist
- [ ] **8.2.4** Deploy to production (Cloudflare Pages)
- [ ] **8.2.5** Monitor deployment for issues

#### 8.3 Post-Deployment Validation
- [ ] **8.3.1** Test live site functionality
- [ ] **8.3.2** Verify all content loads correctly
- [ ] **8.3.3** Test sheet updates trigger rebuilds
- [ ] **8.3.4** Monitor site performance metrics
- [ ] **8.3.5** Test client ability to update content

#### 8.4 Maintenance Setup
- [ ] **8.4.1** Set up monitoring for sheet API availability
- [ ] **8.4.2** Create automated backup system
- [ ] **8.4.3** Document maintenance procedures
- [ ] **8.4.4** Set up error alerting system
- [ ] **8.4.5** Schedule regular content audits

---

## Risk Assessment & Mitigation

### High Priority Risks
1. **Sheet API Downtime**
   - Mitigation: Local backup data + fallback mechanism
   - Tasks: 6.1.1, 6.1.2

2. **Data Validation Errors**
   - Mitigation: Schema validation + required field checks
   - Tasks: 6.3.1, 6.3.2, 6.3.4

3. **Build Performance Issues**
   - Mitigation: Caching + monitoring + optimization
   - Tasks: 6.2.1, 6.2.2, 6.2.4

### Medium Priority Risks
1. **Client Training Difficulties**
   - Mitigation: Comprehensive training materials + video guides
   - Tasks: 7.2.1, 7.2.3, 7.3.1

2. **Content Migration Errors**
   - Mitigation: Careful extraction + validation + testing
   - Tasks: 3.2.1-3.2.5, 4.2.1-4.2.5, 5.2.1-5.2.4

---

## Success Criteria

### Technical Success
- [ ] All content loads correctly from Google Sheets
- [ ] Build times remain under 2 minutes
- [ ] No breaking changes to existing functionality
- [ ] Both Thai and English content render properly
- [ ] Icons and styling remain intact

### Business Success
- [ ] Client can update services independently
- [ ] FAQ additions work without developer intervention
- [ ] Content updates reflect on site within build time
- [ ] Training materials enable self-service updates
- [ ] Reduced developer maintenance overhead

---

## Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|-------------|
| Phase 1 | ✅ Complete | Research & planning |
| Phase 2 | 2-3 hours | Package install + sheets setup |
| Phase 3 | 4-5 hours | Services migration + testing |
| Phase 4 | 3-4 hours | FAQ migration + testing |
| Phase 5 | 3-4 hours | Contact services migration |
| Phase 6 | 3-4 hours | Integration + optimization |
| Phase 7 | 2-3 hours | Documentation + training |
| Phase 8 | 2-3 hours | Testing + deployment |

**Total Estimated Time**: 20-28 hours

---

## Notes & Decisions

### Technical Decisions
- **Chosen Solution**: Google Sheets (free, familiar interface)
- **Package**: `astro-sheet-loader` (official Astro support)
- **Approach**: Hybrid (sheets for dynamic, code for static)
- **Backward Compatibility**: Maintained through transformation layers

### Business Decisions
- **Content Priority**: Services → FAQs → Contact Services
- **Training Approach**: Video tutorials + written guides
- **Backup Strategy**: Local fallback + automated backups

---

## Progress Tracking

**Overall Progress**: 1/8 phases complete (12.5%)

- ✅ **Phase 1**: Research & Planning (Complete)
- ⏳ **Phase 2**: Environment Setup (Pending)
- ⏳ **Phase 3**: Services Data Migration (Pending)
- ⏳ **Phase 4**: FAQ Data Migration (Pending)
- ⏳ **Phase 5**: Contact Services Migration (Pending)
- ⏳ **Phase 6**: Integration & Optimization (Pending)
- ⏳ **Phase 7**: Documentation & Training (Pending)
- ⏳ **Phase 8**: Testing & Deployment (Pending)

---

## Quick Actions (Next Steps)

1. **Install Package**: `npm install astro-sheet-loader`
2. **Create Google Sheet**: MS Law Office Content spreadsheet
3. **Set Permissions**: Make sheet publicly viewable
4. **Extract Spreadsheet ID**: From Google Sheets URL
5. **Begin Phase 2 Tasks**: Environment setup

---

*Last Updated: [Current Date]*
*Document Version: 1.0*
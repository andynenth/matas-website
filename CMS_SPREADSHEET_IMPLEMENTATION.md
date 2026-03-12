# CMS Spreadsheet Implementation Progress

## Project Overview
Implementing Google Sheets as CMS for dynamic content in MS Law Office website (Astro 5.18.0 + TypeScript + bilingual support).

**Goal**: Enable non-technical content updates for services, FAQs, and contact information through Google Sheets interface.

---

## Implementation Strategy

### Content Analysis
- ✅ **Services data**: 7 services × 2 languages = 14 records (high update frequency)
- ✅ **FAQ entries**: 3 FAQs × 2 languages = 6 records (client requests additions)
- ✅ **Contact services**: 4 services × 2 languages = 8 records (pricing changes)
- ❌ **Static content**: Navigation, site info, buttons (keep in translation files)

### Technical Approach
- **Package**: `astro-sheet-loader` (Official Astro 5+ support)
- **Data source**: Google Sheets (free tier sufficient)
- **Integration**: Astro Content Collections + existing shared assets system
- **Strategy**: Hybrid approach (sheets for dynamic, code for static)

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
- [ ] **2.2.3** Set sharing permissions to "Anyone with link can view"
- [ ] **2.2.4** Extract and document spreadsheet ID from URL
- [ ] **2.2.5** Create backup of current content data

#### 2.3 Content Collections Setup
- [ ] **2.3.1** Create `src/content/config.ts` file if not exists
- [ ] **2.3.2** Configure TypeScript types for content collections
- [ ] **2.3.3** Set up base configuration for sheet loaders
- [ ] **2.3.4** Test basic loader connection to ensure API works

---

## Phase 3: Services Data Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 3.1 Services Spreadsheet Design
- [ ] **3.1.1** Create "Services" sheet with columns:
  ```
  ID | Service_Key | Title_TH | Title_EN | Description_TH | Description_EN | Icon_Key | Display_Order | Status
  ```
- [ ] **3.1.2** Add data validation for Service_Key (dropdown)
- [ ] **3.1.3** Add data validation for Icon_Key (must match shared assets)
- [ ] **3.1.4** Add conditional formatting for Status column
- [ ] **3.1.5** Document column descriptions in separate sheet

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

  const services = defineCollection({
    loader: sheetLoader({
      spreadsheetId: 'SHEET_ID',
      range: 'Services!A:I',
    }),
  });
  ```
- [ ] **3.3.2** Create type definitions for services schema
- [ ] **3.3.3** Implement data transformation layer for backward compatibility
- [ ] **3.3.4** Test loader functionality with sample data

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

## Phase 4: FAQ Data Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 4.1 FAQ Spreadsheet Design
- [ ] **4.1.1** Create "FAQs" sheet with columns:
  ```
  ID | Question_TH | Question_EN | Answer_TH | Answer_EN | Category_TH | Category_EN | Display_Order | Status
  ```
- [ ] **4.1.2** Add data validation for categories
- [ ] **4.1.3** Set up text wrapping for long answers
- [ ] **4.1.4** Add conditional formatting for status tracking

#### 4.2 Data Migration
- [ ] **4.2.1** Extract current FAQ data from `src/i18n/translations/faq.ts`
- [ ] **4.2.2** Transform FAQ objects into spreadsheet rows
- [ ] **4.2.3** Populate Google Sheet with current FAQ data
- [ ] **4.2.4** Verify character encoding for Thai text
- [ ] **4.2.5** Test data accuracy and completeness

#### 4.3 Loader Implementation
- [ ] **4.3.1** Add FAQs loader configuration to content collections
- [ ] **4.3.2** Create FAQ schema type definitions
- [ ] **4.3.3** Implement transformation layer for FAQ data
- [ ] **4.3.4** Test loader with FAQ data

#### 4.4 Template Updates
- [ ] **4.4.1** Update `src/templates/FAQPage.astro` to use content collections
- [ ] **4.4.2** Maintain existing FAQ categorization logic
- [ ] **4.4.3** Preserve accordion/expand functionality
- [ ] **4.4.4** Test bilingual FAQ rendering

#### 4.5 Testing & Validation
- [ ] **4.5.1** Test Thai FAQ page functionality
- [ ] **4.5.2** Test English FAQ page functionality
- [ ] **4.5.3** Verify FAQ categories and filtering
- [ ] **4.5.4** Test FAQ search/expand interactions
- [ ] **4.5.5** Validate build process with FAQ data

---

## Phase 5: Contact Services Migration
**Status**: ⏳ PENDING

### Task Breakdown:

#### 5.1 Contact Services Spreadsheet Design
- [ ] **5.1.1** Create "Contact_Services" sheet with columns:
  ```
  ID | Title_TH | Title_EN | Description_TH | Description_EN | Icon_FA | Icon_Color | Display_Order | Status
  ```
- [ ] **5.1.2** Add FontAwesome icon validation
- [ ] **5.1.3** Add color class validation (text-success, text-primary, etc.)
- [ ] **5.1.4** Set up data validation rules

#### 5.2 Data Migration
- [ ] **5.2.1** Extract contact services from `src/i18n/translations/contact.ts`
- [ ] **5.2.2** Map FontAwesome icons to spreadsheet format
- [ ] **5.2.3** Populate contact services sheet
- [ ] **5.2.4** Verify icon and color mappings

#### 5.3 Loader Implementation
- [ ] **5.3.1** Add contact services loader to content collections
- [ ] **5.3.2** Create contact services schema
- [ ] **5.3.3** Implement data transformation layer
- [ ] **5.3.4** Test loader functionality

#### 5.4 Template Updates
- [ ] **5.4.1** Update contact page special services section
- [ ] **5.4.2** Maintain FontAwesome icon rendering
- [ ] **5.4.3** Preserve color styling classes
- [ ] **5.4.4** Test contact page rendering

#### 5.5 Testing & Validation
- [ ] **5.5.1** Test contact page services section (Thai)
- [ ] **5.5.2** Test contact page services section (English)
- [ ] **5.5.3** Verify icon and color rendering
- [ ] **5.5.4** Validate responsive layout

---

## Phase 6: Integration & Optimization
**Status**: ⏳ PENDING

### Task Breakdown:

#### 6.1 Error Handling
- [ ] **6.1.1** Implement fallback mechanism for sheet API failures
- [ ] **6.1.2** Add local backup data for emergency builds
- [ ] **6.1.3** Create error logging for sheet loading issues
- [ ] **6.1.4** Add validation for required fields
- [ ] **6.1.5** Handle empty or malformed sheet data

#### 6.2 Performance Optimization
- [ ] **6.2.1** Configure sheet data caching during build
- [ ] **6.2.2** Optimize API calls to reduce build time
- [ ] **6.2.3** Implement incremental builds if supported
- [ ] **6.2.4** Monitor build performance before/after

#### 6.3 Data Validation
- [ ] **6.3.1** Create schema validation for each content type
- [ ] **6.3.2** Add required field validation
- [ ] **6.3.3** Validate icon key references against shared assets
- [ ] **6.3.4** Check bilingual content completeness
- [ ] **6.3.5** Implement data sanitization for security

#### 6.4 Build Process Integration
- [ ] **6.4.1** Test full build with all sheet data
- [ ] **6.4.2** Verify Cloudflare Pages deployment compatibility
- [ ] **6.4.3** Test build performance and timing
- [ ] **6.4.4** Document any build process changes needed

---

## Phase 7: Documentation & Training
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

## Phase 8: Testing & Deployment
**Status**: ⏳ PENDING

### Task Breakdown:

#### 8.1 Comprehensive Testing
- [ ] **8.1.1** Test all pages with sheet data (Thai/English)
- [ ] **8.1.2** Test build process multiple times
- [ ] **8.1.3** Test with modified sheet data
- [ ] **8.1.4** Test error scenarios (sheet unavailable)
- [ ] **8.1.5** Test performance on mobile devices
- [ ] **8.1.6** Cross-browser compatibility testing

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
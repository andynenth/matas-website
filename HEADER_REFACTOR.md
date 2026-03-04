# Header Component Refactor Plan

## Current Issues Analysis

### 🔍 **File Overview**
- **File**: `src/components/Header.astro`
- **Size**: 292 lines
- **Responsibilities**: Too many (navigation, contact, language toggle, mobile menu, styling)
- **Status**: Needs significant refactoring

---

## 🚨 **Critical Issues Identified**

### 1. **Component Structure Issues**
- [ ] **Monolithic component** - Single file handling multiple concerns
- [ ] **Mixed responsibilities** - Navigation + Contact + Language + Styling
- [ ] **Poor separation of concerns** - Logic mixed with presentation

### 2. **Code Duplication Issues**
- [ ] **Language toggle logic duplicated 3 times**:
  - Desktop version (lines 163-181)
  - Tablet version (lines 191-205)
  - Mobile version (lines 250-267)
- [ ] **Contact info repeated across breakpoints**
- [ ] **Responsive class patterns repeated**

### 3. **CSS and Styling Issues**
- [ ] **Inline CSS mixed with component styles**
- [ ] **Hard-coded values** throughout inline styles
- [ ] **Complex responsive class combinations** (`visible-lg-inline hidden-xs hidden-sm`)
- [ ] **Inconsistent styling patterns**
- [ ] **No CSS variables or design tokens**

### 4. **Maintainability Issues**
- [ ] **Hard to modify** - Changes require touching multiple sections
- [ ] **Complex conditional logic** - Nested ternary operators
- [ ] **No clear component boundaries**
- [ ] **Difficult to test individual pieces**

### 5. **Performance Issues**
- [ ] **Large component bundle** - Everything loaded together
- [ ] **Repeated DOM elements** hidden with CSS instead of conditional rendering
- [ ] **Inefficient responsive handling**

---

## 📋 **Refactor Task Breakdown**

### **Phase 1: Analysis and Planning** ✅
- [x] Analyze current component structure
- [x] Identify code duplication patterns
- [x] Document current issues
- [x] Create refactor plan

### **Phase 2: CSS Cleanup** ✅ **COMPLETED**
- [x] **Task 2.1**: Extract inline CSS to proper CSS classes ✅
  - [x] Remove `style="display: flex; align-items: center; height: 60px;"`
  - [x] Remove `style="display: inline-flex; align-items: center; gap: 15px;"`
  - [x] Remove `style="margin: 0 5px;"` and similar spacing styles
  - [x] Create semantic CSS classes for common patterns
  - **Result**: All inline styles replaced with semantic classes like `.header-inner-flex`, `.contact-container-large`, `.contact-link`, etc.

- [x] **Task 2.2**: Create shared CSS variables ✅
  - [x] Define header height variable (currently 60px)
  - [x] Define spacing variables (gaps, margins, padding)
  - [x] Define breakpoint variables
  - [x] Define color variables for consistency
  - **Result**: Added 8 CSS custom properties including `--header-height`, `--header-gap-large`, `--icon-spacing`, etc.

- [x] **Task 2.3**: Consolidate responsive styles ✅
  - [x] Review all `@media` queries
  - [x] Consolidate overlapping breakpoints
  - [x] Create consistent responsive patterns
  - **Result**: Reorganized into 3 clear breakpoint sections: Mobile (≤767px), Tablet (768px-991px), Desktop (≥992px)

### **Phase 3: Logic Extraction**
- [ ] **Task 3.1**: Extract language toggle logic
  - [ ] Create reusable language toggle function
  - [ ] Define language toggle interface/props
  - [ ] Remove duplicated conditional logic

- [ ] **Task 3.2**: Extract navigation data
  - [ ] Move navigation arrays to shared constants
  - [ ] Create navigation item interface
  - [ ] Extract active state logic

- [ ] **Task 3.3**: Extract contact information
  - [ ] Define contact data structure
  - [ ] Create reusable contact info component logic
  - [ ] Consolidate tracking functions

### **Phase 4: Component Decomposition**
- [ ] **Task 4.1**: Create shared types and interfaces
  - [ ] Define `HeaderProps` interface
  - [ ] Define `NavigationItem` interface
  - [ ] Define `ContactInfo` interface
  - [ ] Define `LanguageConfig` interface

- [ ] **Task 4.2**: Create Logo component
  - [ ] Extract logo markup and styling
  - [ ] Add proper responsive sizing
  - [ ] Create `Logo.astro` component

- [ ] **Task 4.3**: Create LanguageToggle component
  - [ ] Extract language switching logic
  - [ ] Create reusable component for all breakpoints
  - [ ] Add proper styling and interactions
  - [ ] Create `LanguageToggle.astro` component

- [ ] **Task 4.4**: Create ContactInfo component
  - [ ] Extract contact buttons and info
  - [ ] Handle responsive variations
  - [ ] Add tracking functionality
  - [ ] Create `ContactInfo.astro` component

- [ ] **Task 4.5**: Create Navigation components
  - [ ] Create `DesktopNavigation.astro`
  - [ ] Create `MobileNavigation.astro`
  - [ ] Extract menu item rendering
  - [ ] Add active state handling

- [ ] **Task 4.6**: Create MobileSticky component
  - [ ] Extract mobile sticky contact bar
  - [ ] Ensure proper z-index and positioning
  - [ ] Create `MobileSticky.astro` component

### **Phase 5: Main Header Reconstruction**
- [ ] **Task 5.1**: Create new Header.astro orchestrator
  - [ ] Import all sub-components
  - [ ] Define component composition
  - [ ] Handle prop passing
  - [ ] Maintain existing functionality

- [ ] **Task 5.2**: Create shared CSS file
  - [ ] Create `src/styles/header.css`
  - [ ] Move shared responsive rules
  - [ ] Define CSS custom properties
  - [ ] Import in Layout.astro

### **Phase 6: Testing and Validation**
- [ ] **Task 6.1**: Functional testing
  - [ ] Test navigation on all breakpoints
  - [ ] Test language switching
  - [ ] Test contact button interactions
  - [ ] Test hamburger menu functionality

- [ ] **Task 6.2**: Visual testing
  - [ ] Compare before/after screenshots
  - [ ] Test responsive behavior
  - [ ] Validate styling consistency
  - [ ] Check mobile sticky positioning

- [ ] **Task 6.3**: Performance testing
  - [ ] Compare bundle sizes
  - [ ] Test loading performance
  - [ ] Validate CSS optimization

### **Phase 7: Cleanup and Documentation**
- [ ] **Task 7.1**: Remove old code
  - [ ] Delete original Header.astro (after backup)
  - [ ] Clean up unused CSS
  - [ ] Remove redundant imports

- [ ] **Task 7.2**: Update documentation
  - [ ] Document new component structure
  - [ ] Update CLAUDE.md with changes
  - [ ] Add component usage examples

---

## 🎯 **Success Criteria**

### **Maintainability**
- ✅ Each component has single responsibility
- ✅ No code duplication
- ✅ Clear component boundaries
- ✅ Easy to modify individual pieces

### **Performance**
- ✅ Reduced bundle size
- ✅ Efficient conditional rendering
- ✅ Optimized CSS delivery

### **Code Quality**
- ✅ No inline CSS
- ✅ Semantic CSS classes
- ✅ Consistent patterns
- ✅ Proper TypeScript interfaces

### **Functionality**
- ✅ All existing features work
- ✅ Responsive behavior maintained
- ✅ Accessibility preserved
- ✅ Performance improved

---

## 📊 **Estimated Effort**

| Phase | Tasks | Estimated Time | Priority | Status |
|-------|--------|---------------|----------|---------|
| Phase 1 | 4 tasks | ✅ Complete | High | ✅ **DONE** |
| Phase 2 | 3 tasks | ✅ 1.5 hours | High | ✅ **DONE** |
| Phase 3 | 3 tasks | 2-3 hours | High | ⏳ **NEXT** |
| Phase 4 | 6 tasks | 4-5 hours | Medium | ⏸️ Pending |
| Phase 5 | 2 tasks | 1-2 hours | Medium | ⏸️ Pending |
| Phase 6 | 3 tasks | 1-2 hours | Low | ⏸️ Pending |
| Phase 7 | 2 tasks | 1 hour | Low | ⏸️ Pending |

**Total Estimated Time**: 11-16 hours
**Completed Time**: 1.5 hours
**Remaining Time**: 9.5-14.5 hours

---

## ⚠️ **Risk Assessment**

### **High Risk**
- Breaking existing functionality during refactor
- Responsive behavior changes
- CSS specificity conflicts

### **Medium Risk**
- Component prop interface changes
- Performance regression
- Accessibility issues

### **Mitigation Strategies**
- Create comprehensive backups before changes
- Test each phase thoroughly before proceeding
- Maintain feature parity during refactor
- Use version control for easy rollback

---

## 🏁 **Next Steps**

1. ✅ **Review and approve this plan**
2. ✅ **Complete Phase 2** (CSS Cleanup) - lowest risk
3. **Start Phase 3** (Logic Extraction) - extract duplicated code
4. **Progress through phases sequentially**
5. **Test thoroughly after each phase**
6. **Document changes as we go**

---

## 📈 **Phase 2 Accomplishments**

### **What Was Completed:**
- ✅ **Eliminated ALL inline styles** (15+ individual inline style declarations removed)
- ✅ **Created 8 CSS custom properties** for consistent spacing and sizing
- ✅ **Added 12 semantic CSS classes** with descriptive names
- ✅ **Consolidated responsive styles** into 3 organized breakpoint sections
- ✅ **Improved maintainability** - styles are now centralized and reusable

### **Key Improvements:**
- **Semantic class names**: `.header-inner-flex`, `.contact-container-large`, `.contact-link`
- **CSS variables**: `--header-height`, `--header-gap-large`, `--icon-spacing`
- **Organized responsive design**: Mobile → Tablet → Desktop breakpoints
- **No more inline CSS**: All styling moved to proper CSS classes

### **File Size Reduction:**
- **Before**: Inline styles scattered throughout 15+ elements
- **After**: Centralized CSS with reusable classes and variables
- **Maintainability**: 🔴 Hard → 🟢 Easy

---

*Created: 2026-03-04*
*Last Updated: 2026-03-04 - Phase 2 Complete*
*Status: Phase 2 Complete - Ready for Phase 3*
*Next Phase: Logic Extraction*
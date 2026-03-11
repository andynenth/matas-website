# Translations Reorganization Project

## Goal
Split the 1,199-line `src/i18n/translations.ts` file into smaller, organized files using Option 1: Split by Page approach.

## Target Structure
```
src/i18n/
├── translations/
│   ├── common.ts      # Site-wide, nav, buttons, contact info
│   ├── home.ts        # Homepage content
│   ├── about.ts       # About page content
│   ├── services.ts    # Services page content + services array
│   ├── contact.ts     # Contact page content
│   ├── faq.ts         # FAQ page content
│   └── footer.ts      # Footer content
├── index.ts           # Main export that combines everything
└── types.ts           # TypeScript types
```

## Current Analysis Required

### Phase 1: Analysis and Preparation
- [ ] **Task 1.1**: Read current `src/i18n/translations.ts` and document the exact structure
- [ ] **Task 1.2**: Identify what goes in each new file:
  - [ ] List all properties that belong in `common.ts`
  - [ ] List all properties that belong in `home.ts`
  - [ ] List all properties that belong in `about.ts`
  - [ ] List all properties that belong in `services.ts`
  - [ ] List all properties that belong in `contact.ts`
  - [ ] List all properties that belong in `faq.ts`
  - [ ] List all properties that belong in `footer.ts`
- [ ] **Task 1.3**: Check if any templates import from `src/i18n/translations` directly
- [ ] **Task 1.4**: Verify current TypeScript types and exports used

### Phase 2: Create Directory Structure
- [ ] **Task 2.1**: Create `src/i18n/translations/` directory
- [ ] **Task 2.2**: Create empty files:
  - [ ] `src/i18n/translations/common.ts`
  - [ ] `src/i18n/translations/home.ts`
  - [ ] `src/i18n/translations/about.ts`
  - [ ] `src/i18n/translations/services.ts`
  - [ ] `src/i18n/translations/contact.ts`
  - [ ] `src/i18n/translations/faq.ts`
  - [ ] `src/i18n/translations/footer.ts`
- [ ] **Task 2.3**: Create empty `src/i18n/types.ts`

### Phase 3: Extract Content to New Files
- [ ] **Task 3.1**: Extract common content to `common.ts`:
  - [ ] Extract `site` object for both languages
  - [ ] Extract `nav` object for both languages
  - [ ] Extract `language` object for both languages
  - [ ] Extract `buttons` object for both languages
  - [ ] Extract `contact` object for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.2**: Extract home content to `home.ts`:
  - [ ] Extract `pages.home` for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.3**: Extract about content to `about.ts`:
  - [ ] Extract `pages.about` for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.4**: Extract services content to `services.ts`:
  - [ ] Extract `services` array for both languages
  - [ ] Extract `pages.services` for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.5**: Extract contact content to `contact.ts`:
  - [ ] Extract `pages.contact` for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.6**: Extract FAQ content to `faq.ts`:
  - [ ] Extract `pages.faq` for both languages
  - [ ] Add proper TypeScript types and exports
- [ ] **Task 3.7**: Extract footer content to `footer.ts`:
  - [ ] Extract `footer` object for both languages
  - [ ] Add proper TypeScript types and exports

### Phase 4: Create Index File
- [ ] **Task 4.1**: Create new `src/i18n/index.ts` that:
  - [ ] Imports all translation files from `./translations/`
  - [ ] Combines them into the exact same structure as current `translations` object
  - [ ] Exports the combined `translations` object
  - [ ] Maintains all current TypeScript types

### Phase 5: Create Types File
- [ ] **Task 5.1**: Move TypeScript types to `types.ts`:
  - [ ] Extract `Language` type
  - [ ] Extract `TranslationData` type
  - [ ] Extract `TranslationLang` type
  - [ ] Ensure all types are properly exported

### Phase 6: Testing and Verification
- [ ] **Task 6.1**: Test build process:
  - [ ] Run `npm run build`
  - [ ] Verify no TypeScript errors
  - [ ] Verify no build warnings
- [ ] **Task 6.2**: Test development server:
  - [ ] Run `npm run dev`
  - [ ] Verify all pages load without errors
  - [ ] Check browser console for any errors
- [ ] **Task 6.3**: Verify content integrity:
  - [ ] Check Thai homepage displays correctly
  - [ ] Check English homepage displays correctly
  - [ ] Check Thai contact page displays correctly
  - [ ] Check English contact page displays correctly
  - [ ] Verify mobile buttons use correct text (`mobileButtonText`, `lineButtonText`)
  - [ ] Test language switching functionality

### Phase 7: Cleanup
- [ ] **Task 7.1**: Remove old `src/i18n/translations.ts` file
- [ ] **Task 7.2**: Update any import statements if needed
- [ ] **Task 7.3**: Final build and test
- [ ] **Task 7.4**: Document the new structure in CLAUDE.md

## Success Criteria
1. ✅ All pages work exactly as before
2. ✅ No TypeScript errors
3. ✅ No build warnings
4. ✅ Templates can access translations using same syntax: `translations.th.pages.contact.hero.mobileButtonText`
5. ✅ File sizes are manageable (50-200 lines each instead of 1,199)
6. ✅ Easy to find and edit specific content

## Risk Mitigation
- Keep original `translations.ts` as backup until everything is verified working
- Test each phase thoroughly before proceeding to next phase
- Make changes incrementally and test after each major step

## Notes
- No template files need to change - they continue using same translation access patterns
- All existing functionality must be preserved
- TypeScript type safety must be maintained
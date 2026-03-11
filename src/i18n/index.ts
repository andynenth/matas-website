// ===============================
// COMPREHENSIVE TRANSLATION SYSTEM v2.0
// Reorganized structure importing from modular files
// ===============================

import { commonTranslations } from './translations/common.js';
import { homeTranslations } from './translations/home.js';
import { footerTranslations } from './translations/footer.js';
import { aboutTranslations } from './translations/about.js';
import { servicesTranslations } from './translations/services.js';
import { contactTranslations } from './translations/contact.js';
import { faqTranslations } from './translations/faq.js';

// Import types
export type Language = 'th' | 'en';

// All translation files are now imported - no placeholders needed

// Combine all translations into the exact same structure as before
export const translations = {
  th: {
    // Site-wide elements from common
    ...commonTranslations.th,

    // Services data from services
    ...servicesTranslations.th,

    // Page content
    pages: {
      // Home page from home
      ...homeTranslations.th.pages,

      // About page from about
      ...aboutTranslations.th.pages,

      // Services page from services
      ...servicesTranslations.th.pages,

      // Contact page from contact
      ...contactTranslations.th.pages,

      // FAQ page from faq
      ...faqTranslations.th.pages
    },

    // Footer content from footer
    ...footerTranslations.th
  },

  en: {
    // Site-wide elements from common
    ...commonTranslations.en,

    // Services data from services
    ...servicesTranslations.en,

    // Page content
    pages: {
      // Home page from home
      ...homeTranslations.en.pages,

      // About page from about
      ...aboutTranslations.en.pages,

      // Services page from services
      ...servicesTranslations.en.pages,

      // Contact page from contact
      ...contactTranslations.en.pages,

      // FAQ page from faq
      ...faqTranslations.en.pages
    },

    // Footer content from footer
    ...footerTranslations.en
  }
} as const;

// Type for the translation structure
export type TranslationData = typeof translations;
export type TranslationLang = TranslationData[Language];
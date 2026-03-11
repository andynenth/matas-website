// ===============================
// TRANSLATION UTILITY FUNCTIONS
// Helper functions for managing translations and language detection
// ===============================

import { translations, type Language, type TranslationLang } from './index.js';

/**
 * Get translation by dot notation key
 * @param key - Translation key using dot notation (e.g., 'pages.home.hero.title')
 * @param lang - Language code ('th' | 'en')
 * @returns Translated string
 */
export function t(key: string, lang: Language): string {
  try {
    const value = getNestedValue(translations[lang], key);

    if (value === undefined || value === null) {
      console.warn(`Translation missing for key: ${key} in language: ${lang}`);
      return `[${key}]`; // Return key in brackets if translation missing
    }

    return String(value);
  } catch (error) {
    console.error(`Error getting translation for ${key}:`, error);
    return `[${key}]`;
  }
}

/**
 * Get nested object value by dot notation
 * @param obj - Object to search
 * @param key - Dot notation key (e.g., 'pages.home.title')
 * @returns Value or undefined if not found
 */
function getNestedValue(obj: any, key: string): any {
  return key.split('.').reduce((current, prop) => {
    return current && current[prop] !== undefined ? current[prop] : undefined;
  }, obj);
}

/**
 * Get current language from URL pathname
 * @param pathname - URL pathname (e.g., '/en/about' or '/about')
 * @returns Language code ('th' | 'en')
 */
export function getCurrentLang(pathname: string): Language {
  // Remove leading slash and split by slash
  const segments = pathname.replace(/^\/+/, '').split('/');

  // If first segment is 'en', it's English
  if (segments[0] === 'en') {
    return 'en';
  }

  // Otherwise, it's Thai (default)
  return 'th';
}

/**
 * Detect language from URL path (alternative function name for clarity)
 * @param pathname - URL pathname
 * @returns Language code ('th' | 'en')
 */
export function detectLanguageFromPath(pathname: string): Language {
  return getCurrentLang(pathname);
}

/**
 * Generate localized URL for given path and language
 * @param path - Base path (e.g., '/about', '/services')
 * @param lang - Target language ('th' | 'en')
 * @returns Localized URL path
 */
export function getLocalizedUrl(path: string, lang: Language): string {
  // Remove leading slash for consistency
  const cleanPath = path.replace(/^\/+/, '');

  if (lang === 'en') {
    // English URLs start with /en/
    return cleanPath === '' ? '/en/' : `/en/${cleanPath}`;
  } else {
    // Thai URLs don't have language prefix
    return cleanPath === '' ? '/' : `/${cleanPath}`;
  }
}

/**
 * Get page path without language prefix
 * @param pathname - Full URL pathname (e.g., '/en/about' or '/about')
 * @returns Clean path without language prefix (e.g., 'about' or '')
 */
export function getCleanPath(pathname: string): string {
  const segments = pathname.replace(/^\/+/, '').split('/');

  // If first segment is 'en', remove it
  if (segments[0] === 'en') {
    segments.shift();
  }

  // Join remaining segments
  const cleanPath = segments.join('/');

  // Return clean path (empty string for home page)
  return cleanPath;
}

/**
 * Get page type from pathname
 * @param pathname - URL pathname
 * @returns Page type ('home', 'about', 'services', 'contact', 'faq')
 */
export function getPageType(pathname: string): string {
  const cleanPath = getCleanPath(pathname);

  // Map paths to page types
  const pathMap: { [key: string]: string } = {
    '': 'home',
    'about': 'about',
    'services': 'services',
    'contact': 'contact',
    'faq': 'faq'
  };

  return pathMap[cleanPath] || 'home';
}

/**
 * Get opposite language URL for language switching
 * @param currentPathname - Current URL pathname
 * @returns URL for opposite language
 */
export function getOppositeLanguageUrl(currentPathname: string): string {
  const currentLang = getCurrentLang(currentPathname);
  const cleanPath = getCleanPath(currentPathname);
  const oppositeLang: Language = currentLang === 'th' ? 'en' : 'th';

  return getLocalizedUrl(cleanPath, oppositeLang);
}

/**
 * Get services array for specified language
 * @param lang - Language code
 * @returns Services array with localized content
 */
export function getServices(lang: Language) {
  return translations[lang].services;
}

/**
 * Get navigation items for specified language
 * @param lang - Language code
 * @returns Navigation items with localized text and URLs
 */
export function getNavigation(lang: Language) {
  const nav = translations[lang].nav;

  return [
    { name: nav.home, href: getLocalizedUrl('', lang) },
    { name: nav.about, href: getLocalizedUrl('about', lang) },
    { name: nav.services, href: getLocalizedUrl('services', lang) },
    { name: nav.faq, href: getLocalizedUrl('faq', lang) },
    { name: nav.contact, href: getLocalizedUrl('contact', lang) }
  ];
}

/**
 * Get language toggle data for language switcher
 * @param currentLang - Current language
 * @param currentPath - Current path
 * @returns Language toggle configuration
 */
export function getLanguageToggleData(currentLang: Language, currentPath: string) {
  const oppositeLang: Language = currentLang === 'th' ? 'en' : 'th';
  const oppositeUrl = getOppositeLanguageUrl(currentPath);

  return {
    current: {
      code: translations[currentLang].language.current,
      name: translations[currentLang].language[currentLang],
      flag: currentLang === 'th' ? '🇹🇭' : '🇺🇸',
      isActive: true as const
    },
    other: {
      code: translations[currentLang].language.other,
      name: translations[currentLang].language[oppositeLang],
      flag: oppositeLang === 'th' ? '🇹🇭' : '🇺🇸',
      url: oppositeUrl,
      isActive: false as const
    }
  };
}

/**
 * Get contact configuration for specified language
 * @param lang - Language code
 * @returns Contact information with localized text
 */
export function getContactConfig(lang: Language) {
  const contact = translations[lang].contact;

  return {
    phone: {
      number: contact.phone.number,
      display: contact.phone.display,
      text: contact.phone.text,
      trackingFunction: 'trackPhoneClick()'
    },
    line: {
      url: contact.line.url,
      text: contact.line.text,
      id: contact.line.id,
      trackingFunction: 'trackLineClick()',
      logo: '/assets/images/line-logo-48.png'
    },
    email: {
      address: contact.email.address,
      text: contact.email.text
    }
  };
}

/**
 * Create active state checker function
 * @param lang - Current language
 * @param currentPath - Current path
 * @returns Function to check if a path is active
 */
export function createIsActiveFunction(lang: Language, currentPath: string) {
  return (href: string): boolean => {
    const currentCleanPath = getCleanPath(currentPath);
    const hrefCleanPath = getCleanPath(href);

    // Home page special case
    if (currentCleanPath === '' && hrefCleanPath === '') {
      return true;
    }

    // Other pages
    return currentCleanPath === hrefCleanPath;
  };
}

/**
 * Get page metadata (title, description) for SEO
 * @param pageType - Page type ('home', 'about', etc.)
 * @param lang - Language code
 * @returns Object with title and description
 */
export function getPageMetadata(pageType: string, lang: Language) {
  const pageKey = `pages.${pageType}`;

  return {
    title: t(`${pageKey}.title`, lang),
    description: t(`${pageKey}.description`, lang)
  };
}

// Export commonly used functions as default
export default {
  t,
  getCurrentLang,
  getLocalizedUrl,
  getServices,
  getNavigation,
  getLanguageToggleData,
  getContactConfig
};
// ===============================
// INTERNATIONALIZATION TYPES
// TypeScript type definitions for the translation system
// ===============================

import type { translations } from '../i18n/translations.js';

// Basic language types
export type Language = 'th' | 'en';

// Translation data types
export type TranslationData = typeof translations;
export type TranslationLang = TranslationData[Language];

// Service item type
export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

// Contact configuration types
export interface ContactPhone {
  number: string;
  display: string;
  text: string;
  trackingFunction: string;
}

export interface ContactLine {
  url: string;
  text: string;
  trackingFunction: string;
  logo: string;
}

export interface ContactConfig {
  phone: ContactPhone;
  line: ContactLine;
}

// Navigation item types
export interface NavigationItem {
  name: string;
  href: string;
}

export type NavigationItems = NavigationItem[];

// Language toggle types
export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
  isActive: boolean;
  url?: string; // Only present for non-active language
}

export interface LanguageToggleData {
  current: LanguageOption & { isActive: true };
  other: LanguageOption & { isActive: false; url: string };
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
}

// Valid page types
export type PageType = 'home' | 'about' | 'services' | 'contact' | 'faq';

// Component prop types
export interface BaseComponentProps {
  lang: Language;
}

export interface PageComponentProps extends BaseComponentProps {
  currentPath?: string;
}

export interface HeaderProps extends PageComponentProps {}

export interface FooterProps extends BaseComponentProps {}

export interface ContactButtonsProps extends BaseComponentProps {
  size?: 'large' | 'medium' | 'small';
  showPhone?: boolean;
  showLine?: boolean;
}

// Legacy props for existing components (for backward compatibility during migration)
export interface LegacyHeaderProps {
  lang?: Language;
  currentPath?: string;
}

export interface LegacyContactInfoProps {
  contact: ContactConfig;
  size?: 'large' | 'medium';
  showPhone?: boolean;
  showLine?: boolean;
}

export interface LegacyMobileStickyProps {
  contact: ContactConfig;
  lang: Language;
}

export interface LegacyMobileNavigationProps {
  navigation: NavigationItems;
  currentPath: string;
  isActive: (href: string) => boolean;
  contact: ContactConfig;
  lang: Language;
  languageToggle: LanguageToggleData;
}

export interface LegacyLanguageToggleProps {
  languageToggle: LanguageToggleData;
  size?: 'large' | 'medium' | 'small';
}

// Template props for page templates
export interface HomePageProps extends PageComponentProps {}
export interface AboutPageProps extends PageComponentProps {}
export interface ServicesPageProps extends PageComponentProps {}
export interface ContactPageProps extends PageComponentProps {}
export interface FAQPageProps extends PageComponentProps {}

// Translation key types (for type safety when using t() function)
// These are derived from the actual translation structure

// Top-level translation keys
export type SiteKeys = 'name' | 'tagline' | 'description';
export type NavKeys = 'home' | 'about' | 'services' | 'faq' | 'contact';
export type LanguageKeys = 'th' | 'en' | 'current' | 'other';
export type ButtonKeys = 'phone' | 'lineChat' | 'learnMore' | 'viewAllServices' | 'learnAboutLawyer';

// Page-specific translation keys
export type HomePageKeys = 'title' | 'description';
export type HeroKeys = 'subtitle' | 'title' | 'description';
export type ServicesKeys = 'title' | 'subtitle' | 'description' | 'note';

// Helper types for dot notation keys
export type DotNotationKey =
  | `site.${SiteKeys}`
  | `nav.${NavKeys}`
  | `language.${LanguageKeys}`
  | `buttons.${ButtonKeys}`
  | 'contact.phone.number' | 'contact.phone.display' | 'contact.phone.text'
  | 'contact.line.text' | 'contact.line.url'
  | `pages.home.${HomePageKeys}`
  | `pages.home.hero.${HeroKeys}`
  | `pages.home.services.${ServicesKeys}`
  | `pages.home.whyChoose.${string}`
  | `pages.home.testimonials.${string}`
  | `pages.home.cta.${string}`
  | `pages.about.${string}`
  | `pages.services.${string}`
  | `pages.contact.${string}`
  | `pages.faq.${string}`;

// Utility types for validation
export interface TranslationValidation {
  hasAllLanguages: keyof TranslationData extends Language ? true : false;
  hasValidStructure: TranslationLang extends Record<string, any> ? true : false;
}

// Route mapping types
export interface RouteMapping {
  path: string;
  template: PageType;
  lang: Language;
}

// URL generation types
export type UrlGenerator = (path: string, lang: Language) => string;
export type PathCleaner = (pathname: string) => string;
export type LanguageDetector = (pathname: string) => Language;

// Function signature types for utilities
export type TranslationFunction = (key: string, lang: Language) => string;
export type NavigationGenerator = (lang: Language) => NavigationItems;
export type ServiceGetter = (lang: Language) => ServiceItem[];
export type ContactGetter = (lang: Language) => ContactConfig;
export type LanguageToggleGenerator = (currentLang: Language, currentPath: string) => LanguageToggleData;
export type MetadataGetter = (pageType: PageType, lang: Language) => PageMetadata;

// State management types (for future use if needed)
export interface LanguageState {
  current: Language;
  available: Language[];
  isLoading: boolean;
}

// Error types for translation system
export interface TranslationError {
  key: string;
  lang: Language;
  message: string;
  fallback?: string;
}

// Configuration types
export interface I18nConfig {
  defaultLanguage: Language;
  fallbackLanguage: Language;
  supportedLanguages: Language[];
  debug?: boolean;
}

// Export default config
export const defaultI18nConfig: I18nConfig = {
  defaultLanguage: 'th',
  fallbackLanguage: 'th',
  supportedLanguages: ['th', 'en'],
  debug: false
} as const;
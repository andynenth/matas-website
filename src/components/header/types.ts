// ===============================
// HEADER COMPONENT TYPES
// ===============================

export type Language = 'th' | 'en';

export interface HeaderProps {
  lang?: Language;
  currentPath?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ContactInfo {
  phone: {
    number: string;
    display: string;
    trackingFunction: string;
  };
  line: {
    url: string;
    trackingFunction: string;
    logo: string;
  };
}

export interface LanguageConfig {
  flag: string;
  code: string;
  name: string;
}

export interface LanguageToggleData {
  current: LanguageConfig & { isActive: true };
  other: LanguageConfig & { isActive: false; url: string };
}

export interface SiteConfig {
  th: {
    name: string;
    tagline: string;
  };
  en: {
    name: string;
    tagline: string;
  };
}

export interface NavigationConfig {
  th: NavigationItem[];
  en: NavigationItem[];
}

// Component-specific interfaces
export interface LogoProps {
  lang: Language;
  siteName: string;
}

export interface LanguageToggleProps {
  languageToggle: LanguageToggleData;
  size?: 'large' | 'medium' | 'small';
}

export interface ContactInfoProps {
  contact: ContactInfo;
  size?: 'large' | 'medium';
  showPhone?: boolean;
  showLine?: boolean;
}

export interface NavigationProps {
  navigation: NavigationItem[];
  currentPath: string;
  isActive: (path: string) => boolean;
}

export interface MobileStickyProps {
  contact: ContactInfo;
  lang: Language;
}
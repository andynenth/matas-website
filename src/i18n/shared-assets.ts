// ===============================
// SHARED ASSETS SYSTEM v1.0
// Centralized visual assets shared across all languages
// Eliminates duplication between TH/EN translation files
// ===============================

export interface BackgroundSettings {
  blur?: string;
  overlayColor?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundAttachment?: string;
}

export interface HeroBackground {
  image: string;
  settings: BackgroundSettings;
}

export interface SharedAssets {
  backgrounds: {
    [key: string]: HeroBackground;
  };
  icons: {
    [category: string]: string[] | { [key: string]: string };
  };
}

// Centralized asset definitions
export const sharedAssets: SharedAssets = {
  // Hero background images and their settings
  backgrounds: {
    home: {
      image: '/assets/images/lawyer-hero-bg.png',
      settings: {
        blur: '3px',
        overlayColor: 'rgba(255,255,255,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    },
    about: {
      image: '/assets/images/about-hero-bg.jpg',
      settings: {
        blur: '3px',
        overlayColor: 'rgba(255,255,255,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    },
    services: {
      image: '/assets/images/services-hero.png',
      settings: {
        blur: '3px',
        overlayColor: 'rgba(255,255,255,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    },
    contact: {
      image: '/assets/images/contact-hero-bg.png',
      settings: {
        blur: '3px',
        overlayColor: 'rgba(255,255,255,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    },
    faq: {
      image: '/assets/images/faq-hero-bg.png',
      settings: {
        blur: '3px',
        overlayColor: 'rgba(255,255,255,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    }
  },

  // Icon assets organized by category
  icons: {
    // About page expertise area icons
    expertiseAreas: [
      '/assets/images/icons/commercial-law.png',    // 0: Commercial/Civil Law
      '/assets/images/icons/family-law.png',        // 1: Family Law
      '/assets/images/icons/stamp-image.png'        // 2: Document Certification
    ],

    // Home page why choose us feature icons
    whyChooseFeatures: [
      '/assets/images/icons/education.png',         // 0: Education
      '/assets/images/icons/license.png',           // 1: License
      '/assets/images/icons/friendly-service.png'   // 2: Friendly Service
    ],

    // Service icons (by service key)
    services: {
      courtLitigation: '/assets/images/icons/court-litigation.png',
      legalConsultation: '/assets/images/icons/legal-consultation.png',
      willPreparation: '/assets/images/icons/will-preparation.png',
      estateAdministration: '/assets/images/icons/estate-administration.png',
      companyRegistration: '/assets/images/icons/company-registration.png',
      documentTranslation: '/assets/images/icons/document-translation.png',
      documentCertification: '/assets/images/icons/document-certification.png',
      familyLaw: '/assets/images/icons/family-law.png',
      commercialLaw: '/assets/images/icons/commercial-law.png'
    },

    // Profile and certification icons
    profile: {
      attorney: '/assets/images/profile-image.png',
      license: '/assets/images/icons/license.png',
      documentCertification: '/assets/images/icons/document-certification.png'
    }
  }
};

// Asset key type definitions for type safety
export type BackgroundKey = keyof typeof sharedAssets.backgrounds;
export type ExpertiseAreaIndex = 0 | 1 | 2;
export type WhyChooseFeatureIndex = 0 | 1 | 2;
export type ServiceIconKey = keyof typeof sharedAssets.icons.services;
export type ProfileIconKey = keyof typeof sharedAssets.icons.profile;
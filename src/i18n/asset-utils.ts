// ===============================
// ASSET UTILITIES v1.0
// Helper functions for resolving asset keys to actual paths
// Provides type-safe asset resolution and merging
// ===============================

import {
  sharedAssets,
  type BackgroundKey,
  type ExpertiseAreaIndex,
  type WhyChooseFeatureIndex,
  type ServiceIconKey,
  type ProfileIconKey,
  type HeroBackground
} from './shared-assets.js';

// Asset resolution utilities
export class AssetResolver {
  /**
   * Get background image and settings by key
   * Returns object with property names that match HeroSection component expectations
   */
  static getBackground(key: BackgroundKey) {
    const bg = sharedAssets.backgrounds[key];
    return {
      backgroundImage: bg.image,
      backgroundSettings: bg.settings
    };
  }

  /**
   * Get expertise area icon by index
   */
  static getExpertiseIcon(index: ExpertiseAreaIndex): string {
    return (sharedAssets.icons.expertiseAreas as string[])[index];
  }

  /**
   * Get why choose feature icon by index
   */
  static getWhyChooseIcon(index: WhyChooseFeatureIndex): string {
    return (sharedAssets.icons.whyChooseFeatures as string[])[index];
  }

  /**
   * Get service icon by service key
   */
  static getServiceIcon(serviceKey: ServiceIconKey): string {
    return (sharedAssets.icons.services as Record<string, string>)[serviceKey];
  }

  /**
   * Get profile icon by key
   */
  static getProfileIcon(key: ProfileIconKey): string {
    return (sharedAssets.icons.profile as Record<string, string>)[key];
  }
}

// Content merging utilities
export interface TranslatedContent {
  title: string;
  description: string;
  [key: string]: any;
}

export interface AssetReference {
  assetType: 'background' | 'expertiseIcon' | 'whyChooseIcon' | 'serviceIcon' | 'profileIcon';
  assetKey: string | number;
}

/**
 * Merge translated content with shared assets
 */
export function mergeContentWithAssets<T extends TranslatedContent>(
  content: T,
  assetRef?: AssetReference
): T & { icon?: string; backgroundImage?: string; backgroundSettings?: any } {
  if (!assetRef) {
    return content;
  }

  const result = { ...content };

  switch (assetRef.assetType) {
    case 'background':
      const bg = AssetResolver.getBackground(assetRef.assetKey as BackgroundKey);
      return {
        ...result,
        backgroundImage: bg.image,
        backgroundSettings: bg.settings
      };

    case 'expertiseIcon':
      return {
        ...result,
        icon: AssetResolver.getExpertiseIcon(assetRef.assetKey as ExpertiseAreaIndex)
      };

    case 'whyChooseIcon':
      return {
        ...result,
        icon: AssetResolver.getWhyChooseIcon(assetRef.assetKey as WhyChooseFeatureIndex)
      };

    case 'serviceIcon':
      return {
        ...result,
        icon: AssetResolver.getServiceIcon(assetRef.assetKey as ServiceIconKey)
      };

    case 'profileIcon':
      return {
        ...result,
        icon: AssetResolver.getProfileIcon(assetRef.assetKey as ProfileIconKey)
      };

    default:
      return result;
  }
}

/**
 * Merge arrays of content with corresponding asset references
 */
export function mergeContentArrayWithAssets<T extends TranslatedContent>(
  contentArray: T[],
  assetRefs: AssetReference[]
): (T & { icon?: string })[] {
  return contentArray.map((content, index) => {
    const assetRef = assetRefs[index];
    return mergeContentWithAssets(content, assetRef);
  });
}

/**
 * Helper to create asset references for common patterns
 */
export const AssetRefs = {
  // Expertise area asset references
  expertiseAreas: (): AssetReference[] => [
    { assetType: 'expertiseIcon', assetKey: 0 },  // Commercial Law
    { assetType: 'expertiseIcon', assetKey: 1 },  // Family Law
    { assetType: 'expertiseIcon', assetKey: 2 }   // Document Certification
  ],

  // Why choose feature asset references
  whyChooseFeatures: (): AssetReference[] => [
    { assetType: 'whyChooseIcon', assetKey: 0 },  // Education
    { assetType: 'whyChooseIcon', assetKey: 1 },  // License
    { assetType: 'whyChooseIcon', assetKey: 2 }   // Experience
  ],

  // Background reference helper
  background: (key: BackgroundKey): AssetReference => ({
    assetType: 'background',
    assetKey: key
  }),

  // Service icon reference helper
  serviceIcon: (key: ServiceIconKey): AssetReference => ({
    assetType: 'serviceIcon',
    assetKey: key
  })
};

/**
 * Convenience function to get all assets for a page
 */
export function getPageAssets(pageKey: BackgroundKey) {
  return {
    hero: AssetResolver.getBackground(pageKey),
    expertiseIcons: {
      commercialLaw: AssetResolver.getExpertiseIcon(0),
      familyLaw: AssetResolver.getExpertiseIcon(1),
      documentCertification: AssetResolver.getExpertiseIcon(2)
    }
  };
}
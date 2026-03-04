// ===============================
// HEADER UTILITY FUNCTIONS
// ===============================

import type { Language, LanguageToggleData } from './types';
import { LANGUAGE_CONFIG } from './constants';

// Language Toggle Helper
export const getLanguageToggleData = (currentLang: Language, path: string): LanguageToggleData => {
  const currentConfig = LANGUAGE_CONFIG[currentLang];
  const otherLang = currentLang === 'th' ? 'en' : 'th';
  const otherConfig = LANGUAGE_CONFIG[otherLang];

  const getToggleUrl = () => {
    if (currentLang === 'th') {
      return path === '/' ? '/en/' : `/en${path}`;
    } else {
      return path === '/en/' ? '/' : path.replace('/en', '');
    }
  };

  return {
    current: {
      ...currentConfig,
      isActive: true
    },
    other: {
      ...otherConfig,
      isActive: false,
      url: getToggleUrl()
    }
  };
};

// Navigation Helper
export const createIsActiveFunction = (lang: Language, currentPath: string) => {
  return (path: string) => {
    if (lang === 'en') {
      return currentPath === path || currentPath === path.replace('/en', '');
    }
    return currentPath === path;
  };
};
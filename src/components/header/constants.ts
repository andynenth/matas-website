// ===============================
// SHARED HEADER CONSTANTS
// ===============================

import type { SiteConfig, NavigationConfig, ContactInfo } from './types';

// Site Configuration
export const SITE_CONFIG: SiteConfig = {
  th: {
    name: 'สำนักกฎหมายมิตรแสนสุข',
    tagline: 'บริการใกล้ตัว มาตรฐานระดับสากล'
  },
  en: {
    name: 'MS Law Office',
    tagline: 'Local Care, International Confidence'
  }
} as const;

// Navigation Configuration
export const NAVIGATION_CONFIG: NavigationConfig = {
  th: [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'บริการ', href: '/services' },
    { name: 'คำถามที่พบบ่อย', href: '/faq' },
    { name: 'ติดต่อเรา', href: '/contact' }
  ],
  en: [
    { name: 'Home', href: '/en/' },
    { name: 'About Us', href: '/en/about' },
    { name: 'Services', href: '/en/services' },
    { name: 'FAQ', href: '/en/faq' },
    { name: 'Contact', href: '/en/contact' }
  ]
} as const;

// Contact Configuration
export const CONTACT_CONFIG: ContactInfo = {
  phone: {
    number: '+66815144783',
    display: '081-514-4783',
    trackingFunction: 'trackPhoneClick()'
  },
  line: {
    url: 'https://line.me/ti/p/~Matas.s',
    trackingFunction: 'trackLineClick()',
    logo: '/assets/images/line-logo-48.png'
  }
} as const;

// Language Configuration
export const LANGUAGE_CONFIG = {
  th: { flag: '🇹🇭', code: 'TH', name: 'ไทย' },
  en: { flag: '🇺🇸', code: 'EN', name: 'English' }
} as const;
// Common translations - Site-wide elements
// Contains: site, nav, language, buttons, contact

export const commonTranslations = {
  th: {
    // Site-wide elements
    site: {
      name: 'สำนักกฎหมายมิตรแสนสุข',
      tagline: 'บริการใกล้ตัว มาตรฐานระดับสากล',
      description: 'สำนักกฎหมายมิตรแสนสุข - บริการด้านกฎหมายในจังหวัดชลบุรี ด้วยมาตรฐานการทำงานที่โปร่งใสและเป็นมืออาชีพ'
    },

    // Navigation
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      faq: 'คำถามที่พบบ่อย',
      contact: 'ติดต่อเรา'
    },

    // Language labels
    language: {
      th: 'ไทย',
      en: 'English',
      current: 'TH',
      other: 'EN'
    },

    // Buttons & UI elements
    buttons: {
      phone: 'โทร 081-514-4783',
      lineChat: 'แชท LINE',
      learnMore: 'เรียนรู้เพิ่มเติม',
      viewAllServices: 'ดูบริการทั้งหมด',
      learnAboutLawyer: 'เรียนรู้เกี่ยวกับทนายความ'
    },

    // Contact information
    contact: {
      phone: {
        number: '+66815144783',
        display: '081-514-4783',
        text: 'โทร 081-514-4783'
      },
      line: {
        text: 'LINE แชท',
        url: 'https://line.me/ti/p/~Matas.s',
        id: 'Matas.s'
      },
      email: {
        address: 'info@mitsansuklaw.com',
        text: 'อีเมล info@mitsansuklaw.com'
      }
    }
  },

  en: {
    // Site-wide elements
    site: {
      name: 'MS Law Office',
      tagline: 'Local Care, International Confidence',
      description: 'MS Law Office - Professional legal services in Chonburi with transparent, accessible, and professional standards'
    },

    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact'
    },

    // Language labels
    language: {
      th: 'ไทย',
      en: 'English',
      current: 'EN',
      other: 'TH'
    },

    // Buttons & UI elements
    buttons: {
      phone: 'Call 081-514-4783',
      lineChat: 'LINE Chat',
      learnMore: 'Learn More',
      viewAllServices: 'View All Services',
      learnAboutLawyer: 'Learn About Attorney'
    },

    // Contact information
    contact: {
      phone: {
        number: '+66815144783',
        display: '081-514-4783',
        text: 'Phone 081-514-4783'
      },
      line: {
        text: 'LINE Chat',
        url: 'https://line.me/ti/p/~Matas.s',
        id: 'Matas.s'
      },
      email: {
        address: 'info@mitsansuklaw.com',
        text: 'Email info@mitsansuklaw.com'
      }
    }
  }
} as const;
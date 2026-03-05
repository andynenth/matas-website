// ===============================
// COMPREHENSIVE TRANSLATION SYSTEM
// Single source of truth for all website text
// ===============================

export const translations = {
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
        text: 'โทรศัพท์ 081-514-4783'
      },
      line: {
        text: 'LINE แชท',
        url: 'https://line.me/ti/p/~Matas.s'
      }
    },

    // Services data
    services: [
      {
        title: 'การระงับข้อพิพาททางศาล',
        description: 'ให้คำปรึกษาและดำเนินคดีในศาลทุกชั้นด้วยความเชียวชาญและประสบการณ์',
        icon: 'fa-balance-scale'
      },
      {
        title: 'การให้คำปรึกษากฎหมาย',
        description: 'คำปรึกษาทางกฎหมายในหลากหลายสาขา ด้วยความรู้และประสบการณ์จริง',
        icon: 'fa-briefcase'
      },
      {
        title: 'การจัดทำพินัยกรรม',
        description: 'ร่างและจัดทำพินัยกรรมที่ถูกต้องตามกฎหมายเพื่อความมั่นใจของครอบครัว',
        icon: 'fa-file-text'
      },
      {
        title: 'การแต่งตั้งผู้จัดการมรดก',
        description: 'ช่วยเหลือในการแต่งตั้งผู้จัดการมรดกและดำเนินการตามกฎหมาย',
        icon: 'fa-users'
      },
      {
        title: 'การจดทะเบียนบริษัท',
        description: 'บริการจดทะเบียนบริษัทครบวงจร รวดเร็ว ถูกต้อง และเป็นไปตามกฎหมาย',
        icon: 'fa-building'
      },
      {
        title: 'การแปลเอกสาร (เร่งด่วน)',
        description: 'บริการแปลเอกสารทางกฎหมายและเอกสารราชการ พร้อมรับรองความถูกต้อง',
        icon: 'fa-language'
      },
      {
        title: 'การรับรองเอกสารโดยทนายความ',
        description: 'รับรองเอกสารและลายมือชื่อโดยทนายความผู้รับรองเอกสารและลายมือชื่อ',
        icon: 'fa-certificate'
      }
    ],

    // Page content
    pages: {
      // Homepage content
      home: {
        title: 'หน้าแรก',
        description: 'สำนักกฎหมายมิตรแสนสุข - บริการด้านกฎหมายในจังหวัดชลบุรี ด้วยมาตรฐานการทำงานที่โปร่งใสและเป็นมืออาชีพ',
        hero: {
          subtitle: 'สำนักกฎหมาย',
          title: 'สำนักกฎหมายมิตรแสนสุข',
          description: 'ยินดีต้อนรับสู่ สำนักกฎหมายมิตรแสนสุข (MS Law Office)<br>เรามุ่งมั่นให้บริการด้านกฎหมายแก่ประชาชนในจังหวัดชลบุรีและชาวต่างชาติที่อาศัยอยู่ในประเทศไทย<br>ด้วยมาตรฐานการทำงานที่โปร่งใสและเป็นมืออาชีพ เพื่อให้คุณมั่นใจได้ในทุกขั้นตอนของการดำเนินงานทางกฎหมาย'
        },
        services: {
          title: 'บริการของเรา',
          subtitle: 'บริการด้านกฎหมายครบวงจร',
          description: 'ให้บริการด้านกฎหมายครบวงจร ด้วยความเชียวชาญและประสบการณ์มากกว่า 10 ปี พร้อมให้คำปรึกษาที่โปร่งใสและเป็นมืออาชีพ',
          note: 'เราให้ความสำคัญกับความเป็นมิตรและความเข้าใจในปัญหาของลูกค้าเป็นสำคัญ'
        },
        whyChoose: {
          title: 'ทำไมต้องเลือกเรา?',
          subtitle: 'ความน่าเชื่อถือและคุณภาพการบริการ',
          description: 'ด้วยประสบการณ์และความเชี่ยวชาญ เราพร้อมให้บริการที่โปร่งใส เข้าถึงได้ และเป็นมืออาชีพ',
          features: [
            {
              title: 'ประสบการณ์ยาวนาน',
              description: 'มากกว่า 10 ปีในการให้บริการ<br>ด้านกฎหมาย'
            },
            {
              title: 'ความเชี่ยวชาญ',
              description: 'ทนายความผู้เชี่ยวชาญ<br>หลากหลายสาขา'
            },
            {
              title: 'บริการเป็นมิตร',
              description: 'เข้าใจปัญหา ให้คำปรึกษา<br>ด้วยความเป็นมิตร'
            }
          ]
        },
        testimonials: {
          title: 'ความเห็นจากลูกค้า',
          subtitle: 'ประสบการณ์และความพึงพอใจจากผู้ใช้บริการ',
          placeholder: 'ส่วนนี้พร้อมสำหรับเพิ่มความเห็นและประสบการณ์จากลูกค้าในอนาคต'
        },
        cta: {
          title: 'ต้องการคำปรึกษาทางกฎหมาย?',
          description: 'ติดต่อเราวันนี้เพื่อรับคำปรึกษาเบื้องต้นฟรี และแผนการดำเนินงานที่เหมาะสมกับคุณ'
        }
      },

      // About page content
      about: {
        title: 'เกี่ยวกับเรา',
        description: 'เกี่ยวกับสำนักกฎหมายมิตรแสนสุข - ประวัติ ประสบการณ์ และคุณสมบัติของทนายความ'
      },

      // Services page content
      services: {
        title: 'บริการ',
        description: 'บริการด้านกฎหมายครบวงจร จากสำนักกฎหมายมิตรแสนสุข'
      },

      // Contact page content
      contact: {
        title: 'ติดต่อเรา',
        description: 'ติดต่อสำนักกฎหมายมิตรแสนสุข สำหรับคำปรึกษาด้านกฎหมาย'
      },

      // FAQ page content
      faq: {
        title: 'คำถามที่พบบ่อย',
        description: 'คำถามที่พบบ่อยเกี่ยวกับบริการด้านกฎหมาย'
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
        url: 'https://line.me/ti/p/~Matas.s'
      }
    },

    // Services data
    services: [
      {
        title: 'Court Litigation Services',
        description: 'Legal consultation and litigation in all court levels with expertise and experience',
        icon: 'fa-balance-scale'
      },
      {
        title: 'Legal Consultation',
        description: 'Legal advice in various fields with knowledge and real experience',
        icon: 'fa-briefcase'
      },
      {
        title: 'Will Preparation',
        description: 'Draft and prepare legal wills for family peace of mind',
        icon: 'fa-file-text'
      },
      {
        title: 'Estate Administration',
        description: 'Assistance in estate administrator appointment and legal procedures',
        icon: 'fa-users'
      },
      {
        title: 'Company Registration',
        description: 'Complete company registration services, fast, accurate, and legal',
        icon: 'fa-building'
      },
      {
        title: 'Document Translation (Express)',
        description: 'Legal and official document translation with accuracy certification',
        icon: 'fa-language'
      },
      {
        title: 'Document Certification by Attorney',
        description: 'Document and signature certification by certified attorney',
        icon: 'fa-certificate'
      }
    ],

    // Page content
    pages: {
      // Homepage content
      home: {
        title: 'Home',
        description: 'MS Law Office - Professional legal services in Chonburi with transparent, accessible, and professional standards',
        hero: {
          subtitle: 'Law Office',
          title: 'MS Law Office',
          description: 'Welcome to MS Law Office<br>We are committed to providing legal services to people in Chonburi and foreigners residing in Thailand<br>With transparent and professional work standards to ensure your confidence in every step of legal proceedings'
        },
        services: {
          title: 'Our Services',
          subtitle: 'Comprehensive Legal Services',
          description: 'Providing comprehensive legal services with more than 10 years of expertise and experience, ready to provide transparent and professional consultation',
          note: 'We prioritize friendliness and understanding of customer problems as important'
        },
        whyChoose: {
          title: 'Why Choose Us?',
          subtitle: 'Reliability and Service Quality',
          description: 'With experience and expertise, we are ready to provide services that are transparent, accessible, and professional',
          features: [
            {
              title: 'Long Experience',
              description: 'More than 10 years of providing<br>legal services'
            },
            {
              title: 'Expertise',
              description: 'Specialized attorneys in<br>various fields'
            },
            {
              title: 'Friendly Service',
              description: 'Understanding problems, providing advice<br>with friendliness'
            }
          ]
        },
        testimonials: {
          title: 'Client Testimonials',
          subtitle: 'Experience and satisfaction from our clients',
          placeholder: 'This section is ready for adding client testimonials and experiences in the future'
        },
        cta: {
          title: 'Need Legal Consultation?',
          description: 'Contact us today for free initial consultation and action plan suitable for you'
        }
      },

      // About page content
      about: {
        title: 'About Us',
        description: 'About MS Law Office - history, experience, and qualifications of our attorneys'
      },

      // Services page content
      services: {
        title: 'Services',
        description: 'Comprehensive legal services from MS Law Office'
      },

      // Contact page content
      contact: {
        title: 'Contact Us',
        description: 'Contact MS Law Office for legal consultation'
      },

      // FAQ page content
      faq: {
        title: 'FAQ',
        description: 'Frequently asked questions about legal services'
      }
    }
  }
} as const;

// Type for language keys
export type Language = 'th' | 'en';

// Type for the translation structure
export type TranslationData = typeof translations;
export type TranslationLang = TranslationData[Language];
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
        url: 'https://line.me/ti/p/~Matas.s',
        id: 'Matas.s'
      },
      email: {
        address: 'info@mitsansuklaw.com',
        text: 'อีเมล info@mitsansuklaw.com'
      }
    },

    // Services data
    services: [
      {
        title: 'การระงับข้อพิพาททางศาล',
        description: 'ให้คำปรึกษาและดำเนินคดีในศาลทุกชั้นด้วยความเชียวชาญและประสบการณ์',
        icon: '/assets/images/icons/court-litigation.png',
        isImage: true
      },
      {
        title: 'การให้คำปรึกษากฎหมาย',
        description: 'คำปรึกษาทางกฎหมายในหลากหลายสาขา ด้วยความรู้และประสบการณ์จริง',
        icon: '/assets/images/icons/legal-consultation.png',
        isImage: true
      },
      {
        title: 'การจัดทำพินัยกรรม',
        description: 'ร่างและจัดทำพินัยกรรมที่ถูกต้องตามกฎหมายเพื่อความมั่นใจของครอบครัว',
        icon: '/assets/images/icons/will-preparation.png',
        isImage: true
      },
      {
        title: 'การแต่งตั้งผู้จัดการมรดก',
        description: 'ช่วยเหลือในการแต่งตั้งผู้จัดการมรดกและดำเนินการตามกฎหมาย',
        icon: '/assets/images/icons/estate-administration.png',
        isImage: true
      },
      {
        title: 'การจดทะเบียนบริษัท',
        description: 'บริการจดทะเบียนบริษัทครบวงจร รวดเร็ว ถูกต้อง และเป็นไปตามกฎหมาย',
        icon: '/assets/images/icons/company-registration.png',
        isImage: true
      },
      {
        title: 'การแปลเอกสาร (เร่งด่วน)',
        description: 'บริการแปลเอกสารทางกฎหมายและเอกสารราชการ พร้อมรับรองความถูกต้อง',
        icon: '/assets/images/icons/document-translation.png',
        isImage: true
      },
      {
        title: 'การรับรองเอกสารโดยทนายความ',
        description: 'รับรองเอกสารและลายมือชื่อโดยทนายความผู้รับรองเอกสารและลายมือชื่อ',
        icon: '/assets/images/icons/document-certification.png',
        isImage: true
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
              title: 'การศึกษาระดับสูง',
              description: 'นิติศาสตร์บัณฑิต<br>มหาวิทยาลัยธรรมศาสตร์',
              icon: '/assets/images/icons/education.png',
              bgColor: 'bg-primary',
              isImage: true
            },
            {
              title: 'ใบอนุญาตครบถ้วน',
              description: 'ทนายความและทนายความ<br>ผู้รับรองเอกสาร',
              icon: '/assets/images/icons/license.png',
              bgColor: 'bg-success',
              isImage: true
            },
            {
              title: 'บริการเป็นมิตร',
              description: 'เข้าใจปัญหา ให้คำปรึกษา<br>ด้วยความเป็นมิตร',
              icon: '/assets/images/icons/friendly-service.png',
              bgColor: 'bg-complete',
              isImage: true
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
        description: 'ทำความรู้จักกับทนายความเมธัส ศรีศุกร์เจริญ และทีมงานของสำนักกฎหมายมิตรแสนสุข',
        hero: {
          subtitle: 'เกี่ยวกับเรา',
          title: 'สำนักกฎหมายมิตรแสนสุข',
          description: 'ก่อตั้งขึ้นเพื่อให้บริการทางด้านกฎหมายแก่ประชาชนทั่วไปและชาวต่างชาติที่อาศัยอยู่ในประเทศไทย ด้วยความเป็นมืออาชีพและมาตรฐานการบริการที่เป็นเลิศ'
        },
        attorney: {
          title: 'ทนายความหลัก',
          name: 'เมธัส ศรีศุกร์เจริญ',
          subtitle: 'ทนายความ และทนายความผู้รับรองเอกสารและลายมือชื่อ',
          quote: '"บริการด้วยความเป็นมิตร"',
          education: {
            title: 'ประวัติการศึกษา',
            middle: 'มัธยมต้น: โรงเรียนจุฬาภรณ์ราชวิทยาลัย จังหวัดปทุมธานี',
            high: 'มัธยมปลาย: โรงเรียนเตรียมอุดมศึกษา',
            university: 'ปริญญาตรี: นิติศาสตร์บัณฑิต มหาวิทยาลัยธรรมศาสตร์'
          },
          licenses: {
            title: 'ใบอนุญาตประกอบวิชาชีพ',
            lawyer: 'ทนายความ',
            notary: 'ทนายความผู้รับรองเอกสาร'
          }
        },
        philosophy: {
          title: 'ปรัชญาการทำงาน',
          subtitle: '"บริการด้วยความเป็นมิตร"',
          description: 'เราเชื่อว่าการให้บริการทางกฎหมายไม่ใช่เพียงแค่การทำงานตามหน้าที่ แต่เป็นการสร้างความไว้วางใจและความมั่นใจให้กับลูกค้าในทุกขั้นตอน ด้วยความเป็นมิตรและความเข้าใจในปัญหาของลูกค้าเป็นสำคัญ'
        },
        approach: {
          title: 'แนวทางการทำงาน',
          subtitle: 'โปร่งใส เข้าถึงง่าย รวดเร็ว',
          features: [
            {
              title: 'โปร่งใส',
              description: 'แจ้งข้อมูลและค่าใช้จ่ายอย่างชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง'
            },
            {
              title: 'เข้าถึงง่าย',
              description: 'ให้คำปรึกษาในภาษาที่เข้าใจง่าย พร้อมติดต่อได้ตลอดเวลา'
            },
            {
              title: 'รวดเร็ว',
              description: 'ดำเนินการอย่างมีประสิทธิภาพ ตรงต่อเวลา และไม่ทำให้เสียโอกาส'
            }
          ]
        },
        expertise: {
          title: 'สาขากฎหมายที่ให้บริการ',
          subtitle: 'ความเชียวชาญ',
          description: 'ด้วยประสบการณ์และความเชี่ยวชาญในสาขากฎหมายต่างๆ เพื่อให้บริการที่ครอบคลุมและตรงตามความต้องการ',
          areas: [
            {
              title: 'กฎหมายแพ่งและพาณิชย์',
              description: 'สัญญา ข้อพิพาท และธุรกรรมทางการค้า',
              icon: 'fa-balance-scale'
            },
            {
              title: 'กฎหมายครอบครัว',
              description: 'การสมรส การหย่า และมรดก',
              icon: 'fa-users'
            },
            {
              title: 'การรับรองเอกสาร',
              description: 'เอกสารสำหรับชาวต่างชาติและธุรกรรมระหว่างประเทศ',
              icon: 'fa-certificate'
            }
          ]
        },
        cta: {
          title: 'พร้อมให้คำปรึกษาแล้ววันนี้',
          description: 'ติดต่อเราเพื่อรับคำปรึกษาเบื้องต้นฟรี พร้อมแนวทางแก้ไขปัญหาที่เหมาะสมกับคุณ'
        }
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
    },

    // Footer content
    footer: {
      copyright: 'สงวนลิขสิทธิ์',
      description: 'บริการด้านกฎหมายที่โปร่งใส เข้าถึงง่าย และเป็นมืออาชีพ เพื่อให้คุณมั่นใจในทุกขั้นตอนของการดำเนินงานทางกฎหมาย',
      quickLinks: {
        title: 'ลิงก์ด่วน',
        items: [
          { name: 'หน้าแรก', href: '/' },
          { name: 'เกี่ยวกับเรา', href: '/about' },
          { name: 'บริการ', href: '/services' },
          { name: 'ติดต่อเรา', href: '/contact' }
        ]
      },
      contact: {
        title: 'ติดต่อเรา',
        phone: 'โทร',
        email: 'อีเมล',
        line: 'LINE'
      },
      address: {
        title: 'ที่อยู่สำนักงาน',
        street: 'ถนนมิตรสัมพันธ์',
        subdistrict: 'ตำบลบ้านปึก อำเภอเมืองชลบุรี',
        province: 'จังหวัดชลบุรี 20130',
        country: 'ประเทศไทย',
        hours: 'เวลาทำการ',
        hoursDetail: 'จันทร์ - ศุกร์: 9:00 - 18:00 น.'
      },
      legal: {
        privacy: 'นโยบายความเป็นส่วนตัว',
        terms: 'ข้อกำหนดการใช้งาน'
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
    },

    // Services data
    services: [
      {
        title: 'Court Litigation Services',
        description: 'Legal consultation and litigation in all court levels with expertise and experience',
        icon: '/assets/images/icons/court-litigation.png',
        isImage: true
      },
      {
        title: 'Legal Consultation',
        description: 'Legal advice in various fields with knowledge and real experience',
        icon: '/assets/images/icons/legal-consultation.png',
        isImage: true
      },
      {
        title: 'Will Preparation',
        description: 'Draft and prepare legal wills for family peace of mind',
        icon: '/assets/images/icons/will-preparation.png',
        isImage: true
      },
      {
        title: 'Estate Administration',
        description: 'Assistance in estate administrator appointment and legal procedures',
        icon: '/assets/images/icons/estate-administration.png',
        isImage: true
      },
      {
        title: 'Company Registration',
        description: 'Complete company registration services, fast, accurate, and legal',
        icon: '/assets/images/icons/company-registration.png',
        isImage: true
      },
      {
        title: 'Document Translation (Express)',
        description: 'Legal and official document translation with accuracy certification',
        icon: '/assets/images/icons/document-translation.png',
        isImage: true
      },
      {
        title: 'Document Certification by Attorney',
        description: 'Document and signature certification by certified attorney',
        icon: '/assets/images/icons/document-certification.png',
        isImage: true
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
              title: 'Advanced Education',
              description: 'Bachelor of Laws<br>Thammasat University',
              icon: '/assets/images/icons/education.png',
              bgColor: 'bg-primary',
              isImage: true
            },
            {
              title: 'Complete Licenses',
              description: 'Licensed attorney and<br>document certification attorney',
              icon: '/assets/images/icons/license.png',
              bgColor: 'bg-success',
              isImage: true
            },
            {
              title: 'Friendly Service',
              description: 'Understanding problems, providing advice<br>with friendliness',
              icon: '/assets/images/icons/friendly-service.png',
              bgColor: 'bg-complete',
              isImage: true
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
        description: 'Meet Attorney Matas and the team at MS Law Office',
        hero: {
          subtitle: 'About Us',
          title: 'MS Law Office',
          description: 'Established to provide legal services to the general public and foreigners residing in Thailand with professionalism and excellent service standards'
        },
        attorney: {
          title: 'Lead Attorney',
          name: 'Matas Srisukcharoen',
          subtitle: 'Attorney and Document Notary Attorney',
          quote: '"Service with Friendliness"',
          education: {
            title: 'Educational Background',
            middle: 'Junior High: Princess Chulabhorn\'s College, Pathum Thani Province',
            high: 'Senior High: Triam Udom Suksa School',
            university: 'Bachelor\'s Degree: Bachelor of Laws, Thammasat University'
          },
          licenses: {
            title: 'Professional Licenses',
            lawyer: 'Attorney',
            notary: 'Document Notary Attorney'
          }
        },
        philosophy: {
          title: 'Work Philosophy',
          subtitle: '"Service with Friendliness"',
          description: 'We believe that providing legal services is not just about performing duties, but about building trust and confidence for clients in every step with friendliness and understanding of customer problems as priorities'
        },
        approach: {
          title: 'Work Approach',
          subtitle: 'Transparent, Accessible, Fast',
          features: [
            {
              title: 'Transparent',
              description: 'Clear information and costs disclosure, no hidden charges'
            },
            {
              title: 'Accessible',
              description: 'Consultation in easy-to-understand language, available anytime'
            },
            {
              title: 'Fast',
              description: 'Efficient operations, on time, without missing opportunities'
            }
          ]
        },
        expertise: {
          title: 'Legal Practice Areas',
          subtitle: 'Expertise',
          description: 'With experience and expertise in various legal fields to provide comprehensive services that meet your needs',
          areas: [
            {
              title: 'Civil and Commercial Law',
              description: 'Contracts, disputes, and commercial transactions',
              icon: 'fa-balance-scale'
            },
            {
              title: 'Family Law',
              description: 'Marriage, divorce, and inheritance',
              icon: 'fa-users'
            },
            {
              title: 'Document Certification',
              description: 'Documents for foreigners and international transactions',
              icon: 'fa-certificate'
            }
          ]
        },
        cta: {
          title: 'Ready to Provide Consultation Today',
          description: 'Contact us for free initial consultation and appropriate solutions for your problems'
        }
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
    },

    // Footer content
    footer: {
      copyright: 'All Rights Reserved',
      description: 'Transparent, accessible, and professional legal services to ensure your confidence in every step of legal proceedings',
      quickLinks: {
        title: 'Quick Links',
        items: [
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
          { name: 'Services', href: '/services' },
          { name: 'Contact Us', href: '/contact' }
        ]
      },
      contact: {
        title: 'Contact Us',
        phone: 'Tel',
        email: 'Email',
        line: 'LINE'
      },
      address: {
        title: 'Office Address',
        street: 'Mit Samphan Road',
        subdistrict: 'Ban Puek, Mueang Chonburi',
        province: 'Chonburi 20130',
        country: 'Thailand',
        hours: 'Hours',
        hoursDetail: 'Monday - Friday: 9:00 AM - 6:00 PM'
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  }
} as const;

// Type for language keys
export type Language = 'th' | 'en';

// Type for the translation structure
export type TranslationData = typeof translations;
export type TranslationLang = TranslationData[Language];
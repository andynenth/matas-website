// Services translations
// Contains: services array, pages.services

export const servicesTranslations = {
  th: {
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

    pages: {
      services: {
        title: 'บริการ',
        description: 'บริการด้านกฎหมายครบวงจรจากสำนักกฎหมายมิตรแสนสุข - การระงับข้อพิพาท คำปรึกษากฎหมาย การจดทะเบียนบริษัท และบริการอื่นๆ',
        hero: {
          subtitle: 'บริการของเรา',
          title: 'บริการด้านกฎหมายครบวงจร',
          description: 'ให้บริการด้านกฎหมายครบวงจร ด้วยความเชียวชาญและประสบการณ์มากกว่า 10 ปี พร้อมให้คำปรึกษาที่โปร่งใสและเป็นมืออาชีพ',
          backgroundImage: '/assets/images/services-hero.png',
          backgroundSettings: {
            blur: '3px',
            overlayColor: 'rgba(255,255,255,0.8)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }
        }
      }
    }
  },

  en: {
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

    pages: {
      services: {
        title: 'Services',
        description: 'Comprehensive legal services from MS Law Office - litigation, legal consultation, company registration and more',
        hero: {
          subtitle: 'Our Services',
          title: 'Comprehensive Legal Services',
          description: 'Providing comprehensive legal services with more than 10 years of expertise and experience, ready to provide transparent and professional consultation',
          backgroundImage: '/assets/images/services-hero.png',
          backgroundSettings: {
            blur: '3px',
            overlayColor: 'rgba(255,255,255,0.8)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }
        }
      }
    }
  }
} as const;
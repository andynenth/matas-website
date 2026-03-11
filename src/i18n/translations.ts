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
              icon: '/assets/images/icons/commercial-law.png'
            },
            {
              title: 'กฎหมายครอบครัว',
              description: 'การสมรส การหย่า และมรดก',
              icon: '/assets/images/icons/family-law.png'
            },
            {
              title: 'การรับรองเอกสาร',
              description: 'เอกสารสำหรับชาวต่างชาติและธุรกรรมระหว่างประเทศ',
              icon: '/assets/images/icons/stamp-image.png'
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
        description: 'บริการด้านกฎหมายครบวงจรจากสำนักกฎหมายมิตรแสนสุข - การระงับข้อพิพาท คำปรึกษากฎหมาย การจดทะเบียนบริษัท และบริการอื่นๆ',
        hero: {
          subtitle: 'บริการของเรา',
          title: 'บริการด้านกฎหมายครบวงจร',
          description: 'เรามีความเชี่ยวชาญและประสบการณ์ในการให้บริการด้านกฎหมายหลากหลายสาขา ด้วยความเป็นมืออาชีพและมาตรฐานการบริการที่เป็นเลิศ'
        },
        detailedServices: [
          {
            title: 'การระงับข้อพิพาททางศาล',
            description: 'ให้คำปรึกษาและดำเนินคดีในศาลทุกชั้นด้วยความเชียวชาญและประสบการณ์',
            details: [
              'วิเคราะห์และประเมินคดีเบื้องต้น',
              'เตรียมเอกสารและพยานหลักฐาน',
              'ดำเนินคดีในศาลชั้นต้น อุทธรณ์ และฎีกา',
              'เจรจาต่อรองและไกล่เกลี่ยข้อพิพาท'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-primary'
          },
          {
            title: 'การให้คำปรึกษากฎหมาย',
            description: 'คำปรึกษาทางกฎหมายในหลากหลายสาขา ด้วยความรู้และประสบการณ์จริง',
            details: [
              'กฎหมายแพ่งและพาณิชย์',
              'กฎหมายครอบครัวและมรดก',
              'กฎหมายที่ดินและอสังหาริมทรัพย์',
              'กฎหมายแรงงานและประกันสังคม'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-success'
          },
          {
            title: 'การจัดทำพินัยกรรม',
            description: 'ร่างและจัดทำพินัยกรรมที่ถูกต้องตามกฎหมายเพื่อความมั่นใจของครอบครัว',
            details: [
              'ให้คำปรึกษาเรื่องการจัดสรรทรัพย์สิน',
              'ร่างพินัยกรรมตามความประสงค์',
              'ตรวจสอบความถูกต้องตามกฎหมาย',
              'เก็บรักษาพินัยกรรมอย่างปลอดภัย'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-complete'
          },
          {
            title: 'การแต่งตั้งผู้จัดการมรดก',
            description: 'ช่วยเหลือในการแต่งตั้งผู้จัดการมรดกและดำเนินการตามกฎหมาย',
            details: [
              'ยื่นคำร้องต่อศาลเพื่อแต่งตั้งผู้จัดการมรดก',
              'จัดทำบัญชีทรัพย์สินและหนี้สิน',
              'ชำระหนี้และแจกจ่ายทรัพย์สิน',
              'รายงานผลการดำเนินการต่อศาล'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-primary'
          },
          {
            title: 'การจดทะเบียนบริษัท',
            description: 'บริการจดทะเบียนบริษัทครบวงจร รวดเร็ว ถูกต้อง และเป็นไปตามกฎหมาย',
            details: [
              'จดทะเบียนบริษัทจำกัด และห้างหุ้นส่วนจำกัด',
              'จดทะเบียนเพิ่มทุน เปลี่ยนแปลงวัตถุประสงค์',
              'จดทะเบียนโอนหุ้น และเปลี่ยนแปลงกรรมการ',
              'ยกเลิกบริษัท และชำระบัญชี'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-success'
          },
          {
            title: 'การแปลเอกสาร (เร่งด่วน)',
            description: 'บริการแปลเอกสารทางกฎหมายและเอกสารราชการ พร้อมรับรองความถูกต้อง',
            details: [
              'แปลเอกสารราชการและหลักฐานการศึกษา',
              'แปลสัญญาและเอกสารทางธุรกิจ',
              'แปลเอกสารสำหรับวีซ่าและการอพยพ',
              'บริการแปลเร่งด่วนภายในวันเดียว'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-complete'
          },
          {
            title: 'การรับรองเอกสารโดยทนายความ',
            description: 'รับรองเอกสารและลายมือชื่อโดยทนายความผู้รับรองเอกสารและลายมือชื่อ',
            details: [
              'รับรองสำเนาเอกสารให้เป็นจริง',
              'รับรองลายมือชื่อและลิขิต',
              'รับรองการแปลเอกสาร',
              'เอกสารมีผลใช้ได้ทันที ไม่ต้องรอนาน'
            ],
            icon: '/assets/images/icons/family-law.png',
            bgColor: 'bg-primary'
          }
        ],
        serviceDetailsLabel: 'รายละเอียดบริการ',
        contactButtonText: 'ปรึกษา',
        process: {
          title: 'ขั้นตอนการทำงาน',
          subtitle: 'วิธีการที่เราทำงานร่วมกับคุณ',
          description: 'เราให้ความสำคัญกับความโปร่งใสและการสื่อสารที่ชัดเจนในทุกขั้นตอนของการทำงาน',
          steps: [
            {
              title: 'ปรึกษาเบื้องต้น',
              description: 'รับฟังปัญหาและให้คำแนะนำเบื้องต้นฟรี'
            },
            {
              title: 'วิเคราะห์และวางแผน',
              description: 'ศึกษารายละเอียดและจัดทำแผนการดำเนินงาน'
            },
            {
              title: 'ดำเนินการ',
              description: 'ปฏิบัติงานตามแผนพร้อมรายงานความคืบหน้า'
            },
            {
              title: 'สรุปผล',
              description: 'ส่งมอบผลงานและให้คำแนะนำติดตามผล'
            }
          ]
        },
        pricing: {
          title: 'ค่าใช้จ่าย',
          subtitle: 'อัตราค่าบริการที่โปร่งใส',
          description: 'เราให้ความสำคัญกับความโปร่งใสในการเก็บค่าบริการ ไม่มีค่าใช้จ่ายแอบแฝง',
          plans: [
            {
              title: 'คำปรึกษาทั่วไป',
              price: 'ฟรี',
              subtitle: 'คำปรึกษาเบื้องต้น 15-30 นาที',
              features: [
                'คำแนะนำเบื้องต้น',
                'การประเมินปัญหา',
                'แนวทางการแก้ไข'
              ]
            },
            {
              title: 'บริการทั่วไป',
              price: 'ตกลงก่อน',
              subtitle: 'ราคาขึ้นอยู่กับความซับซ้อน',
              features: [
                'ราคาชัดเจน ไม่มีค่าแอบแฝง',
                'การันตีคุณภาพ',
                'ติดตามผลหลังดำเนินการ'
              ],
              highlighted: true
            },
            {
              title: 'บริการเร่งด่วน',
              price: '+50%',
              subtitle: 'เพิ่มจากราคามาตรฐาน',
              features: [
                'แปลเอกสารภายใน 1 วัน',
                'รับรองเอกสารทันที',
                'ความเร่งด่วนพิเศษ'
              ]
            }
          ],
          note: '* ค่าบริการขึ้นอยู่กับความซับซ้อนของงาน เราจะแจ้งราคาที่ชัดเจนก่อนเริ่มงานทุกครั้ง',
          inquiryButton: 'สอบถามราคาและรายละเอียด'
        },
        cta: {
          title: 'พร้อมแก้ไขปัญหากฎหมายให้คุณ',
          description: 'ไม่ว่าปัญหาจะซับซ้อนหรือเร่งด่วนเพียงใด เรามีประสบการณ์และความเชี่ยวชาญที่จะช่วยหาทางออกที่ดีที่สุดให้คุณ'
        }
      },

      // Contact page content
      contact: {
        title: 'ติดต่อเรา',
        description: 'ติดต่อสำนักกฎหมายมิตรแสนสุข - ที่อยู่ เบอร์โทรศัพท์ อีเมล และแผนที่สำนักงาน',
        hero: {
          subtitle: 'ติดต่อเรา',
          title: 'ติดต่อสำนักงานกฎหมาย',
          mobileButtonText: '081-514-4783',
          lineButtonText: 'LINE แชท',
          description: 'เรายินดีให้คำปรึกษาทางกฎหมายและช่วยเหลือแก้ไขปัญหาต่างๆ ด้วยความเป็นมิตรและมาตรฐานการบริการที่เป็นเลิศ'
        },
        mainContact: {
          title: 'ติดต่อสำนักงานกฎหมาย',
          description: 'เรายินดีให้คำปรึกษาทางกฎหมายและช่วยเหลือแก้ไขปัญหาต่างๆ ด้วยความเป็นมิตรและมาตรฐานการบริการที่เป็นเลิศ',
          otherChannelsTitle: 'ช่องทางการติดต่ออื่นๆ'
        },
        officeInfo: {
          title: 'ข้อมูลสำนักงาน<br>และบริการพิเศษ',
          description: 'ตั้งอยู่ในทำเลที่สะดวกต่อการเดินทาง พร้อมบริการที่หลากหลายสำหรับลูกค้าทั้งชาวไทยและชาวต่างชาติ',
          addressTitle: 'ที่อยู่สำนักงาน',
          officeName: 'สำนักกฎหมายมิตรแสนสุข',
          transportation: {
            title: 'การเดินทาง',
            parking: '🚗 มีที่จอดรถหน้าสำนักงาน',
            bus: '🚌 รถเมล์สาย 3, 7, 15',
            landmark: '📍 ใกล้ตลาดบ้านปึก และโรงพยาบาลชลบุรี'
          }
        },
        specialServices: {
          title: 'บริการพิเศษ',
          services: [
            {
              icon: 'fa-clock-o',
              iconColor: 'text-success',
              title: 'คำปรึกษาฟรี',
              description: 'เบื้องต้น 15-30 นาที'
            },
            {
              icon: 'fa-language',
              iconColor: 'text-complete',
              title: 'แปลเร่งด่วน',
              description: 'เสร็จภายในวันเดียว'
            },
            {
              icon: 'fa-certificate',
              iconColor: 'text-primary',
              title: 'รับรองเอกสาร',
              description: '1-2 วันทำการ'
            },
            {
              icon: 'fa-globe',
              iconColor: 'text-warning',
              title: 'บริการชาวต่างชาติ',
              description: 'ภาษาอังกฤษ'
            }
          ]
        },
        googleMaps: {
          title: 'แผนที่สำนักงาน',
          subtitle: 'ตำแหน่งที่ตั้ง',
          address: '52/4 ถนนมิตรสัมพันธ์ ตำบลบ้านปึก อำเภอเมืองชลบุรี 20130',
          overlayTitle: 'สำนักกฎหมายมิตรแสนสุข',
          overlayAddress: '52/4 ถนนมิตรสัมพันธ์ ตำบลบ้านปึก',
          openInMaps: 'เปิดใน Google Maps',
          viewLargeMap: 'เปิดแผนที่ขนาดใหญ่'
        },
        cta: {
          title: 'พร้อมให้บริการคุณแล้ววันนี้',
          description: 'ไม่ว่าจะเป็นปัญหากฎหมายใดๆ เรายินดีให้คำปรึกษาและหาทางออกที่ดีที่สุดสำหรับคุณ'
        }
      },

      // FAQ page content
      faq: {
        title: 'คำถามที่พบบ่อย',
        description: 'คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับบริการทางกฎหมายของสำนักกฎหมายมิตรแสนสุข',
        hero: {
          subtitle: 'คำถามที่พบบ่อย',
          title: 'คำตอบสำหรับคำถามทั่วไป',
          description: 'รวบรวมคำถามและคำตอบที่ลูกค้าสนใจมากที่สุด หากไม่พบคำตอบที่ต้องการ สามารถติดต่อสอบถามได้โดยตรง'
        },
        faqs: [
          {
            question: 'ค่าใช้จ่ายในการใช้บริการทนายความเป็นอย่างไร มีค่าใช้จ่ายแอบแฝงหรือไม่?',
            answer: 'เราให้ความสำคัญกับความโปร่งใสในการเก็บค่าบริการ ก่อนเริ่มงานจะมีการแจ้งค่าใช้จ่ายที่ชัดเจน โดยค่าบริการขึ้นอยู่กับความซับซ้อนของงานแต่ละประเภท สำหรับคำปรึกษาเบื้องต้น 15-30 นาทีแรกนั้นฟรี ไม่มีค่าใช้จ่าย ส่วนบริการอื่นๆ จะมีการตกลงราคาล่วงหน้าก่อนดำเนินการทุกครั้ง ไม่มีค่าใช้จ่ายแอบแฝงใดๆ',
            category: 'ค่าใช้จ่าย'
          },
          {
            question: 'การดำเนินคดีในศาลใช้เวลานานเพียงใด และมีขั้นตอนอย่างไร?',
            answer: 'ระยะเวลาการดำเนินคดีขึ้นอยู่กับประเภทคดีและความซับซ้อน โดยทั่วไปคดีแพ่งอาจใช้เวลา 6-18 เดือน ขั้นตอนการดำเนินงาน ได้แก่ 1) การยื่นฟ้อง 2) การพิจารณาของศาล 3) การสืบพยาน 4) การพิพากษา เราจะคอยแจ้งความคืบหน้าและให้คำปรึกษาตลอดกระบวนการ รวมทั้งเตรียมเอกสารและพยานหลักฐานให้ครบถ้วน',
            category: 'การดำเนินคดี'
          },
          {
            question: 'บริการแปลเอกสารและการรับรองเอกสารใช้เวลานานเพียงใด?',
            answer: 'บริการแปลเอกสารปกติใช้เวลา 2-3 วันทำการ ขึ้นอยู่กับปริมาณและความซับซ้อนของเอกสาร สำหรับงานเร่งด่วนสามารถเสร็จภายใน 1 วัน (เสียค่าบริการเพิ่มขึ้น 50%) การรับรองเอกสารโดยทนายความสามารถทำได้ทันที ไม่ต้องรอนาน เอกสารที่รับรองแล้วจะมีผลใช้ได้ทันทีและได้รับการยอมรับจากหน่วยงานราชการ',
            category: 'เอกสาร'
          }
        ],
        contactCta: {
          title: 'ไม่พบคำตอบที่ต้องการ?',
          description: 'ติดต่อเราโดยตรงเพื่อรับคำปรึกษาที่ตรงกับปัญหาของคุณ',
          phoneText: 'โทรสอบถาม',
          lineText: 'แชท LINE'
        },
        additionalTopics: {
          title: 'หัวข้อที่น่าสนใจ',
          subtitle: 'ข้อมูลเพิ่มเติมที่อาจเป็นประโยชน์',
          description: 'หัวข้อต่างๆ ที่ลูกค้าสนใจและสอบถามบ่อย รวบรวมไว้เพื่อความสะดวกของท่าน',
          topics: [
            {
              title: 'การจดทะเบียนบริษัท',
              items: [
                'ขั้นตอนการจดทะเบียนบริษัทจำกัด',
                'เงินทุนจดทะเบียนขั้นต่ำ',
                'ระยะเวลาการดำเนินการ',
                'เอกสารที่ใช้ในการจดทะเบียน'
              ]
            },
            {
              title: 'พินัยกรรมและมรดก',
              items: [
                'วิธีการทำพินัยกรรมให้ถูกต้อง',
                'ความแตกต่างระหว่างพินัยกรรมและใบเสนอหน้า',
                'การแต่งตั้งผู้จัดการมรดก',
                'ขั้นตอนการรับมรดก'
              ]
            },
            {
              title: 'บริการสำหรับชาวต่างชาติ',
              items: [
                'การขอวีซ่าประเภทต่างๆ',
                'การแปลและรับรองเอกสารภาษาอังกฤษ',
                'การจดทะเบียนสมรสกับคนไทย',
                'การซื้อที่ดินและอสังหาริมทรัพย์'
              ]
            }
          ]
        },
        quickContact: {
          title: 'ช่องทางการติดต่อ',
          subtitle: 'วิธีการติดต่อเรา',
          phone: {
            title: 'โทรศัพท์โดยตรง',
            description: 'สำหรับการปรึกษาเร่งด่วนและการนัดหมาย',
            number: '081-514-4783',
            hours: 'เวลาทำการ: จันทร์ - ศุกร์ 9:00 - 18:00 น.'
          },
          line: {
            title: 'LINE Official',
            description: 'สะดวกสำหรับการสอบถามและส่งเอกสาร',
            id: '@Matas.s',
            hours: 'ตอบกลับ 24/7 กรณีเร่งด่วน'
          }
        },
        cta: {
          title: 'พร้อมตอบทุกคำถามของคุณ',
          description: 'ไม่ว่าจะเป็นคำถามง่ายๆ หรือปัญหาที่ซับซ้อน เรายินดีให้คำปรึกษาและช่วยหาทางออกที่ดีที่สุดสำหรับคุณ'
        }
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
        description: 'Comprehensive legal services from MS Law Office - litigation, legal consultation, company registration and more',
        hero: {
          subtitle: 'Our Services',
          title: 'Comprehensive Legal Services',
          description: 'We have expertise and experience in providing various legal services with professionalism and excellent service standards'
        },
        detailedServices: [
          {
            title: 'Court Litigation Services',
            description: 'Legal consultation and litigation in all court levels with expertise and experience',
            details: [
              'Case analysis and preliminary assessment',
              'Prepare documents and evidence',
              'Court proceedings at trial, appellate, and supreme court levels',
              'Negotiation and dispute mediation'
            ],
            icon: 'fa-balance-scale',
            bgColor: 'bg-primary'
          },
          {
            title: 'Legal Consultation',
            description: 'Legal advice in various fields with knowledge and real experience',
            details: [
              'Civil and commercial law',
              'Family law and inheritance',
              'Property and real estate law',
              'Labor law and social security'
            ],
            icon: 'fa-briefcase',
            bgColor: 'bg-success'
          },
          {
            title: 'Will Preparation',
            description: 'Draft and prepare legal wills for family peace of mind',
            details: [
              'Consultation on asset allocation',
              'Draft wills according to wishes',
              'Legal compliance verification',
              'Safe will storage'
            ],
            icon: 'fa-file-text',
            bgColor: 'bg-complete'
          },
          {
            title: 'Estate Administration',
            description: 'Assistance in appointing estate administrators and legal proceedings',
            details: [
              'Court petition for estate administrator appointment',
              'Asset and liability inventory preparation',
              'Debt settlement and asset distribution',
              'Court progress reporting'
            ],
            icon: 'fa-users',
            bgColor: 'bg-primary'
          },
          {
            title: 'Company Registration',
            description: 'Comprehensive company registration services - fast, accurate, and legally compliant',
            details: [
              'Limited company and limited partnership registration',
              'Capital increase and objective amendments registration',
              'Share transfer and director change registration',
              'Company dissolution and liquidation'
            ],
            icon: 'fa-building',
            bgColor: 'bg-success'
          },
          {
            title: 'Document Translation (Express)',
            description: 'Legal and government document translation services with accuracy certification',
            details: [
              'Government documents and educational certificates translation',
              'Contract and business document translation',
              'Visa and immigration document translation',
              'Same-day express translation service'
            ],
            icon: 'fa-language',
            bgColor: 'bg-complete'
          },
          {
            title: 'Notarial Services by Attorney',
            description: 'Document and signature certification by certified notarial attorney',
            details: [
              'Document copy certification',
              'Signature and handwriting certification',
              'Document translation certification',
              'Immediate effective documents - no waiting'
            ],
            icon: 'fa-certificate',
            bgColor: 'bg-primary'
          }
        ],
        serviceDetailsLabel: 'Service Details',
        contactButtonText: 'Consult',
        process: {
          title: 'Work Process',
          subtitle: 'How We Work With You',
          description: 'We emphasize transparency and clear communication at every step of the work process',
          steps: [
            {
              title: 'Initial Consultation',
              description: 'Listen to problems and provide free preliminary advice'
            },
            {
              title: 'Analysis and Planning',
              description: 'Study details and develop action plan'
            },
            {
              title: 'Implementation',
              description: 'Execute according to plan with progress reporting'
            },
            {
              title: 'Summary',
              description: 'Deliver results and provide follow-up advice'
            }
          ]
        },
        pricing: {
          title: 'Pricing',
          subtitle: 'Transparent Service Rates',
          description: 'We prioritize transparency in service pricing with no hidden charges',
          plans: [
            {
              title: 'General Consultation',
              price: 'Free',
              subtitle: '15-30 minutes initial consultation',
              features: [
                'Preliminary advice',
                'Problem assessment',
                'Solution guidelines'
              ]
            },
            {
              title: 'General Services',
              price: 'By Agreement',
              subtitle: 'Price depends on complexity',
              features: [
                'Clear pricing, no hidden costs',
                'Quality guarantee',
                'Post-service follow-up'
              ],
              highlighted: true
            },
            {
              title: 'Express Services',
              price: '+50%',
              subtitle: 'Additional from standard rate',
              features: [
                'Document translation within 1 day',
                'Immediate document certification',
                'Special urgency'
              ]
            }
          ],
          note: '* Service fees depend on work complexity. We will provide clear pricing before starting work every time',
          inquiryButton: 'Inquire Pricing and Details'
        },
        cta: {
          title: 'Ready to Solve Your Legal Problems',
          description: 'No matter how complex or urgent the problem, we have the experience and expertise to help find the best solution for you'
        }
      },

      // Contact page content
      contact: {
        title: 'Contact Us',
        description: 'Contact MS Law Office for legal consultation - address, phone, email and office location',
        hero: {
          subtitle: 'Contact Us',
          title: 'Contact Our Law Office',
          mobileButtonText: '',
          lineButtonText: 'LINE Chat',
          description: 'We are happy to provide legal consultation and help solve various problems with friendliness and excellent service standards'
        },
        mainContact: {
          title: 'Contact Our Law Office',
          description: 'We are happy to provide legal consultation and help solve various problems with friendliness and excellent service standards',
          otherChannelsTitle: 'Other Contact Channels'
        },
        officeInfo: {
          title: 'Office Information<br>& Special Services',
          description: 'Located in a convenient location for travel, with a variety of services for both Thai and foreign clients',
          addressTitle: 'Office Address',
          officeName: 'MS Law Office',
          transportation: {
            title: 'Transportation',
            parking: '🚗 Parking available in front of office',
            bus: '🚌 Bus lines 3, 7, 15',
            landmark: '📍 Near Ban Puek Market and Chonburi Hospital'
          }
        },
        specialServices: {
          title: 'Special Services',
          services: [
            {
              icon: 'fa-clock-o',
              iconColor: 'text-success',
              title: 'Free Consultation',
              description: 'Initial 15-30 minutes'
            },
            {
              icon: 'fa-language',
              iconColor: 'text-complete',
              title: 'Express Translation',
              description: 'Completed within one day'
            },
            {
              icon: 'fa-certificate',
              iconColor: 'text-primary',
              title: 'Document Certification',
              description: '1-2 business days'
            },
            {
              icon: 'fa-globe',
              iconColor: 'text-warning',
              title: 'Foreign Services',
              description: 'English language'
            }
          ]
        },
        googleMaps: {
          title: 'Office Map',
          subtitle: 'Office Location',
          address: '52/4 Mit Samphan Road, Ban Puek, Mueang Chonburi 20130',
          overlayTitle: 'MS Law Office',
          overlayAddress: '52/4 Mit Samphan Road, Ban Puek',
          openInMaps: 'Open in Google Maps',
          viewLargeMap: 'View Large Map'
        },
        cta: {
          title: 'Ready to Serve You Today',
          description: 'Whatever legal problems you have, we are happy to provide consultation and find the best solution for you'
        }
      },

      // FAQ page content
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Answers to frequently asked questions about MS Law Office legal services',
        hero: {
          subtitle: 'FAQ',
          title: 'Answers to Common Questions',
          description: 'Compilation of the most frequently asked questions and answers. If you cannot find the answer you need, feel free to contact us directly.'
        },
        faqs: [
          {
            question: 'What are the fees for legal services? Are there any hidden charges?',
            answer: 'We prioritize transparency in service pricing. Clear fees are communicated before work begins. Service charges depend on the complexity of each type of work. Initial consultation for 15-30 minutes is free. For other services, prices are agreed upon in advance every time. There are no hidden charges.',
            category: 'Pricing'
          },
          {
            question: 'How long does court litigation take and what are the procedures?',
            answer: 'Litigation duration depends on case type and complexity. Generally, civil cases may take 6-18 months. Procedures include: 1) Filing lawsuit 2) Court consideration 3) Evidence examination 4) Judgment. We will keep you informed of progress and provide consultation throughout the process, including preparing complete documents and evidence.',
            category: 'Litigation'
          },
          {
            question: 'How long do document translation and certification services take?',
            answer: 'Regular document translation takes 2-3 business days, depending on volume and document complexity. Express service can be completed within 1 day (50% additional charge). Attorney document certification can be done immediately without waiting. Certified documents are effective immediately and accepted by government agencies.',
            category: 'Documents'
          }
        ],
        contactCta: {
          title: 'Cannot find the answer you need?',
          description: 'Contact us directly for consultation tailored to your specific problem',
          phoneText: 'Call Inquiry',
          lineText: 'LINE Chat'
        },
        additionalTopics: {
          title: 'Additional Information',
          subtitle: 'Additional Information That May Be Helpful',
          description: 'Various topics that clients are interested in and frequently ask about, compiled for your convenience',
          topics: [
            {
              title: 'Company Registration',
              items: [
                'Limited company registration procedures',
                'Minimum registered capital',
                'Processing time',
                'Required registration documents'
              ]
            },
            {
              title: 'Wills and Inheritance',
              items: [
                'How to properly make a will',
                'Difference between wills and presentation letters',
                'Appointing estate administrators',
                'Inheritance procedures'
              ]
            },
            {
              title: 'Services for Foreigners',
              items: [
                'Various types of visa applications',
                'English document translation and certification',
                'Marriage registration with Thai nationals',
                'Land and property purchases'
              ]
            }
          ]
        },
        quickContact: {
          title: 'Contact Channels',
          subtitle: 'How to Contact Us',
          phone: {
            title: 'Direct Phone',
            description: 'For urgent consultation and appointments',
            number: '081-514-4783',
            hours: 'Business Hours: Mon - Fri 9:00 AM - 6:00 PM'
          },
          line: {
            title: 'LINE Official',
            description: 'Convenient for inquiries and document submission',
            id: '@Matas.s',
            hours: '24/7 response for urgent cases'
          }
        },
        cta: {
          title: 'Ready to Answer All Your Questions',
          description: 'Whether simple questions or complex problems, we are happy to provide consultation and help find the best solution for you'
        }
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
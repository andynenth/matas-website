// FAQ page translations
// Contains: pages.faq
// Visual assets moved to shared-assets.ts to eliminate duplication

import { AssetResolver } from '../asset-utils.js';

export const faqTranslations = {
  th: {
    pages: {
      faq: {
        title: 'คำถามที่พบบ่อย',
        description: 'คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับบริการทางกฎหมายของสำนักกฎหมายมิตรแสนสุข',
        hero: {
          subtitle: 'คำถามที่พบบ่อย',
          title: 'คำตอบสำหรับคำถามทั่วไป',
          description: 'รวบรวมคำถามและคำตอบที่ลูกค้าสนใจมากที่สุด หากไม่พบคำตอบที่ต้องการ สามารถติดต่อสอบถามได้โดยตรง',
          ...AssetResolver.getBackground('faq')
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
    }
  },

  en: {
    pages: {
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Answers to frequently asked questions about MS Law Office legal services',
        hero: {
          subtitle: 'FAQ',
          title: 'Answers to Common Questions',
          description: 'Compilation of the most frequently asked questions and answers. If you cannot find the answer you need, feel free to contact us directly.',
          ...AssetResolver.getBackground('faq')
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
    }
  }
} as const;
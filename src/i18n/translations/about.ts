// About page translations
// Contains: pages.about
// Visual assets moved to shared-assets.ts to eliminate duplication

import { AssetResolver } from '../asset-utils.js';

export const aboutTranslations = {
  th: {
    pages: {
      about: {
        title: 'เกี่ยวกับเรา',
        description: 'ทำความรู้จักกับทนายความเมธัส ศรีศุกร์เจริญ และทีมงานของสำนักกฎหมายมิตรแสนสุข',
        hero: {
          subtitle: 'เกี่ยวกับเรา',
          title: 'สำนักกฎหมายมิตรแสนสุข',
          description: 'ก่อตั้งขึ้นเพื่อให้บริการทางด้านกฎหมายแก่ประชาชนทั่วไปและชาวต่างชาติที่อาศัยอยู่ในประเทศไทย ด้วยความเป็นมืออาชีพและมาตรฐานการบริการที่เป็นเลิศ',
          ...AssetResolver.getBackground('about')
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
              icon: AssetResolver.getExpertiseIcon(0)
            },
            {
              title: 'กฎหมายครอบครัว',
              description: 'การสมรส การหย่า และมรดก',
              icon: AssetResolver.getExpertiseIcon(1)
            },
            {
              title: 'การรับรองเอกสาร',
              description: 'เอกสารสำหรับชาวต่างชาติและธุรกรรมระหว่างประเทศ',
              icon: AssetResolver.getExpertiseIcon(2)
            }
          ]
        },
        cta: {
          title: 'พร้อมให้คำปรึกษาแล้ววันนี้',
          description: 'ติดต่อเราเพื่อรับคำปรึกษาเบื้องต้นฟรี พร้อมแนวทางแก้ไขปัญหาที่เหมาะสมกับคุณ'
        }
      }
    }
  },

  en: {
    pages: {
      about: {
        title: 'About Us',
        description: 'Meet Attorney Matas and the team at MS Law Office',
        hero: {
          subtitle: 'About Us',
          title: 'MS Law Office',
          description: 'Established to provide legal services to the general public and foreigners residing in Thailand with professionalism and excellent service standards',
          ...AssetResolver.getBackground('about')
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
              icon: AssetResolver.getExpertiseIcon(0)
            },
            {
              title: 'Family Law',
              description: 'Marriage, divorce, and inheritance',
              icon: AssetResolver.getExpertiseIcon(1)
            },
            {
              title: 'Document Certification',
              description: 'Documents for foreigners and international transactions',
              icon: AssetResolver.getExpertiseIcon(2)
            }
          ]
        },
        cta: {
          title: 'Ready to Provide Consultation Today',
          description: 'Contact us for free initial consultation and appropriate solutions for your problems'
        }
      }
    }
  }
} as const;
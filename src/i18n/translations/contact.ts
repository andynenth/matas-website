// Contact page translations
// Contains: pages.contact
// Visual assets moved to shared-assets.ts to eliminate duplication

import { AssetResolver } from '../asset-utils.js';

export const contactTranslations = {
  th: {
    pages: {
      contact: {
        title: 'ติดต่อเรา',
        description: 'ติดต่อสำนักกฎหมายมิตรแสนสุข - ที่อยู่ เบอร์โทรศัพท์ อีเมล และแผนที่สำนักงาน',
        hero: {
          subtitle: 'ติดต่อเรา',
          title: 'ติดต่อสำนักงานกฎหมาย',
          mobileButtonText: '081-514-4783',
          lineButtonText: 'LINE แชท',
          description: 'เรายินดีให้คำปรึกษาทางกฎหมายและช่วยเหลือแก้ไขปัญหาต่างๆ ด้วยความเป็นมิตรและมาตรฐานการบริการที่เป็นเลิศ',
          ...AssetResolver.getBackground('contact')
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
      }
    }
  },

  en: {
    pages: {
      contact: {
        title: 'Contact Us',
        description: 'Contact MS Law Office for legal consultation - address, phone, email and office location',
        hero: {
          subtitle: 'Contact Us',
          title: 'Contact Our Law Office',
          mobileButtonText: '081-514-4783',
          lineButtonText: 'LINE Chat',
          description: 'We are happy to provide legal consultation and help solve various problems with friendliness and excellent service standards',
          ...AssetResolver.getBackground('contact')
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
      }
    }
  }
} as const;
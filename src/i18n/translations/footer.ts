// Footer translations
// Contains: footer

export const footerTranslations = {
  th: {
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
# Website Access Guide - สำนักกฎหมายมิตรแสนสุข / MS Law Office

## Multiple Access URLs / ลิงก์เข้าถึงเว็บไซต์

### Primary Website URLs:
- 🌐 **Main Domain**: https://mataslawoffice.com
- 🔗 **Cloudflare Pages**: https://matas-website.pages.dev
- 🔧 **Alternative Access**: https://fd6904ff.matas-website.pages.dev

---

## For Users in Thailand / สำหรับผู้ใช้ในประเทศไทย

### ปัญหาที่อาจเกิดขึ้น / Common Issues:
- บางลิงก์อาจไม่สามารถเข้าถึงได้เนื่องจากปัญหา DNS
- Some URLs may not work due to DNS resolution issues

### วิธีแก้ไขปัญหา / Solutions:

#### 1. ลองใช้ลิงก์อื่น / Try Alternative URLs:
If `matas-website.pages.dev` doesn't work, try:
- ✅ `fd6904ff.matas-website.pages.dev`
- ✅ `mataslawoffice.com` (once DNS is fully propagated)

#### 2. เปลี่ยน DNS Server / Change DNS Settings:
แนะนำให้ใช้ DNS servers ที่เสถียรกว่า:

**For Android/iPhone:**
- Go to WiFi Settings → Advanced → DNS
- Use: `1.1.1.1` and `1.0.0.1` (Cloudflare DNS)
- Alternative: `8.8.8.8` and `8.8.4.4` (Google DNS)

**For Windows:**
1. Control Panel → Network Connections
2. Right-click WiFi → Properties
3. Select IPv4 → Properties
4. Use these DNS servers: `1.1.1.1` and `1.0.0.1`

**For Mac:**
1. System Preferences → Network
2. Select WiFi → Advanced → DNS
3. Add: `1.1.1.1` and `1.0.0.1`

#### 3. ใช้ VPN / Use VPN:
หากยังไม่สามารถเข้าถึงได้ ลองใช้ VPN:
- ProtonVPN (Free)
- Cloudflare WARP (Free)
- Any reliable VPN service

---

## For Users in Canada & Other Countries / สำหรับผู้ใช้ในแคนาดาและประเทศอื่นๆ

### Primary Access:
- ✅ **https://matas-website.pages.dev** - Should work normally
- ✅ **https://mataslawoffice.com** - Main website domain

### Backup Access:
- If the main URLs don't work, try: `https://fd6904ff.matas-website.pages.dev`

---

## Technical Details / รายละเอียดทางเทคนิค

### DNS Configuration:
- **Primary Domain**: mataslawoffice.com → 192.64.119.42
- **Cloudflare Pages**: matas-website.pages.dev → 172.66.44.120, 172.66.47.136
- **Alternative Access**: fd6904ff.matas-website.pages.dev (Preview deployment)

### Known Issues:
1. **Thailand DNS Filtering**: Some Thai ISPs may filter `*.pages.dev` domains
2. **Quad9 DNS Blocking**: The DNS provider Quad9 (9.9.9.9) blocks pages.dev globally
3. **Regional DNS Variations**: Different DNS resolution in different countries

### Status Check:
If you're experiencing issues, you can check:
- https://downforeveryoneorjustme.com/matas-website.pages.dev
- https://downforeveryoneorjustme.com/mataslawoffice.com

---

## Contact Information / ติดต่อเรา

หากยังไม่สามารถเข้าถึงเว็บไซต์ได้ สามารถติดต่อเราโดยตรง:

📞 **Phone**: 081-514-4783
💬 **LINE**: @Matas.s
📧 **Email**: contact@mataslawoffice.com

**Office Address**:
52/4 Mit Samphan Road, Ban Puek, Mueang Chonburi, Chonburi 20130, Thailand

---

## Language Versions / เลือกภาษา

- 🇹🇭 **Thai**: https://[website-url]/
- 🇬🇧 **English**: https://[website-url]/en/

*Note: Replace `[website-url]` with any of the working URLs above*

---

**Last Updated**: March 2026
**Maintained by**: MS Law Office IT Team
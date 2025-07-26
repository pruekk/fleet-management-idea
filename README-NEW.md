# Fleet Management System

ระบบจัดการขนส่งและรถโม่ปูนซีเมนต์ สำหรับผู้ใช้งานไทยอายุ 30-50 ปี

## การติดตั้งและรันโปรเจค

### ความต้องการของระบบ

- Node.js เวอร์ชัน 18+
- pnpm หรือ npm
- เบราว์เซอร์ที่รองรับ (Chrome, Firefox, Safari, Edge)

### ขั้นตอนการติดตั้ง

1. **โคลนโปรเจค**

   ```bash
   git clone <repository-url>
   cd fleet-management-idea
   ```

2. **ติดตั้ง dependencies**

   ```bash
   pnpm install
   # หรือ
   npm install
   ```

3. **รันโปรเจคในโหมด development**

   ```bash
   pnpm dev
   # หรือ
   npm run dev
   ```

4. **เปิดเบราว์เซอร์**
   ไปที่ `http://localhost:3000`

## โครงสร้างโปรเจค (อัปเดต 2024)

```
fleet-management-idea/
├── app/                    # หน้าเว็บแอปพลิเคชัน (App Router)
│   ├── page.tsx           # หน้าแรก (redirect ไป /login)
│   ├── login/             # หน้าเข้าสู่ระบบ
│   ├── dashboard/         # หน้าแดชบอร์ดหลัก
│   ├── user/
│   │   └── settings/      # ตั้งค่าผู้ใช้ (Dark mode, Font size)
│   ├── basic-data/        # ข้อมูลพื้นฐาน
│   │   ├── companies/     # จัดการข้อมูลบริษัท
│   │   ├── employees/     # ข้อมูลพนักงานพื้นฐาน
│   │   ├── trucks/        # จัดการรถโม่
│   │   └── transport/     # จัดการขนส่ง
│   ├── customers/         # จัดการลูกค้า
│   │   ├── page.tsx       # รายชื่อลูกค้า
│   │   ├── factories/     # โรงงานของลูกค้า
│   │   └── quotations/    # ใบเสนอราคา
│   ├── suppliers/         # จัดการซัพพลายเออร์
│   ├── employees/         # จัดการข้อมูลพนักงาน
│   │   ├── basic-info/    # ข้อมูลพื้นฐานพนักงาน
│   │   ├── monthly-income/# รายได้ประจำเดือน
│   │   ├── annual-income/ # รายได้ประจำปี
│   │   └── tax-management/# จัดการภาษีเงินได้
│   ├── monthly-operations/# ปฏิบัติการรายเดือน
│   │   ├── trips/         # บันทึกเที่ยววิ่ง
│   │   ├── billing/       # วางบิลลูกค้า
│   │   ├── fuel/          # จัดการค่าน้ำมัน
│   │   ├── maintenance/   # ซ่อมบำรุงรถ
│   │   ├── employees/     # สรุปพนักงานรายเดือน
│   │   └── excel-templates/ # เทมเพลต Excel
│   ├── company/           # จัดการข้อมูลบริษัท
│   │   ├── income/        # รายได้บริษัท
│   │   ├── expenses/      # รายจ่ายบริษัท
│   │   └── settings/      # ตั้งค่าบริษัท
│   ├── reports/           # รายงานต่างๆ
│   ├── gpm/              # ระบบ GPM
│   ├── line-oa/          # ระบบ LINE OA
│   │   ├── send/          # ส่งข้อความ
│   │   ├── templates/     # จัดการเทมเพลต
│   │   ├── history/       # ประวัติการส่ง
│   │   └── analytics/     # วิเคราะห์ผล
│   ├── notifications/     # ระบบการแจ้งเตือน
│   ├── approval-system/   # ระบบอนุมัติ
│   └── admin/            # การจัดการระบบ
│       ├── users/         # จัดการผู้ใช้งาน
│       ├── roles/         # จัดการบทบาท
│       ├── permissions/   # จัดการสิทธิ์การเข้าถึง
│       └── system/        # ตั้งค่าระบบ
├── components/            # คอมโพเนนต์ที่ใช้ซ้ำ
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # ส่วนหัว (พร้อม theme toggle)
│   ├── sidebar.tsx       # แถบข้าง (responsive)
│   ├── app-layout.tsx    # เลย์เอาต์หลัก (header + sidebar)
│   └── theme-provider.tsx # Provider สำหรับ dark mode
├── hooks/                # Custom React hooks
├── lib/                  # ฟังก์ชันช่วยเหลือ
└── styles/               # ไฟล์ CSS และ Tailwind
```

## ฟีเจอร์หลักที่เพิ่มใหม่

### 🎨 การรองรับ Dark Mode

- Toggle สลับโหมดมืด/สว่างใน header
- บันทึกการตั้งค่าใน localStorage
- ใช้ next-themes สำหรับการจัดการ theme
- ทุก component รองรับ dark mode

### ⚙️ ตั้งค่าผู้ใช้

- ปรับขนาดฟอนต์ (เล็ก, กลาง, ใหญ่)
- เปิด/ปิด dark mode
- บันทึกการตั้งค่าอัตโนมัติ

### 🔐 ระบบสิทธิ์การเข้าถึง

- ซ่อนเมนูหลักหากไม่มีสิทธิ์เข้าถึงเมนูย่อย
- จัดการบทบาทผู้ใช้ (ฝ่ายบริหาร, ผู้ดูแลระบบ, etc.)
- ควบคุมการแสดงผลตามสิทธิ์

### 📱 Responsive Design

- รองรับทุกขนาดหน้าจอ
- Sidebar แบบ collapsible
- Mobile-friendly navigation

### 🚀 การจัดการเส้นทาง

- **หน้าแรก**: redirect ไป `/login`
- **หลังเข้าสู่ระบบ**: ไป `/dashboard`
- **ตั้งค่าผู้ใช้**: `/user/settings` (เปลี่ยนจาก `/dashboard/settings`)

## ฟีเจอร์หลัก

### 📊 แดชบอร์ดและรายงาน

- ภาพรวมการดำเนินงาน
- สถิติและกราฟ
- การแจ้งเตือนที่สำคัญ

### 👥 การจัดการผู้ใช้และพนักงาน

- ข้อมูลพนักงานพื้นฐาน
- รายได้ประจำเดือนและประจำปี
- จัดการภาษีเงินได้
- ระบบสิทธิ์และบทบาท

### 🚛 การดำเนินงานขนส่ง

- บันทึกเที่ยววิ่ง
- จัดการรถโม่และการซ่อมบำรุง
- ติดตามค่าน้ำมันและค่าใช้จ่าย
- วางบิลและออกใบเสนอราคา

### 🏢 การจัดการลูกค้าและซัพพลายเออร์

- ข้อมูลลูกค้าและโรงงาน
- ใบเสนอราคาและสัญญา
- ข้อมูลซัพพลายเออร์

### 📱 ระบบ LINE OA

- ส่งข้อความถึงลูกค้า
- จัดการเทมเพลตข้อความ
- วิเคราะห์ผลการส่ง
- ประวัติการติดต่อ

### 📄 Excel Templates

- เทมเพลตสำหรับงานต่างๆ
- ดาวน์โหลดและอัพโหลด
- คู่มือการใช้งาน

## การแก้ปัญหา

### ปัญหาที่พบบ่อย

1. **ไม่สามารถรันโปรเจคได้**

   ```bash
   # ลบ cache และติดตั้งใหม่
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   pnpm dev
   ```

2. **หน้าเว็บแสดงผลไม่ถูกต้อง**

   - ตรวจสอบ console สำหรับข้อผิดพลาด
   - เคลียร์แคชเบราว์เซอร์ (Ctrl+Shift+R)
   - ตรวจสอบว่าไฟล์ `page.tsx` อยู่ในโฟลเดอร์ที่ถูกต้อง

3. **Dark mode ไม่ทำงาน**

   - ตรวจสอบว่า `ThemeProvider` ครอบ component ทั้งหมดแล้ว
   - เคลียร์ localStorage: `localStorage.clear()`

4. **การนำทางใน sidebar ไม่ทำงาน**
   - ตรวจสอบ path ใน `sidebar.tsx`
   - ตรวจสอบว่าไฟล์ page.tsx อยู่ในตำแหน่งที่ถูกต้อง

### คำสั่งที่เป็นประโยชน์

```bash
# ตรวจสอบเวอร์ชัน
node --version
pnpm --version

# Development
pnpm dev           # รันเซิร์ฟเวอร์ development
pnpm build         # สร้าง production build
pnpm start         # รัน production server
pnpm lint          # ตรวจสอบ code quality

# การ debug
pnpm dev --turbo   # รันด้วย turbo mode
pnpm build --debug # build พร้อม debug info
```

### การตรวจสอบ Navigation

หากการนำทางไม่ทำงาน ให้ตรวจสอบ:

1. ไฟล์ `page.tsx` อยู่ในโฟลเดอร์ที่ถูกต้องหรือไม่
2. path ใน `sidebar.tsx` ตรงกับโครงสร้างโฟลเดอร์หรือไม่
3. ไม่มี error ใน browser console หรือไม่

## เทคโนโลยีที่ใช้

- **Framework**: Next.js 15 (App Router)
- **UI Library**: shadcn/ui + Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes (Dark/Light mode)
- **Type Safety**: TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS + CSS Variables

## สถานะปัจจุบัน (เสร็จสิ้น)

✅ **เสร็จสิ้นแล้ว:**

- โครงสร้างโฟลเดอร์ใหม่ (ไม่ใช้ /dashboard อีกต่อไป)
- ระบบ dark mode และ theme toggle
- ตั้งค่าผู้ใช้ (dark mode, font size)
- การจัดการสิทธิ์การเข้าถึงเมนู
- หน้า login เป็นหน้าแรก
- Sidebar และ Header ที่รองรับ responsive
- ทุกหน้าใช้ theme-aware components
- ลบไฟล์และโฟลเดอร์เก่าที่ไม่ใช้แล้ว
- สร้างหน้าที่ขาดหายไปทั้งหมด
- ไม่มี TypeScript errors
- README อัปเดตด้วยข้อมูลใหม่

🔄 **พร้อมใช้งาน:**

- รัน `pnpm dev` เพื่อเริ่มใช้งาน
- ทุก navigation link ทำงานได้
- ทุกหน้ามี UI ที่สมบูรณ์และใช้งานได้

## ติดต่อและสนับสนุน

หากพบปัญหาหรือต้องการความช่วยเหลือ โปรดติดต่อทีมพัฒนา

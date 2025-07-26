import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AdminPageLayout } from "@/components/admin-page-layout";
import { Cog, Database, Shield, Bell, Mail, Save, RefreshCw } from "lucide-react";

export default function AdminSystemPage() {
	const headerActions = (
		<div className="flex gap-2">
			<Button variant="outline">
				<RefreshCw className="h-4 w-4 mr-2" />
				รีสตาร์ทระบบ
			</Button>
			<Button>
				<Save className="h-4 w-4 mr-2" />
				บันทึกการตั้งค่า
			</Button>
		</div>
	);

	return (
		<AdminPageLayout
			title="ตั้งค่าระบบ"
			description="การตั้งค่าทั่วไปและการบำรุงรักษาระบบ"
			headerActions={headerActions}
		>
			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เวลาทำงานระบบ</CardTitle>
						<Cog className="h-4 w-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">99.8%</div>
						<p className="text-xs text-muted-foreground">อัพไทม์ 30 วัน</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ข้อมูลทั้งหมด</CardTitle>
						<Database className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">2.4 GB</div>
						<p className="text-xs text-muted-foreground">ใช้พื้นที่ 24%</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">การสำรองข้อมูล</CardTitle>
						<Shield className="h-4 w-4 text-purple-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-purple-600">12 ชม.</div>
						<p className="text-xs text-muted-foreground">สำรองล่าสุด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">ผู้ใช้ออนไลน์</CardTitle>
						<Bell className="h-4 w-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">23</div>
						<p className="text-xs text-muted-foreground">ขณะนี้</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Cog className="h-5 w-5" />
							การตั้งค่าทั่วไป
						</CardTitle>
						<CardDescription>การตั้งค่าพื้นฐานของระบบ</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="company-name">ชื่อระบบ</Label>
							<Input id="company-name" defaultValue="ระบบจัดการกองรถโม่ปูน" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="timezone">เขตเวลา</Label>
							<Input id="timezone" defaultValue="Asia/Bangkok (GMT+7)" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="language">ภาษาเริ่มต้น</Label>
							<Input id="language" defaultValue="ไทย (TH)" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="currency">สกุลเงิน</Label>
							<Input id="currency" defaultValue="บาทไทย (THB)" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Shield className="h-5 w-5" />
							ความปลอดภัย
						</CardTitle>
						<CardDescription>การตั้งค่าความปลอดภัยและการเข้าถึง</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="session-timeout">หมดเวลาเซสชัน (นาที)</Label>
							<Input id="session-timeout" type="number" defaultValue="60" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="password-policy">นโยบายรหัสผ่าน</Label>
							<Input id="password-policy" defaultValue="ความยาวขั้นต่ำ 8 ตัวอักษร" />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<Label>บังคับใช้ 2FA</Label>
								<p className="text-sm text-muted-foreground">การยืนยันตัวตนสองขั้นตอน</p>
							</div>
							<Switch />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<Label>บันทึกการเข้าสู่ระบบ</Label>
								<p className="text-sm text-muted-foreground">เก็บประวัติการล็อกอิน</p>
							</div>
							<Switch defaultChecked />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Database className="h-5 w-5" />
							การจัดการข้อมูล
						</CardTitle>
						<CardDescription>การตั้งค่าเกี่ยวกับข้อมูลและการสำรอง</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="backup-time">เวลาสำรองข้อมูลอัตโนมัติ</Label>
							<Input id="backup-time" defaultValue="02:00" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="retention">เก็บข้อมูลสำรอง (วัน)</Label>
							<Input id="retention" type="number" defaultValue="30" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="cleanup">ล้างข้อมูลเก่า (เดือน)</Label>
							<Input id="cleanup" type="number" defaultValue="12" />
						</div>
						<div className="flex gap-2">
							<Button variant="outline" className="flex-1">
								สำรองข้อมูลทันที
							</Button>
							<Button variant="outline" className="flex-1">
								คืนค่าข้อมูล
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Mail className="h-5 w-5" />
							การแจ้งเตือน
						</CardTitle>
						<CardDescription>การตั้งค่าการส่งการแจ้งเตือน</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email-server">เซิร์ฟเวอร์อีเมล</Label>
							<Input id="email-server" defaultValue="smtp.company.com" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email-port">พอร์ต</Label>
							<Input id="email-port" type="number" defaultValue="587" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="sender-email">อีเมลผู้ส่ง</Label>
							<Input id="sender-email" type="email" defaultValue="system@company.com" />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<Label>เปิดใช้งานการแจ้งเตือน</Label>
								<p className="text-sm text-muted-foreground">ส่งอีเมลแจ้งเตือนอัตโนมัติ</p>
							</div>
							<Switch defaultChecked />
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>การบำรุงรักษาระบบ</CardTitle>
					<CardDescription>เครื่องมือสำหรับการดูแลและบำรุงรักษาระบบ</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-3">
						<Button variant="outline" className="h-20 flex flex-col gap-2">
							<Database className="h-6 w-6" />
							<span>ล้างแคช</span>
						</Button>
						<Button variant="outline" className="h-20 flex flex-col gap-2">
							<RefreshCw className="h-6 w-6" />
							<span>รีบิลด์ดัชนี</span>
						</Button>
						<Button variant="outline" className="h-20 flex flex-col gap-2">
							<Shield className="h-6 w-6" />
							<span>ตรวจสอบความปลอดภัย</span>
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>บันทึกระบบ</CardTitle>
					<CardDescription>กิจกรรมและข้อผิดพลาดของระบบล่าสุด</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<div className="flex-1">
								<p className="text-sm font-medium">ระบบเริ่มต้นการทำงานสำเร็จ</p>
								<p className="text-xs text-muted-foreground">25 ก.ค. 2568 08:00:00</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<div className="flex-1">
								<p className="text-sm font-medium">สำรองข้อมูลเสร็จสิ้น</p>
								<p className="text-xs text-muted-foreground">25 ก.ค. 2568 02:00:00</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<div className="flex-1">
								<p className="text-sm font-medium">การใช้พื้นที่ดิสก์สูง (80%)</p>
								<p className="text-xs text-muted-foreground">24 ก.ค. 2568 14:30:00</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<div className="flex-1">
								<p className="text-sm font-medium">อัปเดตระบบเสร็จสิ้น</p>
								<p className="text-xs text-muted-foreground">24 ก.ค. 2568 03:00:00</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</AdminPageLayout>
	);
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Save } from "lucide-react";

export default function CompanySettingsPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ตั้งค่าบริษัท</h1>
				<p className="text-muted-foreground">จัดการข้อมูลและการตั้งค่าของบริษัท</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Building className="h-5 w-5" />
							ข้อมูลบริษัท
						</CardTitle>
						<CardDescription>ข้อมูลพื้นฐานของบริษัท</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="company-name">ชื่อบริษัท</Label>
							<Input
								id="company-name"
								placeholder="ชื่อบริษัท"
								defaultValue="บริษัท ขนส่งโม่ปูน จำกัด"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="tax-id">เลขประจำตัวผู้เสียภาษี</Label>
							<Input id="tax-id" placeholder="0123456789012" defaultValue="0123456789012" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="address">ที่อยู่</Label>
							<Textarea
								id="address"
								placeholder="ที่อยู่บริษัท"
								className="min-h-[100px]"
								defaultValue="123/45 หมู่ 6 ตำบลบางพลี อำเภอบางพลี จังหวัดสมุทรปราการ 10540"
							/>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>ข้อมูลติดต่อ</CardTitle>
						<CardDescription>ช่องทางการติดต่อของบริษัท</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="phone">เบอร์โทรศัพท์</Label>
							<Input id="phone" placeholder="02-123-4567" defaultValue="02-123-4567" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">อีเมล</Label>
							<Input
								id="email"
								type="email"
								placeholder="info@company.com"
								defaultValue="info@company.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="website">เว็บไซต์</Label>
							<Input id="website" placeholder="www.company.com" defaultValue="www.company.com" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="line">LINE ID</Label>
							<Input id="line" placeholder="@company" defaultValue="@company" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>การตั้งค่าธุรกิจ</CardTitle>
						<CardDescription>การตั้งค่าการดำเนินธุรกิจ</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="working-hours">เวลาทำการ</Label>
							<Input id="working-hours" placeholder="08:00 - 17:00" defaultValue="08:00 - 17:00" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="working-days">วันทำการ</Label>
							<Input id="working-days" placeholder="จันทร์ - เสาร์" defaultValue="จันทร์ - เสาร์" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="currency">สกุลเงิน</Label>
							<Input id="currency" placeholder="บาท (THB)" defaultValue="บาท (THB)" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>การตั้งค่าระบบ</CardTitle>
						<CardDescription>การตั้งค่าระบบและการรายงาน</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="backup-time">เวลาสำรองข้อมูล</Label>
							<Input id="backup-time" placeholder="02:00" defaultValue="02:00" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="report-email">อีเมลรายงาน</Label>
							<Input
								id="report-email"
								type="email"
								placeholder="report@company.com"
								defaultValue="report@company.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="data-retention">เก็บข้อมูล (เดือน)</Label>
							<Input id="data-retention" type="number" placeholder="12" defaultValue="12" />
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="flex justify-end">
				<Button>
					<Save className="h-4 w-4 mr-2" />
					บันทึกการตั้งค่า
				</Button>
			</div>
		</div>
	);
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminPageLayout } from "@/components/admin-page-layout";
import { Users, Shield, UserCog, Cog } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
	return (
		<AdminPageLayout title="ตั้งค่าระบบ" description="จัดการระบบและสิทธิ์การเข้าถึงต่างๆ">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Link href="/admin/users">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
							<CardTitle>ผู้ใช้งาน</CardTitle>
							<CardDescription>จัดการผู้ใช้งานระบบ</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								จัดการผู้ใช้งาน
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/admin/roles">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
							<CardTitle>บทบาท</CardTitle>
							<CardDescription>กำหนดบทบาทและหน้าที่</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								จัดการบทบาท
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/admin/permissions">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<UserCog className="h-8 w-8 mx-auto mb-2 text-orange-600" />
							<CardTitle>สิทธิ์การเข้าถึง</CardTitle>
							<CardDescription>กำหนดสิทธิ์การใช้งาน</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								จัดการสิทธิ์
							</Button>
						</CardContent>
					</Card>
				</Link>

				<Link href="/admin/system">
					<Card className="cursor-pointer hover:shadow-md transition-shadow">
						<CardHeader className="text-center">
							<Cog className="h-8 w-8 mx-auto mb-2 text-purple-600" />
							<CardTitle>ระบบ</CardTitle>
							<CardDescription>การตั้งค่าระบบทั่วไป</CardDescription>
						</CardHeader>
						<CardContent>
							<Button className="w-full" variant="outline">
								ตั้งค่าระบบ
							</Button>
						</CardContent>
					</Card>
				</Link>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>สถิติระบบ</CardTitle>
						<CardDescription>ข้อมูลการใช้งานระบบโดยรวม</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span>ผู้ใช้งานทั้งหมด</span>
								<span className="font-bold text-2xl">48</span>
							</div>
							<div className="flex items-center justify-between">
								<span>ผู้ใช้งานออนไลน์</span>
								<span className="font-bold text-green-600">23</span>
							</div>
							<div className="flex items-center justify-between">
								<span>บทบาททั้งหมด</span>
								<span className="font-bold text-blue-600">5</span>
							</div>
							<div className="flex items-center justify-between">
								<span>การเข้าสู่ระบบวันนี้</span>
								<span className="font-bold text-purple-600">67</span>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>กิจกรรมล่าสุด</CardTitle>
						<CardDescription>กิจกรรมการจัดการระบบล่าสุด</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="border-b pb-2">
								<p className="font-medium">เพิ่มผู้ใช้งานใหม่: สมชาย</p>
								<p className="text-sm text-muted-foreground">2 ชั่วโมงที่แล้ว</p>
							</div>
							<div className="border-b pb-2">
								<p className="font-medium">แก้ไขสิทธิ์: ผู้จัดการฝ่ายขาย</p>
								<p className="text-sm text-muted-foreground">5 ชั่วโมงที่แล้ว</p>
							</div>
							<div>
								<p className="font-medium">อัปเดตการตั้งค่าระบบ</p>
								<p className="text-sm text-muted-foreground">1 วันที่แล้ว</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</AdminPageLayout>
	);
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, CreditCard, FileText, FolderOpen } from "lucide-react";

export default function BasicDataCompaniesPage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-gray-900">ตั้งค่าบริษัท</h1>
				<p className="text-gray-600">จัดการข้อมูลบริษัทในรูปแบบนิติบุคคล</p>
			</div>

			<Tabs defaultValue="company-info" className="space-y-4">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
					<TabsTrigger value="company-info">ข้อมูลบริษัท</TabsTrigger>
					<TabsTrigger value="bank-info">ข้อมูลธนาคาร</TabsTrigger>
					<TabsTrigger value="licenses">ใบอนุญาต</TabsTrigger>
					<TabsTrigger value="documents">เอกสาร</TabsTrigger>
				</TabsList>

				<TabsContent value="company-info" className="mt-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Building className="h-5 w-5" />
								ข้อมูลบริษัท
							</CardTitle>
							<CardDescription>ข้อมูลทั่วไปและการจดทะเบียนของบริษัท</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<h3 className="text-lg font-semibold">ข้อมูลทั่วไป</h3>
									<div className="space-y-3">
										<div>
											<Label htmlFor="company-name">ชื่อบริษัท (ไทย)</Label>
											<Input id="company-name" defaultValue="บริษัท ขนส่งคอนกรีต จำกัด" />
										</div>
										<div>
											<Label htmlFor="company-name-en">ชื่อบริษัท (อังกฤษ)</Label>
											<Input id="company-name-en" defaultValue="Concrete Transport Co., Ltd." />
										</div>
										<div>
											<Label htmlFor="tax-id">เลขประจำตัวผู้เสียภาษี</Label>
											<Input id="tax-id" defaultValue="0123456789012" />
										</div>
										<div>
											<Label htmlFor="registration-number">เลขทะเบียนบริษัท</Label>
											<Input id="registration-number" defaultValue="0123456789012" />
										</div>
										<div>
											<Label htmlFor="established-date">วันที่จดทะเบียน</Label>
											<Input id="established-date" type="date" defaultValue="2010-01-15" />
										</div>
										<div>
											<Label htmlFor="capital">ทุนจดทะเบียน</Label>
											<Input id="capital" type="number" defaultValue="5000000" />
										</div>
										<div>
											<Label htmlFor="business-type">ประเภทธุรกิจ</Label>
											<Input id="business-type" defaultValue="ขนส่งและโลจิสติกส์" />
										</div>
									</div>
								</div>
								<div className="space-y-4">
									<h3 className="text-lg font-semibold">ข้อมูลติดต่อ</h3>
									<div className="space-y-3">
										<div>
											<Label htmlFor="address">ที่อยู่</Label>
											<Textarea
												id="address"
												defaultValue="123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110"
												className="min-h-[80px]"
											/>
										</div>
										<div>
											<Label htmlFor="phone">เบอร์โทรศัพท์</Label>
											<Input id="phone" defaultValue="02-123-4567" />
										</div>
										<div>
											<Label htmlFor="fax">เบอร์แฟกซ์</Label>
											<Input id="fax" defaultValue="02-123-4568" />
										</div>
										<div>
											<Label htmlFor="email">อีเมล</Label>
											<Input id="email" type="email" defaultValue="info@concrete-transport.com" />
										</div>
										<div>
											<Label htmlFor="website">เว็บไซต์</Label>
											<Input id="website" defaultValue="www.concrete-transport.com" />
										</div>
									</div>
								</div>
							</div>
							<div className="mt-6 flex gap-2">
								<Button>บันทึกข้อมูล</Button>
								<Button variant="outline">ยกเลิก</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="bank-info" className="mt-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<CreditCard className="h-5 w-5" />
								ข้อมูลธนาคาร
							</CardTitle>
							<CardDescription>บัญชีธนาคารของบริษัท</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-3">
									<div>
										<Label htmlFor="bank-name">ชื่อธนาคาร</Label>
										<Input id="bank-name" defaultValue="ธนาคารกรุงเทพ จำกัด (มหาชน)" />
									</div>
									<div>
										<Label htmlFor="branch">สาขา</Label>
										<Input id="branch" defaultValue="สาขาสุขุมวิท" />
									</div>
									<div>
										<Label htmlFor="account-number">เลขที่บัญชี</Label>
										<Input id="account-number" defaultValue="123-4-56789-0" />
									</div>
								</div>
								<div className="space-y-3">
									<div>
										<Label htmlFor="account-name">ชื่อบัญชี</Label>
										<Input id="account-name" defaultValue="บริษัท ขนส่งคอนกรีต จำกัด" />
									</div>
									<div>
										<Label htmlFor="account-type">ประเภทบัญชี</Label>
										<Input id="account-type" defaultValue="บัญชีออมทรัพย์" />
									</div>
									<div>
										<Label htmlFor="swift-code">รหัส SWIFT</Label>
										<Input id="swift-code" defaultValue="BKKBTHBK" />
									</div>
								</div>
							</div>
							<div className="mt-6 flex gap-2">
								<Button>บันทึกข้อมูล</Button>
								<Button variant="outline">ยกเลิก</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="licenses" className="mt-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<FileText className="h-5 w-5" />
								ใบอนุญาต
							</CardTitle>
							<CardDescription>ใบอนุญาตและใบรับรองต่างๆ</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<div>
											<Label htmlFor="transport-license">ใบอนุญาตขนส่ง</Label>
											<Input id="transport-license" defaultValue="ขส.001/2567" />
										</div>
										<div>
											<Label htmlFor="transport-expire">วันหมดอายุ</Label>
											<Input id="transport-expire" type="date" defaultValue="2025-12-31" />
										</div>
									</div>
									<div className="space-y-3">
										<div>
											<Label htmlFor="business-license">ใบทะเบียนพาณิชย์</Label>
											<Input id="business-license" defaultValue="กท.001/2567" />
										</div>
										<div>
											<Label htmlFor="business-expire">วันหมดอายุ</Label>
											<Input id="business-expire" type="date" defaultValue="2025-12-31" />
										</div>
									</div>
								</div>
							</div>
							<div className="mt-6 flex gap-2">
								<Button>บันทึกข้อมูล</Button>
								<Button variant="outline">ยกเลิก</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="documents" className="mt-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<FolderOpen className="h-5 w-5" />
								เอกสาร
							</CardTitle>
							<CardDescription>เอกสารสำคัญของบริษัท</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<h4 className="font-semibold">เอกสารก่อตั้งบริษัท</h4>
										<div className="space-y-2">
											<Button variant="outline" className="w-full justify-start">
												หนังสือรับรองการจดทะเบียน
											</Button>
											<Button variant="outline" className="w-full justify-start">
												หนังสือบริคณห์สนธิ
											</Button>
											<Button variant="outline" className="w-full justify-start">
												ข้อบังคับบริษัท
											</Button>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="font-semibold">เอกสารภาษี</h4>
										<div className="space-y-2">
											<Button variant="outline" className="w-full justify-start">
												ใบทะเบียนภาษีมูลค่าเพิ่ม
											</Button>
											<Button variant="outline" className="w-full justify-start">
												ใบทะเบียนภาษีเงินได้นิติบุคคล
											</Button>
											<Button variant="outline" className="w-full justify-start">
												ใบทะเบียนประกันสังคม
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-6 flex gap-2">
								<Button>อัปโหลดเอกสาร</Button>
								<Button variant="outline">จัดการไฟล์</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

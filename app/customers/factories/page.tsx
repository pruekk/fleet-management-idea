"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Factory, MapPin, Phone, Mail } from "lucide-react";

export default function FactoriesPage() {
	const factories = [
		{
			id: 1,
			name: "โรงงานปูนซีเมนต์ กทม.",
			address: "123 ถนนรามคำแหง กรุงเทพฯ 10250",
			phone: "02-123-4567",
			email: "contact@factory1.com",
			status: "active",
			customer: "บริษัท ABC จำกัด",
		},
		{
			id: 2,
			name: "โรงงานเซาท์อีสต์ เซเมนต์",
			address: "456 ถนนสุขุมวิท ชลบุรี 20000",
			phone: "038-987-6543",
			email: "info@southeast.com",
			status: "active",
			customer: "บริษัท XYZ จำกัด",
		},
		{
			id: 3,
			name: "โรงงานอีสเทิร์น คอนกรีต",
			address: "789 ถนนพัทยา ระยอง 21000",
			phone: "038-555-1234",
			email: "sales@eastern.com",
			status: "inactive",
			customer: "บริษัท DEF จำกัด",
		},
	];

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-foreground">โรงงาน</h1>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
					<Plus className="w-4 h-4 mr-2" />
					เพิ่มโรงงาน
				</Button>
			</div>

			<Card className="bg-card border-border">
				<CardHeader>
					<CardTitle className="text-card-foreground">ค้นหาโรงงาน</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
							<Input placeholder="ค้นหาโรงงาน..." className="pl-10 bg-background border-input" />
						</div>
						<Button variant="outline" className="border-input">
							ค้นหา
						</Button>
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{factories.map((factory) => (
					<Card
						key={factory.id}
						className="bg-card border-border hover:shadow-lg transition-shadow"
					>
						<CardHeader>
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-2">
									<Factory className="w-5 h-5 text-primary" />
									<CardTitle className="text-lg text-card-foreground">{factory.name}</CardTitle>
								</div>
								<Badge variant={factory.status === "active" ? "default" : "secondary"}>
									{factory.status === "active" ? "ใช้งาน" : "ไม่ใช้งาน"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="space-y-3">
							<div className="flex items-start gap-2 text-sm text-muted-foreground">
								<MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
								<span>{factory.address}</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Phone className="w-4 h-4" />
								<span>{factory.phone}</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Mail className="w-4 h-4" />
								<span>{factory.email}</span>
							</div>
							<div className="pt-2 border-t border-border">
								<p className="text-sm font-medium text-card-foreground">
									ลูกค้า: {factory.customer}
								</p>
							</div>
							<div className="flex gap-2 pt-2">
								<Button variant="outline" size="sm" className="flex-1">
									แก้ไข
								</Button>
								<Button variant="outline" size="sm" className="flex-1">
									ดูรายละเอียด
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

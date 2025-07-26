import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, DollarSign } from "lucide-react";

export default function CompanyIncomePage() {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">รายได้บริษัท</h1>
				<p className="text-muted-foreground">ติดตามและจัดการรายได้ของบริษัท</p>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายได้เดือนนี้</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿2,450,000</div>
						<p className="text-xs text-muted-foreground">+12% จากเดือนที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รายได้ปีนี้</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿28,500,000</div>
						<p className="text-xs text-muted-foreground">+8% จากปีที่แล้ว</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">เป้าหมาย</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">85%</div>
						<p className="text-xs text-muted-foreground">จากเป้าหมายปี</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>รายงานรายได้</CardTitle>
					<CardDescription>สรุปรายได้รายเดือนในปีนี้</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="text-center py-8">
						<p className="text-muted-foreground">กราฟรายได้จะแสดงที่นี่</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

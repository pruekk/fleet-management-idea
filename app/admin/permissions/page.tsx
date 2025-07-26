"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Shield, Search, Edit, Trash2, Settings, Eye } from "lucide-react";
import { PermissionForms } from "./permission-forms";

interface Permission {
	id: number;
	department: string;
	features: { [key: string]: string }; // feature name -> permission type
	permissionType?: string; // For backward compatibility
}

interface FormData {
	department: string;
	features: { [key: string]: string }; // feature name -> permission type
	permissionType?: string; // For backward compatibility
}

const permissions: Permission[] = [
	{
		id: 1,
		department: "ฝ่ายบริหาร",
		features: {
			แดชบอร์ด: "admin",
			ข้อมูลพื้นฐาน: "admin",
			ลูกค้า: "admin",
			ซัพพลายเออร์: "admin",
			พนักงาน: "admin",
			ดำเนินงานรายเดือน: "admin",
			รายงาน: "admin",
			การแจ้งเตือน: "admin",
			ระบบอนุมัติ: "admin",
			ตั้งค่าระบบ: "admin",
		},
		permissionType: "admin",
	},
	{
		id: 2,
		department: "ฝ่ายขนส่ง",
		features: {
			แดชบอร์ด: "view",
			ข้อมูลรถบรรทุก: "edit",
			ข้อมูลขนส่ง: "edit",
			"ดำเนินงานรายเดือน - เที่ยวขนส่ง": "edit",
			"ดำเนินงานรายเดือน - เชื้อเพลิง": "edit",
			รายงานการขนส่ง: "view",
		},
		permissionType: "edit",
	},
	{
		id: 3,
		department: "ฝ่ายปฏิบัติการ",
		features: {
			แดชบอร์ด: "view",
			ลูกค้า: "edit",
			"ดำเนินงานรายเดือน - เที่ยวขนส่ง": "edit",
			การแจ้งเตือน: "view",
			รายงานการปฏิบัติงาน: "view",
		},
		permissionType: "edit",
	},
	{
		id: 4,
		department: "ฝ่ายบัญชี",
		features: {
			แดชบอร์ด: "view",
			ลูกค้า: "view",
			ซัพพลายเออร์: "view",
			"ดำเนินงานรายเดือน - การเรียกเก็บเงิน": "edit",
			รายงานการเงิน: "edit",
			รายรับบริษัท: "edit",
			รายจ่ายบริษัท: "edit",
		},
		permissionType: "edit",
	},
	{
		id: 5,
		department: "ฝ่ายการเงิน",
		features: {
			แดชบอร์ด: "view",
			รายงานการเงิน: "view",
			รายรับบริษัท: "view",
			รายจ่ายบริษัท: "view",
			"ดำเนินงานรายเดือน - การเรียกเก็บเงิน": "view",
		},
		permissionType: "edit",
	},
	{
		id: 6,
		department: "ฝ่ายซ่อมบำรุง",
		features: {
			แดชบอร์ด: "view",
			ข้อมูลรถบรรทุก: "view",
			"ดำเนินงานรายเดือน - การซ่อมบำรุง": "edit",
			รายงานการซ่อมบำรุง: "view",
		},
		permissionType: "edit",
	},
	{
		id: 7,
		department: "ฝ่ายบุคลากร",
		features: {
			แดชบอร์ด: "view",
			ข้อมูลพนักงาน: "edit",
			"พนักงาน - ข้อมูลพื้นฐาน": "edit",
			"พนักงาน - รายได้รายเดือน": "edit",
			"พนักงาน - รายได้ประจำปี": "edit",
			"พนักงาน - จัดการภาษี": "edit",
			รายงานบุคลากร: "view",
		},
		permissionType: "edit",
	},
	{
		id: 8,
		department: "ฝ่าย IT",
		features: {
			แดชบอร์ด: "admin",
			ตั้งค่าระบบ: "admin",
			ตั้งค่าผู้ใช้งาน: "admin",
			ตั้งค่าบทบาท: "admin",
			ตั้งค่าสิทธิ์การเข้าถึง: "admin",
			รายงานระบบ: "admin",
		},
		permissionType: "admin",
	},
	{
		id: 9,
		department: "ฝ่ายขาย",
		features: {
			แดชบอร์ด: "view",
			ลูกค้า: "view",
			"ลูกค้า - โรงงาน": "view",
			"ลูกค้า - ใบเสนอราคา": "view",
			รายงานการขาย: "view",
		},
		permissionType: "view",
	},
];

const getPermissionTypeBadge = (type: string) => {
	switch (type) {
		case "admin":
			return (
				<Badge
					variant="default"
					className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
				>
					<Shield className="w-3 h-3 mr-1" />
					ผู้ดูแลระบบ
				</Badge>
			);
		case "edit":
			return (
				<Badge
					variant="default"
					className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
				>
					<Edit className="w-3 h-3 mr-1" />
					แก้ไขได้
				</Badge>
			);
		case "view":
			return (
				<Badge variant="secondary">
					<Eye className="w-3 h-3 mr-1" />
					ดูได้อย่างเดียว
				</Badge>
			);
		default:
			return <Badge variant="outline">ไม่ระบุ</Badge>;
	}
};

export default function PermissionsPage() {
	const [permissionsList, setPermissionsList] = useState<Permission[]>(permissions);
	const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null);

	// Dialog states
	const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

	// Form data
	const [formData, setFormData] = useState<FormData>({
		department: "",
		features: {},
		permissionType: "view",
	});

	// Handlers
	const handleSavePermission = () => {
		const newPermission: Permission = {
			id: permissionsList.length + 1,
			...formData,
		};
		setPermissionsList([...permissionsList, newPermission]);
		setFormData({ department: "", features: {}, permissionType: "view" });
		setIsAddDialogOpen(false);
	};

	const handleEditPermission = (permission: Permission) => {
		setSelectedPermission(permission);
		setFormData({
			department: permission.department,
			features: permission.features,
			permissionType: permission.permissionType,
		});
		setIsEditDialogOpen(true);
	};

	const handleUpdatePermission = () => {
		if (!selectedPermission) return;
		setPermissionsList(
			permissionsList.map((perm) =>
				perm.id === selectedPermission.id ? { ...selectedPermission, ...formData } : perm
			)
		);
		setFormData({ department: "", features: {}, permissionType: "view" });
		setIsEditDialogOpen(false);
		setSelectedPermission(null);
	};

	const handleDeletePermission = (permission: Permission) => {
		setSelectedPermission(permission);
		setIsDeleteDialogOpen(true);
	};

	const handleConfirmDelete = () => {
		if (!selectedPermission) return;
		setPermissionsList(permissionsList.filter((perm) => perm.id !== selectedPermission.id));
		setIsDeleteDialogOpen(false);
		setSelectedPermission(null);
	};

	const handleFeatureChange = (feature: string, permissionType: string) => {
		const updatedFeatures = { ...formData.features };
		if (permissionType === "") {
			delete updatedFeatures[feature];
		} else {
			updatedFeatures[feature] = permissionType;
		}
		setFormData({ ...formData, features: updatedFeatures });
	};
	const adminDepartments = permissions.filter((p) => p.permissionType === "admin").length;
	const editDepartments = permissions.filter((p) => p.permissionType === "edit").length;
	const viewDepartments = permissions.filter((p) => p.permissionType === "view").length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-foreground">สิทธิ์การเข้าถึง</h1>
					<p className="text-muted-foreground">
						จัดการสิทธิ์การเข้าถึงคุณสมบัติของระบบสำหรับแต่ละฝ่าย
					</p>
				</div>
				<Button
					className="bg-primary hover:bg-primary/90 text-primary-foreground"
					onClick={() => setIsAddDialogOpen(true)}
				>
					<Settings className="h-4 w-4 mr-2" />
					ตั้งค่าสิทธิ์
				</Button>
			</div>

			{/* Summary Cards */}
			<div className="grid gap-6 md:grid-cols-4">
				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ฝ่ายทั้งหมด</CardTitle>
						<Shield className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{permissions.length}</div>
						<p className="text-xs text-muted-foreground">ที่มีสิทธิ์กำหนด</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ผู้ดูแลระบบ</CardTitle>
						<Shield className="h-4 w-4 text-red-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">{adminDepartments}</div>
						<p className="text-xs text-muted-foreground">ฝ่าย</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">แก้ไขได้</CardTitle>
						<Edit className="h-4 w-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">{editDepartments}</div>
						<p className="text-xs text-muted-foreground">ฝ่าย</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ดูได้อย่างเดียว</CardTitle>
						<Eye className="h-4 w-4 text-gray-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-gray-600">{viewDepartments}</div>
						<p className="text-xs text-muted-foreground">ฝ่าย</p>
					</CardContent>
				</Card>
			</div>

			{/* Permissions Table */}
			<Card className="bg-card border border-border">
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-foreground">สิทธิ์การเข้าถึงตามฝ่าย</CardTitle>
							<CardDescription className="text-muted-foreground">
								จัดการสิทธิ์และคุณสมบัติที่แต่ละฝ่ายสามารถเข้าถึงได้
							</CardDescription>
						</div>
						<div className="flex items-center space-x-2">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
								<Input
									placeholder="ค้นหาฝ่ายหรือคุณสมบัติ..."
									className="pl-10 bg-background border-border text-foreground"
								/>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border border-border">
						<Table>
							<TableHeader>
								<TableRow className="border-border hover:bg-muted/50">
									<TableHead className="text-foreground">ฝ่าย</TableHead>
									<TableHead className="text-foreground">คุณสมบัติที่เข้าถึงได้</TableHead>
									<TableHead className="text-foreground text-center">สิทธิ์การเข้าถึง</TableHead>
									<TableHead className="text-foreground text-center">จัดการ</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{permissionsList.map((permission) => (
									<TableRow key={permission.id} className="border-border hover:bg-muted/50">
										<TableCell className="font-medium text-foreground">
											<div className="flex items-center space-x-3">
												<div className="w-3 h-3 rounded-full bg-primary"></div>
												<span>{permission.department}</span>
											</div>
										</TableCell>
										<TableCell>
											<div className="max-w-md">
												<div className="flex flex-wrap gap-1">
													{Object.entries(permission.features)
														.slice(0, 4)
														.map(([feature, permType], index) => (
															<Badge key={index} variant="outline" className="text-xs">
																{feature}
																<span className="ml-1 text-muted-foreground">
																	(
																	{permType === "view"
																		? "ดู"
																		: permType === "edit"
																		? "แก้ไข"
																		: "ผู้ดูแล"}
																	)
																</span>
															</Badge>
														))}
													{Object.keys(permission.features).length > 4 && (
														<Badge variant="outline" className="text-xs">
															+{Object.keys(permission.features).length - 4} รายการ
														</Badge>
													)}
												</div>
											</div>
										</TableCell>
										<TableCell className="text-center">
											<div className="flex flex-col items-center gap-1">
												<div className="text-xs text-muted-foreground">สิทธิ์โดยรวม</div>
												{getPermissionTypeBadge(permission.permissionType || "view")}
											</div>
										</TableCell>
										<TableCell className="text-center">
											<div className="flex justify-center space-x-2">
												<Button
													variant="outline"
													size="sm"
													className="border-border hover:bg-muted"
													onClick={() => handleEditPermission(permission)}
												>
													<Edit className="h-4 w-4" />
												</Button>
												<Button
													variant="outline"
													size="sm"
													className="border-border hover:bg-muted text-destructive hover:text-destructive"
													onClick={() => handleDeletePermission(permission)}
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			{/* Permission Forms */}
			<PermissionForms
				isAddDialogOpen={isAddDialogOpen}
				setIsAddDialogOpen={setIsAddDialogOpen}
				isEditDialogOpen={isEditDialogOpen}
				setIsEditDialogOpen={setIsEditDialogOpen}
				selectedPermission={selectedPermission}
				isDeleteDialogOpen={isDeleteDialogOpen}
				setIsDeleteDialogOpen={setIsDeleteDialogOpen}
				formData={formData}
				setFormData={setFormData}
				handleSavePermission={handleSavePermission}
				handleUpdatePermission={handleUpdatePermission}
				handleConfirmDelete={handleConfirmDelete}
				handleFeatureChange={handleFeatureChange}
				existingPermissions={permissionsList}
			/>
		</div>
	);
}

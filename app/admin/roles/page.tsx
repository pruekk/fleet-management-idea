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
import { Users, Plus, Building, Search, Edit, UserCheck, Trash2 } from "lucide-react";
import { DepartmentForms } from "./department-forms";

// Mock current user role - in real app this would come from auth context
const currentUserRole = "ผู้ดูแลระบบ"; // or "ฝ่ายบริหาร" or other roles

// Mock users data for department lead/member selection
const availableUsers = [
	{ id: 1, name: "สมชาย ใจดี", email: "somchai@company.com" },
	{ id: 2, name: "วิชัย รักงาน", email: "wichai@company.com" },
	{ id: 3, name: "สุดา ขยันดี", email: "suda@company.com" },
	{ id: 4, name: "ประยุทธ์ มีวินัย", email: "prayuth@company.com" },
	{ id: 5, name: "มาลี ใจซื่อ", email: "malee@company.com" },
	{ id: 6, name: "อนุชา มั่นคง", email: "anucha@company.com" },
	{ id: 7, name: "วาสนา เป็นสุข", email: "wasana@company.com" },
	{ id: 8, name: "วิทยา ขับดี", email: "witya@company.com" },
	{ id: 9, name: "สมศักดิ์ มั่นใจ", email: "somsak@company.com" },
	{ id: 10, name: "สุรเชษฐ์ ทำงาน", email: "surachet@company.com" },
	{ id: 11, name: "วิมลา ช่วยงาน", email: "wimala@company.com" },
	{ id: 12, name: "อนุชิต มั่นคง", email: "anuchit@company.com" },
];

interface Department {
	id: number;
	name: string;
	description: string;
	memberCount: number;
	leadName: string;
	leadId: number;
	members: string[];
	memberIds: number[];
	color: string;
}

interface FormData {
	name: string;
	description: string;
	leadId: number | null;
	memberIds: number[];
}

const departmentsData: Department[] = [
	{
		id: 1,
		name: "ฝ่ายบริหาร",
		description: "ดูแลและบริหารจัดการองค์กรโดยรวม",
		memberCount: 5,
		leadName: "สมชาย ใจดี",
		leadId: 1,
		members: ["สมชาย ใจดี", "วิชัย รักงาน", "อนุชิต มั่นคง"],
		memberIds: [1, 2, 12],
		color: "blue",
	},
	{
		id: 2,
		name: "ฝ่ายขนส่ง",
		description: "จัดการการขนส่งสินค้าและการดำเนินงานรถบรรทุก",
		memberCount: 12,
		leadName: "สมชาย ใจดี",
		leadId: 1,
		members: ["สมชาย ใจดี", "วิทยา ขับดี", "สมศักดิ์ มั่นใจ", "ณรงค์ขับเก่ง"],
		memberIds: [1, 8, 9],
		color: "green",
	},
	{
		id: 3,
		name: "ฝ่ายปฏิบัติการ",
		description: "ดูแลการปฏิบัติงานในแต่ละพื้นที่",
		memberCount: 8,
		leadName: "สุรเชษฐ์ ทำงาน",
		leadId: 10,
		members: ["สุรเชษฐ์ ทำงาน", "วิมลา ช่วยงาน", "สมชาย ใจดี"],
		memberIds: [10, 11, 1],
		color: "orange",
	},
	{
		id: 4,
		name: "ฝ่ายบัญชี",
		description: "จัดการด้านการเงินและบัญชี",
		memberCount: 4,
		leadName: "สุดา ขยันดี",
		leadId: 3,
		members: ["สุดา ขยันดี", "วาสนา คิดเลข", "มาลัย ทำบัญชี"],
		memberIds: [3, 7],
		color: "purple",
	},
	{
		id: 5,
		name: "ฝ่ายการเงิน",
		description: "ดูแลเรื่องการเงินและงบประมาณ",
		memberCount: 3,
		leadName: "สุดา ขยันดี",
		leadId: 3,
		members: ["สุดา ขยันดี", "สมศักดิ์ คิดเงิน"],
		memberIds: [3, 9],
		color: "indigo",
	},
	{
		id: 6,
		name: "ฝ่ายซ่อมบำรุง",
		description: "ดูแลการซ่อมแซมและบำรุงรักษารถบรรทุก",
		memberCount: 6,
		leadName: "ประยุทธ์ มีวินัย",
		leadId: 4,
		members: ["ประยุทธ์ มีวินัย", "วิชาย ช่างคิด", "สมยศ ช่างซ่อม"],
		memberIds: [4, 8],
		color: "red",
	},
	{
		id: 7,
		name: "ฝ่ายบุคลากร",
		description: "ดูแลเรื่องบุคลากรและทรัพยากรมนุษย์",
		memberCount: 3,
		leadName: "มาลี ใจซื่อ",
		leadId: 5,
		members: ["มาลี ใจซื่อ", "สุนทรี ดูแล"],
		memberIds: [5],
		color: "pink",
	},
	{
		id: 8,
		name: "ฝ่าย IT",
		description: "ดูแลระบบเทคโนโลยีสารสนเทศ",
		memberCount: 2,
		leadName: "อนุชา มั่นคง",
		leadId: 6,
		members: ["อนุชา มั่นคง", "ปิติ พัฒนา"],
		memberIds: [6],
		color: "cyan",
	},
	{
		id: 9,
		name: "ฝ่ายขาย",
		description: "ดูแลการขายและหาลูกค้าใหม่",
		memberCount: 4,
		leadName: "วาสนา เป็นสุข",
		leadId: 7,
		members: ["วาสนา เป็นสุข", "สมหญิง ขายเก่ง", "มนต์ชัย พูดเก่ง"],
		memberIds: [7],
		color: "yellow",
	},
];

export default function DepartmentsPage() {
	const [departments, setDepartments] = useState<Department[]>(departmentsData);
	const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		description: "",
		leadId: null,
		memberIds: [],
	});

	// Permission checks
	const canAdd = ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"].includes(currentUserRole);
	const canEdit = ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"].includes(currentUserRole);
	const canDelete = currentUserRole === "ผู้ดูแลระบบ";

	const resetForm = () => {
		setFormData({
			name: "",
			description: "",
			leadId: null,
			memberIds: [],
		});
	};

	const handleAddDepartment = () => {
		if (!canAdd) return;
		resetForm();
		setIsAddDialogOpen(true);
	};

	const handleEditDepartment = (department: Department) => {
		if (!canEdit) return;
		setSelectedDepartment(department);
		setFormData({
			name: department.name,
			description: department.description,
			leadId: department.leadId,
			memberIds: department.memberIds,
		});
		setIsEditDialogOpen(true);
	};

	const handleDeleteDepartment = (department: Department) => {
		if (!canDelete) return;
		setSelectedDepartment(department);
		setIsDeleteDialogOpen(true);
	};

	const handleSaveDepartment = () => {
		if (!formData.name || !formData.description || !formData.leadId) {
			alert("กรุณากรอกข้อมูลให้ครบถ้วน");
			return;
		}

		const leadUser = availableUsers.find((user) => user.id === formData.leadId);
		const memberUsers = availableUsers.filter((user) => formData.memberIds.includes(user.id));

		const newDepartment: Department = {
			id: departments.length + 1,
			name: formData.name,
			description: formData.description,
			leadId: formData.leadId,
			leadName: leadUser?.name || "",
			memberIds: formData.memberIds,
			members: memberUsers.map((user) => user.name),
			memberCount: formData.memberIds.length,
			color: "blue",
		};

		setDepartments([...departments, newDepartment]);
		setIsAddDialogOpen(false);
		resetForm();
	};

	const handleUpdateDepartment = () => {
		if (!selectedDepartment || !formData.name || !formData.description || !formData.leadId) {
			alert("กรุณากรอกข้อมูลให้ครบถ้วน");
			return;
		}

		const leadUser = availableUsers.find((user) => user.id === formData.leadId);
		const memberUsers = availableUsers.filter((user) => formData.memberIds.includes(user.id));

		const updatedDepartments = departments.map((dept) =>
			dept.id === selectedDepartment.id
				? {
						...dept,
						name: formData.name,
						description: formData.description,
						leadId: formData.leadId!,
						leadName: leadUser?.name || "",
						memberIds: formData.memberIds,
						members: memberUsers.map((user) => user.name),
						memberCount: formData.memberIds.length,
				  }
				: dept
		);

		setDepartments(updatedDepartments);
		setIsEditDialogOpen(false);
		setSelectedDepartment(null);
		resetForm();
	};

	const handleConfirmDelete = () => {
		if (!selectedDepartment) return;

		const filteredDepartments = departments.filter((dept) => dept.id !== selectedDepartment.id);
		setDepartments(filteredDepartments);
		setIsDeleteDialogOpen(false);
		setSelectedDepartment(null);
	};

	const handleMemberChange = (memberId: number) => {
		setFormData((prev) => ({
			...prev,
			memberIds: prev.memberIds.includes(memberId)
				? prev.memberIds.filter((id) => id !== memberId)
				: [...prev.memberIds, memberId],
		}));
	};
	const totalMembers = departments.reduce((sum, dept) => sum + dept.memberCount, 0);
	const activeDepartments = departments.length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-foreground">ฝ่าย</h1>
					<p className="text-muted-foreground">จัดการฝ่ายต่างๆ และสมาชิกในองค์กร</p>
				</div>
				<Button
					onClick={handleAddDepartment}
					disabled={!canAdd}
					className="bg-primary hover:bg-primary/90 text-primary-foreground"
				>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มฝ่ายใหม่
				</Button>
			</div>

			{/* Summary Cards */}
			<div className="grid gap-6 md:grid-cols-3">
				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ฝ่ายทั้งหมด</CardTitle>
						<Building className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{activeDepartments}</div>
						<p className="text-xs text-muted-foreground">ฝ่ายที่ใช้งานอยู่</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">สมาชิกทั้งหมด</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{totalMembers}</div>
						<p className="text-xs text-muted-foreground">คนในทุกฝ่าย</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">เฉลี่ยต่อฝ่าย</CardTitle>
						<UserCheck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">
							{Math.round(totalMembers / activeDepartments)}
						</div>
						<p className="text-xs text-muted-foreground">คนต่อฝ่าย</p>
					</CardContent>
				</Card>
			</div>

			{/* Department Table */}
			<Card className="bg-card border border-border">
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-foreground">รายชื่อฝ่ายและสมาชิก</CardTitle>
							<CardDescription className="text-muted-foreground">
								รายละเอียดฝ่ายต่างๆ และสมาชิกในแต่ละฝ่าย
							</CardDescription>
						</div>
						<div className="flex items-center space-x-2">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
								<Input
									placeholder="ค้นหาฝ่าย..."
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
									<TableHead className="text-foreground">ชื่อฝ่าย</TableHead>
									<TableHead className="text-foreground">คำอธิบาย</TableHead>
									<TableHead className="text-foreground text-center">จำนวนสมาชิก</TableHead>
									<TableHead className="text-foreground">หัวหน้าฝ่าย</TableHead>
									<TableHead className="text-foreground">สมาชิก</TableHead>
									<TableHead className="text-foreground text-center">จัดการ</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{departments.map((department) => (
									<TableRow key={department.id} className="border-border hover:bg-muted/50">
										<TableCell className="font-medium text-foreground">
											<div className="flex items-center space-x-3">
												<div className="w-3 h-3 rounded-full bg-primary"></div>
												<span>{department.name}</span>
											</div>
										</TableCell>
										<TableCell className="text-muted-foreground max-w-xs">
											<p className="truncate">{department.description}</p>
										</TableCell>
										<TableCell className="text-center">
											<Badge variant="secondary" className="font-bold">
												{department.memberCount}
											</Badge>
										</TableCell>
										<TableCell className="text-foreground font-medium">
											{department.leadName}
										</TableCell>
										<TableCell>
											<div className="flex flex-wrap gap-1 max-w-xs">
												{department.members.slice(0, 3).map((member, index) => (
													<Badge key={index} variant="outline" className="text-xs">
														{member}
													</Badge>
												))}
												{department.members.length > 3 && (
													<Badge variant="outline" className="text-xs">
														+{department.members.length - 3} คน
													</Badge>
												)}
											</div>
										</TableCell>
										<TableCell className="text-center">
											<div className="flex justify-center space-x-2">
												<Button
													variant="outline"
													size="sm"
													className="border-border hover:bg-muted"
													onClick={() => handleEditDepartment(department)}
													disabled={!canEdit}
												>
													<Edit className="h-4 w-4" />
												</Button>
												<Button
													variant="outline"
													size="sm"
													className="border-border hover:bg-muted text-destructive hover:text-destructive"
													onClick={() => handleDeleteDepartment(department)}
													disabled={!canDelete}
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

			<DepartmentForms
				isAddDialogOpen={isAddDialogOpen}
				setIsAddDialogOpen={setIsAddDialogOpen}
				isEditDialogOpen={isEditDialogOpen}
				setIsEditDialogOpen={setIsEditDialogOpen}
				selectedDepartment={selectedDepartment}
				isDeleteDialogOpen={isDeleteDialogOpen}
				setIsDeleteDialogOpen={setIsDeleteDialogOpen}
				formData={formData}
				setFormData={setFormData}
				handleSaveDepartment={handleSaveDepartment}
				handleUpdateDepartment={handleUpdateDepartment}
				handleConfirmDelete={handleConfirmDelete}
				handleMemberChange={handleMemberChange}
			/>
		</div>
	);
}

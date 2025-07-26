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
import { Users, Plus, Edit, Search, UserCheck, UserX, Trash2 } from "lucide-react";
import { UserForms } from "./user-forms";

// Mock current user role - in real app this would come from auth context
const currentUserRole = "ผู้ดูแลระบบ"; // or "ฝ่ายบริหาร" or other roles

interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	departments: string[];
	onlineStatus: "online" | "offline";
	accountStatus: "active" | "disabled";
	lastLogin: string;
}

export default function AdminUsersPage() {
	const [users, setUsers] = useState<User[]>([
		{
			id: 1,
			firstName: "สมชาย",
			lastName: "ใจดี",
			email: "somchai@company.com",
			departments: ["ฝ่ายขนส่ง", "ฝ่ายปฏิบัติการ"],
			onlineStatus: "online",
			accountStatus: "active",
			lastLogin: "2024-01-15 14:30",
		},
		{
			id: 2,
			firstName: "วิชัย",
			lastName: "รักงาน",
			email: "wichai@company.com",
			departments: ["ฝ่ายบริหาร"],
			onlineStatus: "offline",
			accountStatus: "active",
			lastLogin: "2024-01-15 12:15",
		},
		{
			id: 3,
			firstName: "สุดา",
			lastName: "ขยันดี",
			email: "suda@company.com",
			departments: ["ฝ่ายบัญชี", "ฝ่ายการเงิน"],
			onlineStatus: "online",
			accountStatus: "active",
			lastLogin: "2024-01-15 15:45",
		},
		{
			id: 4,
			firstName: "ประยุทธ์",
			lastName: "มีวินัย",
			email: "prayuth@company.com",
			departments: ["ฝ่ายซ่อมบำรุง"],
			onlineStatus: "offline",
			accountStatus: "disabled",
			lastLogin: "2024-01-10 09:20",
		},
		{
			id: 5,
			firstName: "มาลี",
			lastName: "ใจซื่อ",
			email: "malee@company.com",
			departments: ["ฝ่ายบุคลากร"],
			onlineStatus: "online",
			accountStatus: "active",
			lastLogin: "2024-01-15 16:30",
		},
		{
			id: 6,
			firstName: "อนุชา",
			lastName: "มั่นคง",
			email: "anucha@company.com",
			departments: ["ฝ่าย IT"],
			onlineStatus: "online",
			accountStatus: "active",
			lastLogin: "2024-01-15 16:30",
		},
		{
			id: 7,
			firstName: "วาสนา",
			lastName: "เป็นสุข",
			email: "wasana@company.com",
			departments: ["ฝ่ายขาย"],
			onlineStatus: "offline",
			accountStatus: "active",
			lastLogin: "2024-01-14 18:20",
		},
	]);

	// Dialog states
	const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	// Form states
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		departments: [] as string[],
		accountStatus: "active",
	});

	// Permission checks
	const canEdit = ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"].includes(currentUserRole);
	const canDelete = currentUserRole === "ผู้ดูแลระบบ";
	const canChangeAccountStatus = currentUserRole === "ผู้ดูแลระบบ";

	const resetForm = () => {
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			departments: [],
			accountStatus: "active",
		});
	};

	const handleAddUser = () => {
		if (!canEdit) return;
		resetForm();
		setIsAddDialogOpen(true);
	};

	const handleEditUser = (user: User) => {
		if (!canEdit) return;
		setSelectedUser(user);
		setFormData({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			departments: user.departments,
			accountStatus: user.accountStatus,
		});
		setIsEditDialogOpen(true);
	};

	const handleDeleteUser = (user: User) => {
		if (!canDelete) return;
		setSelectedUser(user);
		setIsDeleteDialogOpen(true);
	};

	const handleSaveUser = () => {
		if (
			formData.firstName &&
			formData.lastName &&
			formData.email &&
			formData.departments.length > 0
		) {
			const newUser: User = {
				id: Math.max(...users.map((u) => u.id)) + 1,
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				departments: formData.departments,
				onlineStatus: "offline",
				accountStatus: formData.accountStatus as "active" | "disabled",
				lastLogin: "ยังไม่เคยเข้าสู่ระบบ",
			};
			setUsers([...users, newUser]);
			setIsAddDialogOpen(false);
			resetForm();
		}
	};

	const handleUpdateUser = () => {
		if (
			selectedUser &&
			formData.firstName &&
			formData.lastName &&
			formData.email &&
			formData.departments.length > 0
		) {
			setUsers(
				users.map((user) =>
					user.id === selectedUser.id
						? {
								...user,
								...formData,
								accountStatus: formData.accountStatus as "active" | "disabled",
						  }
						: user
				)
			);
			setIsEditDialogOpen(false);
			setSelectedUser(null);
			resetForm();
		}
	};

	const handleConfirmDelete = () => {
		if (selectedUser) {
			setUsers(users.filter((user) => user.id !== selectedUser.id));
			setIsDeleteDialogOpen(false);
			setSelectedUser(null);
		}
	};

	const handleDepartmentChange = (department: string) => {
		setFormData((prev) => ({
			...prev,
			departments: prev.departments.includes(department)
				? prev.departments.filter((d) => d !== department)
				: [...prev.departments, department],
		}));
	};

	const getOnlineStatusBadge = (status: string) => {
		return status === "online" ? (
			<Badge variant="default" className="bg-green-600 hover:bg-green-600">
				<UserCheck className="w-3 h-3 mr-1" />
				ออนไลน์
			</Badge>
		) : (
			<Badge variant="secondary" className="bg-gray-500 hover:bg-gray-500">
				<UserX className="w-3 h-3 mr-1" />
				ออฟไลน์
			</Badge>
		);
	};

	const getAccountStatusBadge = (status: string) => {
		return status === "active" ? (
			<Badge variant="default" className="bg-blue-600 hover:bg-blue-600">
				ใช้งานได้
			</Badge>
		) : (
			<Badge variant="destructive">ปิดใช้งาน</Badge>
		);
	};

	const totalUsers = users.length;
	const onlineUsers = users.filter((user) => user.onlineStatus === "online").length;
	const disabledUsers = users.filter((user) => user.accountStatus === "disabled").length;
	const activeUsers = users.filter((user) => user.accountStatus === "active").length;

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-foreground">ผู้ใช้งาน</h1>
					<p className="text-muted-foreground">จัดการผู้ใช้งานในระบบ</p>
				</div>
				<Button
					onClick={handleAddUser}
					disabled={!canEdit}
					className="bg-primary hover:bg-primary/90 text-primary-foreground"
				>
					<Plus className="h-4 w-4 mr-2" />
					เพิ่มผู้ใช้งานใหม่
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ผู้ใช้งานทั้งหมด</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{totalUsers}</div>
						<p className="text-xs text-muted-foreground">คนทั้งหมด</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">
							ผู้ใช้งานที่ใช้งานได้
						</CardTitle>
						<UserCheck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{activeUsers}</div>
						<p className="text-xs text-muted-foreground">บัญชีที่ใช้งานได้</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">ผู้ใช้งานออนไลน์</CardTitle>
						<UserCheck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{onlineUsers}</div>
						<p className="text-xs text-muted-foreground">ออนไลน์ขณะนี้</p>
					</CardContent>
				</Card>

				<Card className="bg-card border border-border">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-foreground">บัญชีที่ปิดใช้งาน</CardTitle>
						<UserX className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-foreground">{disabledUsers}</div>
						<p className="text-xs text-muted-foreground">บัญชีที่ถูกปิด</p>
					</CardContent>
				</Card>
			</div>

			<Card className="bg-card border border-border">
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-foreground">รายชื่อผู้ใช้งาน</CardTitle>
							<CardDescription className="text-muted-foreground">
								จัดการข้อมูลผู้ใช้งานและสิทธิ์การเข้าถึง
							</CardDescription>
						</div>
						<div className="flex items-center space-x-2">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
								<Input
									placeholder="ค้นหาผู้ใช้งาน..."
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
									<TableHead className="text-foreground">ชื่อ-นามสกุล</TableHead>
									<TableHead className="text-foreground">อีเมล</TableHead>
									<TableHead className="text-foreground">ฝ่าย</TableHead>
									<TableHead className="text-foreground text-center">สถานะออนไลน์</TableHead>
									<TableHead className="text-foreground text-center">สถานะบัญชี</TableHead>
									<TableHead className="text-foreground">เข้าสู่ระบบล่าสุด</TableHead>
									<TableHead className="text-foreground text-center">จัดการ</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{users.map((user) => (
									<TableRow key={user.id} className="border-border hover:bg-muted/50">
										<TableCell className="font-medium text-foreground">
											{user.firstName} {user.lastName}
										</TableCell>
										<TableCell className="text-muted-foreground">{user.email}</TableCell>
										<TableCell>
											<div className="flex flex-wrap gap-1">
												{user.departments.map((dept, index) => (
													<Badge key={index} variant="outline" className="text-xs">
														{dept}
													</Badge>
												))}
											</div>
										</TableCell>
										<TableCell className="text-center">
											{getOnlineStatusBadge(user.onlineStatus)}
										</TableCell>
										<TableCell className="text-center">
											{getAccountStatusBadge(user.accountStatus)}
										</TableCell>
										<TableCell className="text-muted-foreground text-sm">
											{user.lastLogin}
										</TableCell>
										<TableCell className="text-center">
											<div className="flex justify-center space-x-2">
												<Button
													variant="outline"
													size="sm"
													onClick={() => handleEditUser(user)}
													disabled={!canEdit}
													className="border-border hover:bg-muted"
												>
													<Edit className="h-4 w-4" />
												</Button>
												<Button
													variant="outline"
													size="sm"
													onClick={() => handleDeleteUser(user)}
													disabled={!canDelete}
													className="border-border hover:bg-muted hover:text-destructive"
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

			{/* User Forms Component */}
			<UserForms
				isAddDialogOpen={isAddDialogOpen}
				setIsAddDialogOpen={setIsAddDialogOpen}
				isEditDialogOpen={isEditDialogOpen}
				setIsEditDialogOpen={setIsEditDialogOpen}
				selectedUser={selectedUser}
				isDeleteDialogOpen={isDeleteDialogOpen}
				setIsDeleteDialogOpen={setIsDeleteDialogOpen}
				formData={formData}
				setFormData={setFormData}
				handleSaveUser={handleSaveUser}
				handleUpdateUser={handleUpdateUser}
				handleConfirmDelete={handleConfirmDelete}
				handleDepartmentChange={handleDepartmentChange}
				canChangeAccountStatus={canChangeAccountStatus}
			/>
		</div>
	);
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Available departments from roles page
const availableDepartments = [
	"ฝ่ายบริหาร",
	"ฝ่ายขนส่ง",
	"ฝ่ายปฏิบัติการ",
	"ฝ่ายบัญชี",
	"ฝ่ายการเงิน",
	"ฝ่ายซ่อมบำรุง",
	"ฝ่ายบุคลากร",
	"ฝ่าย IT",
	"ฝ่ายขาย",
];

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

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	departments: string[];
	accountStatus: string;
}

interface UserFormsProps {
	// Add User Dialog
	isAddDialogOpen: boolean;
	setIsAddDialogOpen: (open: boolean) => void;

	// Edit User Dialog
	isEditDialogOpen: boolean;
	setIsEditDialogOpen: (open: boolean) => void;
	selectedUser: User | null;

	// Delete User Dialog
	isDeleteDialogOpen: boolean;
	setIsDeleteDialogOpen: (open: boolean) => void;

	// Form data and handlers
	formData: FormData;
	setFormData: (data: FormData) => void;
	handleSaveUser: () => void;
	handleUpdateUser: () => void;
	handleConfirmDelete: () => void;
	handleDepartmentChange: (department: string) => void;

	// Permissions
	canChangeAccountStatus: boolean;
}

export function UserForms({
	isAddDialogOpen,
	setIsAddDialogOpen,
	isEditDialogOpen,
	setIsEditDialogOpen,
	selectedUser,
	isDeleteDialogOpen,
	setIsDeleteDialogOpen,
	formData,
	setFormData,
	handleSaveUser,
	handleUpdateUser,
	handleConfirmDelete,
	handleDepartmentChange,
	canChangeAccountStatus,
}: UserFormsProps) {
	const [departmentsOpen, setDepartmentsOpen] = useState(false);

	const handleDepartmentRemove = (departmentToRemove: string) => {
		const updatedDepartments = formData.departments.filter(
			(dept: string) => dept !== departmentToRemove
		);
		setFormData({
			...formData,
			departments: updatedDepartments,
		});
	};
	return (
		<>
			{/* Add User Dialog */}
			<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>เพิ่มผู้ใช้งานใหม่</DialogTitle>
						<DialogDescription>กรอกข้อมูลผู้ใช้งานใหม่ที่ต้องการเพิ่มเข้าระบบ</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="firstName">ชื่อ *</Label>
								<Input
									id="firstName"
									value={formData.firstName}
									onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
									placeholder="ชื่อ"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">นามสกุล *</Label>
								<Input
									id="lastName"
									value={formData.lastName}
									onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
									placeholder="นามสกุล"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">อีเมล *</Label>
							<Input
								id="email"
								type="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								placeholder="email@company.com"
							/>
						</div>
						<div className="space-y-2">
							<Label>ฝ่าย * (เลือกอย่างน้อย 1 ฝ่าย)</Label>
							<Popover open={departmentsOpen} onOpenChange={setDepartmentsOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={departmentsOpen}
										className="w-full justify-between min-h-[2.5rem] h-auto px-3 py-2"
									>
										<div className="flex flex-wrap gap-1 max-w-[90%]">
											{formData.departments.length === 0 ? (
												<span className="text-muted-foreground">เลือกฝ่าย</span>
											) : (
												formData.departments.slice(0, 2).map((dept) => (
													<Badge key={dept} variant="secondary" className="text-xs">
														{dept}
													</Badge>
												))
											)}
											{formData.departments.length > 2 && (
												<Badge variant="secondary" className="text-xs">
													+{formData.departments.length - 2} ฝ่าย
												</Badge>
											)}
										</div>
										<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent
									className="p-0"
									style={{ width: "var(--radix-popover-trigger-width)" }}
									align="start"
									sideOffset={4}
								>
									<Command>
										<CommandInput placeholder="ค้นหาฝ่าย..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบฝ่าย</CommandEmpty>
											<CommandGroup>
												{availableDepartments.map((dept) => (
													<CommandItem
														key={dept}
														value={dept}
														onSelect={() => {
															handleDepartmentChange(dept);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.departments.includes(dept) ? "opacity-100" : "opacity-0"
															)}
														/>
														<span className="font-medium text-sm">{dept}</span>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							{/* Selected departments display */}
							{formData.departments.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{formData.departments.map((dept) => (
										<Badge key={dept} variant="outline" className="text-xs">
											{dept}
											<X
												className="ml-1 h-3 w-3 cursor-pointer"
												onClick={() => handleDepartmentRemove(dept)}
											/>
										</Badge>
									))}
								</div>
							)}
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
							ยกเลิก
						</Button>
						<Button onClick={handleSaveUser}>บันทึก</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Edit User Dialog */}
			<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>แก้ไขข้อมูลผู้ใช้งาน</DialogTitle>
						<DialogDescription>
							แก้ไขข้อมูลผู้ใช้งาน: {selectedUser?.firstName} {selectedUser?.lastName}
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="editFirstName">ชื่อ *</Label>
								<Input
									id="editFirstName"
									value={formData.firstName}
									onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
									placeholder="ชื่อ"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="editLastName">นามสกุล *</Label>
								<Input
									id="editLastName"
									value={formData.lastName}
									onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
									placeholder="นามสกุล"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="editEmail">อีเมล *</Label>
							<Input
								id="editEmail"
								type="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								placeholder="email@company.com"
							/>
						</div>
						<div className="space-y-2">
							<Label>ฝ่าย * (เลือกอย่างน้อย 1 ฝ่าย)</Label>
							<Popover open={departmentsOpen} onOpenChange={setDepartmentsOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={departmentsOpen}
										className="w-full justify-between min-h-[2.5rem] h-auto px-3 py-2"
									>
										<div className="flex flex-wrap gap-1 max-w-[90%]">
											{formData.departments.length === 0 ? (
												<span className="text-muted-foreground">เลือกฝ่าย</span>
											) : (
												formData.departments.slice(0, 2).map((dept) => (
													<Badge key={dept} variant="secondary" className="text-xs">
														{dept}
													</Badge>
												))
											)}
											{formData.departments.length > 2 && (
												<Badge variant="secondary" className="text-xs">
													+{formData.departments.length - 2} ฝ่าย
												</Badge>
											)}
										</div>
										<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent
									className="p-0"
									style={{ width: "var(--radix-popover-trigger-width)" }}
									align="start"
									sideOffset={4}
								>
									<Command>
										<CommandInput placeholder="ค้นหาฝ่าย..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบฝ่าย</CommandEmpty>
											<CommandGroup>
												{availableDepartments.map((dept) => (
													<CommandItem
														key={dept}
														value={dept}
														onSelect={() => {
															handleDepartmentChange(dept);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.departments.includes(dept) ? "opacity-100" : "opacity-0"
															)}
														/>
														<span className="font-medium text-sm">{dept}</span>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							{/* Selected departments display */}
							{formData.departments.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{formData.departments.map((dept) => (
										<Badge key={dept} variant="outline" className="text-xs">
											{dept}
											<X
												className="ml-1 h-3 w-3 cursor-pointer"
												onClick={() => handleDepartmentRemove(dept)}
											/>
										</Badge>
									))}
								</div>
							)}
						</div>
						{canChangeAccountStatus && (
							<div className="space-y-2">
								<Label htmlFor="accountStatus">สถานะบัญชี</Label>
								<Select
									value={formData.accountStatus}
									onValueChange={(value) => setFormData({ ...formData, accountStatus: value })}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="active">ใช้งานได้</SelectItem>
										<SelectItem value="disabled">ปิดใช้งาน</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
							ยกเลิก
						</Button>
						<Button onClick={handleUpdateUser}>บันทึกการเปลี่ยนแปลง</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Confirmation Dialog */}
			<AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>ยืนยันการลบผู้ใช้งาน</AlertDialogTitle>
						<AlertDialogDescription>
							คุณแน่ใจหรือไม่ที่ต้องการลบผู้ใช้งาน "{selectedUser?.firstName}{" "}
							{selectedUser?.lastName}" การดำเนินการนี้ไม่สามารถยกเลิกได้
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>ยกเลิก</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleConfirmDelete}
							className="bg-destructive hover:bg-destructive/90"
						>
							ลบผู้ใช้งาน
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}

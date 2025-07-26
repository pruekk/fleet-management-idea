"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

// Mock users data - in real app this would come from API
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

interface DepartmentFormsProps {
	// Add Department Dialog
	isAddDialogOpen: boolean;
	setIsAddDialogOpen: (open: boolean) => void;

	// Edit Department Dialog
	isEditDialogOpen: boolean;
	setIsEditDialogOpen: (open: boolean) => void;
	selectedDepartment: Department | null;

	// Delete Department Dialog
	isDeleteDialogOpen: boolean;
	setIsDeleteDialogOpen: (open: boolean) => void;

	// Form data and handlers
	formData: FormData;
	setFormData: (data: FormData) => void;
	handleSaveDepartment: () => void;
	handleUpdateDepartment: () => void;
	handleConfirmDelete: () => void;
	handleMemberChange: (memberId: number) => void;
}

export function DepartmentForms({
	isAddDialogOpen,
	setIsAddDialogOpen,
	isEditDialogOpen,
	setIsEditDialogOpen,
	selectedDepartment,
	isDeleteDialogOpen,
	setIsDeleteDialogOpen,
	formData,
	setFormData,
	handleSaveDepartment,
	handleUpdateDepartment,
	handleConfirmDelete,
	handleMemberChange,
}: DepartmentFormsProps) {
	const [leadOpen, setLeadOpen] = useState(false);
	const [membersOpen, setMembersOpen] = useState(false);

	const getSelectedMemberNames = () => {
		return availableUsers
			.filter((user) => formData.memberIds.includes(user.id))
			.map((user) => user.name);
	};

	const handleMemberRemove = (memberId: number) => {
		const updatedMemberIds = formData.memberIds.filter((id: number) => id !== memberId);
		setFormData({
			...formData,
			memberIds: updatedMemberIds,
		});
	};

	return (
		<>
			{/* Add Department Dialog */}
			<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
				<DialogContent className="sm:max-w-lg">
					<DialogHeader>
						<DialogTitle>เพิ่มฝ่ายใหม่</DialogTitle>
						<DialogDescription>กรอกข้อมูลฝ่ายใหม่ที่ต้องการเพิ่มเข้าระบบ</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="deptName">ชื่อฝ่าย *</Label>
							<Input
								id="deptName"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="เช่น ฝ่ายขนส่ง"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="deptDescription">คำอธิบาย *</Label>
							<Textarea
								id="deptDescription"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								placeholder="อธิบายหน้าที่และความรับผิดชอบของฝ่าย"
								rows={3}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="deptLead">หัวหน้าฝ่าย *</Label>
							<Popover open={leadOpen} onOpenChange={setLeadOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={leadOpen}
										className="w-full justify-between h-10 px-3 py-2"
									>
										{formData.leadId
											? availableUsers.find((user) => user.id === formData.leadId)?.name
											: "เลือกหัวหน้าฝ่าย"}
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
										<CommandInput placeholder="ค้นหาชื่อหรืออีเมล..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบผู้ใช้งาน</CommandEmpty>
											<CommandGroup>
												{availableUsers.map((user) => (
													<CommandItem
														key={user.id}
														value={`${user.name} ${user.email}`}
														onSelect={() => {
															setFormData({ ...formData, leadId: user.id });
															setLeadOpen(false);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.leadId === user.id ? "opacity-100" : "opacity-0"
															)}
														/>
														<div className="flex flex-col min-w-0 flex-1">
															<span className="font-medium text-sm truncate">{user.name}</span>
															<span className="text-xs text-muted-foreground truncate">
																{user.email}
															</span>
														</div>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
						<div className="space-y-2">
							{" "}
							<Label>สมาชิกในฝ่าย (เลือกได้หลายคน)</Label>
							<Popover open={membersOpen} onOpenChange={setMembersOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={membersOpen}
										className="w-full justify-between min-h-[2.5rem] h-auto px-3 py-2"
									>
										<div className="flex flex-wrap gap-1 max-w-[90%]">
											{formData.memberIds.length === 0 ? (
												<span className="text-muted-foreground">เลือกสมาชิก</span>
											) : (
												getSelectedMemberNames()
													.slice(0, 2)
													.map((name) => (
														<Badge key={name} variant="secondary" className="text-xs">
															{name}
														</Badge>
													))
											)}
											{formData.memberIds.length > 2 && (
												<Badge variant="secondary" className="text-xs">
													+{formData.memberIds.length - 2} คน
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
										<CommandInput placeholder="ค้นหาชื่อหรืออีเมล..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบผู้ใช้งาน</CommandEmpty>
											<CommandGroup>
												{availableUsers.map((user) => (
													<CommandItem
														key={user.id}
														value={`${user.name} ${user.email}`}
														onSelect={() => {
															handleMemberChange(user.id);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.memberIds.includes(user.id) ? "opacity-100" : "opacity-0"
															)}
														/>
														<div className="flex flex-col min-w-0 flex-1">
															<span className="font-medium text-sm truncate">{user.name}</span>
															<span className="text-xs text-muted-foreground truncate">
																{user.email}
															</span>
														</div>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							{/* Selected members display */}
							{formData.memberIds.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{getSelectedMemberNames().map((name, index) => {
										const userId = formData.memberIds[index];
										return (
											<Badge key={userId} variant="outline" className="text-xs">
												{name}
												<X
													className="ml-1 h-3 w-3 cursor-pointer"
													onClick={() => handleMemberRemove(userId)}
												/>
											</Badge>
										);
									})}
								</div>
							)}
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
							ยกเลิก
						</Button>
						<Button onClick={handleSaveDepartment}>บันทึก</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Edit Department Dialog */}
			<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
				<DialogContent className="sm:max-w-lg">
					<DialogHeader>
						<DialogTitle>แก้ไขข้อมูลฝ่าย</DialogTitle>
						<DialogDescription>แก้ไขข้อมูลฝ่าย: {selectedDepartment?.name}</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="editDeptName">ชื่อฝ่าย *</Label>
							<Input
								id="editDeptName"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="เช่น ฝ่ายขนส่ง"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="editDeptDescription">คำอธิบาย *</Label>
							<Textarea
								id="editDeptDescription"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								placeholder="อธิบายหน้าที่และความรับผิดชอบของฝ่าย"
								rows={3}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="editDeptLead">หัวหน้าฝ่าย *</Label>
							<Popover open={leadOpen} onOpenChange={setLeadOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={leadOpen}
										className="w-full justify-between h-10 px-3 py-2"
									>
										{formData.leadId
											? availableUsers.find((user) => user.id === formData.leadId)?.name
											: "เลือกหัวหน้าฝ่าย"}
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
										<CommandInput placeholder="ค้นหาชื่อหรืออีเมล..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบผู้ใช้งาน</CommandEmpty>
											<CommandGroup>
												{availableUsers.map((user) => (
													<CommandItem
														key={user.id}
														value={`${user.name} ${user.email}`}
														onSelect={() => {
															setFormData({ ...formData, leadId: user.id });
															setLeadOpen(false);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.leadId === user.id ? "opacity-100" : "opacity-0"
															)}
														/>
														<div className="flex flex-col min-w-0 flex-1">
															<span className="font-medium text-sm truncate">{user.name}</span>
															<span className="text-xs text-muted-foreground truncate">
																{user.email}
															</span>
														</div>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
						<div className="space-y-2">
							<Label>สมาชิกในฝ่าย (เลือกได้หลายคน)</Label>
							<Popover open={membersOpen} onOpenChange={setMembersOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={membersOpen}
										className="w-full justify-between min-h-[2.5rem] h-auto px-3 py-2"
									>
										<div className="flex flex-wrap gap-1 max-w-[90%]">
											{formData.memberIds.length === 0 ? (
												<span className="text-muted-foreground">เลือกสมาชิก</span>
											) : (
												getSelectedMemberNames()
													.slice(0, 2)
													.map((name) => (
														<Badge key={name} variant="secondary" className="text-xs">
															{name}
														</Badge>
													))
											)}
											{formData.memberIds.length > 2 && (
												<Badge variant="secondary" className="text-xs">
													+{formData.memberIds.length - 2} คน
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
										<CommandInput placeholder="ค้นหาชื่อหรืออีเมล..." className="h-9" />
										<CommandList className="max-h-60 overflow-y-auto">
											<CommandEmpty>ไม่พบผู้ใช้งาน</CommandEmpty>
											<CommandGroup>
												{availableUsers.map((user) => (
													<CommandItem
														key={user.id}
														value={`${user.name} ${user.email}`}
														onSelect={() => {
															handleMemberChange(user.id);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.memberIds.includes(user.id) ? "opacity-100" : "opacity-0"
															)}
														/>
														<div className="flex flex-col min-w-0 flex-1">
															<span className="font-medium text-sm truncate">{user.name}</span>
															<span className="text-xs text-muted-foreground truncate">
																{user.email}
															</span>
														</div>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							{/* Selected members display */}
							{formData.memberIds.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{getSelectedMemberNames().map((name, index) => {
										const userId = formData.memberIds[index];
										return (
											<Badge key={userId} variant="outline" className="text-xs">
												{name}
												<X
													className="ml-1 h-3 w-3 cursor-pointer"
													onClick={() => handleMemberRemove(userId)}
												/>
											</Badge>
										);
									})}
								</div>
							)}
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
							ยกเลิก
						</Button>
						<Button onClick={handleUpdateDepartment}>บันทึกการเปลี่ยนแปลง</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Confirmation Dialog */}
			<AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>ยืนยันการลบฝ่าย</AlertDialogTitle>
						<AlertDialogDescription>
							คุณแน่ใจหรือไม่ที่ต้องการลบฝ่าย "{selectedDepartment?.name}"
							การดำเนินการนี้ไม่สามารถยกเลิกได้และจะส่งผลต่อผู้ใช้งานในฝ่ายนี้
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>ยกเลิก</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleConfirmDelete}
							className="bg-destructive hover:bg-destructive/90"
						>
							ลบฝ่าย
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}

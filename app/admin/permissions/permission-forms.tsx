"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
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
import { Check, ChevronsUpDown } from "lucide-react";
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

// Available features from different pages
const availableFeatures = [
	"แดชบอร์ด",
	"ข้อมูลพื้นฐาน",
	"ข้อมูลบริษัท",
	"ข้อมูลพนักงาน",
	"ข้อมูลขนส่ง",
	"ข้อมูลรถบรรทุก",
	"ลูกค้า",
	"ลูกค้า - โรงงาน",
	"ลูกค้า - ใบเสนอราคา",
	"ซัพพลายเออร์",
	"พนักงาน",
	"พนักงาน - ข้อมูลพื้นฐาน",
	"พนักงาน - รายได้รายเดือน",
	"พนักงาน - รายได้ประจำปี",
	"พนักงาน - จัดการภาษี",
	"ดำเนินงานรายเดือน",
	"ดำเนินงานรายเดือน - เที่ยวขนส่ง",
	"ดำเนินงานรายเดือน - เชื้อเพลิง",
	"ดำเนินงานรายเดือน - การซ่อมบำรุง",
	"ดำเนินงานรายเดือน - การเรียกเก็บเงิน",
	"ดำเนินงานรายเดือน - พนักงาน",
	"รายงาน",
	"รายงานการขนส่ง",
	"รายงานการปฏิบัติงาน",
	"รายงานการเงิน",
	"รายงานการซ่อมบำรุง",
	"รายงานบุคลากร",
	"รายงานการขาย",
	"รายงานระบบ",
	"การแจ้งเตือน",
	"ระบบอนุมัติ",
	"รายรับบริษัท",
	"รายจ่ายบริษัท",
	"ตั้งค่าระบบ",
	"ตั้งค่าผู้ใช้งาน",
	"ตั้งค่าบทบาท",
	"ตั้งค่าสิทธิ์การเข้าถึง",
	"Line OA",
	"Line OA - ส่งข้อความ",
	"Line OA - เทมเพลต",
	"Line OA - ประวัติ",
	"Line OA - วิเคราะห์",
	"GPM (กำไรต่อเที่ยว)",
];

const permissionTypes = [
	{ value: "view", label: "ดูอย่างเดียว" },
	{ value: "edit", label: "แก้ไขได้" },
	{ value: "admin", label: "ผู้ดูแลระบบ" },
];

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

interface PermissionFormsProps {
	// Add Permission Dialog
	isAddDialogOpen: boolean;
	setIsAddDialogOpen: (open: boolean) => void;

	// Edit Permission Dialog
	isEditDialogOpen: boolean;
	setIsEditDialogOpen: (open: boolean) => void;
	selectedPermission: Permission | null;

	// Delete Permission Dialog
	isDeleteDialogOpen: boolean;
	setIsDeleteDialogOpen: (open: boolean) => void;

	// Form data and handlers
	formData: FormData;
	setFormData: (data: FormData) => void;
	handleSavePermission: () => void;
	handleUpdatePermission: () => void;
	handleConfirmDelete: () => void;
	handleFeatureChange: (feature: string, permissionType: string) => void;

	// Existing permissions to filter out departments
	existingPermissions: Permission[];
}

export function PermissionForms({
	isAddDialogOpen,
	setIsAddDialogOpen,
	isEditDialogOpen,
	setIsEditDialogOpen,
	selectedPermission,
	isDeleteDialogOpen,
	setIsDeleteDialogOpen,
	formData,
	setFormData,
	handleSavePermission,
	handleUpdatePermission,
	handleConfirmDelete,
	handleFeatureChange,
	existingPermissions,
}: PermissionFormsProps) {
	const [departmentOpen, setDepartmentOpen] = useState(false);

	// Filter out departments that already have permissions (for add dialog only)
	const availableDepartmentsForAdd = availableDepartments.filter(
		(dept) => !existingPermissions.some((perm) => perm.department === dept)
	);

	return (
		<>
			{/* Add Permission Dialog */}
			<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
				<DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>ตั้งค่าสิทธิ์ใหม่</DialogTitle>
						<DialogDescription>เลือกฝ่ายและกำหนดสิทธิ์การเข้าถึงระบบ</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label>ฝ่าย *</Label>
							<Popover open={departmentOpen} onOpenChange={setDepartmentOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={departmentOpen}
										className="w-full justify-between h-10 px-3 py-2"
									>
										{formData.department || "เลือกฝ่าย"}
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
												{availableDepartmentsForAdd.map((dept) => (
													<CommandItem
														key={dept}
														value={dept}
														onSelect={() => {
															setFormData({ ...formData, department: dept });
															setDepartmentOpen(false);
														}}
														className="px-2 py-2"
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																formData.department === dept ? "opacity-100" : "opacity-0"
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
						</div>

						<div className="space-y-2">
							<Label>คุณสมบัติที่เข้าถึงได้ * (เลือกได้หลายรายการ)</Label>
							<div className="space-y-3 max-h-60 overflow-y-auto border rounded-md p-3">
								{availableFeatures.map((feature) => {
									const currentPermission = formData.features[feature] || "";
									return (
										<div
											key={feature}
											className="flex items-center justify-between space-x-3 p-2 border rounded-md bg-muted/10"
										>
											<div className="flex items-center space-x-2 flex-1">
												<Checkbox
													id={feature}
													checked={currentPermission !== ""}
													onCheckedChange={(checked) => {
														if (checked) {
															handleFeatureChange(feature, "view");
														} else {
															handleFeatureChange(feature, "");
														}
													}}
												/>
												<Label htmlFor={feature} className="text-sm font-medium flex-1">
													{feature}
												</Label>
											</div>
											{currentPermission && (
												<div className="flex gap-1">
													{permissionTypes.map((type) => (
														<Button
															key={type.value}
															variant={currentPermission === type.value ? "default" : "outline"}
															size="sm"
															className="h-6 px-2 text-xs"
															onClick={() => handleFeatureChange(feature, type.value)}
														>
															{type.label}
														</Button>
													))}
												</div>
											)}
										</div>
									);
								})}
							</div>
							{Object.keys(formData.features).length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{Object.entries(formData.features).map(([feature, permission]) => (
										<Badge key={feature} variant="outline" className="text-xs">
											{feature}: {permissionTypes.find((p) => p.value === permission)?.label}
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
						<Button onClick={handleSavePermission}>บันทึก</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Edit Permission Dialog */}
			<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
				<DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>แก้ไขสิทธิ์การเข้าถึง</DialogTitle>
						<DialogDescription>
							แก้ไขสิทธิ์การเข้าถึงสำหรับ: {selectedPermission?.department}
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label>ฝ่าย</Label>
							<div className="p-2 border rounded-md bg-muted">
								<span className="text-sm font-medium">{formData.department}</span>
							</div>
						</div>

						<div className="space-y-2">
							<Label>คุณสมบัติที่เข้าถึงได้ * (เลือกได้หลายรายการ)</Label>
							<div className="space-y-3 max-h-60 overflow-y-auto border rounded-md p-3">
								{availableFeatures.map((feature) => {
									const currentPermission = formData.features[feature] || "";
									return (
										<div
											key={feature}
											className="flex items-center justify-between space-x-3 p-2 border rounded-md bg-muted/10"
										>
											<div className="flex items-center space-x-2 flex-1">
												<Checkbox
													id={`edit-${feature}`}
													checked={currentPermission !== ""}
													onCheckedChange={(checked) => {
														if (checked) {
															handleFeatureChange(feature, "view");
														} else {
															handleFeatureChange(feature, "");
														}
													}}
												/>
												<Label htmlFor={`edit-${feature}`} className="text-sm font-medium flex-1">
													{feature}
												</Label>
											</div>
											{currentPermission && (
												<div className="flex gap-1">
													{permissionTypes.map((type) => (
														<Button
															key={type.value}
															variant={currentPermission === type.value ? "default" : "outline"}
															size="sm"
															className="h-6 px-2 text-xs"
															onClick={() => handleFeatureChange(feature, type.value)}
														>
															{type.label}
														</Button>
													))}
												</div>
											)}
										</div>
									);
								})}
							</div>
							{Object.keys(formData.features).length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{Object.entries(formData.features).map(([feature, permission]) => (
										<Badge key={feature} variant="outline" className="text-xs">
											{feature}: {permissionTypes.find((p) => p.value === permission)?.label}
										</Badge>
									))}
								</div>
							)}
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
							ยกเลิก
						</Button>
						<Button onClick={handleUpdatePermission}>บันทึกการเปลี่ยนแปลง</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Confirmation Dialog */}
			<AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>ยืนยันการลบสิทธิ์การเข้าถึง</AlertDialogTitle>
						<AlertDialogDescription>
							คุณแน่ใจหรือไม่ที่ต้องการลบสิทธิ์การเข้าถึงของ "{selectedPermission?.department}"
							การดำเนินการนี้ไม่สามารถยกเลิกได้และจะส่งผลต่อการทำงานของสมาชิกในฝ่าย
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>ยกเลิก</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleConfirmDelete}
							className="bg-destructive hover:bg-destructive/90"
						>
							ลบสิทธิ์การเข้าถึง
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}

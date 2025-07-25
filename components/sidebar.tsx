"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	Building2,
	Users,
	Truck,
	Factory,
	FileText,
	Calendar,
	DollarSign,
	BarChart3,
	MessageSquare,
	Settings,
	ChevronDown,
	ChevronRight,
	Home,
	Package,
	Fuel,
	Wrench,
	Receipt,
	FileSpreadsheet,
	Bell,
	CheckSquare,
	Shield,
	UserCog,
	Cog,
	Building,
	Calculator,
	TrendingUp,
	UserPlus,
	PieChart,
	TrendingDown,
	FolderOpen,
	FileUp,
	ClipboardList,
} from "lucide-react";

interface SidebarProps {
	open: boolean;
	currentRole: string;
	onToggle: () => void;
}

interface MenuItem {
	title: string;
	href?: string;
	icon: React.ComponentType<{ className?: string }>;
	children?: MenuItem[];
	roles?: string[];
}

const menuItems: MenuItem[] = [
	{
		title: "หน้าหลัก",
		href: "/dashboard",
		icon: Home,
	},
	{
		title: "ภาพรวม",
		icon: PieChart,
		roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
		children: [
			{
				title: "สรุปผล",
				href: "/overview/summary",
				icon: BarChart3,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
			{
				title: "GPM",
				href: "/overview/gpm",
				icon: TrendingUp,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
		],
	},
	{
		title: "บริการขนส่งคอนกรีต",
		icon: Calendar,
		children: [
			{
				title: "เที่ยววิ่ง",
				href: "/monthly-operations/trips",
				icon: Calendar,
			},
			{
				title: "วางบิล",
				href: "/monthly-operations/billing",
				icon: Receipt,
			},
			{
				title: "น้ำมัน",
				href: "/monthly-operations/fuel",
				icon: Fuel,
			},
			{
				title: "ซ่อมบำรุง",
				href: "/monthly-operations/maintenance",
				icon: Wrench,
			},
			{
				title: "Excel Templates",
				href: "/monthly-operations/excel-templates",
				icon: FileSpreadsheet,
			},
		],
	},
	{
		title: "LINE OA",
		icon: MessageSquare,
		children: [
			{
				title: "ส่งข้อความ",
				href: "/line-oa/send",
				icon: MessageSquare,
			},
			{
				title: "เทมเพลต",
				href: "/line-oa/templates",
				icon: FileText,
			},
			{
				title: "ประวัติการส่ง",
				href: "/line-oa/history",
				icon: Calendar,
			},
			{
				title: "วิเคราะห์",
				href: "/line-oa/analytics",
				icon: BarChart3,
			},
		],
	},
	{
		title: "บุคคลากร",
		icon: Users,
		children: [
			{
				title: "ข้อมูลพื้นฐาน",
				href: "/employees/basic-info",
				icon: UserPlus,
			},
			{
				title: "ประเมินพนักงาน",
				href: "/employees/evaluation",
				icon: CheckSquare,
			},
			{
				title: "รายได้ประจำเดือน",
				href: "/employees/monthly-income",
				icon: DollarSign,
			},
			{
				title: "รายได้ประจำปี",
				href: "/employees/annual-income",
				icon: TrendingUp,
			},
			{
				title: "จัดการภาษี",
				href: "/employees/tax-management",
				icon: Calculator,
			},
		],
	},
	{
		title: "การเงิน",
		icon: DollarSign,
		children: [
			{
				title: "ใบเสนอราคา",
				href: "/finance/quotations",
				icon: FileText,
			},
			{
				title: "อนุมัติการโอน",
				href: "/finance/transfer-approval",
				icon: CheckSquare,
			},
		],
	},
	{
		title: "บัญชี",
		icon: Calculator,
		children: [
			{
				title: "รายได้",
				href: "/accounting/income",
				icon: DollarSign,
			},
			{
				title: "รายจ่าย",
				href: "/accounting/expenses",
				icon: Receipt,
			},
		],
	},
	{
		title: "การแจ้งเตือน",
		href: "/notifications",
		icon: Bell,
	},
	{
		title: "ระบบอนุมัติ",
		href: "/approval-system",
		icon: CheckSquare,
	},
	{
		title: "รายงาน",
		icon: BarChart3,
		children: [
			{
				title: "รายงานทั่วไป",
				href: "/reports/general",
				icon: ClipboardList,
			},
			{
				title: "รายงานผู้บริหาร",
				href: "/reports/executive",
				icon: TrendingUp,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
		],
	},
	{
		title: "ข้อมูลพื้นฐาน",
		icon: Package,
		children: [
			{
				title: "รถโม่",
				href: "/basic-data/trucks",
				icon: Truck,
			},
			{
				title: "บริษัท",
				href: "/basic-data/companies",
				icon: Building,
			},
			{
				title: "ลูกค้า",
				href: "/basic-data/customers",
				icon: Users,
			},
			{
				title: "โรงงาน",
				href: "/basic-data/factories",
				icon: Factory,
			},
			{
				title: "ซัพพลายเออร์",
				href: "/basic-data/suppliers",
				icon: Building2,
			},
		],
	},
	{
		title: "แบบฟอร์ม",
		icon: FolderOpen,
		children: [
			{
				title: "ฝ่ายขนส่ง",
				href: "/forms/transport",
				icon: Truck,
			},
			{
				title: "ฝ่ายบุคคล",
				href: "/forms/hr",
				icon: Users,
			},
			{
				title: "ฝ่ายการเงิน",
				href: "/forms/finance",
				icon: DollarSign,
			},
			{
				title: "ฝ่ายขาย",
				href: "/forms/sales",
				icon: Building,
			},
			{
				title: "อัพโหลดฟอร์ม",
				href: "/forms/upload",
				icon: FileUp,
			},
		],
	},
	{
		title: "ตั้งค่าระบบ",
		icon: Settings,
		children: [
			{
				title: "ผู้ใช้งาน",
				href: "/admin/users",
				icon: Users,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
			{
				title: "ฝ่าย",
				href: "/admin/roles",
				icon: Shield,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
			{
				title: "สิทธิ์การเข้าถึง",
				href: "/admin/permissions",
				icon: UserCog,
				roles: ["ฝ่ายบริหาร", "ผู้ดูแลระบบ"],
			},
			{
				title: "ระบบ",
				href: "/admin/system",
				icon: Cog,
				roles: ["ผู้ดูแลระบบ"],
			},
		],
	},
];

export function Sidebar({ open, currentRole, onToggle }: SidebarProps) {
	const pathname = usePathname();
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	const toggleExpanded = (title: string) => {
		setExpandedItems((prev) =>
			prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
		);
	};

	const isItemVisible = (item: MenuItem) => {
		if (!item.roles) return true;
		return item.roles.includes(currentRole);
	};

	const hasVisibleChildren = (item: MenuItem): boolean => {
		if (!item.children) return false;
		return item.children.some((child) => isItemVisible(child));
	};

	const isMenuItemVisible = (item: MenuItem): boolean => {
		// If item has no children, use normal visibility check
		if (!item.children) {
			return isItemVisible(item);
		}

		// If item has children, show only if at least one child is visible
		return hasVisibleChildren(item);
	};

	const renderMenuItem = (item: MenuItem, level = 0) => {
		if (!isMenuItemVisible(item)) return null;

		const isExpanded = expandedItems.includes(item.title);
		const hasChildren = item.children && item.children.length > 0;
		const isActive = item.href === pathname;

		if (hasChildren) {
			return (
				<div key={item.title}>
					<button
						onClick={() => toggleExpanded(item.title)}
						className={cn(
							"w-full flex items-center justify-between px-4 py-2 text-left text-sm font-medium rounded-lg transition-colors",
							"hover:bg-muted text-foreground",
							level > 0 && "ml-4"
						)}
					>
						<div className="flex items-center">
							<item.icon className="mr-3 h-4 w-4 flex-shrink-0" />
							{open && <span>{item.title}</span>}
						</div>
						{open &&
							(isExpanded ? (
								<ChevronDown className="h-4 w-4" />
							) : (
								<ChevronRight className="h-4 w-4" />
							))}
					</button>
					{isExpanded && open && (
						<div className="mt-1 space-y-1">
							{item.children?.map((child) => renderMenuItem(child, level + 1))}
						</div>
					)}
				</div>
			);
		}

		return (
			<Link
				key={item.title}
				href={item.href!}
				className={cn(
					"flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
					isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
					level > 0 && "ml-4"
				)}
			>
				<item.icon className="mr-3 h-4 w-4 flex-shrink-0" />
				{open && <span>{item.title}</span>}
			</Link>
		);
	};

	return (
		<div
			className={cn(
				"fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background border-r border-border overflow-y-auto transition-all duration-300",
				open ? "w-64" : "w-20"
			)}
		>
			<nav className="p-4 space-y-2">{menuItems.map((item) => renderMenuItem(item))}</nav>
		</div>
	);
}

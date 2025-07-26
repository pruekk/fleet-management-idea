"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
	currentRole: string;
	sidebarOpen: boolean;
	setSidebarOpen: (open: boolean) => void;
	onRoleChange: (newRole: string) => void;
}

export function Header({ currentRole, sidebarOpen, setSidebarOpen, onRoleChange }: HeaderProps) {
	const [notificationsOpen, setNotificationsOpen] = useState(false);
	const [userMenuOpen, setUserMenuOpen] = useState(false);
	const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
	const [availableRoles, setAvailableRoles] = useState<string[]>([]);
	const [userName, setUserName] = useState("คุณสมชาย");
	const notificationRef = useRef<HTMLDivElement>(null);
	const userMenuRef = useRef<HTMLDivElement>(null);
	const roleDropdownRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const notifications = [
		{
			id: 1,
			title: "รถโม่ต้องการซ่อมบำรุง",
			message: "รถโม่หมายเลข 83-5948 ต้องการการซ่อมบำรุงด่วน",
			time: "5 นาทีที่แล้ว",
			type: "warning",
		},
		{
			id: 2,
			title: "มีการวางบิลใหม่",
			message: "บริษัท ก่อสร้าง ABC จำกัด ได้วางบิลใหม่มูลค่า 45,000 บาท",
			time: "30 นาทีที่แล้ว",
			type: "info",
		},
		{
			id: 3,
			title: "การอนุมัติเสร็จสิ้น",
			message: "คำขอเบิกน้ำมันได้รับการอนุมัติแล้ว",
			time: "2 ชั่วโมงที่แล้ว",
			type: "success",
		},
	];

	// Load available roles and user name from localStorage on component mount
	useEffect(() => {
		const userRoles = localStorage.getItem("userRoles");
		const storedUserName = localStorage.getItem("userName");

		if (userRoles) {
			try {
				const roles = JSON.parse(userRoles);
				setAvailableRoles(roles);
			} catch {
				setAvailableRoles([currentRole]);
			}
		} else {
			setAvailableRoles([currentRole]);
		}

		if (storedUserName) {
			setUserName(storedUserName);
		}
	}, [currentRole]);

	// Close dropdowns when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
				setNotificationsOpen(false);
			}
			if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
				setUserMenuOpen(false);
			}
			if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target as Node)) {
				setRoleDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleRoleSwitch = (newRole: string) => {
		onRoleChange(newRole);
		setRoleDropdownOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background border-border px-6 shadow-sm dark:shadow-gray-800">
			{/* Left Section */}
			<div className="flex items-center gap-4">
				<button
					onClick={() => setSidebarOpen(!sidebarOpen)}
					className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors"
				>
					<svg
						className="h-5 w-5 text-foreground"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<Link href="/dashboard" className="flex items-center gap-2">
					<span className="text-xl font-bold text-foreground">ระบบจัดการกองรถโม่ปูน</span>
				</Link>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4">
				{/* Current Role Display / Role Switcher */}
				{availableRoles.length > 1 ? (
					// Multiple roles - show dropdown
					<div className="hidden md:block relative" ref={roleDropdownRef}>
						<button
							onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
							className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md hover:bg-muted/80 transition-colors"
						>
							<svg
								className="h-4 w-4 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span className="text-sm font-medium text-foreground">{currentRole}</span>
							<svg
								className="h-4 w-4 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						{roleDropdownOpen && (
							<div className="absolute right-0 mt-2 w-64 rounded-md border border-border bg-background shadow-lg z-50 dark:shadow-gray-800">
								<div className="py-1">
									<div className="px-3 py-2 text-xs font-medium text-muted-foreground border-b border-border">
										เปลี่ยนบทบาท
									</div>
									{availableRoles.map((role) => (
										<button
											key={role}
											onClick={() => handleRoleSwitch(role)}
											className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-muted ${
												role === currentRole
													? "bg-muted text-primary font-medium"
													: "text-foreground"
											}`}
										>
											{role}
											{role === currentRole && (
												<svg
													className="inline ml-2 h-4 w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
											)}
										</button>
									))}
								</div>
							</div>
						)}
					</div>
				) : (
					// Single role - show static display
					<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-muted rounded-md">
						<svg
							className="h-4 w-4 text-muted-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<span className="text-sm font-medium text-foreground">{currentRole}</span>
					</div>
				)}

				{/* Notifications */}
				<div className="relative" ref={notificationRef}>
					<button
						onClick={() => setNotificationsOpen(!notificationsOpen)}
						className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors"
					>
						<svg
							className="h-5 w-5 text-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
						<span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
							3
						</span>
					</button>

					{notificationsOpen && (
						<div className="absolute right-0 mt-2 w-80 rounded-md border border-border bg-background shadow-lg dark:shadow-gray-800">
							<div className="flex items-center justify-between border-b border-border p-3">
								<h3 className="font-medium text-foreground">การแจ้งเตือน</h3>
								<Link href="/notifications" className="text-sm text-primary hover:underline">
									ดูทั้งหมด
								</Link>
							</div>
							<div className="max-h-80 overflow-y-auto">
								{notifications.map((notification) => (
									<div key={notification.id} className="border-b border-border p-3 last:border-0">
										<div className="flex items-start gap-3">
											<div
												className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
													notification.type === "warning"
														? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
														: notification.type === "success"
														? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
														: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
												}`}
											>
												{notification.type === "warning" ? (
													<svg
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
														/>
													</svg>
												) : notification.type === "success" ? (
													<svg
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M5 13l4 4L19 7"
														/>
													</svg>
												) : (
													<svg
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
												)}
											</div>
											<div className="flex-1">
												<h4 className="text-sm font-medium text-foreground">
													{notification.title}
												</h4>
												<p className="text-xs text-muted-foreground">{notification.message}</p>
												<span className="mt-1 block text-xs text-muted-foreground">
													{notification.time}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* User Profile */}
				<div className="relative">
					<button
						onClick={() => setUserMenuOpen(!userMenuOpen)}
						className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-muted transition-colors"
					>
						<div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
							<Image src="/placeholder-user.jpg" alt="User" width={32} height={32} />
						</div>
						<div className="hidden text-left sm:block">
							<div className="text-sm font-medium text-foreground">{userName}</div>
						</div>
						<svg
							className="h-4 w-4 text-muted-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{userMenuOpen && (
						<div
							ref={userMenuRef}
							className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-background shadow-lg z-50 dark:shadow-gray-800"
						>
							<div className="py-1">
								<Link
									href="/user/settings"
									className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
									onClick={() => setUserMenuOpen(false)}
								>
									<svg
										className="mr-3 h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									ตั้งค่า
								</Link>
								<button
									onClick={() => {
										setUserMenuOpen(false);
										// Clear all user data from localStorage and redirect to login
										localStorage.removeItem("userRole");
										localStorage.removeItem("currentRole");
										localStorage.removeItem("userRoles");
										localStorage.removeItem("userName");
										window.location.href = "/login";
									}}
									className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-muted dark:text-red-400 transition-colors"
								>
									<svg
										className="mr-3 h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
									ออกจากระบบ
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

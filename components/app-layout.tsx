"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

interface AppLayoutProps {
	children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [currentRole, setCurrentRole] = useState(""); // Initialize as empty
	const pathname = usePathname();

	// Load current role from localStorage on component mount
	useEffect(() => {
		const savedCurrentRole = localStorage.getItem("currentRole");
		if (savedCurrentRole) {
			setCurrentRole(savedCurrentRole);
		} else {
			// If no current role, try to get from legacy userRole or default
			const legacyRole = localStorage.getItem("userRole");
			if (legacyRole) {
				setCurrentRole(legacyRole);
				localStorage.setItem("currentRole", legacyRole);
			} else {
				setCurrentRole("ผู้ดูแลระบบ");
			}
		}
	}, []);

	// Hide sidebar and header on login page
	const isLoginPage = pathname === "/login" || pathname === "/";

	if (isLoginPage) {
		return <>{children}</>;
	}

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleRoleChange = (newRole: string) => {
		setCurrentRole(newRole);
		localStorage.setItem("currentRole", newRole);
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<Header
				currentRole={currentRole}
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				onRoleChange={handleRoleChange}
			/>

			<div className="flex">
				{/* Sidebar */}
				<Sidebar open={sidebarOpen} currentRole={currentRole} onToggle={toggleSidebar} />

				{/* Main Content */}
				<main
					className={`flex-1 transition-all duration-300 ${
						sidebarOpen ? "ml-64" : "ml-16"
					} pt-16 min-h-screen bg-background`}
				>
					{children}
				</main>
			</div>
		</div>
	);
}

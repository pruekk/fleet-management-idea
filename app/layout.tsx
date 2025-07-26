import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLayout } from "../components/app-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ระบบจัดการกองรถโม่ปูน",
	description: "Fleet Management System for Cement Trucks",
	generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="th" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<AppLayout>{children}</AppLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}

import type React from "react";

interface AdminPageLayoutProps {
	title: string;
	description: string;
	children: React.ReactNode;
	headerActions?: React.ReactNode;
}

export function AdminPageLayout({
	title,
	description,
	children,
	headerActions,
}: AdminPageLayoutProps) {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-foreground">{title}</h1>
					<p className="text-muted-foreground">{description}</p>
				</div>
				{headerActions && <div>{headerActions}</div>}
			</div>
			{children}
		</div>
	);
}

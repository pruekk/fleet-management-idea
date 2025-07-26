import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="max-w-md w-full space-y-8 p-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">ระบบจัดการกองรถโม่ปูน</h1>
					<p className="text-gray-600">Fleet Management System for Cement Trucks</p>
					<div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
						<p className="text-sm text-blue-800">
							💡 <strong>สำหรับการ Demo:</strong> กรุณาเลือกบทบาทก่อนเข้าสู่ระบบ
							<br />
							บทบาทที่เลือกจะกำหนดสิทธิการเข้าถึงในระบบ
						</p>
					</div>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}

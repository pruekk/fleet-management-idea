"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Plus,
	Search,
	Edit,
	Trash2,
	Eye,
	CheckCircle,
	XCircle,
	Clock,
	DollarSign,
	User,
	Building,
	Calendar,
	AlertCircle,
	Download,
	FileText,
	CreditCard,
	Banknote,
	TrendingUp,
	TrendingDown,
} from "lucide-react";

interface TransferRequest {
	id: string;
	requestNumber: string;
	requestType: "payment" | "refund" | "advance" | "expense";
	requestDate: string;
	requester: {
		name: string;
		department: string;
		position: string;
		employeeId: string;
	};
	recipient: {
		type: "customer" | "supplier" | "employee" | "other";
		name: string;
		accountName: string;
		bankName: string;
		accountNumber: string;
	};
	amount: number;
	currency: "THB" | "USD";
	purpose: string;
	description: string;
	category: string;
	urgency: "low" | "normal" | "high" | "urgent";
	attachments: string[];
	approvalFlow: {
		level: number;
		approverName: string;
		approverPosition: string;
		status: "pending" | "approved" | "rejected";
		approvedDate?: string;
		comments?: string;
	}[];
	currentApprovalLevel: number;
	overallStatus: "pending" | "approved" | "rejected" | "completed" | "cancelled";
	dueDate: string;
	paymentMethod: "bank_transfer" | "check" | "cash" | "credit_card";
	referenceDocuments: string[];
	createdDate: string;
	completedDate?: string;
}

const mockTransferRequests: TransferRequest[] = [
	{
		id: "TR001",
		requestNumber: "TR-2024-001",
		requestType: "payment",
		requestDate: "2024-01-15",
		requester: {
			name: "นายสมชาย ใจดี",
			department: "ฝ่ายขาย",
			position: "ผู้จัดการฝ่ายขาย",
			employeeId: "EMP001",
		},
		recipient: {
			type: "supplier",
			name: "บริษัท ปูนซีเมนต์ไทย จำกัด",
			accountName: "บริษัท ปูนซีเมนต์ไทย จำกัด",
			bankName: "ธนาคารไทยพาณิชย์",
			accountNumber: "123-4-56789-0",
		},
		amount: 500000,
		currency: "THB",
		purpose: "ชำระค่าวัสดุก่อสร้าง",
		description: "ชำระค่าปูนซีเมนต์สำหรับโครงการอาคารสำนักงาน ตามใบกำกับภาษี INV-001",
		category: "วัสดุก่อสร้าง",
		urgency: "normal",
		attachments: ["ใบกำกับภาษี_INV001.pdf", "ใบสั่งซื้อ_PO001.pdf"],
		approvalFlow: [
			{
				level: 1,
				approverName: "นายวิชาญ ผู้จัดการ",
				approverPosition: "ผู้จัดการฝ่ายการเงิน",
				status: "approved",
				approvedDate: "2024-01-16",
				comments: "อนุมัติตามเงื่อนไขสัญญา",
			},
			{
				level: 2,
				approverName: "นายประสิทธิ์ ผู้อำนวยการ",
				approverPosition: "ผู้อำนวยการฝ่ายบริหาร",
				status: "pending",
			},
		],
		currentApprovalLevel: 2,
		overallStatus: "pending",
		dueDate: "2024-01-25",
		paymentMethod: "bank_transfer",
		referenceDocuments: ["PO-001", "INV-001"],
		createdDate: "2024-01-15",
	},
	{
		id: "TR002",
		requestNumber: "TR-2024-002",
		requestType: "refund",
		requestDate: "2024-01-12",
		requester: {
			name: "นางสาวสมใจ ดีใจ",
			department: "ฝ่ายบัญชี",
			position: "นักบัญชี",
			employeeId: "EMP002",
		},
		recipient: {
			type: "customer",
			name: "บริษัท ซีเมนต์ไทย จำกัด",
			accountName: "บริษัท ซีเมนต์ไทย จำกัด",
			bankName: "ธนาคารกสิกรไทย",
			accountNumber: "987-6-54321-0",
		},
		amount: 125000,
		currency: "THB",
		purpose: "คืนเงินมัดจำ",
		description: "คืนเงินมัดจำส่วนเกินจากการยกเลิกออเดอร์บางส่วน",
		category: "เงินมัดจำ",
		urgency: "high",
		attachments: ["เอกสารยกเลิกออเดอร์.pdf"],
		approvalFlow: [
			{
				level: 1,
				approverName: "นายวิชาญ ผู้จัดการ",
				approverPosition: "ผู้จัดการฝ่ายการเงิน",
				status: "approved",
				approvedDate: "2024-01-13",
				comments: "อนุมัติการคืนเงิน",
			},
			{
				level: 2,
				approverName: "นายประสิทธิ์ ผู้อำนวยการ",
				approverPosition: "ผู้อำนวยการฝ่ายบริหาร",
				status: "approved",
				approvedDate: "2024-01-14",
				comments: "อนุมัติ",
			},
		],
		currentApprovalLevel: 2,
		overallStatus: "approved",
		dueDate: "2024-01-20",
		paymentMethod: "bank_transfer",
		referenceDocuments: ["CANCEL-001"],
		createdDate: "2024-01-12",
	},
	{
		id: "TR003",
		requestNumber: "TR-2024-003",
		requestType: "expense",
		requestDate: "2024-01-10",
		requester: {
			name: "นายมานะ ขับรถ",
			department: "ฝ่ายขนส่ง",
			position: "พนักงานขับรถ",
			employeeId: "EMP003",
		},
		recipient: {
			type: "employee",
			name: "นายมานะ ขับรถ",
			accountName: "นายมานะ ขับรถ",
			bankName: "ธนาคารกรุงไทย",
			accountNumber: "456-7-89012-3",
		},
		amount: 25000,
		currency: "THB",
		purpose: "ค่าใช้จ่ายในการเดินทาง",
		description: "ค่าน้ำมัน ค่าผ่านทาง และค่าใช้จ่ายอื่นๆ ในการเดินทางไปส่งสินค้า",
		category: "ค่าเดินทาง",
		urgency: "low",
		attachments: ["ใบเสร็จค่าน้ำมัน.pdf", "ใบเสร็จค่าผ่านทาง.pdf"],
		approvalFlow: [
			{
				level: 1,
				approverName: "นายสมศักดิ์ หัวหน้า",
				approverPosition: "หัวหน้าฝ่ายขนส่ง",
				status: "approved",
				approvedDate: "2024-01-11",
				comments: "อนุมัติค่าใช้จ่าย",
			},
		],
		currentApprovalLevel: 1,
		overallStatus: "approved",
		dueDate: "2024-01-18",
		paymentMethod: "bank_transfer",
		referenceDocuments: ["EXP-001"],
		createdDate: "2024-01-10",
		completedDate: "2024-01-15",
	},
];

export default function TransferApprovalPage() {
	const [requests] = useState<TransferRequest[]>(mockTransferRequests);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");
	const [filterType, setFilterType] = useState("all");
	const [selectedRequest, setSelectedRequest] = useState<TransferRequest | null>(null);
	const [approvalComment, setApprovalComment] = useState("");

	const filteredRequests = requests.filter((request) => {
		const matchesSearch =
			request.requestNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
			request.requester.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			request.recipient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			request.purpose.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesStatus = filterStatus === "all" || request.overallStatus === filterStatus;
		const matchesType = filterType === "all" || request.requestType === filterType;

		return matchesSearch && matchesStatus && matchesType;
	});

	const totalRequests = requests.length;
	const pendingRequests = requests.filter((r) => r.overallStatus === "pending").length;
	const totalAmount = requests.reduce((sum, r) => sum + r.amount, 0);
	const approvedToday = requests.filter(
		(r) =>
			r.overallStatus === "approved" &&
			r.approvalFlow.some((flow) => flow.approvedDate === new Date().toISOString().split("T")[0])
	).length;

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "pending":
				return <Badge variant="secondary">รอการอนุมัติ</Badge>;
			case "approved":
				return <Badge variant="default">อนุมัติแล้ว</Badge>;
			case "rejected":
				return <Badge variant="destructive">ปฏิเสธ</Badge>;
			case "completed":
				return <Badge variant="outline">เสร็จสิ้น</Badge>;
			case "cancelled":
				return <Badge variant="secondary">ยกเลิก</Badge>;
			default:
				return <Badge variant="secondary">{status}</Badge>;
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "pending":
				return <Clock className="h-4 w-4" />;
			case "approved":
				return <CheckCircle className="h-4 w-4" />;
			case "rejected":
				return <XCircle className="h-4 w-4" />;
			case "completed":
				return <CheckCircle className="h-4 w-4" />;
			case "cancelled":
				return <XCircle className="h-4 w-4" />;
			default:
				return <Clock className="h-4 w-4" />;
		}
	};

	const getUrgencyBadge = (urgency: string) => {
		switch (urgency) {
			case "urgent":
				return <Badge variant="destructive">ด่วนมาก</Badge>;
			case "high":
				return <Badge variant="destructive">ด่วน</Badge>;
			case "normal":
				return <Badge variant="outline">ปกติ</Badge>;
			case "low":
				return <Badge variant="secondary">ไม่ด่วน</Badge>;
			default:
				return <Badge variant="outline">{urgency}</Badge>;
		}
	};

	const getRequestTypeIcon = (type: string) => {
		switch (type) {
			case "payment":
				return <DollarSign className="h-4 w-4" />;
			case "refund":
				return <TrendingDown className="h-4 w-4" />;
			case "advance":
				return <TrendingUp className="h-4 w-4" />;
			case "expense":
				return <Banknote className="h-4 w-4" />;
			default:
				return <DollarSign className="h-4 w-4" />;
		}
	};

	const getRequestTypeName = (type: string) => {
		switch (type) {
			case "payment":
				return "ชำระเงิน";
			case "refund":
				return "คืนเงิน";
			case "advance":
				return "เบิกล่วงหน้า";
			case "expense":
				return "ค่าใช้จ่าย";
			default:
				return type;
		}
	};

	return (
		<div className="flex-1 space-y-4 p-4 pt-6">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">อนุมัติการโอน</h2>
				<Button>
					<Plus className="mr-2 h-4 w-4" />
					สร้างคำขอใหม่
				</Button>
			</div>

			{/* Summary Cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">คำขอทั้งหมด</CardTitle>
						<FileText className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalRequests}</div>
						<p className="text-xs text-muted-foreground">รอการอนุมัติ {pendingRequests} รายการ</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">มูลค่ารวม</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">฿{totalAmount.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">มูลค่าคำขอทั้งหมด</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">รอการอนุมัติ</CardTitle>
						<Clock className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">{pendingRequests}</div>
						<p className="text-xs text-muted-foreground">รายการรอดำเนินการ</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">อนุมัติวันนี้</CardTitle>
						<CheckCircle className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">{approvedToday}</div>
						<p className="text-xs text-muted-foreground">รายการที่อนุมัติวันนี้</p>
					</CardContent>
				</Card>
			</div>

			{/* Filters */}
			<div className="flex items-center justify-between space-x-2">
				<div className="flex items-center space-x-2">
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="ค้นหาคำขอ..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-8 w-64"
						/>
					</div>

					<Select value={filterStatus} onValueChange={setFilterStatus}>
						<SelectTrigger className="w-40">
							<SelectValue placeholder="สถานะ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทั้งหมด</SelectItem>
							<SelectItem value="pending">รอการอนุมัติ</SelectItem>
							<SelectItem value="approved">อนุมัติแล้ว</SelectItem>
							<SelectItem value="rejected">ปฏิเสธ</SelectItem>
							<SelectItem value="completed">เสร็จสิ้น</SelectItem>
							<SelectItem value="cancelled">ยกเลิก</SelectItem>
						</SelectContent>
					</Select>

					<Select value={filterType} onValueChange={setFilterType}>
						<SelectTrigger className="w-36">
							<SelectValue placeholder="ประเภท" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">ทุกประเภท</SelectItem>
							<SelectItem value="payment">ชำระเงิน</SelectItem>
							<SelectItem value="refund">คืนเงิน</SelectItem>
							<SelectItem value="advance">เบิกล่วงหน้า</SelectItem>
							<SelectItem value="expense">ค่าใช้จ่าย</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Tabs defaultValue="list" className="space-y-4">
				<TabsList>
					<TabsTrigger value="list">รายการคำขอ</TabsTrigger>
					<TabsTrigger value="pending">รอการอนุมัติ</TabsTrigger>
					<TabsTrigger value="approved">อนุมัติแล้ว</TabsTrigger>
					<TabsTrigger value="reports">รายงาน</TabsTrigger>
				</TabsList>

				<TabsContent value="list" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>รายการคำขออนุมัติการโอน</CardTitle>
							<CardDescription>จัดการคำขอการโอนเงินและติดตามสถานะ</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>เลขที่คำขอ</TableHead>
										<TableHead>ประเภท/ความเร่งด่วน</TableHead>
										<TableHead>ผู้ขอ</TableHead>
										<TableHead>ผู้รับ/บัญชี</TableHead>
										<TableHead>จำนวนเงิน</TableHead>
										<TableHead>วัตถุประสงค์</TableHead>
										<TableHead>สถานะการอนุมัติ</TableHead>
										<TableHead className="text-right">การจัดการ</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{filteredRequests.map((request) => (
										<TableRow key={request.id}>
											<TableCell>
												<div className="flex items-center space-x-2">
													{getStatusIcon(request.overallStatus)}
													<div>
														<div className="font-medium">{request.requestNumber}</div>
														<div className="text-sm text-muted-foreground">
															{request.requestDate}
														</div>
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div className="space-y-2">
													<div className="flex items-center space-x-2">
														{getRequestTypeIcon(request.requestType)}
														<span className="font-medium">
															{getRequestTypeName(request.requestType)}
														</span>
													</div>
													{getUrgencyBadge(request.urgency)}
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium">{request.requester.name}</div>
													<div className="text-sm text-muted-foreground">
														{request.requester.position}
													</div>
													<div className="text-sm text-muted-foreground">
														{request.requester.department}
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium">{request.recipient.name}</div>
													<div className="text-sm text-muted-foreground flex items-center">
														<CreditCard className="h-3 w-3 mr-1" />
														{request.recipient.bankName}
													</div>
													<div className="text-sm text-muted-foreground">
														{request.recipient.accountNumber}
													</div>
													<Badge variant="outline" className="mt-1">
														{request.recipient.type === "customer"
															? "ลูกค้า"
															: request.recipient.type === "supplier"
															? "ซัพพลายเออร์"
															: request.recipient.type === "employee"
															? "พนักงาน"
															: "อื่นๆ"}
													</Badge>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium text-lg">
														฿{request.amount.toLocaleString()}
													</div>
													<div className="text-sm text-muted-foreground">{request.currency}</div>
													<div className="text-sm text-blue-600">
														{request.paymentMethod === "bank_transfer"
															? "โอนธนาคาร"
															: request.paymentMethod === "check"
															? "เช็ค"
															: request.paymentMethod === "cash"
															? "เงินสด"
															: "บัตรเครดิต"}
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div>
													<div className="font-medium">{request.purpose}</div>
													<div className="text-sm text-muted-foreground">{request.category}</div>
													<div className="text-sm text-muted-foreground">
														กำหนดชำระ: {request.dueDate}
													</div>
													{request.attachments.length > 0 && (
														<div className="text-xs text-blue-600 mt-1">
															📎 {request.attachments.length} ไฟล์แนบ
														</div>
													)}
												</div>
											</TableCell>
											<TableCell>
												<div className="space-y-2">
													{getStatusBadge(request.overallStatus)}
													<div className="text-sm text-muted-foreground">
														ขั้นตอน {request.currentApprovalLevel}/{request.approvalFlow.length}
													</div>
													{request.approvalFlow.map((flow, index) => (
														<div key={index} className="text-xs flex items-center space-x-1">
															{flow.status === "approved" && (
																<CheckCircle className="h-3 w-3 text-green-600" />
															)}
															{flow.status === "rejected" && (
																<XCircle className="h-3 w-3 text-red-600" />
															)}
															{flow.status === "pending" && (
																<Clock className="h-3 w-3 text-orange-600" />
															)}
															<span>{flow.approverName}</span>
														</div>
													))}
												</div>
											</TableCell>
											<TableCell className="text-right">
												<div className="flex justify-end space-x-2">
													<Dialog>
														<DialogTrigger asChild>
															<Button
																variant="ghost"
																size="icon"
																onClick={() => setSelectedRequest(request)}
															>
																<Eye className="h-4 w-4" />
															</Button>
														</DialogTrigger>
														<DialogContent className="max-w-4xl">
															<DialogHeader>
																<DialogTitle>รายละเอียดคำขอ {request.requestNumber}</DialogTitle>
																<DialogDescription>ข้อมูลการขออนุมัติการโอนเงิน</DialogDescription>
															</DialogHeader>
															{selectedRequest && (
																<div className="grid gap-4">
																	<div className="grid grid-cols-2 gap-4">
																		<div>
																			<h4 className="font-medium mb-2">ข้อมูลผู้ขอ</h4>
																			<p>
																				<strong>ชื่อ:</strong> {selectedRequest.requester.name}
																			</p>
																			<p>
																				<strong>ตำแหน่ง:</strong>{" "}
																				{selectedRequest.requester.position}
																			</p>
																			<p>
																				<strong>ฝ่าย:</strong>{" "}
																				{selectedRequest.requester.department}
																			</p>
																		</div>
																		<div>
																			<h4 className="font-medium mb-2">ข้อมูลผู้รับ</h4>
																			<p>
																				<strong>ชื่อ:</strong> {selectedRequest.recipient.name}
																			</p>
																			<p>
																				<strong>ธนาคาร:</strong>{" "}
																				{selectedRequest.recipient.bankName}
																			</p>
																			<p>
																				<strong>เลขบัญชี:</strong>{" "}
																				{selectedRequest.recipient.accountNumber}
																			</p>
																		</div>
																	</div>
																	<div>
																		<h4 className="font-medium mb-2">รายละเอียดการโอน</h4>
																		<p>
																			<strong>จำนวนเงิน:</strong> ฿
																			{selectedRequest.amount.toLocaleString()}
																		</p>
																		<p>
																			<strong>วัตถุประสงค์:</strong> {selectedRequest.purpose}
																		</p>
																		<p>
																			<strong>รายละเอียด:</strong> {selectedRequest.description}
																		</p>
																	</div>
																	<div>
																		<h4 className="font-medium mb-2">สถานะการอนุมัติ</h4>
																		{selectedRequest.approvalFlow.map((flow, index) => (
																			<div
																				key={index}
																				className="flex items-center justify-between p-2 border rounded mb-2"
																			>
																				<div>
																					<p className="font-medium">{flow.approverName}</p>
																					<p className="text-sm text-muted-foreground">
																						{flow.approverPosition}
																					</p>
																				</div>
																				<div className="text-right">
																					{getStatusBadge(flow.status)}
																					{flow.approvedDate && (
																						<p className="text-sm text-muted-foreground">
																							{flow.approvedDate}
																						</p>
																					)}
																				</div>
																			</div>
																		))}
																	</div>
																</div>
															)}
														</DialogContent>
													</Dialog>
													<Button variant="ghost" size="icon">
														<Edit className="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="icon">
														<Download className="h-4 w-4" />
													</Button>
													{request.overallStatus === "pending" && (
														<>
															<Button size="sm" variant="default">
																<CheckCircle className="h-4 w-4 mr-1" />
																อนุมัติ
															</Button>
															<Button size="sm" variant="destructive">
																<XCircle className="h-4 w-4 mr-1" />
																ปฏิเสธ
															</Button>
														</>
													)}
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="pending">
					<Card>
						<CardHeader>
							<CardTitle>รายการรอการอนุมัติ</CardTitle>
							<CardDescription>คำขอที่รอการพิจารณาอนุมัติ</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-center py-8 text-muted-foreground">
								แสดงเฉพาะรายการที่รอการอนุมัติ ({pendingRequests} รายการ)
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="approved">
					<Card>
						<CardHeader>
							<CardTitle>รายการที่อนุมัติแล้ว</CardTitle>
							<CardDescription>คำขอที่ผ่านการอนุมัติเรียบร้อยแล้ว</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-center py-8 text-muted-foreground">
								แสดงรายการที่ได้รับการอนุมัติแล้ว
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="reports">
					<Card>
						<CardHeader>
							<CardTitle>รายงานการอนุมัติ</CardTitle>
							<CardDescription>สถิติและรายงานการอนุมัติการโอนเงิน</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-3">
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-green-600">
										{requests.filter((r) => r.overallStatus === "approved").length}
									</div>
									<div className="text-sm text-muted-foreground">รายการที่อนุมัติ</div>
								</div>
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-red-600">
										{requests.filter((r) => r.overallStatus === "rejected").length}
									</div>
									<div className="text-sm text-muted-foreground">รายการที่ปฏิเสธ</div>
								</div>
								<div className="text-center p-4 border rounded-lg">
									<div className="text-2xl font-bold text-blue-600">
										฿
										{requests
											.filter((r) => r.overallStatus === "approved")
											.reduce((sum, r) => sum + r.amount, 0)
											.toLocaleString()}
									</div>
									<div className="text-sm text-muted-foreground">มูลค่าที่อนุมัติ</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

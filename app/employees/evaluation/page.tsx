"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckSquare, Plus, Search, Edit, Eye, Star, Award, TrendingUp } from "lucide-react";

// Mock data สำหรับการประเมิน
const evaluations = [
	{
		id: 1,
		employeeCode: "OP-DR-1-001",
		employeeName: "สมชาย ใจดี",
		department: "ปฏิบัติการ",
		position: "คนขับรถโม่",
		avatar: "/placeholder-user.jpg",
		period: "2024-Q4",
		evaluationDate: "2024-12-31",
		evaluator: "ผจก.สมหญิง มีสุข",
		overallScore: 4.2,
		maxScore: 5.0,
		status: "เสร็จสิ้น",
		scores: {
			workQuality: 4.5,
			workQuantity: 4.0,
			punctuality: 4.8,
			teamwork: 3.8,
			communication: 4.0,
			problemSolving: 4.2,
		},
		improvements: ["การสื่อสารกับลูกค้า", "การทำงานเป็นทีม"],
		strengths: ["ตรงต่อเวลา", "คุณภาพงานดี", "ขับขี่ปลอดภัย"],
		goals: ["เพิ่มทักษะการสื่อสาร", "เรียนรู้เส้นทางใหม่ๆ"],
	},
	{
		id: 2,
		employeeCode: "AD-MG-1-001",
		employeeName: "สมหญิง มีสุข",
		department: "บริหาร",
		position: "ผู้จัดการ",
		avatar: "/placeholder-user.jpg",
		period: "2024-Q4",
		evaluationDate: "2024-12-31",
		evaluator: "กรรมการผู้จัดการ",
		overallScore: 4.7,
		maxScore: 5.0,
		status: "เสร็จสิ้น",
		scores: {
			workQuality: 4.8,
			workQuantity: 4.5,
			punctuality: 5.0,
			teamwork: 4.7,
			communication: 4.8,
			problemSolving: 4.6,
		},
		improvements: ["การพัฒนาทีมงาน"],
		strengths: ["ภาวะผู้นำ", "การตัดสินใจ", "การจัดการเวลา"],
		goals: ["พัฒนาระบบ KPI ใหม่", "เพิ่มประสิทธิภาพทีม"],
	},
];

// Mock data สำหรับรูปแบบการประเมิน
const evaluationTemplates = [
	{
		id: 1,
		name: "การประเมินพนักงานขับรถ",
		description: "แบบประเมินสำหรับพนักงานขับรถโม่และรถบรรทุก",
		criteria: ["คุณภาพงาน", "ปริมาณงาน", "ความตรงต่อเวลา", "ความปลอดภัย", "การสื่อสาร"],
		applicableTo: ["คนขับรถโม่", "คนขับรถบรรทุก", "ผู้ช่วยคนขับ"],
		frequency: "ทุกไตรมาส",
	},
	{
		id: 2,
		name: "การประเมินพนักงานสำนักงาน",
		description: "แบบประเมินสำหรับพนักงานสำนักงานและฝ่ายบริหาร",
		criteria: ["คุณภาพงาน", "ปริมาณงาน", "ความคิดสร้างสรรค์", "การทำงานเป็นทีม", "ภาวะผู้นำ"],
		applicableTo: ["ผู้จัดการ", "นักบัญชี", "เจ้าหน้าที่"],
		frequency: "ทุกไตรมาส",
	},
];

export default function EmployeeEvaluationPage() {
	const getScoreColor = (score: number) => {
		if (score >= 4.5) return "text-green-600";
		if (score >= 3.5) return "text-yellow-600";
		return "text-red-600";
	};

	const getScoreProgress = (score: number, maxScore: number) => {
		return (score / maxScore) * 100;
	};

	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-3xl font-bold">ประเมินพนักงาน</h1>
				<p className="text-muted-foreground">ระบบประเมินผลการปฏิบัติงานและพัฒนาพนักงาน</p>
			</div>

			<Tabs defaultValue="evaluations" className="space-y-4">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
					<TabsTrigger value="evaluations">ผลการประเมิน</TabsTrigger>
					<TabsTrigger value="templates">แบบฟอร์มประเมิน</TabsTrigger>
					<TabsTrigger value="reports">รายงานสรุป</TabsTrigger>
				</TabsList>

				<TabsContent value="evaluations" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<Input placeholder="ค้นหาพนักงาน..." className="pl-10 w-64" />
								</div>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกงวดประเมิน" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="2024-Q4">Q4 2024</SelectItem>
										<SelectItem value="2024-Q3">Q3 2024</SelectItem>
										<SelectItem value="2024-Q2">Q2 2024</SelectItem>
										<SelectItem value="2024-Q1">Q1 2024</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="เลือกฝ่าย" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">ทุกฝ่าย</SelectItem>
										<SelectItem value="operation">ปฏิบัติการ</SelectItem>
										<SelectItem value="admin">บริหาร</SelectItem>
										<SelectItem value="accounting">บัญชี</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								ประเมินใหม่
							</Button>
						</div>

						<div className="grid gap-4">
							{evaluations.map((evaluation) => (
								<Card key={evaluation.id}>
									<CardContent className="p-6">
										<div className="flex items-start justify-between">
											<div className="flex items-start space-x-4">
												<Avatar className="h-16 w-16">
													<AvatarImage src={evaluation.avatar} alt={evaluation.employeeName} />
													<AvatarFallback>
														{evaluation.employeeName.split(" ")[0].charAt(0)}
														{evaluation.employeeName.split(" ")[1]?.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-3 flex-1">
													<div className="flex items-center space-x-2">
														<h3 className="text-lg font-semibold">{evaluation.employeeName}</h3>
														<Badge variant="outline">{evaluation.employeeCode}</Badge>
														<Badge
															variant={evaluation.status === "เสร็จสิ้น" ? "default" : "secondary"}
														>
															{evaluation.status}
														</Badge>
													</div>

													<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
														<div>
															<span className="text-muted-foreground">ฝ่าย/ตำแหน่ง:</span>
															<div className="font-medium">
																{evaluation.department} / {evaluation.position}
															</div>
														</div>
														<div>
															<span className="text-muted-foreground">งวดประเมิน:</span>
															<div className="font-medium">{evaluation.period}</div>
														</div>
														<div>
															<span className="text-muted-foreground">ผู้ประเมิน:</span>
															<div className="font-medium">{evaluation.evaluator}</div>
														</div>
														<div>
															<span className="text-muted-foreground">วันที่ประเมิน:</span>
															<div className="font-medium">{evaluation.evaluationDate}</div>
														</div>
													</div>

													<div className="space-y-2">
														<div className="flex items-center justify-between">
															<span className="text-sm font-medium">คะแนนรวม</span>
															<div className="flex items-center space-x-2">
																<span
																	className={`text-lg font-bold ${getScoreColor(
																		evaluation.overallScore
																	)}`}
																>
																	{evaluation.overallScore}
																</span>
																<span className="text-sm text-muted-foreground">
																	/ {evaluation.maxScore}
																</span>
															</div>
														</div>
														<Progress
															value={getScoreProgress(evaluation.overallScore, evaluation.maxScore)}
															className="h-2"
														/>
													</div>

													<div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
														<div className="flex justify-between">
															<span>คุณภาพงาน:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.workQuality
																)}`}
															>
																{evaluation.scores.workQuality}
															</span>
														</div>
														<div className="flex justify-between">
															<span>ปริมาณงาน:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.workQuantity
																)}`}
															>
																{evaluation.scores.workQuantity}
															</span>
														</div>
														<div className="flex justify-between">
															<span>ความตรงต่อเวลา:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.punctuality
																)}`}
															>
																{evaluation.scores.punctuality}
															</span>
														</div>
														<div className="flex justify-between">
															<span>การทำงานเป็นทีม:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.teamwork
																)}`}
															>
																{evaluation.scores.teamwork}
															</span>
														</div>
														<div className="flex justify-between">
															<span>การสื่อสาร:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.communication
																)}`}
															>
																{evaluation.scores.communication}
															</span>
														</div>
														<div className="flex justify-between">
															<span>การแก้ปัญหา:</span>
															<span
																className={`font-medium ${getScoreColor(
																	evaluation.scores.problemSolving
																)}`}
															>
																{evaluation.scores.problemSolving}
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="flex space-x-2">
												<Button variant="outline" size="sm">
													<Eye className="h-4 w-4 mr-1" />
													ดูรายละเอียด
												</Button>
												<Button variant="outline" size="sm">
													<Edit className="h-4 w-4 mr-1" />
													แก้ไข
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="templates" className="mt-2">
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-xl font-semibold">แบบฟอร์มการประเมิน</h2>
								<p className="text-muted-foreground">จัดการแบบฟอร์มและเกณฑ์การประเมิน</p>
							</div>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								สร้างแบบฟอร์มใหม่
							</Button>
						</div>

						<div className="grid gap-4">
							{evaluationTemplates.map((template) => (
								<Card key={template.id}>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<CheckSquare className="h-5 w-5" />
											{template.name}
										</CardTitle>
										<CardDescription>{template.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div>
												<span className="text-sm font-medium text-muted-foreground">
													เกณฑ์การประเมิน:
												</span>
												<div className="flex flex-wrap gap-2 mt-1">
													{template.criteria.map((criterion, index) => (
														<Badge key={index} variant="outline">
															{criterion}
														</Badge>
													))}
												</div>
											</div>
											<div>
												<span className="text-sm font-medium text-muted-foreground">
													ใช้สำหรับตำแหน่ง:
												</span>
												<div className="flex flex-wrap gap-2 mt-1">
													{template.applicableTo.map((position, index) => (
														<Badge key={index} variant="secondary">
															{position}
														</Badge>
													))}
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div>
													<span className="text-sm font-medium text-muted-foreground">
														ความถี่การประเมิน:{" "}
													</span>
													<span className="text-sm font-medium">{template.frequency}</span>
												</div>
												<div className="flex space-x-2">
													<Button variant="outline" size="sm">
														<Edit className="h-3 w-3 mr-1" />
														แก้ไข
													</Button>
													<Button variant="outline" size="sm">
														<Eye className="h-3 w-3 mr-1" />
														ดูตัวอย่าง
													</Button>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</TabsContent>

				<TabsContent value="reports" className="mt-2">
					<div className="space-y-6">
						<div>
							<h2 className="text-xl font-semibold">รายงานสรุปการประเมิน</h2>
							<p className="text-muted-foreground">วิเคราะห์ผลการประเมินและแนวโน้มการพัฒนา</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Award className="h-8 w-8 text-blue-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">4.3</p>
											<p className="text-sm text-muted-foreground">คะแนนเฉลี่ยรวม</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<Star className="h-8 w-8 text-yellow-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">12</p>
											<p className="text-sm text-muted-foreground">พนักงานดีเด่น</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<TrendingUp className="h-8 w-8 text-green-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">85%</p>
											<p className="text-sm text-muted-foreground">อัตราการปรับปรุง</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2">
										<CheckSquare className="h-8 w-8 text-purple-500" />
										<div>
											<p className="text-2xl font-bold text-foreground">24</p>
											<p className="text-sm text-muted-foreground">การประเมินทั้งหมด</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<Card>
							<CardHeader>
								<CardTitle>ผลการประเมินตามฝ่าย</CardTitle>
								<CardDescription>เปรียบเทียบคะแนนเฉลี่ยของแต่ละฝ่าย</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[
										{ department: "ฝ่ายบริหาร", score: 4.6, employees: 3 },
										{ department: "ฝ่ายปฏิบัติการ", score: 4.2, employees: 15 },
										{ department: "ฝ่ายบัญชี", score: 4.4, employees: 4 },
										{ department: "ฝ่ายซ่อมบำรุง", score: 4.1, employees: 2 },
									].map((dept, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 border rounded-lg"
										>
											<div>
												<h4 className="font-medium">{dept.department}</h4>
												<p className="text-sm text-muted-foreground">{dept.employees} คน</p>
											</div>
											<div className="flex items-center space-x-3">
												<div className="text-right">
													<div className={`text-lg font-bold ${getScoreColor(dept.score)}`}>
														{dept.score}
													</div>
													<div className="text-xs text-muted-foreground">/ 5.0</div>
												</div>
												<Progress value={getScoreProgress(dept.score, 5.0)} className="w-20 h-2" />
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}

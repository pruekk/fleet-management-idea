"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Plus, Edit, Trash2, FileText, Calculator } from "lucide-react"

export default function BillingPage() {
  const [billings, setBillings] = useState([
    {
      id: 1,
      month: "2024-12",
      customer: "บริษัท ก่อสร้าง ABC จำกัด",
      trips: 21,
      tripCost: 31500,
      transport: 2,
      transportCost: 2400,
      allowance: 1200,
      penalty: 500,
      total: 34600,
      status: "ส่งแล้ว",
      sentDate: "2024-12-15",
    },
    {
      id: 2,
      month: "2024-12",
      customer: "บริษัท โครงการใหญ่ จำกัด",
      trips: 18,
      tripCost: 27000,
      transport: 1,
      transportCost: 1200,
      allowance: 800,
      penalty: 0,
      total: 29000,
      status: "รอส่ง",
      sentDate: "",
    },
  ])

  const [newBilling, setNewBilling] = useState({
    month: "",
    customer: "",
    trips: "",
    tripCost: "",
    transport: "",
    transportCost: "",
    allowance: "",
    penalty: "",
  })

  const calculateTotal = () => {
    const tripCost = Number.parseInt(newBilling.tripCost) || 0
    const transportCost = Number.parseInt(newBilling.transportCost) || 0
    const allowance = Number.parseInt(newBilling.allowance) || 0
    const penalty = Number.parseInt(newBilling.penalty) || 0
    return tripCost + transportCost + allowance - penalty
  }

  const handleAddBilling = () => {
    if (newBilling.month && newBilling.customer && newBilling.trips) {
      setBillings([
        ...billings,
        {
          id: billings.length + 1,
          month: newBilling.month,
          customer: newBilling.customer,
          trips: Number.parseInt(newBilling.trips),
          tripCost: Number.parseInt(newBilling.tripCost) || 0,
          transport: Number.parseInt(newBilling.transport) || 0,
          transportCost: Number.parseInt(newBilling.transportCost) || 0,
          allowance: Number.parseInt(newBilling.allowance) || 0,
          penalty: Number.parseInt(newBilling.penalty) || 0,
          total: calculateTotal(),
          status: "รอส่ง",
          sentDate: "",
        },
      ])
      setNewBilling({
        month: "",
        customer: "",
        trips: "",
        tripCost: "",
        transport: "",
        transportCost: "",
        allowance: "",
        penalty: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">วางบิลลูกค้า</h1>
        <p className="text-gray-600">สร้างและจัดการใบแจ้งหนี้</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">บิลเดือนนี้</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <p className="text-xs text-muted-foreground">ใบแจ้งหนี้</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ส่งแล้ว</CardTitle>
            <Calculator className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">5</div>
            <p className="text-xs text-muted-foreground">62.5% ของทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รอส่ง</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-xs text-muted-foreground">37.5% ของทั้งหมด</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">มูลค่ารวม</CardTitle>
            <Calculator className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">฿485,000</div>
            <p className="text-xs text-muted-foreground">เดือนนี้</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                รายการใบแจ้งหนี้
              </CardTitle>
              <CardDescription>จัดการใบแจ้งหนี้ลูกค้า</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  สร้างใบแจ้งหนี้
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>สร้างใบแจ้งหนี้ใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลสำหรับสร้างใบแจ้งหนี้</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="month">เดือน</Label>
                      <Input
                        id="month"
                        type="month"
                        value={newBilling.month}
                        onChange={(e) => setNewBilling({ ...newBilling, month: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="customer">ลูกค้า</Label>
                      <Select
                        value={newBilling.customer}
                        onValueChange={(value) => setNewBilling({ ...newBilling, customer: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกลูกค้า" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="บริษัท ก่อสร้าง ABC จำกัด">บริษัท ก่อสร้าง ABC จำกัด</SelectItem>
                          <SelectItem value="บริษัท โครงการใหญ่ จำกัด">บริษัท โครงการใหญ่ จำกัด</SelectItem>
                          <SelectItem value="บริษัท พัฒนาที่ดิน จำกัด">บริษัท พัฒนาที่ดิน จำกัด</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-4">
                    <h3 className="font-semibold">รายการค่าใช้จ่าย</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="trips">จำนวนเที่ยว</Label>
                        <Input
                          id="trips"
                          type="number"
                          value={newBilling.trips}
                          onChange={(e) => setNewBilling({ ...newBilling, trips: e.target.value })}
                          placeholder="21"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tripCost">ค่าวิ่งเที่ยว (บาท)</Label>
                        <Input
                          id="tripCost"
                          type="number"
                          value={newBilling.tripCost}
                          onChange={(e) => setNewBilling({ ...newBilling, tripCost: e.target.value })}
                          placeholder="31500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="transport">จำนวนครั้งโยกรถ</Label>
                        <Input
                          id="transport"
                          type="number"
                          value={newBilling.transport}
                          onChange={(e) => setNewBilling({ ...newBilling, transport: e.target.value })}
                          placeholder="2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="transportCost">ค่าโยกรถ (บาท)</Label>
                        <Input
                          id="transportCost"
                          type="number"
                          value={newBilling.transportCost}
                          onChange={(e) => setNewBilling({ ...newBilling, transportCost: e.target.value })}
                          placeholder="2400"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="allowance">ค่าครองชีพ (บาท)</Label>
                        <Input
                          id="allowance"
                          type="number"
                          value={newBilling.allowance}
                          onChange={(e) => setNewBilling({ ...newBilling, allowance: e.target.value })}
                          placeholder="1200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="penalty">ค่าปรับ (บาท)</Label>
                        <Input
                          id="penalty"
                          type="number"
                          value={newBilling.penalty}
                          onChange={(e) => setNewBilling({ ...newBilling, penalty: e.target.value })}
                          placeholder="500"
                        />
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">รวมทั้งสิ้น</span>
                        <span className="font-bold text-xl text-green-600">฿{calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleAddBilling} className="w-full">
                    สร้างใบแจ้งหนี้
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="billing-month">เดือน</Label>
                <Input id="billing-month" type="month" />
              </div>
              <div>
                <Label htmlFor="billing-customer">ลูกค้า</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกลูกค้า" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ทั้งหมด</SelectItem>
                    <SelectItem value="บริษัท ก่อสร้าง ABC จำกัด">บริษัท ก่อสร้าง ABC จำกัด</SelectItem>
                    <SelectItem value="บริษัท โครงการใหญ่ จำกัด">บริษัท โครงการใหญ่ จำกัด</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="billing-status">สถานะ</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกสถานะ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ทั้งหมด</SelectItem>
                    <SelectItem value="ส่งแล้ว">ส่งแล้ว</SelectItem>
                    <SelectItem value="รอส่ง">รอส่ง</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เดือน</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>เที่ยว</TableHead>
                <TableHead>โยกรถ</TableHead>
                <TableHead>ค่าปรับ</TableHead>
                <TableHead>รวม</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billings.map((billing) => (
                <TableRow key={billing.id}>
                  <TableCell>{billing.month}</TableCell>
                  <TableCell className="font-medium">{billing.customer}</TableCell>
                  <TableCell>
                    <div>
                      <div>{billing.trips} เที่ยว</div>
                      <div className="text-sm text-muted-foreground">฿{billing.tripCost.toLocaleString()}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{billing.transport} ครั้ง</div>
                      <div className="text-sm text-muted-foreground">฿{billing.transportCost.toLocaleString()}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-red-600">
                    {billing.penalty > 0 ? `-฿${billing.penalty.toLocaleString()}` : "-"}
                  </TableCell>
                  <TableCell className="font-bold text-green-600">฿{billing.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={billing.status === "ส่งแล้ว" ? "secondary" : "destructive"}
                      className={
                        billing.status === "ส่งแล้ว" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }
                    >
                      {billing.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

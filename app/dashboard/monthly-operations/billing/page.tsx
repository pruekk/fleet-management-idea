"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function BillingPage() {
  const [vatRate, setVatRate] = useState(7) // Default VAT rate
  const [whtRate, setWhtRate] = useState(3) // Default Withholding Tax rate
  const [subTotal, setSubTotal] = useState(0)
  const [vatAmount, setVatAmount] = useState(0)
  const [whtAmount, setWhtAmount] = useState(0)
  const [netAmount, setNetAmount] = useState(0)

  useEffect(() => {
    const calculatedVat = subTotal * (vatRate / 100)
    const calculatedWht = subTotal * (whtRate / 100)
    const calculatedNet = subTotal + calculatedVat - calculatedWht
    setVatAmount(calculatedVat)
    setWhtAmount(calculatedWht)
    setNetAmount(calculatedNet)
  }, [subTotal, vatRate, whtRate])

  const billingData = [
    {
      id: 1,
      invoiceNo: "INV-001",
      customer: "บริษัท A",
      date: "2023-01-15",
      subTotal: 10000,
      vatRate: 7,
      whtRate: 3,
      vatAmount: 700,
      whtAmount: 300,
      netAmount: 10400,
      status: "ชำระแล้ว",
    },
    {
      id: 2,
      invoiceNo: "INV-002",
      customer: "บริษัท B",
      date: "2023-02-20",
      subTotal: 15000,
      vatRate: 7,
      whtRate: 3,
      vatAmount: 1050,
      whtAmount: 450,
      netAmount: 15600,
      status: "รอดำเนินการ",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">วางบิล</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              สร้างใบแจ้งหนี้ใหม่
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>สร้างใบแจ้งหนี้ใหม่</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="invoiceNo" className="text-right">
                  เลขที่ใบแจ้งหนี้
                </Label>
                <Input id="invoiceNo" defaultValue="INV-003" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customer" className="text-right">
                  ลูกค้า
                </Label>
                <Input id="customer" defaultValue="บริษัท C" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  วันที่
                </Label>
                <Input id="date" type="date" defaultValue="2023-03-01" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subTotal" className="text-right">
                  ยอดรวม (ไม่รวม VAT)
                </Label>
                <Input
                  id="subTotal"
                  type="number"
                  value={subTotal}
                  onChange={(e) => setSubTotal(Number.parseFloat(e.target.value) || 0)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vatRate" className="text-right">
                  อัตรา VAT (%)
                </Label>
                <Input
                  id="vatRate"
                  type="number"
                  value={vatRate}
                  onChange={(e) => setVatRate(Number.parseFloat(e.target.value) || 0)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vatAmount" className="text-right">
                  VAT Amount
                </Label>
                <Input id="vatAmount" type="number" value={vatAmount.toFixed(2)} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="whtRate" className="text-right">
                  อัตราภาษีหัก ณ ที่จ่าย (%)
                </Label>
                <Input
                  id="whtRate"
                  type="number"
                  value={whtRate}
                  onChange={(e) => setWhtRate(Number.parseFloat(e.target.value) || 0)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="whtAmount" className="text-right">
                  WHT Amount
                </Label>
                <Input id="whtAmount" type="number" value={whtAmount.toFixed(2)} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="netAmount" className="text-right">
                  Net Amount
                </Label>
                <Input id="netAmount" type="number" value={netAmount.toFixed(2)} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  สถานะ
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="เลือกสถานะ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">ชำระแล้ว</SelectItem>
                    <SelectItem value="pending">รอดำเนินการ</SelectItem>
                    <SelectItem value="overdue">เกินกำหนด</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="col-span-4">
                บันทึก
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>รายการใบแจ้งหนี้</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เลขที่ใบแจ้งหนี้</TableHead>
                <TableHead>ลูกค้า</TableHead>
                <TableHead>วันที่</TableHead>
                <TableHead>ยอดรวม (ไม่รวม VAT)</TableHead>
                <TableHead>VAT Amount</TableHead>
                <TableHead>WHT Amount</TableHead>
                <TableHead>Net Amount</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การจัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.invoiceNo}</TableCell>
                  <TableCell>{data.customer}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.subTotal.toLocaleString()}</TableCell>
                  <TableCell>{data.vatAmount.toLocaleString()}</TableCell>
                  <TableCell>{data.whtAmount.toLocaleString()}</TableCell>
                  <TableCell>{data.netAmount.toLocaleString()}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">แก้ไข</span>
                      </Button>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">ลบ</span>
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

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Sun, Type, Save } from "lucide-react"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState("medium")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved font size from localStorage
    const savedFontSize = localStorage.getItem("fontSize") || "medium"
    setFontSize(savedFontSize)
    applyFontSize(savedFontSize)
  }, [])

  const applyFontSize = (size: string) => {
    const root = document.documentElement
    switch (size) {
      case "small":
        root.style.fontSize = "14px"
        break
      case "medium":
        root.style.fontSize = "16px"
        break
      case "large":
        root.style.fontSize = "18px"
        break
      case "xlarge":
        root.style.fontSize = "20px"
        break
      default:
        root.style.fontSize = "16px"
    }
  }

  const handleFontSizeChange = (newSize: string) => {
    setFontSize(newSize)
    applyFontSize(newSize)
    localStorage.setItem("fontSize", newSize)
  }

  const handleSave = () => {
    // Save settings
    localStorage.setItem("fontSize", fontSize)
    localStorage.setItem("theme", theme || "light")
    
    // Show success message (you can replace with a toast notification)
    alert("การตั้งค่าถูกบันทึกแล้ว")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">การตั้งค่า</h1>
          <p className="text-muted-foreground">
            ปรับแต่งการแสดงผลและการใช้งานระบบ
          </p>
        </div>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          บันทึกการตั้งค่า
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Theme Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              ธีมการแสดงผล
            </CardTitle>
            <CardDescription>
              เลือกธีมการแสดงผลที่คุณต้องการ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Label htmlFor="dark-mode">โหมดมืด (Dark Mode)</Label>
            </div>

            <div className="space-y-3">
              <Label>เลือกธีม</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => setTheme("light")}
                  className="h-20 flex flex-col gap-2"
                >
                  <Sun className="h-6 w-6" />
                  <span className="text-xs">สว่าง</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  onClick={() => setTheme("dark")}
                  className="h-20 flex flex-col gap-2"
                >
                  <Moon className="h-6 w-6" />
                  <span className="text-xs">มืด</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  onClick={() => setTheme("system")}
                  className="h-20 flex flex-col gap-2"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-700" />
                  <span className="text-xs">ระบบ</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Font Size Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              ขนาดตัวอักษร
            </CardTitle>
            <CardDescription>
              ปรับขนาดตัวอักษรให้เหมาะสมกับการใช้งาน
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="font-size">ขนาดตัวอักษร</Label>
              <Select value={fontSize} onValueChange={handleFontSizeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกขนาดตัวอักษร" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">เล็ก (14px)</SelectItem>
                  <SelectItem value="medium">ปกติ (16px)</SelectItem>
                  <SelectItem value="large">ใหญ่ (18px)</SelectItem>
                  <SelectItem value="xlarge">ใหญ่มาก (20px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>ตัวอย่างข้อความ</Label>
              <div className="p-4 border rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">หัวข้อตัวอย่าง</h3>
                <p className="text-muted-foreground">
                  นี่คือตัวอย่างข้อความที่แสดงขนาดตัวอักษรที่เลือก
                  สามารถใช้เป็นแนวทางในการปรับขนาดให้เหมาะสม
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">ป้ายกำกับ</span>
                  <span className="text-xs text-muted-foreground">ข้อความเล็ก</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle>ภาษา</CardTitle>
            <CardDescription>
              เลือกภาษาที่ใช้ในระบบ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Label htmlFor="language">ภาษา</Label>
              <Select defaultValue="th">
                <SelectTrigger>
                  <SelectValue placeholder="เลือกภาษา" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="th">ไทย</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>การแจ้งเตือน</CardTitle>
            <CardDescription>
              ตั้งค่าการแจ้งเตือนต่างๆ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">แจ้งเตือนทางอีเมล</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">แจ้งเตือนในระบบ</Label>
              <Switch id="push-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-alerts">แจ้งเตือนการซ่อมบำรุง</Label>
              <Switch id="maintenance-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="billing-alerts">แจ้งเตือนการเรียกเก็บเงิน</Label>
              <Switch id="billing-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Settings */}
      <Card>
        <CardHeader>
          <CardTitle>การตั้งค่าอื่นๆ</CardTitle>
          <CardDescription>
            การตั้งค่าเพิ่มเติมสำหรับการใช้งาน
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>บันทึกการเข้าสู่ระบบอัตโนมัติ</Label>
              <p className="text-sm text-muted-foreground">จำการเข้าสู่ระบบเป็นเวลา 30 วัน</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>แสดงเคล็ดลับการใช้งาน</Label>
              <p className="text-sm text-muted-foreground">แสดงคำแนะนำการใช้งานระบบ</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>บีบอัดรูปภาพอัตโนมัติ</Label>
              <p className="text-sm text-muted-foreground">ลดขนาดรูปภาพที่อัปโหลดเพื่อประหยัดพื้นที่</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

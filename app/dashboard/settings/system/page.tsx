"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Settings, Database, Mail, Bell, Shield, Smartphone, HardDrive, Wifi } from "lucide-react"

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState({
    general: {
      companyName: "บริษัท ขนส่งคอนกรีต จำกัด",
      companyAddress: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
      companyPhone: "02-123-4567",
      companyEmail: "info@concrete-transport.com",
      timezone: "Asia/Bangkok",
      language: "th",
      dateFormat: "DD/MM/YYYY",
      currency: "THB",
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      lineNotifications: true,
      maintenanceAlerts: true,
      fuelAlerts: true,
      tripAlerts: false,
    },
    security: {
      passwordMinLength: 8,
      passwordRequireSpecial: true,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      twoFactorAuth: false,
      ipWhitelist: "",
    },
    backup: {
      autoBackup: true,
      backupFrequency: "daily",
      backupRetention: 30,
      backupLocation: "cloud",
    },
    integration: {
      lineOAToken: "",
      lineOASecret: "",
      emailSMTP: "smtp.gmail.com",
      emailPort: 587,
      emailUsername: "",
      emailPassword: "",
    },
  })

  const handleSave = (section: string) => {
    // Save settings logic here
    console.log(`Saving ${section} settings:`, settings[section as keyof typeof settings])
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">การตั้งค่าระบบ</h1>
        <p className="text-gray-600">จัดการการตั้งค่าระบบทั้งหมด</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">ทั่วไป</TabsTrigger>
          <TabsTrigger value="notifications">การแจ้งเตือน</TabsTrigger>
          <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
          <TabsTrigger value="backup">สำรองข้อมูล</TabsTrigger>
          <TabsTrigger value="integration">การเชื่อมต่อ</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                การตั้งค่าทั่วไป
              </CardTitle>
              <CardDescription>ข้อมูลพื้นฐานของบริษัทและระบบ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">ชื่อบริษัท</Label>
                  <Input
                    id="companyName"
                    value={settings.general.companyName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, companyName: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="companyPhone">เบอร์โทรศัพท์</Label>
                  <Input
                    id="companyPhone"
                    value={settings.general.companyPhone}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, companyPhone: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyAddress">ที่อยู่บริษัท</Label>
                <Textarea
                  id="companyAddress"
                  value={settings.general.companyAddress}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, companyAddress: e.target.value },
                    })
                  }
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyEmail">อีเมลบริษัท</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={settings.general.companyEmail}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, companyEmail: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="timezone">เขตเวลา</Label>
                  <Select
                    value={settings.general.timezone}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, timezone: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Bangkok">Asia/Bangkok (GMT+7)</SelectItem>
                      <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="language">ภาษา</Label>
                  <Select
                    value={settings.general.language}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, language: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="th">ไทย</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dateFormat">รูปแบบวันที่</Label>
                  <Select
                    value={settings.general.dateFormat}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, dateFormat: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">สกุลเงิน</Label>
                  <Select
                    value={settings.general.currency}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, currency: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="THB">บาท (THB)</SelectItem>
                      <SelectItem value="USD">ดอลลาร์ (USD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={() => handleSave("general")}>
                <Save className="mr-2 h-4 w-4" />
                บันทึกการตั้งค่า
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                การแจ้งเตือน
              </CardTitle>
              <CardDescription>จัดการการแจ้งเตือนต่างๆ ในระบบ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>การแจ้งเตือนทางอีเมล</Label>
                    <p className="text-sm text-muted-foreground">ส่งการแจ้งเตือนผ่านอีเมล</p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, emailNotifications: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>การแจ้งเตือนทาง SMS</Label>
                    <p className="text-sm text-muted-foreground">ส่งข้อความแจ้งเตือนทางโทรศัพท์</p>
                  </div>
                  <Switch
                    checked={settings.notifications.smsNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, smsNotifications: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>การแจ้งเตือนทาง LINE</Label>
                    <p className="text-sm text-muted-foreground">ส่งการแจ้งเตือนผ่าน LINE OA</p>
                  </div>
                  <Switch
                    checked={settings.notifications.lineNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, lineNotifications: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>แจ้งเตือนการซ่อมบำรุง</Label>
                    <p className="text-sm text-muted-foreground">แจ้งเตือนเมื่อถึงกำหนดซ่อมบำรุง</p>
                  </div>
                  <Switch
                    checked={settings.notifications.maintenanceAlerts}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, maintenanceAlerts: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>แจ้งเตือนน้ำมัน</Label>
                    <p className="text-sm text-muted-foreground">แจ้งเตือนเมื่อน้ำมันใกล้หมด</p>
                  </div>
                  <Switch
                    checked={settings.notifications.fuelAlerts}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, fuelAlerts: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>แจ้งเตือนการเดินทาง</Label>
                    <p className="text-sm text-muted-foreground">แจ้งเตือนสถานะการเดินทาง</p>
                  </div>
                  <Switch
                    checked={settings.notifications.tripAlerts}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, tripAlerts: checked },
                      })
                    }
                  />
                </div>
              </div>

              <Button onClick={() => handleSave("notifications")}>
                <Save className="mr-2 h-4 w-4" />
                บันทึกการตั้งค่า
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                ความปลอดภัย
              </CardTitle>
              <CardDescription>การตั้งค่าความปลอดภัยของระบบ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="passwordMinLength">ความยาวรหัสผ่านขั้นต่ำ</Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    value={settings.security.passwordMinLength}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordMinLength: Number.parseInt(e.target.value) },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">หมดเวลาเซสชัน (นาที)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, sessionTimeout: Number.parseInt(e.target.value) },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="maxLoginAttempts">จำนวนครั้งที่พยายามเข้าสู่ระบบสูงสุด</Label>
                <Input
                  id="maxLoginAttempts"
                  type="number"
                  value={settings.security.maxLoginAttempts}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      security: { ...settings.security, maxLoginAttempts: Number.parseInt(e.target.value) },
                    })
                  }
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>ต้องใช้อักขระพิเศษในรหัสผ่าน</Label>
                    <p className="text-sm text-muted-foreground">บังคับให้ใช้อักขระพิเศษในรหัสผ่าน</p>
                  </div>
                  <Switch
                    checked={settings.security.passwordRequireSpecial}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordRequireSpecial: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>การยืนยันตัวตนสองขั้นตอน</Label>
                    <p className="text-sm text-muted-foreground">เปิดใช้งาน 2FA สำหรับความปลอดภัยเพิ่มเติม</p>
                  </div>
                  <Switch
                    checked={settings.security.twoFactorAuth}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, twoFactorAuth: checked },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ipWhitelist">IP Whitelist</Label>
                <Textarea
                  id="ipWhitelist"
                  value={settings.security.ipWhitelist}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      security: { ...settings.security, ipWhitelist: e.target.value },
                    })
                  }
                  placeholder="192.168.1.1, 10.0.0.1"
                  rows={3}
                />
                <p className="text-sm text-muted-foreground mt-1">ระบุ IP ที่อนุญาตให้เข้าถึงระบบ (คั่นด้วยเครื่องหมายจุลภาค)</p>
              </div>

              <Button onClick={() => handleSave("security")}>
                <Save className="mr-2 h-4 w-4" />
                บันทึกการตั้งค่า
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                การสำรองข้อมูล
              </CardTitle>
              <CardDescription>จัดการการสำรองข้อมูลอัตโนมัติ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>สำรองข้อมูลอัตโนมัติ</Label>
                  <p className="text-sm text-muted-foreground">เปิดใช้งานการสำรองข้อมูลอัตโนมัติ</p>
                </div>
                <Switch
                  checked={settings.backup.autoBackup}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      backup: { ...settings.backup, autoBackup: checked },
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="backupFrequency">ความถี่ในการสำรอง</Label>
                  <Select
                    value={settings.backup.backupFrequency}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        backup: { ...settings.backup, backupFrequency: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">ทุกชั่วโมง</SelectItem>
                      <SelectItem value="daily">ทุกวัน</SelectItem>
                      <SelectItem value="weekly">ทุกสัปดาห์</SelectItem>
                      <SelectItem value="monthly">ทุกเดือน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="backupRetention">เก็บข้อมูลสำรอง (วัน)</Label>
                  <Input
                    id="backupRetention"
                    type="number"
                    value={settings.backup.backupRetention}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        backup: { ...settings.backup, backupRetention: Number.parseInt(e.target.value) },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="backupLocation">ตำแหน่งการสำรอง</Label>
                <Select
                  value={settings.backup.backupLocation}
                  onValueChange={(value) =>
                    setSettings({
                      ...settings,
                      backup: { ...settings.backup, backupLocation: value },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">เครื่องเซิร์ฟเวอร์</SelectItem>
                    <SelectItem value="cloud">คลาวด์</SelectItem>
                    <SelectItem value="both">ทั้งสองที่</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => handleSave("backup")}>
                  <Save className="mr-2 h-4 w-4" />
                  บันทึกการตั้งค่า
                </Button>
                <Button variant="outline">
                  <HardDrive className="mr-2 h-4 w-4" />
                  สำรองข้อมูลทันที
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  LINE OA Integration
                </CardTitle>
                <CardDescription>การเชื่อมต่อกับ LINE Official Account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="lineOAToken">Channel Access Token</Label>
                  <Input
                    id="lineOAToken"
                    type="password"
                    value={settings.integration.lineOAToken}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        integration: { ...settings.integration, lineOAToken: e.target.value },
                      })
                    }
                    placeholder="••••••••••••••••"
                  />
                </div>
                <div>
                  <Label htmlFor="lineOASecret">Channel Secret</Label>
                  <Input
                    id="lineOASecret"
                    type="password"
                    value={settings.integration.lineOASecret}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        integration: { ...settings.integration, lineOASecret: e.target.value },
                      })
                    }
                    placeholder="••••••••••••••••"
                  />
                </div>
                <Button onClick={() => handleSave("integration")} className="w-full">
                  <Wifi className="mr-2 h-4 w-4" />
                  ทดสอบการเชื่อมต่อ
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Configuration
                </CardTitle>
                <CardDescription>การตั้งค่าอีเมลสำหรับส่งการแจ้งเตือน</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emailSMTP">SMTP Server</Label>
                    <Input
                      id="emailSMTP"
                      value={settings.integration.emailSMTP}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          integration: { ...settings.integration, emailSMTP: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="emailPort">Port</Label>
                    <Input
                      id="emailPort"
                      type="number"
                      value={settings.integration.emailPort}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          integration: { ...settings.integration, emailPort: Number.parseInt(e.target.value) },
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="emailUsername">Username</Label>
                  <Input
                    id="emailUsername"
                    value={settings.integration.emailUsername}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        integration: { ...settings.integration, emailUsername: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="emailPassword">Password</Label>
                  <Input
                    id="emailPassword"
                    type="password"
                    value={settings.integration.emailPassword}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        integration: { ...settings.integration, emailPassword: e.target.value },
                      })
                    }
                    placeholder="••••••••"
                  />
                </div>
                <Button onClick={() => handleSave("integration")} className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  ทดสอบการส่งอีเมล
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

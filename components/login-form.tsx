"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Chrome, Mail, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleGoogleLogin = () => {
    // Simulate Google login - in real app, integrate with Google OAuth
    router.push("/dashboard")
  }

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate email login
    router.push("/dashboard")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>เข้าสู่ระบบ</CardTitle>
        <CardDescription>เลือกวิธีการเข้าสู่ระบบ</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGoogleLogin} variant="outline" className="w-full bg-transparent" size="lg">
          <Chrome className="mr-2 h-4 w-4" />
          เข้าสู่ระบบด้วย Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">หรือ</span>
          </div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">อีเมล</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            เข้าสู่ระบบ
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>หากมีปัญหาการเข้าสู่ระบบ</p>
          <Button variant="link" className="p-0 h-auto">
            ติดต่อผู้ดูแลระบบ
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

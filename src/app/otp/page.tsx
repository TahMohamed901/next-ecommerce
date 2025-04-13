"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

import {register as registerUser} from "@/lib/services/authServices"

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setLoading(true)
    setError("")

    try {
      const res = await verifyOtpService(otp) // à définir dans tes services
      if (res.status === 200) {
        router.push("/")
      } else {
        setError("Code OTP incorrect")
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erreur réseau ou serveur")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-xl border-2 border-muted rounded-2xl p-6 bg-white">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Vérification du code OTP</h2>

          <Input
            placeholder="Entrez le code OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="text-center tracking-widest text-lg"
          />

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleSubmit}
            disabled={loading || otp.length === 0}
            className="w-full"
          >
            {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
            Vérifier
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// Exemple de fonction fake à remplacer par ton service
async function verifyOtpService(otp: string) {
  // simulate request
  return new Promise<{ status: number }>((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") resolve({ status: 200 })
      else reject({ response: { data: { message: "OTP invalide" } } })
    }, 1000)
  })
}
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { emailVerify } from '@/lib/services/authServices'

type OtpFormProps = {
  email?: string
}

export const OtpForm = ({ email }: OtpFormProps) => {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const mail = email || searchParams.get('email') || ''
const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailVerify({ email: mail, code: otp })
      console.log("verified")
      router.push("/login")
    } catch (err: any) {
      console.log(err)
      setError(err?.response.data|| 'An error occurred during verification')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-center">Verify your email address</h2>
      <p className="text-sm text-muted-foreground text-center">
        A verification code has been sent to <strong>{mail}</strong>
      </p>

      <Input
        type="text"
        placeholder="Verification code"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={6}
        required
        className='text-center'
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </Button>
    </form>
  )
}

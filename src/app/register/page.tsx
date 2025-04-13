'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { register as registerUser } from "@/lib/services/authServices"
import { OtpForm } from "@/components/OTP/OtpForm"

const schema = z
  .object({
    name: z.string().min(2, "Name is required"),
    role: z.enum(["artisan", "buyer"], {
      required_error: "Role is required",
    }),
    gender: z.enum(["male", "female"], {
      required_error: "Gender is required",
    }),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .min(8, "Phone number is too short")
      .regex(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormData = z.infer<typeof schema>

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const [step, setStep] = useState("register")
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError("")

    try {
      const res = await registerUser(data)
      if (res.status !== 200) {
        const errMsg = res?.data?.message || "Registration failed"
        setError(errMsg)
        return
      }

      setEmail(data.email)
      setStep("otp")
      // router.push("/login"); // Uncomment for redirect to login page if necessary
    } catch (err: any) {
      const backendMessage = err?.response?.data?.message || "Une erreur s’est produite"
      setError(backendMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {step === 'register' ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <Image
                src="/logo/logo-1.png" // mets ton image dans `public/`
                alt="Login"
                width={350}
                height={100}
                className="mx-auto"
              />
              <CardTitle className="text-2xl font-semibold">Create Account</CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input {...register("name")} placeholder="Name" />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label>Role</Label>
                  <Select onValueChange={(value) => setValue("role", value as "artisan" | "buyer")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="artisan">Artisan</SelectItem>
                      <SelectItem value="buyer">Buyer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && (
                    <p className="text-sm text-red-500">{errors.role.message}</p>
                  )}
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select onValueChange={(value) => setValue("gender", value as "male" | "female")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p className="text-sm text-red-500">{errors.gender.message}</p>
                  )}
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" {...register("email")} placeholder="Email" />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label>Phone number</Label>
                  <Input type="text" {...register("phone")} placeholder="+222 4841...." />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label>Password</Label>
                  <Input type="password" {...register("password")} />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <Input type="password" {...register("confirmPassword")} />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                  )}
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Registering..." : "Sign Up"}
                </Button>
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      ) : (step === 'otp' && email) ? (
        <div className="flex items-center justify-center px-4 py-10">
          <OtpForm email={email} />
        </div>
      ) : null}
    </div>
  )
}

export default RegisterForm

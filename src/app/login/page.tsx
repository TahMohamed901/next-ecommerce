"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/lib/services/authServices"
import Image from "next/image"
import Link from "next/link"
import { useAuthStore } from "@/hooks/useAuthStore"
const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "Mot de passe trop court" }),
})

const LoginPage = () => {
  const {user, isLoading,fetchUser} = useAuthStore();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  useEffect(() => {
    // Si on ne connaît pas encore le statut d'auth, on appelle fetchUser (utile au cas où l'utilisateur recharge la page)
    fetchUser()
  }, [])

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/") // ou la page d'accueil
    }
  }, [isLoading, user])


  console.log()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: any) => {
    setLoading(true)
    setError("")
    try {
      const res = await login(data)

      if (!res) {
        setError("Login failed")
      } else {
        await fetchUser()
        router.push("/")
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Network or server error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center bg-gray-300 py-5 px-2">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader className="text-center">
          <Image
            src="/logo/logo-1.png"
            alt="Login"
            width={350}
            height={100}
            className="mx-auto"
          />
          <CardTitle className="text-2xl font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          {/* ✅ Le bouton est maintenant *dans* le form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Email"
                type="text"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-900 underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage

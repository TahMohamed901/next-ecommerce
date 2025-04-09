"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const Addresses = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      country: "",
      address1: "",
      address2: "",
      postalcode: "",
      city: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/checkout/payment")
  }
  
  if (!isClient) return null; // Empêche le rendu côté serveur
  
  return (
    <div className='w-full md:w-1/2 bg-gray-100 p-5 m-10'>
      <h1 className='font-semibold text-xl pb-5'>Billing address</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className='grid max-sm:grid-cols-1 gap-5 grid-cols-2'>
            {["firstname", "lastname", "phone","country", "city", "address1", "address2", "postalcode"].map((fieldName) => (
              <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as keyof z.infer<typeof formSchema>}
              render={({ field }) => (
                <FormItem>
                    <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} *</FormLabel>
                    <FormControl>
                      <Input className='bg-white' placeholder={`Your ${fieldName}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
              ))}
          </div>
          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </div>
  );
};



const formSchema = z.object({
  firstname: z.string()
    .min(2, { message: "Firstname must be at least 2 characters." })
    .max(50, { message: "Firstname must be at most 50 characters." })
    .regex(/^[A-Za-zÀ-ÿ-]+$/, { message: "Firstname can only contain letters and dashes." }),

  lastname: z.string()
    .min(2, { message: "Lastname must be at least 2 characters." })
    .max(50, { message: "Lastname must be at most 50 characters." })
    .regex(/^[A-Za-zÀ-ÿ-]+$/, { message: "Lastname can only contain letters and dashes." }),

  phone: z.string()
    .min(8, { message: "Phone number must be at least 8 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format." }),

  country: z.string()
    .min(2, { message: "Country name must be at least 2 characters." })
    .max(50, { message: "Country name must be at most 50 characters." }),
    
  city: z.string()
    .min(2, { message: "City name must be at least 2 characters." })
    .max(50, { message: "City name must be at most 50 characters." })
    .regex(/^[A-Za-zÀ-ÿ\s-]+$/, { message: "City name can only contain letters, spaces, and dashes." }),
  address1: z.string()
    .min(5, { message: "Address must be at least 5 characters." })
    .max(100, { message: "Address must be at most 100 characters." }),

  address2: z.string()
    .max(100, { message: "Address must be at most 100 characters." })
    .optional(),

  postalcode: z.string()
    .min(4, { message: "Postal code must be at least 4 characters." })
    .max(10, { message: "Postal code must be at most 10 characters." })
    .regex(/^\d{4,10}$/, { message: "Postal code must contain only numbers." }),

});
export default Addresses;

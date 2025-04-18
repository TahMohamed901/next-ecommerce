"use client";
import Addresses from "@/components/Checkout/Addresses";
import Cart from "@/components/Checkout/Cart";
import Confirmation from "@/components/Checkout/Confirmation";
import Fail from "@/components/Checkout/Fail";
import Success from "@/components/Checkout/Success";
import { BreadCrumb } from "@/components/shared/BreadCrumb";
import useCartStore from "@/hooks/useCartStore";
import { getProductById } from "@/lib/services/productServices"; // Assure-toi que c'est bien importé
import { useEffect, useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Page = () => {
  const [step, setStep] = useState<"Cart" | "Addresses" | "Confirmation" | "Success" | "Fail">("Cart");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { carts } = useCartStore();

  useEffect(() => {
    const fetchOrderData = async () => {
      if (step === "Confirmation") {
        try {
          const items: OrderItem[] = [];

          for (const item of carts) {
            const product = await getProductById(item.id);
            items.push({
              id: item.id,
              name: product.name,
              price: product.price,
              quantity: item.quantity,
            });
          }

          const total = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );

          setOrderItems(items);
          setTotalPrice(total);
        } catch (error) {
          console.error("Failed to fetch product details:", error);
        }
      }
    };

    fetchOrderData();
  }, [step, carts]);

  return (
    <>
      <div className="py-5 px-2">
        <BreadCrumb current={step} setStep={setStep} />
      </div>

      {step === "Cart" && <Cart setStep={setStep} />}
      {step === "Addresses" && <Addresses setStep={setStep} />}
      {step === "Confirmation" && (
        <Confirmation
          setStep={setStep}
          orderItems={orderItems}
          totalPrice={totalPrice}
        />
      )}
      {step === "Success" && <Success />}
      {step === "Fail" && <Fail />}
    </>
  );
};

export default Page;

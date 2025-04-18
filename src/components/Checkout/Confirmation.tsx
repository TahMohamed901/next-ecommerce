import React from 'react'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import useCartStore from '@/hooks/useCartStore';
type Props = {
  setStep: (step: "Cart" | "Addresses" | "Confirmation" | "Success" | "Fail") => void
  orderItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
}
const mockOrder = {
  id: "ORD123456",
  items: [
    { name: "Product A", quantity: 2, price: 20 },
    { name: "Product B", quantity: 1, price: 50 },
  ],
};
const Confirmation = ({ setStep ,orderItems,totalPrice}: Props) => {
  const total = mockOrder.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/paypal/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: mockOrder.id, amount: total }),
      });

      const data = await res.json();
      if (data?.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        throw new Error("No approval URL");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      setStep("Fail");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>

      <Card className="mb-6">
        <CardContent className="py-4 space-y-4">
          <p className="font-medium">Order ID: {mockOrder.id}</p>
          <ul className="space-y-2">
            {/* {mockOrder.items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))} */}
            {orderItems.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold pt-4 border-t">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button onClick={handlePayment} className="bg-blue-600 hover:bg-blue-700 text-white">
          Pay with PayPal
        </Button>
      </div>
    </div>
  );
};


export default Confirmation
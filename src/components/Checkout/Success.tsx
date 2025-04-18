import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Success = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] px-4">
      <Card className="max-w-md w-full text-center shadow-lg border-green-500">
        <CardContent className="py-8 space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="text-green-500 w-16 h-16" />
          </div>
          <h2 className="text-2xl font-semibold text-green-600">Payment Successful!</h2>
          <p className="text-gray-600">
            Thank you for your order. Your payment has been processed successfully.
          </p>
          <p className="text-gray-500 text-sm">
            You will receive a confirmation email with your order details shortly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;

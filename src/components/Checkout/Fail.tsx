import { XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Fail = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] px-4">
      <Card className="max-w-md w-full text-center shadow-lg border-red-500">
        <CardContent className="py-8 space-y-4">
          <div className="flex justify-center">
            <XCircle className="text-red-500 w-16 h-16" />
          </div>
          <h2 className="text-2xl font-semibold text-red-600">Payment Failed</h2>
          <p className="text-gray-600">
            Unfortunately, your payment could not be processed. Please try again.
          </p>
          <p className="text-gray-500 text-sm">
            If the issue persists, contact support for assistance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fail;

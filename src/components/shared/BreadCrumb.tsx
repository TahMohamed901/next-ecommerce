"use client";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadCrumbProps {
  current: "Cart" | "Addresses" | "Confirmation" | "Success" | "Fail";
  setStep: React.Dispatch<React.SetStateAction<"Cart" | "Addresses" | "Confirmation" | "Success" | "Fail">>;
}

export function BreadCrumb({ current, setStep }: BreadCrumbProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const steps = [
    { label: "1. Cart", key: "Cart" },
    { label: "2. Addresses", key: "Addresses" },
    { label: "3. Confirmation", key: "Confirmation" },
    // { label: "4. Success", key: "Success" },
    // { label: "5. Fail", key: "Fail" },
  ];

  if (!isClient) return null;
  if(current === "Success" || current === "Fail"){
    return null;
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step, index) => {
          const isCurrent = step.key === current;
          const isDisabled = steps.findIndex(s => s.key === step.key) > steps.findIndex(s => s.key === current);

          return (
            <BreadcrumbItem key={step.key}>
              {isCurrent ? (
                <span className="text-black font-medium">{step.label}</span>
              ) : (
                <button
                  disabled={isDisabled}
                  onClick={() => setStep(step.key as typeof current)}
                  className={`bg-transparent border-none p-0 m-0 ${
                    isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {step.label}
                </button>
              )}
              {index < steps.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

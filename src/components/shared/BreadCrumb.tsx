"use client";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface BreadCrumbProps {
    current: "cart" | "addresses" | "payment" | "confirmation";
}

export function BreadCrumb({ current }: BreadCrumbProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // S'assurer que le composant est bien rendu côté client
    }, []);

    const steps = [
        { label: "1. Cart", path: "/checkout", key: "cart" },
        { label: "2. Addresses", path: "/checkout/addresses", key: "addresses" },
        { label: "3. Payment", path: "/checkout/payment", key: "payment" },
        { label: "4. Confirmation", path: "/checkout/confirmation", key: "confirmation" },
    ];

    if (!isClient) return null; // Évite le rendu côté serveur

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
                                <BreadcrumbLink
                                    href={isDisabled ? "#" : step.path}
                                    className={isDisabled ? "text-gray-400 cursor-not-allowed pointer-events-none" : "text-gray-400"}
                                >
                                    {step.label}
                                </BreadcrumbLink>
                            )}
                            {index < steps.length - 1 && <BreadcrumbSeparator />}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

"use client"
import { SiteHeader } from "@/components/site-header";
import { useParams } from "next/navigation";
import { usePathname } from 'next/navigation'
const DashboardPages = ({
children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();
  const pageTitle = path.split("/")[2]
  return (
    <div>
        <SiteHeader pageTitle={pageTitle}/>
        {children}
    </div>
      
  );
}

export default DashboardPages
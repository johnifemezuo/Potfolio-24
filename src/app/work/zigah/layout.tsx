"use client";  
import { SingleWorkTopNavigation } from "@/components";

export default function LayoutWithNavAndFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <div>
        <SingleWorkTopNavigation />

        {children}
      </div>
    );
  }
}

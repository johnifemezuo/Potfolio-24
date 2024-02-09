import { PageContainer, SingleWorkTopNavigation } from "@/components";

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

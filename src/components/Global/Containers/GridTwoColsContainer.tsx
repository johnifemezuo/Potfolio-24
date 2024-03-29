import { ScrollReveal } from "../Animation/ScrollReveal";

export const GridTwoColsContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ScrollReveal>
      <div className={`${className} grid md:grid-cols-2 w-full gap-4 md:gap-0`}>
        {children}
      </div>
    </ScrollReveal>
  );
};

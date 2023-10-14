
import { Footer, Navigation } from "../../index";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

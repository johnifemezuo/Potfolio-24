
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./styles/globals.css";
import { Layout } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "John Portfolio/24",
  description: "Senior Designer and Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <>{children}</>
      </body>
    </html>
  );
}

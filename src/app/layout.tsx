import { ApolloProvider } from "@apollo/client";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import apolloClient from "../../base/request/apolloClient";
import "./styles/globals.css";
import "./styles/infinitScroll.css";
import { ApolloWrapper } from "../../base/lib/apollo-wrapper";

const poppins = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "John Ifemezuo",
  description: "Product Designer and Front end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/me-tab.png" />
      </head>
      <body className={poppins.className}>
      <ApolloWrapper>{children}</ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}

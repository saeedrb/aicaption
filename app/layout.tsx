import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "خوشنویس | تولید محتوا با هوش مصنوعی",
  description:
    "شما در این اپلیکیشن میتوانید با استفاده از هوش مصنوعی محتوای متنی تولید کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className="_container">{children}</body>
    </html>
  );
}

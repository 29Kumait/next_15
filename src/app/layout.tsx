import type { Metadata } from "next";
import React from "react";
import "./globals.css";

import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: " Practice-App",
  description: "Next 15 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

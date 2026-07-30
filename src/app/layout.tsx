import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Unbias.Xai | High-End Web Design & Cognitive Automation Agency",
  description: "We craft custom, high-fidelity Next.js storefronts and engineer bespoke AI/automation pipelines for small businesses. Zero templates. Pure operational power.",
  metadataBase: new URL("https://unbias.xai"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Unbias.Xai | Boutique Digital Studio",
    description: "Bespoke web design and automation pipelines for ambitious brands.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className="antialiased overflow-x-hidden selection:bg-accent selection:text-black">
        {/* Background Film Grain */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}

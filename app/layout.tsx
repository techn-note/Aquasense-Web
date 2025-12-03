import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const baseUrl = "https://aquasense.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003da5",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AquaSense - Dashboard de Aquapônia",
    template: "%s | AquaSense",
  },
  description:
    "Monitore seu sistema de aquaponia em tempo real. Tenha acesso a dados precisos sobre temperatura, pH, amônia e muito mais.",
  keywords: [
    "Aquapônia",
    "Aquaponia",
    "Piscicultura",
    "Aquasense",
    "Plantas",
    "Monitoramento",
    "IoT",
    "Dashboard",
    "Agricultura",
  ],
  authors: [{ name: "Technote", url: baseUrl }],
  creator: "Technote",
  publisher: "Technote",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "AquaSense",
    title: "AquaSense - Dashboard de Aquapônia",
    description:
      "Monitore seu sistema de aquaponia em tempo real com o AquaSense.",
    images: [
      {
        url: "/imgs/image-header.svg",
        width: 1200,
        height: 630,
        alt: "AquaSense - Dashboard de Aquapônia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaSense - Dashboard de Aquapônia",
    description:
      "Monitore seu sistema de aquaponia em tempo real com o AquaSense.",
    images: ["/imgs/image-header.svg"],
  },
  icons: {
    icon: "/imgs/image-favicon.svg",
    apple: "/imgs/image-favicon.svg",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: {
    default: "Ajanta",
    template: "%s | Ajanta",
  },
  description: "Explore Ajanta Corporate Industries: Delivering premium products and innovative solutions globally.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://www.ajantacorporateindustry.com"),
  alternates: {
    canonical: "https://www.ajantacorporateindustry.com",
  },
  openGraph: {
    title: "Ajanta",
    description: "Explore Ajanta Corporate Industries: Delivering premium products and innovative solutions globally.",
    url: "https://www.ajantacorporateindustry.com",
    siteName: "Ajanta Corporate Industries",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajanta Corporate Industries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajanta",
    description: "Explore Ajanta Corporate Industries: Delivering premium products and innovative solutions globally.",
    images: ["/og-image.png"],
  },
  themeColor: "#B91C1C",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
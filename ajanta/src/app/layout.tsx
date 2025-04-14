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

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ajanta Corporate Industries",
              "url": "https://www.ajantacorporateindustry.com",
              "logo": "https://www.ajantacorporateindustry.com/og-image.png",
              "description": "Explore Ajanta Corporate Industries: Delivering premium products and innovative solutions globally.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918630980579",
                "contactType": "Customer Service",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
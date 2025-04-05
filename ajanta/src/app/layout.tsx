import "./globals.css";

export const metadata = {
  title: "Ajanta",
  description: "Welcome to my awesome Next.js website.",
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
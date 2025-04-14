import { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.ajantacorporateindustry.com";

  const hrefs = [
    "",              // Home
    "#products",     // Products section
    "#about",        // About Us section
    "#contact",      // Contact Us section
  ];

  const currentDate = new Date().toISOString();

  return hrefs.map((href) => ({
    url: `${baseUrl}${href}`,
    lastModified: currentDate,
  }));
}
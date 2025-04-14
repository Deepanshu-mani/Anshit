export async function GET() {
  const baseUrl = "https://www.ajantacorporateindustry.com";

  const hrefs = [
    "",              // Home
    "#products",     // Products section
    "#about",        // About Us section
    "#contact",      // Contact Us section
  ];

  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${hrefs
      .map(
        (href) => `
        <url>
          <loc>${baseUrl}${href}</loc>
          <lastmod>${currentDate}</lastmod>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
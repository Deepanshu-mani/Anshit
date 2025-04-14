export async function GET() {
    return new Response(
      `User-agent: *
  Allow: /
  Sitemap: https://www.ajantacorporateindustry.com/sitemap.xml
  `,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
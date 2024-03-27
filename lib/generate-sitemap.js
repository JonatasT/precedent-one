// scripts/generateSitemap.js
const fs = require("fs");
const path = require("path");
const prisma = require("prisma"); // Ajuste o caminho conforme necessário

async function generateSitemap() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
      },
      take: 1, // Ajuste conforme necessário
    });

    const sitemapData = [
      {
        url: "https://precedent.dev",
        lastModified: new Date().toISOString(),
      },
      ...users.map((user) => ({
        url: `https://precedent.dev/${user.id}`,
        lastModified: new Date().toISOString(),
      })),
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapData
        .map(
          ({ url, lastModified }) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastModified}</lastmod>
        </url>
      `,
        )
        .join("")}
    </urlset>`;

    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemapXml);
    console.log("Sitemap generated successfully");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();

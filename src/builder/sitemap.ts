import {config} from "../../site.config";
import fs from "fs-extra";

const PAGE_PATHS = ["/", "/about", "/products"];

function generateSitemap(): string {
  const urls = PAGE_PATHS
      .map((path) => `  <url>\n    <loc>${config.siteRoot}${path}</loc>\n  </url>`)
      .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

(function () {
  fs.writeFileSync('public/sitemap.xml', generateSitemap());
})();

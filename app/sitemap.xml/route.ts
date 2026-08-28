import { NextResponse } from "next/server";
import { buildSitemapXml, getSitemapEntries } from "@/lib/sitemap";

export function GET() {
  const xml = buildSitemapXml(getSitemapEntries());

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";

async function fetchOEmbedThumbnail(url: string): Promise<string | null> {
  const oembedUrl = new URL("https://api.instagram.com/oembed");
  oembedUrl.searchParams.set("url", url);
  oembedUrl.searchParams.set("hidecaption", "1");
  oembedUrl.searchParams.set("maxwidth", "320");

  const response = await fetch(oembedUrl.toString(), {
    next: { revalidate: 86400 },
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { thumbnail_url?: string };
  return data.thumbnail_url ?? null;
}

async function fetchOpenGraphThumbnail(url: string): Promise<string | null> {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      Accept: "text/html",
    },
    next: { revalidate: 86400 },
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) return null;

  const html = await response.text();
  const match =
    html.match(/property="og:image" content="([^"]+)"/) ??
    html.match(/content="([^"]+)" property="og:image"/);

  return match?.[1]?.replace(/&amp;/g, "&") ?? null;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url || !url.includes("instagram.com")) {
    return NextResponse.json({ error: "Invalid Instagram URL" }, { status: 400 });
  }

  try {
    const thumbnailUrl =
      (await fetchOEmbedThumbnail(url)) ?? (await fetchOpenGraphThumbnail(url));

    return NextResponse.json({ thumbnailUrl });
  } catch {
    return NextResponse.json({ thumbnailUrl: null });
  }
}

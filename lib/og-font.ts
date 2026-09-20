/**
 * Loads a Google font as raw TTF for use in `next/og`.
 *
 * `next/font` self-hosts the web fonts for the browser, but its output is not
 * reachable from the image generator, so the file is fetched once at build time.
 * If the network is unavailable the caller falls back to the default face — an
 * Open Graph card is never worth failing a build over.
 */
export async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer | undefined> {
  const url =
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}` +
    `&text=${encodeURIComponent(text)}`;

  try {
    // Requesting without a modern browser UA makes Google serve TTF, which is
    // what Satori can parse.
    const css = await fetch(url, { headers: { "User-Agent": "Mozilla/4.0" } }).then((response) =>
      response.ok ? response.text() : "",
    );

    const source = /src:\s*url\(([^)]+)\)\s*format\(['"]?(?:truetype|opentype)['"]?\)/.exec(css);
    if (!source?.[1]) return undefined;

    const file = await fetch(source[1]);
    return file.ok ? await file.arrayBuffer() : undefined;
  } catch {
    return undefined;
  }
}

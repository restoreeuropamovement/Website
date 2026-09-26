const probes = [
  ["/policy", ""],
  ["/policy", "abortoin"],
  ["/policy", "euthanaisa"],
  ["/policy", "subsidarity"],
  ["/policy", "gay marriage"],
  ["/policy", "nukes"],
  ["/policy", "global warming"],
  ["/policy", "taxes"],
  ["/policy", "the pill"],
  ["/policy", "illegal immigration"],
  ["/policy", "sunday shopping"],
  ["/policy", "cost of living"],
  ["/policy", "xylophone"],
  ["/de/policy", "Abtriebung"],
  ["/de/policy", "Atomkraft"],
  ["/de/policy", "Steuern"],
  ["/de/policy", "Schwangerschaftsabbruch"],
  ["/pl/policy", "aborcaj"],
  ["/pl/policy", "podatki"],
  ["/pl/policy", "kara smierci"],
  ["/pl/policy", "energia jadrowa"],
];

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");

for (const [path, q] of probes) {
  const url = `http://localhost:3000${path}${q ? `?q=${encodeURIComponent(q)}` : ""}`;
  const response = await fetch(url);
  const html = await response.text();
  const text = strip(html);

  const count = /(Showing[^.]*\.|[^.]*(?:match|entspre|odpowia)[^.]*\.)/.exec(text);
  const cards = [...html.matchAll(/href="(\/(?:de|pl)?\/?policy\/[a-z0-9-]+)"/g)].map((m) => m[1]);
  const unique = [...new Set(cards)];
  const heading = /(Best matches first|Beste Treffer zuerst|Najlepiej dopasowane najpierw)/.exec(
    text,
  );
  const suggested = /(Closest positions|Nächstliegende Positionen|Najbliższe stanowiska)/.exec(text);
  const form = /<form[^>]*method="get"[^>]*action="([^"]*)"/.exec(html);

  console.log(
    [
      String(response.status),
      `${path} q=${JSON.stringify(q)}`,
      `form=${form ? form[1] : "MISSING"}`,
      `ranked=${heading ? "y" : "n"}`,
      `didYouMean=${suggested ? "y" : "n"}`,
      `links=${unique.length}`,
      unique.slice(0, 3).join(" "),
      count ? `| ${count[1].trim().slice(0, 60)}` : "",
    ].join("  "),
  );
}

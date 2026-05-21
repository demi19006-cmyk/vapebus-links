const html = `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vaporesso Pod Pages and UK Adult Compatibility Notes</title>
  <meta name="description" content="Adult-focused UK vape retail notes about pod compatibility, replacement habits and brand-specific category pages.">
  <style>
    body{margin:0;font-family:Arial,Helvetica,sans-serif;line-height:1.65;color:#1f2933;background:#fff}
    main{max-width:760px;margin:0 auto;padding:48px 18px 72px}
    h1{font-size:36px;line-height:1.2;margin:0 0 18px;letter-spacing:0}
    h2{margin-top:32px;line-height:1.28}
    a{color:#0b5cad}
    .meta{color:#667085;font-size:14px;margin-bottom:18px}
    header,footer{border-bottom:1px solid #e5e7eb}
    header div,footer div{max-width:760px;margin:0 auto;padding:18px;color:#4b5563}
    footer{border-top:1px solid #e5e7eb;border-bottom:0}
  </style>
</head>
<body>
  <header><div>UK Vape Pod Category Notes</div></header>
  <main>
    <p class="meta">Published 21 May 2026 | Adult UK vape-market research</p>
    <h1>Pod Compatibility Content Helps Adults Compare Reusable Systems</h1>

    <p>Brand-specific pod pages are most useful when they explain compatibility and replacement habits in plain language. UK adult buyers may recognise a device family, but they still need to understand which pods fit, how replacement works and whether the setup suits their routine.</p>

    <h2>Compatibility Is a Search Intent</h2>
    <p>Many adult searches around pods are really compatibility questions. A supporting article can discuss device families, refill or replacement expectations and how pod categories connect to e-liquid and kit pages.</p>

    <p>For a retail reference, adult trade readers can compare <a href="https://vapebus.com/vape-pods/vaporesso/">vape pods</a> within a brand-led category page and see how it relates to the wider reusable device market.</p>

    <h2>Responsible Category Language Matters</h2>
    <p>The content should stay factual and adult-focused. It can discuss maintenance, parts and retail navigation, but it should avoid unsupported health claims or youth-oriented language.</p>

    <p>Original category context makes the page more useful than a copied product description and gives search engines clearer information around the outbound reference.</p>
  </main>
  <footer><div>Adult-focused content only. No unsupported health claims.</div></footer>
</body>
</html>`;

Deno.serve(() => new Response(html, {
  headers: {
    "content-type": "text/html; charset=utf-8",
  },
}));

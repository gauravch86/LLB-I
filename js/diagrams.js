(function (global) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function flow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : "";
      return node + arrow;
    });
    return `<div class="flow">${parts.join("")}</div>`;
  }

  function vflow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : "";
      return node + arrow;
    });
    return `<div class="vflow">${parts.join("")}</div>`;
  }

  function compare(headers, rows) {
    const th = (headers || []).map((h) => `<th>${esc(h)}</th>`).join("");
    const body = (rows || [])
      .map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="map-wrap"><table class="compare"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function tree(root, branches) {
    const kids = (branches || [])
      .map((b) => `<div class="node">${typeof b === "string" ? esc(b) : b}</div>`)
      .join("");
    return `<div class="tree"><div class="node">${esc(root)}</div><div class="row">${kids}</div></div>`;
  }

  function decision(title, yes, no) {
    return `<div class="tree">
      <div class="node">${esc(title)}</div>
      <div class="row">
        <div class="node">Yes → ${esc(yes)}</div>
        <div class="node">No → ${esc(no)}</div>
      </div>
    </div>`;
  }

  function svgStack(layers) {
    const h = 28 + layers.length * 48;
    const rects = layers
      .map((layer, i) => {
        const y = 16 + i * 48;
        const colors = ["#d4af37", "#3fa796", "#6ea8ff", "#c45c4a", "#f0d78c"];
        const c = colors[i % colors.length];
        return `<rect x="20" y="${y}" width="360" height="40" rx="8" fill="${c}" fill-opacity="0.18" stroke="${c}"/>
          <text x="200" y="${y + 26}" text-anchor="middle" fill="currentColor" font-size="13" font-family="Figtree, sans-serif">${esc(layer)}</text>`;
      })
      .join("");
    return `<svg viewBox="0 0 400 ${h}" width="100%" role="img">${rects}</svg>`;
  }

  function layerText(layer) {
    if (typeof layer === "string") return { kicker: "", title: layer, sub: "" };
    return {
      kicker: layer.kicker || "",
      title: layer.title || layer.label || "",
      sub: layer.sub || layer.note || ""
    };
  }

  function pyramid(d) {
    const layers = d.layers || [];
    const n = layers.length || 1;
    const W = 440;
    const topW = 210;
    const botW = 420;
    const layerH = 56;
    const gap = 5;
    const padY = 10;
    const svgH = padY * 2 + n * layerH + (n - 1) * gap;
    const fills = ["#1e3d48", "#1a4550", "#164a58", "#125560", "#0e5c68"];
    const strokes = ["#d4af37", "#c9a84a", "#d4af37", "#c9a84a", "#d4af37"];
    const traps = layers
      .map((raw, i) => {
        const L = layerText(raw);
        const y = padY + i * (layerH + gap);
        const tw = topW + ((botW - topW) * i) / n;
        const bw = topW + ((botW - topW) * (i + 1)) / n;
        const tx = (W - tw) / 2;
        const bx = (W - bw) / 2;
        const pts = `${tx.toFixed(1)},${y} ${(tx + tw).toFixed(1)},${y} ${(bx + bw).toFixed(1)},${y + layerH} ${bx.toFixed(1)},${y + layerH}`;
        const cx = W / 2;
        const titleY = L.sub ? y + 22 : y + 32;
        const kicker = L.kicker
          ? `<text x="${cx}" y="${y + 14}" text-anchor="middle" fill="#f0d78c" font-size="10" font-family="Fraunces, Georgia, serif">${esc(L.kicker)}</text>`
          : "";
        const title = `<text x="${cx}" y="${titleY}" text-anchor="middle" fill="#f4ead6" font-size="13" font-weight="650" font-family="Fraunces, Georgia, serif">${esc(L.title)}</text>`;
        const sub = L.sub
          ? `<text x="${cx}" y="${y + 40}" text-anchor="middle" fill="#b8ae97" font-size="10" font-family="Figtree, sans-serif">${esc(L.sub)}</text>`
          : "";
        return `<polygon points="${pts}" fill="${fills[i % fills.length]}" fill-opacity="0.92" stroke="${strokes[i % strokes.length]}" stroke-width="1.2"/>${kicker}${title}${sub}`;
      })
      .join("");
    const label = layers
      .map((raw) => {
        const L = layerText(raw);
        return [L.kicker, L.title, L.sub].filter(Boolean).join(" ");
      })
      .join("; ");
    const svg = `<svg class="pyramid-svg" viewBox="0 0 ${W} ${svgH}" width="100%" role="img" aria-label="${esc(d.title || "Hierarchy of norms")}: ${esc(label)}">${traps}</svg>`;
    const side = (spec, cls) => {
      if (!spec) return `<div class="stufenbau-side ${cls}"></div>`;
      return `<div class="stufenbau-side ${cls}"><p class="stufenbau-kicker">${esc(spec.title || "")}</p><p>${esc(spec.body || "")}</p></div>`;
    };
    const foot = d.foot ? `<p class="pyramid-foot">${esc(d.foot)}</p>` : "";
    return `<div class="stufenbau">${side(d.left, "left")}<div class="pyramid-stack">${svg}</div>${side(d.right, "right")}</div>${foot}`;
  }

  function cast(d) {
    const headers = d.headers || [];
    const subheads = d.subheads || [];
    const tones = d.tones || ["austin", "salmond", "allen", "kelsen", "hart"];
    const th = headers
      .map((h, i) => {
        if (i === 0) return `<th class="cast-aspect">${esc(h)}</th>`;
        const tone = tones[i - 1] || "";
        const sub = subheads[i - 1] ? `<div class="cast-sub">${esc(subheads[i - 1])}</div>` : "";
        return `<th class="cast-h ${tone}">${esc(h)}${sub}</th>`;
      })
      .join("");
    const body = (d.rows || [])
      .map((row) => {
        const cells = (row || [])
          .map((c, i) => {
            const cls = i === 0 ? ' class="cast-aspect"' : "";
            return `<td${cls}>${c}</td>`;
          })
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");
    return `<div class="map-wrap"><table class="compare cast-compare"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function render(diagram) {
    if (!diagram) return "";
    if (typeof diagram === "string") return `<div class="diagram">${diagram}</div>`;
    const inner = (() => {
      switch (diagram.type) {
        case "flow":
          return flow(diagram.steps);
        case "vflow":
          return vflow(diagram.steps);
        case "compare":
          return compare(diagram.headers, diagram.rows);
        case "tree":
          return tree(diagram.root, diagram.branches);
        case "decision":
          return decision(diagram.q, diagram.yes, diagram.no);
        case "stack":
          return svgStack(diagram.layers);
        case "pyramid":
          return pyramid(diagram);
        case "cast":
          return cast(diagram);
        case "html":
          return diagram.html;
        default:
          return "";
      }
    })();
    const cap = diagram.title ? `<p class="search-query">${esc(diagram.title)}</p>` : "";
    return `<div class="diagram">${cap}${inner}</div>`;
  }

  global.LLBDiagrams = { render, flow, vflow, compare, tree, pyramid, cast, esc };
})(window);

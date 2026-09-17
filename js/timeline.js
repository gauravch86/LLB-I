(function (global) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function spineHtml(spine) {
    if (!spine) return "";
    if (typeof spine === "string") return `<p class="tl-spine">${spine}</p>`;
    const parts = (spine.parts || []).map((p, i) => {
      const bit = `<strong>${esc(p.label)}</strong>${p.note ? ` (${esc(p.note)})` : ""}`;
      return i ? " → " + bit : bit;
    });
    const lead = spine.lead ? esc(spine.lead) + " " : "From ";
    return `<p class="tl-spine">${lead}${parts.join("")}${spine.tail ? esc(spine.tail) : ""}</p>`;
  }

  function beatsHtml(beats) {
    return `<ol class="timeline">
      ${(beats || [])
        .map((b) => {
          const school = b.school
            ? `<span class="tl-school tl-school-${esc(b.school)}">${esc(b.schoolLabel || b.school)}</span>`
            : "";
          return `<li>
            <div class="tl-badge"><span class="tl-year">${esc(b.year)}</span></div>
            <div class="tl-card">
              <p class="tl-k">Who</p>
              <h3>${esc(b.name)}${school}</h3>
              ${b.work ? `<p class="tl-work"><span>Landmark</span> ${esc(b.work)}</p>` : ""}
              <p class="tl-doctrine"><span>Said</span> ${esc(b.doctrine)}</p>
              <p class="tl-shift"><span>Challenged</span> ${esc(b.shift)}</p>
            </div>
          </li>`;
        })
        .join("")}
    </ol>`;
  }

  function insetsHtml(insets) {
    if (!insets || !insets.length) return "";
    return `<div class="tl-insets">${insets
      .map(
        (c) => `<aside class="mnemonic tl-inset"><h3>${esc(c.name)}</h3>
        <p><strong>${esc(c.hook)}</strong></p>
        ${c.recite ? `<p>${esc(c.recite)}</p>` : ""}</aside>`
      )
      .join("")}</div>`;
  }

  function tableHtml(table) {
    if (!table) return "";
    const th = (table.headers || []).map((h) => `<th>${esc(h)}</th>`).join("");
    const body = (table.rows || [])
      .map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="map-wrap tl-table">
      <table class="compare">
        <thead><tr>${th}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>`;
  }

  function render(timeline, mode) {
    if (!timeline) return "";
    const full = mode === "full" || (timeline.featured && mode !== "compact");
    const hook = timeline.hook ? `<p class="tl-hook">${esc(timeline.hook)}</p>` : "";
    const note = timeline.note ? `<p class="search-query">${esc(timeline.note)}</p>` : "";
    return `<section class="evo" id="sec-${esc(timeline.id)}" data-jump="${esc(timeline.id)}">
      <h2 class="section-title">${esc(timeline.title || "Evolution timeline")}</h2>
      ${timeline.lede ? `<p class="lede">${esc(timeline.lede)}</p>` : ""}
      ${hook}
      ${spineHtml(timeline.spine)}
      ${insetsHtml(timeline.insets)}
      ${beatsHtml(timeline.beats)}
      ${full ? tableHtml(timeline.table) : ""}
      ${note}
    </section>`;
  }

  function forTopic(topicId) {
    const map = (global.LLB && global.LLB.topicTimelines) || {};
    const catalog = (global.LLB && global.LLB.timelines) || {};
    return (map[topicId] || [])
      .map((ref) => {
        const id = typeof ref === "string" ? ref : ref.id;
        const mode = typeof ref === "string" ? "" : ref.mode || "";
        return { timeline: catalog[id], mode };
      })
      .filter((x) => x.timeline);
  }

  function renderForTopic(topicId) {
    return forTopic(topicId)
      .map((x) => render(x.timeline, x.mode))
      .join("");
  }

  function searchBlob(topicId) {
    return forTopic(topicId)
      .map(({ timeline }) => {
        const beats = (timeline.beats || [])
          .map((b) => [b.year, b.name, b.schoolLabel, b.work, b.doctrine].join(" "))
          .join(" ");
        return [timeline.title, timeline.hook, beats].join(" ");
      })
      .join(" ");
  }

  global.LLBTimeline = { render, renderForTopic, searchBlob, esc };
})(window);

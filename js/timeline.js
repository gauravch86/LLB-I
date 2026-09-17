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

  function field(label, inner) {
    if (!inner) return "";
    return `<div class="tl-field"><dt>${esc(label)}</dt><dd>${inner}</dd></div>`;
  }

  function beatsHtml(beats) {
    return `<ol class="timeline">
      ${(beats || [])
        .map((b) => {
          const school = b.school
            ? `<span class="tl-school tl-school-${esc(b.school)}">${esc(b.schoolLabel || b.school)}</span>`
            : "";
          const who = `<strong>${esc(b.name)}</strong>${school}`;
          return `<li>
            <span class="tl-node" aria-hidden="true"></span>
            <article class="tl-card">
              <dl class="tl-fields">
                ${field("Era / Year", `<span class="tl-year">${esc(b.year)}</span>`)}
                ${field("Who", who)}
                ${field("Landmark", b.work ? esc(b.work) : "")}
                ${field("What they said", esc(b.doctrine))}
                ${field("What they pushed back against", esc(b.shift))}
              </dl>
            </article>
          </li>`;
        })
        .join("")}
    </ol>`;
  }

  function defStripHtml(timeline) {
    if (!timeline.defInset) return spineHtml(timeline.spine);
    const d = timeline.defInset;
    return `<aside class="tl-def-strip">
      <p class="tl-def-kicker">${esc(d.kicker || "Definitions inset — not a school")}</p>
      ${spineHtml(timeline.spine)}
      <p class="tl-def-mnemo"><strong>${esc(d.name)}</strong> ${esc(d.hook)}</p>
    </aside>`;
  }

  function bandHtml(group) {
    const mnemo = group.mnemonic
      ? `<p class="tl-band-mnemo">This band only: <strong>${esc(group.mnemonic.name)}</strong> — ${esc(group.mnemonic.hook)}</p>`
      : "";
    return `<section class="tl-band tl-band-${esc(group.school)}">
      <header class="tl-band-head">
        <h3><span class="tl-school tl-school-${esc(group.school)}">${esc(group.title)}</span></h3>
        ${mnemo}
      </header>
      ${beatsHtml(group.beats)}
    </section>`;
  }

  function render(timeline, mode) {
    if (!timeline) return "";
    const hook = timeline.hook ? `<p class="tl-hook">${esc(timeline.hook)}</p>` : "";
    const note = timeline.note ? `<p class="search-query">${esc(timeline.note)}</p>` : "";
    const rail = timeline.groups
      ? timeline.groups.map(bandHtml).join("")
      : beatsHtml(timeline.beats);
    return `<section class="evo" id="sec-${esc(timeline.id)}" data-jump="${esc(timeline.id)}">
      <h2 class="section-title">${esc(timeline.title || "Evolution timeline")}</h2>
      ${timeline.lede ? `<p class="lede">${esc(timeline.lede)}</p>` : ""}
      ${hook}
      ${defStripHtml(timeline)}
      ${rail}
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
        const groups = timeline.groups || [{ beats: timeline.beats }];
        const beats = groups
          .flatMap((g) => g.beats || [])
          .map((b) => [b.year, b.name, b.schoolLabel, b.work, b.doctrine].join(" "))
          .join(" ");
        return [timeline.title, timeline.hook, beats].join(" ");
      })
      .join(" ");
  }

  global.LLBTimeline = { render, renderForTopic, searchBlob, esc };
})(window);

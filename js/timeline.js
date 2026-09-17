(function (global) {
  let bound = false;
  const VIEW_KEY = "llb1-tl-view";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function savedView() {
    try {
      return global.localStorage && global.localStorage.getItem(VIEW_KEY) === "matrix" ? "matrix" : "rail";
    } catch {
      return "rail";
    }
  }

  function persistView(view) {
    try {
      if (global.localStorage) global.localStorage.setItem(VIEW_KEY, view);
    } catch {
      /* ignore quota / private mode */
    }
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

  function schoolChip(b) {
    const schoolKey = b.school || "";
    if (!schoolKey) return "";
    return `<span class="tl-school tl-school-${esc(schoolKey)}">${esc(b.schoolLabel || schoolKey)}</span>`;
  }

  function firstLine(text, max) {
    const raw = String(text || "").replace(/\s+/g, " ").trim();
    if (!raw) return "";
    const cap = max || 160;
    const sentence = raw.match(/^(.+?[.!?])(\s|$)/);
    let line = sentence ? sentence[1] : raw;
    if (line.length > cap) {
      const cut = line.lastIndexOf(" ", cap);
      line = (cut > 48 ? line.slice(0, cut) : line.slice(0, cap)).replace(/[,;:–—-]\s*$/, "") + "…";
    }
    return line;
  }

  function shortWork(work) {
    let s = String(work || "").replace(/\s+/g, " ").trim();
    if (!s) return "";
    s = s.replace(/\s*\([^)]{18,}\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
    if (s.length > 72 && s.includes(";")) s = s.split(";")[0].trim();
    if (s.length > 84 && s.includes(" — ")) s = s.split(" — ")[0].trim();
    return s;
  }

  function crisp(full, compact, max) {
    const short = String(compact || "").trim();
    if (short) return short;
    return firstLine(full, max);
  }

  function beatsHtml(beats) {
    return `<ol class="timeline">
      ${(beats || [])
        .map((b) => {
          const schoolKey = b.school || "";
          const school = schoolChip(b);
          const who = `<strong>${esc(b.name)}</strong>${school}`;
          const def = b.defJob ? ` data-def="1"` : "";
          return `<li data-school="${esc(schoolKey)}"${def}>
            <span class="tl-node${schoolKey ? ` tl-node-${esc(schoolKey)}` : ""}" aria-hidden="true"></span>
            <article class="tl-card${schoolKey ? ` tl-card-${esc(schoolKey)}` : ""}">
              <dl class="tl-fields">
                ${field("Era / Year", `<span class="tl-year">${esc(b.year)}</span>`)}
                ${field("Who", who)}
                ${field("Where", b.country ? `<span class="tl-where">${esc(b.country)}</span>` : "")}
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

  function matrixRowsHtml(beats) {
    return (beats || [])
      .map((b) => {
        const schoolKey = b.school || "";
        const def = b.defJob ? ` data-def="1"` : "";
        const landmark = esc(b.landmark ? String(b.landmark).trim() : shortWork(b.work));
        const said = esc(crisp(b.doctrine, b.said, 140));
        const challenged = esc(crisp(b.shift, b.challenged, 140));
        const where = b.country ? `<span class="tl-where">${esc(b.country)}</span>` : "";
        return `<tr data-school="${esc(schoolKey)}"${def}>
          <td class="tl-m-mark"><span class="tl-node${schoolKey ? ` tl-node-${esc(schoolKey)}` : ""}" aria-hidden="true"></span></td>
          <td class="tl-m-era"><span class="tl-year">${esc(b.year)}</span></td>
          <td class="tl-m-name">${esc(b.name)}</td>
          <td class="tl-m-where">${where}</td>
          <td class="tl-m-school">${schoolChip(b)}</td>
          <td class="tl-m-land">${landmark}</td>
          <td class="tl-m-said">${said}</td>
          <td class="tl-m-push">${challenged}</td>
        </tr>`;
      })
      .join("");
  }

  function matrixMnemoHtml(timeline) {
    const boxes = [];
    (timeline.kernels || []).forEach((k) => {
      boxes.push(`<div class="tl-mnemo tl-mnemo-${esc(k.school)}">
        <p class="tl-mnemo-kicker">${esc(k.scope || k.school)}</p>
        <p class="tl-mnemo-name">${esc(k.name)}</p>
        ${k.line || k.hook ? `<p class="tl-mnemo-line">${esc(k.line || k.hook)}</p>` : ""}
      </div>`);
    });
    if (timeline.defInset) {
      const d = timeline.defInset;
      boxes.push(`<div class="tl-mnemo tl-mnemo-defs">
        <p class="tl-mnemo-kicker">${esc(d.boxKicker || "Definitions")}</p>
        <p class="tl-mnemo-name">${esc(d.name)}</p>
        ${d.line || d.hook ? `<p class="tl-mnemo-line">${esc(d.line || d.hook)}</p>` : ""}
      </div>`);
    }
    const tag = (timeline.matrix && timeline.matrix.tagline) || "Clear · Compact · Connected";
    boxes.push(`<div class="tl-mnemo tl-mnemo-style">
      <p class="tl-mnemo-kicker">${esc((timeline.matrix && timeline.matrix.tagKicker) || "Study-aid")}</p>
      <p class="tl-mnemo-name">${esc(tag)}</p>
    </div>`);
    return `<footer class="tl-matrix-mnemos">${boxes.join("")}</footer>`;
  }

  function matrixHtml(timeline) {
    return `<div class="tl-matrix-frame">
      <div class="tl-matrix-scroller">
        <table class="tl-matrix">
          <caption class="tl-matrix-cap">Same Sem-1 cast as the rail — denser columns for recitation</caption>
          <thead>
            <tr>
              <th class="tl-m-mark"><span class="visually-hidden">School mark</span></th>
              <th>Era / Year</th>
              <th>Name</th>
              <th>Where</th>
              <th>School</th>
              <th>Landmark</th>
              <th>Said</th>
              <th>Challenged</th>
            </tr>
          </thead>
          <tbody>${matrixRowsHtml(allBeats(timeline))}</tbody>
        </table>
      </div>
      ${matrixMnemoHtml(timeline)}
    </div>`;
  }

  function viewToggleHtml(view) {
    const railOn = view !== "matrix";
    return `<div class="tl-views" role="group" aria-label="Timeline layout">
      <button type="button" class="tl-view-btn${railOn ? " is-on" : ""}" data-tl-view="rail" aria-pressed="${railOn ? "true" : "false"}">Rail</button>
      <button type="button" class="tl-view-btn${!railOn ? " is-on" : ""}" data-tl-view="matrix" aria-pressed="${!railOn ? "true" : "false"}">Matrix</button>
    </div>`;
  }

  function defStripHtml(timeline) {
    if (!timeline.defInset) return spineHtml(timeline.spine);
    const d = timeline.defInset;
    return `<aside class="tl-def-strip">
      <p class="tl-def-kicker">${esc(d.kicker || "Definitions inset — not the full rail")}</p>
      ${spineHtml(timeline.spine)}
      <p class="tl-def-mnemo"><strong>${esc(d.name)}</strong> ${esc(d.hook)}</p>
    </aside>`;
  }

  function filterHtml(timeline) {
    const filters = timeline.filters;
    if (!filters || !filters.length) return "";
    const btns = [{ id: "all", label: "All" }, ...filters]
      .map(
        (f, i) =>
          `<button type="button" class="tl-filter${i === 0 ? " is-on" : ""}${f.school ? ` tl-school-${esc(f.school)}` : ""}" data-tl-filter="${esc(f.id)}"${f.school ? ` data-school="${esc(f.school)}"` : ""}>${esc(f.label)}</button>`
      )
      .join("");
    return `<div class="tl-filters" role="toolbar" aria-label="Filter timeline">${btns}</div>`;
  }

  function kernelsHtml(kernels) {
    if (!kernels || !kernels.length) return "";
    return `<footer class="tl-kernels">
      ${kernels
        .map(
          (k) =>
            `<p class="tl-kernel-line tl-kernel-${esc(k.school)}"><strong>${esc(k.scope || k.school)} only — ${esc(k.name)}</strong> ${esc(k.hook)}</p>`
        )
        .join("")}
    </footer>`;
  }

  function applyFilter(section, key) {
    section.querySelectorAll("[data-tl-filter]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-tl-filter") === key);
    });
    section.querySelectorAll(".timeline > li, .tl-matrix tbody tr").forEach((row) => {
      const match =
        key === "all" ||
        (key === "defs" && row.getAttribute("data-def") === "1") ||
        row.getAttribute("data-school") === key;
      row.hidden = !match;
    });
  }

  function applyView(section, view) {
    const next = view === "matrix" ? "matrix" : "rail";
    section.setAttribute("data-view", next);
    section.querySelectorAll("[data-tl-view]").forEach((btn) => {
      const on = btn.getAttribute("data-tl-view") === next;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const rail = section.querySelector(".tl-rail-pane");
    const matrix = section.querySelector(".tl-matrix-pane");
    if (rail) rail.hidden = next === "matrix";
    if (matrix) matrix.hidden = next !== "matrix";
    persistView(next);
  }

  function bindChrome() {
    if (bound) return;
    if (typeof document === "undefined" || !document.addEventListener) return;
    bound = true;
    document.addEventListener("click", (e) => {
      const viewBtn = e.target.closest("[data-tl-view]");
      if (viewBtn) {
        const view = viewBtn.getAttribute("data-tl-view");
        const sections = document.querySelectorAll(".evo[data-tl-featured]");
        if (sections.length) sections.forEach((section) => applyView(section, view));
        else {
          const section = viewBtn.closest(".evo");
          if (section) applyView(section, view);
        }
        return;
      }
      const btn = e.target.closest("[data-tl-filter]");
      if (!btn) return;
      const section = btn.closest(".evo");
      if (!section) return;
      applyFilter(section, btn.getAttribute("data-tl-filter"));
    });
  }

  function allBeats(timeline) {
    if (timeline.beats) return timeline.beats;
    return (timeline.groups || []).flatMap((g) => g.beats || []);
  }

  function render(timeline) {
    if (!timeline) return "";
    const hook = timeline.hook ? `<p class="tl-hook">${esc(timeline.hook)}</p>` : "";
    const note = timeline.note ? `<p class="search-query">${esc(timeline.note)}</p>` : "";
    const featured = !!timeline.featured;
    const view = featured ? savedView() : "rail";
    const head = featured
      ? `<div class="tl-head">
          <h2 class="section-title">${esc(timeline.title || "Evolution timeline")}</h2>
          ${viewToggleHtml(view)}
        </div>`
      : `<h2 class="section-title">${esc(timeline.title || "Evolution timeline")}</h2>`;
    const rail = `<div class="tl-rail-pane"${view === "matrix" ? " hidden" : ""}>
      ${beatsHtml(allBeats(timeline))}
      ${kernelsHtml(timeline.kernels)}
    </div>`;
    const matrix = featured
      ? `<div class="tl-matrix-pane"${view === "matrix" ? "" : " hidden"}>
          ${matrixHtml(timeline)}
        </div>`
      : "";
    bindChrome();
    return `<section class="evo" id="sec-${esc(timeline.id)}" data-jump="${esc(timeline.id)}"${featured ? ` data-tl-featured="1" data-view="${esc(view)}"` : ""}>
      ${head}
      ${timeline.lede ? `<p class="lede">${esc(timeline.lede)}</p>` : ""}
      ${hook}
      ${defStripHtml(timeline)}
      ${filterHtml(timeline)}
      ${rail}
      ${matrix}
      ${note}
    </section>`;
  }

  function forTopic(topicId) {
    const map = (global.LLB && global.LLB.topicTimelines) || {};
    const catalog = (global.LLB && global.LLB.timelines) || {};
    return (map[topicId] || [])
      .map((ref) => {
        const id = typeof ref === "string" ? ref : ref.id;
        return catalog[id];
      })
      .filter(Boolean);
  }

  function renderForTopic(topicId) {
    return forTopic(topicId).map(render).join("");
  }

  function searchBlob(topicId) {
    return forTopic(topicId)
      .map((timeline) => {
        const beats = allBeats(timeline)
          .map((b) => [b.year, b.name, b.country, b.schoolLabel, b.work, b.landmark, b.doctrine, b.said, b.shift, b.challenged].join(" "))
          .join(" ");
        return [timeline.title, timeline.hook, beats].join(" ");
      })
      .join(" ");
  }

  global.LLBTimeline = { render, renderForTopic, searchBlob, esc };
})(window);

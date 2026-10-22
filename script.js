/* =========================================================
   VISHWAKARANDAK '26 — single source of truth for all events
   To add the official VIERP link later, set VIERP_URL below.
   ========================================================= */
const VIERP_URL = ""; // e.g. "https://..." — leave empty until official URL is confirmed
const PHONE = "9892932711";

// format: "individual" | "team" | null (null = not specified in source data)
const ZONES = [
  { id: "arts", name: "Artizone & Creative", short: "Artizone", tag: "Paint · Play · Create", icon: "brush",
    events: [
      ["Arm Wrestling","EC 01",30,"individual"],["CID","EC 02",160,null],["Bladder Burst","EC 03",10,null],
      ["Eating Competition","EC 04",30,"individual"],["Hand Painting","EC 05",60,null],["Human Foosball","EC 06",250,"team"],
      ["Resin Art Workshop","EC 07",150,null],["Tie Dye Workshop","EC 08",150,null]]},
  { id: "perform", name: "Audi & Performing Arts", short: "Performing Arts", tag: "Lights · Stage · Spotlight", icon: "mic",
    events: [
      ["Footloose SOLO","EC 09",100,"individual"],["Footloose DUET","EC 10",180,"team"],["Footloose GROUP","EC 11",300,"team"],
      ["Naatki","EC 12",400,null],["Miss & Mr VIT","EC 13",120,null],["Musical Maestro","EC 14",120,null],
      ["Salsa Workshop","EC 15",100,null],["V-Rock","EC 16",600,null]]},
  { id: "gaming", name: "LAN & Gaming", short: "Gaming", tag: "Lock in · Drop in · Win", icon: "pad",
    events: [
      ["BGMI SOLO","EC 17",60,"individual"],["BGMI SQUAD","EC 18",200,"team"],["Clash Royale","EC 19",60,null],
      ["CODM SOLO","EC 20",50,"individual"],["Ludo","EC 21",20,null],["Stumble Guys","EC 22",50,null],
      ["Valorant","EC 23",250,null],["Fifa","EC 24",100,null],["Fifa Penalties","EC 25",50,null]]},
  { id: "litbiz", name: "LitBiz", short: "LitBiz", tag: "Think · Pitch · Outsmart", icon: "book",
    events: [
      ["IPL Auction","EC 26",100,null],["Debate","EC 27",70,null],["Stock Market Workshop","EC 28",100,null],
      ["AI and Deep Learning Workshop","EC 29",100,null],["Word Weave","EC 30",60,null],["Corporate Clash","EC 31",80,null],
      ["Family Feud","EC 32",60,null],["BidCraft","EC 33",50,null]]},
  { id: "team", name: "Team & Fun Events", short: "Team & Fun", tag: "Squad up · Go wild", icon: "spark",
    events: [
      ["Box Cricket","EC 34",300,"team"],["Blind Rush","EC 35",80,null],["Nerf Mania","EC 36",240,null],
      ["Water Gun Battle","EC 37",210,null],["RedLight GreenLight","EC 38",80,null],["Treasure Hunt","EC 39",180,null],
      ["UV Cricket","EC 40",300,"team"],["Volta Football","EC 41",180,"team"]]},
  { id: "sports", name: "Sports", short: "Sports", tag: "Faster · Higher · Louder", icon: "ball",
    events: [
      ["American Dodgeball — Boys","S 01",200,"team"],["American Dodgeball — Girls","S 02",200,"team"],
      ["Badminton — Boys Singles","S 03",120,"individual"],["Badminton — Girls Singles","S 04",120,"individual"],
      ["Badminton — Boys Doubles","S 05",150,"team"],["Badminton — Girls Doubles","S 06",150,"team"],
      ["Badminton — Mixed Doubles","S 07",150,"team"],["Basketball — Boys","S 08",400,"team"],
      ["Basketball — Girls","S 09",350,"team"],["Basketball 3-pointer — Boys","S 10",50,null],
      ["Basketball 3-pointer — Girls","S 11",50,null],["Cricket — Boys","S 12",900,"team"],
      ["Cricket — Girls","S 13",600,"team"],["Chess — Bullet (1+0)","S 14",50,"individual"],
      ["Chess — Blitz (5+0)","S 15",50,"individual"],["Carrom — Boys Singles","S 16",50,"individual"],
      ["Carrom — Boys Doubles","S 17",100,"team"],["Carrom — Girls Singles","S 18",50,"individual"],
      ["Carrom — Girls Doubles","S 19",100,"team"],["Football — Boys","S 20",500,"team"],
      ["Football — Girls","S 21",500,"team"],["Hand Penalty — Boys","S 22",50,null],
      ["Hand Penalty — Girls","S 23",50,null],["Kabaddi — Boys","S 24",400,"team"],
      ["Fitness & Athletics — Mr Fit","S 27",80,"individual"],["Fitness & Athletics — Miss Fit","S 28",80,"individual"],
      ["Relay — Boys","S 29",180,"team"],["Relay — Girls","S 30",180,"team"],
      ["Skipping Challenge — Boys","S 31",50,null],["Skipping Challenge — Girls","S 32",50,null],
      ["Sprint — Boys","S 33",60,"individual"],["Sprint — Girls","S 34",60,"individual"],
      ["Shot Put — Boys","S 35",60,"individual"],["Shot Put — Girls","S 36",60,"individual"],
      ["Tug of War — Boys","S 37",350,"team"],["Tug of War — Girls","S 38",300,"team"],
      ["Table Tennis — Boys Singles","S 39",80,"individual"],["Table Tennis — Girls Singles","S 40",80,"individual"],
      ["Table Tennis — Boys Doubles","S 41",100,"team"],["Table Tennis — Girls Doubles","S 42",100,"team"],
      ["Ultimate Frisbee — Boys","S 43",250,"team"],["Ultimate Frisbee — Girls","S 44",250,"team"],
      ["Volleyball — Boys","S 45",300,"team"],["Volleyball — Girls","S 46",300,"team"]]},
  { id: "tech", name: "Technical — Innovation & Tech", short: "Technical", tag: "Build · Break · Innovate", icon: "chip",
    events: [
      ["RC Rampage","Tech 01",60,null],["Haunted Room","Tech 02",50,null],["FX Trade","Tech 03",75,null],
      ["Buzz Wire","Tech 04",40,null],["Tech Jenga","Tech 05",50,null],["Code Titans","Tech 06",60,null],
      ["Wiki Jump","Tech 07",100,null],["Hackathon","Tech 08",180,null],["Gun Range Shooting","Tech 09",80,null],
      ["Domino Effect","Tech 10",50,null],["Escape Room","Tech 11",120,null],["Robo Soccer","Tech 12",80,null]],
    pass: { name: "Technical Event Pass", fee: 180,
      desc: "Ensures individual entry into all technical events. For team events, every member of the team must hold a pass." } }
];

const ICONS = {
  brush:'<path d="M14 4l6 6-8.5 8.5a3 3 0 01-4.2 0l-1.8-1.8a3 3 0 010-4.2L14 4z"/><path d="M4 20c1.5 0 3-1 3-3"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  pad:'<rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v4M5 13h4M16 12h.01M18 14h.01"/>',
  book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z"/><path d="M8 7h7M8 11h5"/>',
  spark:'<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
  chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/>'
};
const svg = (k, c = "") => `<svg class="ico ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;

const ALL = ZONES.flatMap(z => z.events.map(([name, code, fee, format]) => ({ name, code, fee, format, zone: z })));
const inr = n => "₹" + n.toLocaleString("en-IN");
const fmtLabel = f => f === "team" ? "Team" : f === "individual" ? "Individual" : "Format TBA";
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");

/* ---------- favorites (optional, localStorage) ---------- */
let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem("vk26-favs") || "[]")); } catch (e) {}
const saveFavs = () => { try { localStorage.setItem("vk26-favs", JSON.stringify([...favs])); } catch (e) {} };

function cardHTML(e) {
  const on = favs.has(e.code);
  return `<article class="ecard" data-zone="${e.zone.id}">
    <div class="ecard-top"><span class="zico">${svg(e.zone.icon)}</span><span class="code">${e.code}</span>
      <button class="fav ${on ? "on" : ""}" data-fav="${e.code}" aria-pressed="${on}" aria-label="${on ? "Remove" : "Save"} ${esc(e.name)} ${on ? "from" : "to"} favourites">${svg("heart")}</button></div>
    <h3>${esc(e.name)}</h3>
    <div class="ecard-meta"><span class="chip">${e.zone.short}</span><span class="chip ghost">${fmtLabel(e.format)}</span></div>
    <div class="ecard-foot"><span class="fee">${inr(e.fee)}</span><button class="link-btn" data-open="${e.zone.id}">View zone →</button></div>
  </article>`;
}

/* ---------- zones grid ---------- */
const zoneGrid = document.getElementById("zoneGrid");
zoneGrid.innerHTML = ZONES.map((z, i) => {
  const fees = z.events.map(e => e[2]);
  return `<button class="zone reveal" data-zone="${z.id}" data-open="${z.id}" aria-haspopup="dialog">
    <span class="zone-art" aria-hidden="true"></span>
    <span class="zone-num">0${i + 1}</span>
    <span class="zone-ico">${svg(z.icon)}</span>
    <span class="zone-name">${z.name}</span>
    <span class="zone-tag">${z.tag}</span>
    <span class="zone-foot"><span>${z.events.length} events</span><span>${inr(Math.min(...fees))} – ${inr(Math.max(...fees))}</span></span>
  </button>`;
}).join("");

document.getElementById("heroZones").innerHTML = ZONES.map(z =>
  `<button class="hz" data-zone="${z.id}" data-open="${z.id}">${svg(z.icon)}<span>${z.short}</span></button>`).join("");
document.getElementById("statEvents").textContent = ALL.length;

/* ---------- filters ---------- */
const $q = document.getElementById("q"), $zone = document.getElementById("fZone"), $price = document.getElementById("fPrice"),
  $fmt = document.getElementById("fFormat"), $sort = document.getElementById("fSort"), $favOnly = document.getElementById("fFav"),
  $grid = document.getElementById("eventGrid"), $count = document.getElementById("count"), $empty = document.getElementById("empty");
$zone.innerHTML = `<option value="">All zones</option>` + ZONES.map(z => `<option value="${z.id}">${z.name}</option>`).join("");
const norm = s => s.toLowerCase().replace(/[\s—\-]+/g, " ").trim();
const compact = s => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function render() {
  const q = norm($q.value), qc = compact($q.value);
  const [lo, hi] = ($price.value || "0-99999").split("-").map(Number);
  let list = ALL.filter(e =>
    (!q || norm(e.name).includes(q) || compact(e.code).includes(qc) || compact(e.name).includes(qc)) &&
    (!$zone.value || e.zone.id === $zone.value) &&
    e.fee >= lo && e.fee <= hi &&
    (!$fmt.value || ($fmt.value === "unknown" ? e.format === null : e.format === $fmt.value)) &&
    (!$favOnly.checked || favs.has(e.code)));
  const s = $sort.value;
  if (s === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  if (s === "low") list.sort((a, b) => a.fee - b.fee);
  if (s === "high") list.sort((a, b) => b.fee - a.fee);
  $grid.innerHTML = list.map(cardHTML).join("");
  $count.textContent = `${list.length} of ${ALL.length} events`;
  $empty.hidden = list.length > 0;
}
[$q, $zone, $price, $fmt, $sort, $favOnly].forEach(el => el.addEventListener("input", render));
document.querySelectorAll("[data-clear]").forEach(b => b.addEventListener("click", () => {
  $q.value = ""; $zone.value = ""; $price.value = ""; $fmt.value = ""; $sort.value = "default"; $favOnly.checked = false; render(); $q.focus();
}));
render();

/* ---------- modal ---------- */
const modal = document.getElementById("modal"), panel = modal.querySelector(".panel");
let lastFocus = null, current = null;
function modalList() {
  const q = norm(document.getElementById("mq").value), qc = compact(document.getElementById("mq").value);
  const evs = current.events.filter(([n, c]) => !q || norm(n).includes(q) || compact(c).includes(qc));
  document.getElementById("mList").innerHTML = evs.length ? evs.map(([n, c, f, fm]) =>
    `<li><span class="code">${c}</span><span class="mname">${esc(n)}</span><span class="chip ghost">${fmtLabel(fm)}</span><span class="fee">${inr(f)}</span></li>`).join("")
    : `<li class="mempty">No events match that search in this zone.</li>`;
}
function openZone(id) {
  current = ZONES.find(z => z.id === id); if (!current) return;
  lastFocus = document.activeElement;
  modal.dataset.zone = id;
  document.getElementById("mTitle").textContent = current.name;
  document.getElementById("mTag").textContent = current.tag;
  document.getElementById("mIco").innerHTML = svg(current.icon);
  document.getElementById("mCount").textContent = `${current.events.length} events`;
  document.getElementById("mq").value = "";
  const p = document.getElementById("mPass");
  p.hidden = !current.pass;
  if (current.pass) p.innerHTML = `<div><strong>${current.pass.name}</strong><p>${current.pass.desc}</p><small>Separate registration option — not a Tech-coded event.</small></div><span class="fee">${inr(current.pass.fee)}</span>`;
  modalList();
  modal.hidden = false; document.body.classList.add("locked");
  requestAnimationFrame(() => modal.classList.add("open"));
  setTimeout(() => document.getElementById("mClose").focus(), 30);
}
function closeZone() {
  modal.classList.remove("open"); document.body.classList.remove("locked");
  setTimeout(() => { modal.hidden = true; }, 260);
  if (lastFocus) lastFocus.focus();
}
document.getElementById("mq").addEventListener("input", modalList);
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]"); if (o) { openZone(o.dataset.open); return; }
  const f = e.target.closest("[data-fav]");
  if (f) { const c = f.dataset.fav; favs.has(c) ? favs.delete(c) : favs.add(c); saveFavs(); render(); return; }
  if (e.target.closest("[data-close]")) closeZone();
  if (e.target.closest("[data-goreg]")) { closeZone(); }
});
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeZone();
  if (e.key === "Tab") {
    const f = [...panel.querySelectorAll("button,input,a[href]")].filter(x => !x.closest("[hidden]"));
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- VIERP link (only if configured) ---------- */
document.querySelectorAll("[data-vierp]").forEach(el => {
  if (VIERP_URL) el.outerHTML = `<a href="${VIERP_URL}" target="_blank" rel="noopener">VIERP website ↗</a>`;
});

/* ---------- nav ---------- */
const nav = document.getElementById("nav"), burger = document.getElementById("burger"), drawer = document.getElementById("drawer");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 24), { passive: true });
function setDrawer(open) {
  drawer.classList.toggle("open", open); burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setDrawer(!drawer.classList.contains("open")));
drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setDrawer(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("open")) { setDrawer(false); burger.focus(); } });

const links = [...document.querySelectorAll(".nav-links a, .drawer a")];
const secObs = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach(s => secObs.observe(s));

/* ---------- reveal (content visible by default; JS only enhances) ---------- */
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-reveal");
  const ro = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => ro.observe(el));
}
document.getElementById("yr").textContent = "2026";

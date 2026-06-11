// EDITABLE CONTENT START: replace these sample entries with your papers and datasets.
const researcher = {
  // Fill in your ORCID iD, for example: "0000-0002-1825-0097".
  orcid: "0009-0001-6203-1879",
};

const papers = [
  {
    title: "An exceptional-point wireless sensor featuring non-reciprocal and electronic-tunable coupling",
    venue: "Applied Physics Letters",
    year: "2026",
    category: "non-hermitian",
    tags: ["exceptional point", "wireless sensor", "non-reciprocal coupling"],
    summary:
      "基于奇异点机制的无线传感研究，突出非互易与电子可调耦合对传感响应的调控作用。",
    links: [
      { label: "PDF", url: "" },
      { label: "DOI", url: "https://doi.org/10.1063/5.0333910" },
    ],
  },
  {
    title: "Observation of higher-order exceptional points using frequency-dependent gain",
    venue: "Communications Physics",
    year: "2026",
    category: "higher-order",
    tags: ["higher-order EP", "frequency-dependent gain", "non-Hermitian physics"],
    summary:
      "利用频率依赖增益观测高阶奇异点，展示非厄米系统中高阶退化结构的实验可达性。",
    links: [
      { label: "PDF", url: "" },
      { label: "DOI", url: "https://doi.org/10.1038/s42005-026-02561-3" },
    ],
  },
  {
    title: "Pseudo-Hermitian Exceptional-Point-Based Wireless Sensing System With Heterogeneous Coupling",
    venue: "IEEE Microwave and Wireless Technology Letters",
    year: "2025",
    category: "non-hermitian",
    tags: ["pseudo-Hermitian", "exceptional point", "heterogeneous coupling"],
    summary:
      "面向异质耦合无线传感系统的伪厄米奇异点方案，强调结构耦合与传感性能之间的关系。",
    links: [
      { label: "PDF", url: "" },
      { label: "DOI", url: "https://doi.org/10.1109/LMWT.2025.3642799" },
    ],
  },
];

const datasets = [
  {
    title: "Exceptional-point perturbation scans",
    type: "Simulation",
    size: "CSV · HDF5 · 1.8 GB",
    summary:
      "包含二模与三模模型的扰动扫描、复本征值轨迹、线宽变化和灵敏度曲线。",
    url: "",
  },
  {
    title: "Noise floor comparison",
    type: "Analysis",
    size: "Notebook · CSV · 420 MB",
    summary:
      "用于比较本征值放大、读出噪声、散粒噪声和实际最小可探测扰动。",
    url: "",
  },
  {
    title: "Higher-order EP parameter map",
    type: "Parameter map",
    size: "NPZ · JSON · 760 MB",
    summary:
      "高阶奇异点附近的参数网格、稳定区域、退相干条件和拟合脚本索引。",
    url: "",
  },
  {
    title: "Figures and source data",
    type: "Publication assets",
    size: "SVG · CSV · 180 MB",
    summary:
      "论文图表源数据、绘图参数、版本记录和投稿补充材料文件。",
    url: "",
  },
];
// EDITABLE CONTENT END.

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const searchInput = document.querySelector("[data-search]");
const filterGroup = document.querySelector("[data-filter-group]");
const paperGrid = document.querySelector("[data-paper-grid]");
const datasetGrid = document.querySelector("[data-dataset-grid]");
const paperCount = document.querySelector("[data-paper-count]");
const datasetCount = document.querySelector("[data-dataset-count]");

let activeFilter = "all";
let searchTerm = "";

function getStoredTheme() {
  try {
    return localStorage.getItem("archive-theme");
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem("archive-theme", theme);
  } catch {
    // localStorage can be unavailable in private contexts.
  }
}

function initTheme() {
  const stored = getStoredTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = stored || (prefersDark ? "dark" : "light");
}

function createLinks(links) {
  return links
    .map((link) => {
      if (!link.url) {
        return `<span>${link.label}待补</span>`;
      }
      return `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`;
    })
    .join("");
}

function normalizeOrcid(orcid) {
  return orcid.trim();
}

function isConfiguredOrcid(orcid) {
  return /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/i.test(normalizeOrcid(orcid));
}

function getOrcidUrl(orcid) {
  return `https://orcid.org/${normalizeOrcid(orcid)}`;
}

function createOrcidLink({ compact = false } = {}) {
  if (!isConfiguredOrcid(researcher.orcid)) {
    return '<span class="orcid-link orcid-link-muted">ORCID待补</span>';
  }

  const orcid = normalizeOrcid(researcher.orcid);
  const label = compact ? "ORCID" : orcid;
  return `
    <a
      class="orcid-link"
      href="${getOrcidUrl(orcid)}"
      target="_blank"
      rel="noreferrer"
      aria-label="View ORCID record - ${orcid}"
    >
      <span class="orcid-dot" aria-hidden="true">iD</span>
      ${label}
    </a>
  `;
}

function paperMatches(paper) {
  const text = [paper.title, paper.venue, paper.year, paper.summary, ...paper.tags]
    .join(" ")
    .toLowerCase();
  const matchesSearch = !searchTerm || text.includes(searchTerm);
  const matchesFilter = activeFilter === "all" || paper.category === activeFilter;
  return matchesSearch && matchesFilter;
}

function renderPapers() {
  const visiblePapers = papers.filter(paperMatches);
  paperCount.textContent = String(papers.length);

  if (!visiblePapers.length) {
    paperGrid.innerHTML = '<div class="empty-state">没有匹配的条目。</div>';
    return;
  }

  paperGrid.innerHTML = visiblePapers
    .map(
      (paper, index) => `
        <article class="resource-card" style="transition-delay: ${Math.min(index * 45, 220)}ms">
          <div class="card-meta">
            <strong>${paper.year}</strong>
            <span>${paper.venue}</span>
          </div>
          <h3>${paper.title}</h3>
          <p>${paper.summary}</p>
          <div class="tag-row">
            ${paper.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="card-links">${createLinks(paper.links)}</div>
          <div class="paper-identity">${createOrcidLink({ compact: true })}</div>
        </article>
      `
    )
    .join("");

  requestAnimationFrame(() => {
    document
      .querySelectorAll(".resource-card")
      .forEach((card) => card.classList.add("is-visible"));
  });
}

function renderDatasets() {
  datasetCount.textContent = String(datasets.length);
  datasetGrid.innerHTML = datasets
    .map(
      (dataset) => `
        <article class="dataset-card">
          <div class="data-type">${dataset.type}</div>
          <h3>${dataset.title}</h3>
          <p>${dataset.summary}</p>
          <div class="data-size">${dataset.size}</div>
          <div class="card-links">
            ${
              dataset.url
                ? `<a href="${dataset.url}" target="_blank" rel="noreferrer">Open ↗</a>`
                : "<span>链接待补</span>"
            }
          </div>
        </article>
      `
    )
    .join("");
}

function initInteractions() {
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    },
    { passive: true }
  );

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    setStoredTheme(nextTheme);
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderPapers();
  });

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filterGroup.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    renderPapers();
  });
}

function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initFieldCanvas() {
  const canvas = document.querySelector("[data-field-canvas]");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let rafId = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = Math.floor(rect.width);
    height = Math.floor(rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawBackground() {
    const theme = root.dataset.theme || "light";
    const base = theme === "dark" ? "#080909" : "#f5f5f2";
    const wash = theme === "dark" ? "rgba(76, 199, 189, 0.12)" : "rgba(0, 127, 120, 0.12)";
    const warm = theme === "dark" ? "rgba(255, 130, 117, 0.1)" : "rgba(217, 84, 69, 0.1)";
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, wash);
    gradient.addColorStop(0.55, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(1, warm);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawField() {
    const theme = root.dataset.theme || "light";
    const cool = theme === "dark" ? "rgba(76, 199, 189, 0.42)" : "rgba(0, 127, 120, 0.36)";
    const hot = theme === "dark" ? "rgba(255, 130, 117, 0.34)" : "rgba(217, 84, 69, 0.28)";
    const ink = theme === "dark" ? "rgba(246, 243, 234, 0.15)" : "rgba(20, 20, 20, 0.12)";
    const rows = width < 700 ? 9 : 13;
    const cols = width < 700 ? 36 : 58;
    const time = frame * 0.008;

    ctx.lineWidth = 1;
    for (let row = 0; row < rows; row += 1) {
      const yBase = (height / (rows + 1)) * (row + 1);
      ctx.beginPath();
      for (let col = 0; col < cols; col += 1) {
        const x = (width / (cols - 1)) * col;
        const pull = pointer.active ? (pointer.x - x) / Math.max(width, 1) : 0;
        const wave =
          Math.sin(col * 0.34 + row * 0.72 + time) * 18 +
          Math.cos(col * 0.18 - time * 1.8) * 9 +
          pull * 24;
        const y = yBase + wave;
        if (col === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = row % 3 === 0 ? cool : row % 3 === 1 ? ink : hot;
      ctx.stroke();
    }
  }

  function drawExceptionalCurve() {
    const theme = root.dataset.theme || "light";
    ctx.save();
    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate(Math.sin(frame * 0.004) * 0.08);
    ctx.strokeStyle = theme === "dark" ? "rgba(215, 173, 72, 0.42)" : "rgba(155, 113, 26, 0.38)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    const loops = 180;
    for (let i = 0; i <= loops; i += 1) {
      const t = (i / loops) * Math.PI * 2;
      const r = Math.sin(t * 2) * (width < 700 ? 42 : 76);
      const x = Math.cos(t) * (width < 700 ? 112 : 210) + Math.cos(t * 3) * r;
      const y = Math.sin(t) * (width < 700 ? 56 : 96) + Math.sin(t * 2) * r * 0.28;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    drawBackground();
    drawField();
    drawExceptionalCurve();
    frame += 1;
    if (!reduceMotion) rafId = requestAnimationFrame(draw);
  }

  canvas.addEventListener(
    "pointermove",
    (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    },
    { passive: true }
  );

  canvas.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else if (!reduceMotion) {
      rafId = requestAnimationFrame(draw);
    }
  });

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}

initTheme();
renderPapers();
renderDatasets();
initInteractions();
initReveal();
initFieldCanvas();

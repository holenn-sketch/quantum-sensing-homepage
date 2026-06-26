// EDITABLE CONTENT START: replace these sample entries with your papers and datasets.
const researcher = {
  // Fill in your ORCID iD, for example: "0000-0002-1825-0097".
  orcid: "0009-0001-6203-1879",
};

const firstAuthorDois = ["10.1038/s42005-026-02561-3"];

const titleTranslations = {
  "10.1063/5.0333910": "一种具有非互易与电子可调耦合的奇异点无线传感器",
  "10.1038/s42005-026-02561-3": "利用频率依赖增益观测高阶奇异点",
  "10.1109/lmwt.2025.3642799": "基于伪厄米奇异点的异质耦合无线传感系统",
};

const papersFallback = [
  {
    title: "An exceptional-point wireless sensor featuring non-reciprocal and electronic-tunable coupling",
    venue: "Applied Physics Letters",
    year: "2026",
    category: "non-hermitian",
    doi: "10.1063/5.0333910",
    isFirstAuthor: false,
    tags: ["exceptional point", "wireless sensor", "non-reciprocal coupling"],
    summary: "一种具有非互易与电子可调耦合的奇异点无线传感器",
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
    doi: "10.1038/s42005-026-02561-3",
    isFirstAuthor: true,
    tags: ["higher-order EP", "frequency-dependent gain", "non-Hermitian physics"],
    summary: "利用频率依赖增益观测高阶奇异点",
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
    doi: "10.1109/LMWT.2025.3642799",
    isFirstAuthor: false,
    tags: ["pseudo-Hermitian", "exceptional point", "heterogeneous coupling"],
    summary: "基于伪厄米奇异点的异质耦合无线传感系统",
    links: [
      { label: "PDF", url: "" },
      { label: "DOI", url: "https://doi.org/10.1109/LMWT.2025.3642799" },
    ],
  },
];

let papers = [];
let isPaperLoading = true;

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

const paperHistoryFallback = [
  {
    title: "Quantum simulation of non-Hermitian special functions and dynamics via contour-based matrix decomposition",
    journal: "Quantum Science and Technology",
    date: "2026-06-24",
    recommendedAt: "2026-06-24",
    doi: "10.1088/2058-9565/ae7b7e",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/2058-9565/ae7b7e/pdf",
    abstract:
      "Simulating non-Hermitian dynamics on quantum computers is often hindered by decaying success probability and unstable non-diagonalizable matrices. The paper proposes contour-based matrix decomposition as a quantum functional calculus framework for non-Hermitian matrix functions.",
    innovation:
      "摘要提出轮廓矩阵分解来模拟非厄米矩阵函数和动力学，以受控截断误差处理不可对角化矩阵；有助于把抽象非厄米模型转化为可计算系统。",
  },
  {
    title:
      "Three non-Hermitian random matrix universality classes of complex edge statistics: Spacing ratios and distributions",
    journal: "Journal of Physics A: Mathematical and Theoretical",
    date: "2026-06-23",
    recommendedAt: "2026-06-24",
    doi: "10.1088/1751-8121/ae777d",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/1751-8121/ae777d/pdf",
    abstract:
      "The paper studies complex spacing ratios and nearest-neighbour spacing distributions for three generic local edge statistics in non-Hermitian random matrix symmetry classes.",
    innovation:
      "摘要解析和数值比较非厄米随机矩阵边缘统计的间距比与近邻分布，提供谱统计普适类基准，可辅助建模 EP 附近噪声放大与谱响应。",
  },
  {
    title: "Gain-free quantum sensing via PT-like-induced coherence enhancement in cavity-magnomechanical system",
    journal: "Chinese Physics B",
    date: "2026-06-24",
    recommendedAt: "2026-06-24",
    doi: "10.1088/1674-1056/ae8163",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/1674-1056/ae8163/pdf",
    abstract:
      "A gain-free PT-like-induced coherence enhancement quantum sensing scheme is implemented in a cavity-magnomechanical system. The optimal sensing regime is determined by the phase of coherent parameters, and the signal-to-noise ratio can be suppressed or enhanced depending on probe configuration.",
    innovation:
      "摘要提出无传统增益-损耗平衡的 PT-like 相干增强方案，并把最佳传感区间与相干参数相位联系起来；可用于比较非厄米传感中的噪声、稳定性与可实现性。",
  },
];

const latestPapersFallback = [];
// EDITABLE CONTENT END.

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const searchInput = document.querySelector("[data-search]");
const filterGroup = document.querySelector("[data-filter-group]");
const paperGrid = document.querySelector("[data-paper-grid]");
const datasetGrid = document.querySelector("[data-dataset-grid]");
const latestPaperGrid = document.querySelector("[data-latest-paper-grid]");
const historyPaperGrid = document.querySelector("[data-history-paper-grid]");
const favoriteDirectory = document.querySelector("[data-favorite-directory]");
const paperCount = document.querySelector("[data-paper-count]");
const datasetCount = document.querySelector("[data-dataset-count]");
const favoriteStorageKey = "archive-favorite-papers";
const favoritePaperStorageKey = "archive-favorite-paper-items";
const favoritePaperStorageBackupKey = "archive-favorite-paper-items-backup";
const favoriteDirectoryOpenKey = "archive-favorite-directory-open";

let activeFilter = "all";
let searchTerm = "";
const favoritePaperCatalog = new Map();

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

function getFavoriteKeys() {
  try {
    const stored = JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
    return new Set(Array.isArray(stored) ? stored.map(normalizeFavoriteStorageKey).filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function setFavoriteKeys(keys) {
  try {
    localStorage.setItem(favoriteStorageKey, JSON.stringify([...keys].map(normalizeFavoriteStorageKey).filter(Boolean)));
  } catch {
    // Favorites are a local convenience; ignore unavailable storage.
  }
}

function normalizeFavoriteStorageKey(value = "") {
  const key = String(value || "").trim();
  if (!key) return "";
  try {
    return decodeURIComponent(key);
  } catch {
    return key;
  }
}

function createFavoritePaperMap(stored) {
  const papersByKey = new Map();

  if (Array.isArray(stored)) {
    stored.forEach((paper) => {
      if (!paper || typeof paper !== "object") return;
      const key = normalizeFavoriteStorageKey(paper.favoriteKey || getPaperFavoriteKey(paper));
      if (key && paper.title) papersByKey.set(key, getFavoritePaperPayload(paper));
    });
    return papersByKey;
  }

  if (!stored || typeof stored !== "object") return papersByKey;
  Object.entries(stored).forEach(([rawKey, paper]) => {
    if (!paper || typeof paper !== "object" || !paper.title) return;
    const key = normalizeFavoriteStorageKey(rawKey || paper.favoriteKey || getPaperFavoriteKey(paper));
    if (key) papersByKey.set(key, getFavoritePaperPayload({ ...paper, favoriteKey: key }));
  });
  return papersByKey;
}

function readStoredFavoritePapers(storageKey) {
  try {
    return createFavoritePaperMap(JSON.parse(localStorage.getItem(storageKey) || "{}"));
  } catch {
    return new Map();
  }
}

function getStoredFavoritePapers() {
  const stored = readStoredFavoritePapers(favoritePaperStorageKey);
  return stored.size ? stored : readStoredFavoritePapers(favoritePaperStorageBackupKey);
}

function setStoredFavoritePapers(papersByKey) {
  try {
    const serialized = JSON.stringify(Object.fromEntries(papersByKey));
    localStorage.setItem(favoritePaperStorageKey, serialized);
    localStorage.setItem(favoritePaperStorageBackupKey, serialized);
  } catch {
    // Metadata improves the directory only; favorites still work without it.
  }
}

function isFavoriteDirectoryOpen() {
  try {
    return localStorage.getItem(favoriteDirectoryOpenKey) === "true";
  } catch {
    return false;
  }
}

function setFavoriteDirectoryOpen(isOpen) {
  try {
    localStorage.setItem(favoriteDirectoryOpenKey, isOpen ? "true" : "false");
  } catch {
    // Collapsed state is cosmetic.
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

function normalizeDoi(doi) {
  return String(doi || "")
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .toLowerCase();
}

function getWorkValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.value || "";
}

function getWorkYear(summary) {
  return (
    getWorkValue(summary?.["publication-date"]?.year) ||
    getWorkValue(summary?.["created-date"]?.value) ||
    "n.d."
  );
}

function getWorkDoi(summary) {
  const ids = summary?.["external-ids"]?.["external-id"] || [];
  const doiItem = ids.find((item) => item?.["external-id-type"]?.toLowerCase() === "doi");
  return normalizeDoi(doiItem?.["external-id-value"] || doiItem?.["external-id-url"]?.value);
}

function classifyWork(title) {
  const text = title.toLowerCase();
  if (text.includes("higher-order")) return "higher-order";
  if (text.includes("quantum")) return "quantum";
  if (text.includes("exceptional") || text.includes("hermitian")) return "non-hermitian";
  return "non-hermitian";
}

function createWorkTags(title, venue) {
  const text = `${title} ${venue}`.toLowerCase();
  const tags = [];
  if (text.includes("higher-order")) tags.push("higher-order EP");
  if (text.includes("pseudo-hermitian")) tags.push("pseudo-Hermitian");
  if (text.includes("exceptional")) tags.push("exceptional point");
  if (text.includes("wireless")) tags.push("wireless sensor");
  if (text.includes("gain")) tags.push("frequency-dependent gain");
  if (text.includes("coupling")) tags.push("coupling");
  return [...new Set(tags)];
}

function createWorkSummary(title, doi) {
  const translatedTitle = titleTranslations[normalizeDoi(doi)];
  if (translatedTitle) return translatedTitle;

  const text = title.toLowerCase();
  if (text.includes("higher-order")) {
    return "利用频率依赖机制研究高阶奇异点";
  }
  if (text.includes("pseudo-hermitian")) {
    return "基于伪厄米机制的奇异点无线传感系统";
  }
  return "非厄米奇异点传感相关论文";
}

function mapOrcidWork(summary) {
  const title = getWorkValue(summary?.title?.title);
  const venue = getWorkValue(summary?.["journal-title"]) || "Journal article";
  const year = getWorkYear(summary);
  const doi = getWorkDoi(summary);
  const isFirstAuthor = firstAuthorDois.includes(normalizeDoi(doi));
  const category = classifyWork(title);
  return {
    title,
    venue,
    year,
    category,
    doi,
    isFirstAuthor,
    tags: createWorkTags(title, venue),
    summary: createWorkSummary(title, doi),
    links: [
      { label: "PDF", url: "" },
      { label: "DOI", url: doi ? `https://doi.org/${doi}` : "" },
    ],
  };
}

function getOrcidWorkSummaries(data) {
  return (data?.group || [])
    .flatMap((group) => group?.["work-summary"] || [])
    .filter((summary) => getWorkValue(summary?.title?.title));
}

async function syncPapersFromOrcid() {
  if (!isConfiguredOrcid(researcher.orcid)) return false;

  try {
    const response = await fetch(`https://pub.orcid.org/v3.0/${normalizeOrcid(researcher.orcid)}/works`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`ORCID request failed: ${response.status}`);
    const data = await response.json();
    const livePapers = getOrcidWorkSummaries(data).map(mapOrcidWork);
    if (!livePapers.length) return false;
    papers = livePapers.sort((a, b) => String(b.year).localeCompare(String(a.year)));
    return true;
  } catch (error) {
    console.info("Using local paper fallback because ORCID sync failed.", error);
    return false;
  }
}

function renderPapersLoading() {
  if (!paperGrid) return;
  paperCount.textContent = "…";
  paperGrid.innerHTML = `
    <div class="loading-state">
      <span aria-hidden="true"></span>
      正在同步 ORCID 公开论文
    </div>
  `;
}

function paperMatches(paper) {
  const roleText = paper.isFirstAuthor ? "first author 第一作者" : "";
  const text = [paper.title, paper.venue, paper.year, paper.summary, roleText, ...paper.tags]
    .join(" ")
    .toLowerCase();
  const matchesSearch = !searchTerm || text.includes(searchTerm);
  const matchesFilter =
    activeFilter === "all" ||
    paper.category === activeFilter ||
    (activeFilter === "first-author" && paper.isFirstAuthor);
  return matchesSearch && matchesFilter;
}

function renderPapers() {
  if (!paperGrid) return;

  if (isPaperLoading) {
    renderPapersLoading();
    return;
  }

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
          ${
            paper.isFirstAuthor
              ? '<div class="paper-badges"><span class="role-badge">第一作者</span></div>'
              : ""
          }
          <div class="tag-row">
            ${paper.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="card-links">${createLinks(paper.links)}</div>
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

async function initializePapers() {
  if (!paperGrid) {
    papers = [...papersFallback];
    if (paperCount) paperCount.textContent = String(papers.length);
    return;
  }

  renderPapersLoading();
  const hasLivePapers = await syncPapersFromOrcid();
  if (!hasLivePapers) {
    papers = [...papersFallback];
  }
  isPaperLoading = false;
  renderPapers();
}

function renderDatasets() {
  if (datasetCount) {
    datasetCount.textContent = String(datasets.length);
  }

  if (!datasetGrid) return;

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

const relatedPaperQueries = [
  "exceptional point enhanced optical sensing",
  "exceptional point optical sensing",
  "non-Hermitian sensing exceptional point",
  "exceptional point photonic sensing",
  "non-Hermitian quantum sensing",
  "PT-symmetric sensing exceptional point",
];

const relatedJournalHints = [
  "Physical Review",
  "Physical Review Applied",
  "Physical Review Letters",
  "Physical Review A",
  "Nature Electronics",
  "Quantum Science and Technology",
  "Journal of Physics A",
  "Chinese Physics B",
  "Applied Physics Letters",
  "ACS Photonics",
  "Science Advances",
  "Optics Letters",
  "Optics Express",
  "Photonics Research",
  "Physica Scripta",
  "Nanophotonics",
  "Scientific Reports",
  "Sensors",
];

const relatedPhysicsTerms = [
  "non-hermitian",
  "nonhermitian",
  "exceptional point",
  "exceptional-point",
  "pt-symmetric",
  "pt symmetric",
  "parity-time",
  "spectral splitting",
  "liouvillian",
];

const relatedSensingTerms = [
  "sensing",
  "sensor",
  "metrology",
  "electrometer",
  "rotation",
  "mass sensor",
  "refractive index",
  "signal-to-noise",
  "snr",
];

function getDateDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function cleanCrossrefText(value = "") {
  return String(value)
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .replace(/\s+-\s*/g, "-")
    .trim();
}

function normalizePaperTitle(value = "") {
  return cleanCrossrefText(value)
    .toLowerCase()
    .replace(/\b(corrigendum|erratum|correction|addendum)\b[:：]?\s*/g, "")
    .replace(/\s*\([^)]*(corrigendum|erratum|correction|addendum)[^)]*\)\s*/g, " ")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ")
    .replace(/\b(the|a|an)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isCorrectionLikeTitle(title = "") {
  const text = cleanCrossrefText(title).toLowerCase();
  return (
    /^(corrigendum|erratum|correction|addendum)\b/.test(text) ||
    /\b(comment\s+on|reply\s+to|editorial)\b/.test(text)
  );
}

function getPaperDedupKeys(paper = {}) {
  return [normalizeDoi(paper.doi), normalizePaperTitle(paper.title)].filter(Boolean);
}

function hasSeenPaper(seenKeys, paper) {
  return getPaperDedupKeys(paper).some((key) => seenKeys.has(key));
}

function rememberPaper(seenKeys, paper) {
  getPaperDedupKeys(paper).forEach((key) => seenKeys.add(key));
}

function getPaperFavoriteKey(paper = {}) {
  return normalizeFavoriteStorageKey(paper.favoriteKey) || normalizeDoi(paper.doi) || normalizePaperTitle(paper.title);
}

function getFavoritePaperPayload(paper = {}) {
  const favoriteKey = getPaperFavoriteKey(paper);
  return {
    favoriteKey,
    title: cleanCrossrefText(paper.title || ""),
    journal: cleanCrossrefText(paper.journal || paper.venue || ""),
    date: paper.date || paper.year || "",
    recommendedAt: getRecommendationDate(paper),
    doi: normalizeDoi(paper.doi),
    pdfUrl: paper.pdfUrl || "",
    abstract: cleanCrossrefText(paper.abstract || ""),
    innovation: paper.innovation || paper.summary || "",
  };
}

function persistFavoritePaperSnapshot(key, paper = {}) {
  const favoriteKey = normalizeFavoriteStorageKey(key);
  if (!favoriteKey || !paper.title) return;
  const storedPapers = getStoredFavoritePapers();
  const payload = getFavoritePaperPayload({ ...paper, favoriteKey });
  if (!payload.title) return;
  storedPapers.set(favoriteKey, { ...storedPapers.get(favoriteKey), ...payload });
  setStoredFavoritePapers(storedPapers);
}

function indexFavoritePaper(paper = {}) {
  const key = getPaperFavoriteKey(paper);
  if (!key) return;
  const payload = getFavoritePaperPayload({ ...paper, favoriteKey: key });
  favoritePaperCatalog.set(key, payload);
  if (isPaperFavorited(key)) persistFavoritePaperSnapshot(key, payload);
}

function indexFavoritePapers(papers = []) {
  papers.forEach(indexFavoritePaper);
}

function isPaperFavorited(key) {
  return key ? getFavoriteKeys().has(key) : false;
}

function createFavoriteButton(paper = {}) {
  const key = getPaperFavoriteKey(paper);
  if (!key) return "";
  const payload = encodeURIComponent(JSON.stringify(getFavoritePaperPayload(paper)));
  const isSaved = isPaperFavorited(key);
  const label = isSaved ? "已收藏" : "收藏";
  return `
    <button
      class="favorite-button${isSaved ? " is-saved" : ""}"
      type="button"
      data-favorite-paper
      data-paper-key="${encodeURIComponent(key)}"
      data-paper-payload="${payload}"
      aria-pressed="${isSaved ? "true" : "false"}"
      aria-label="${isSaved ? "取消收藏论文" : "收藏论文"}"
    >
      <span aria-hidden="true">${isSaved ? "★" : "☆"}</span>
      <span>${label}</span>
    </button>
  `;
}

function updateFavoriteButtons(key, isSaved) {
  document.querySelectorAll("[data-favorite-paper]").forEach((button) => {
    if (button.dataset.paperKey !== encodeURIComponent(key)) return;
    button.classList.toggle("is-saved", isSaved);
    button.setAttribute("aria-pressed", isSaved ? "true" : "false");
    button.setAttribute("aria-label", isSaved ? "取消收藏论文" : "收藏论文");
    const [icon, label] = button.querySelectorAll("span");
    if (icon) icon.textContent = isSaved ? "★" : "☆";
    if (label) label.textContent = isSaved ? "已收藏" : "收藏";
  });
}

function toggleFavoritePaper(button) {
  const key = decodeURIComponent(button.dataset.paperKey || "");
  if (!key) return;
  const keys = getFavoriteKeys();
  const storedPapers = getStoredFavoritePapers();
  const isSaved = keys.has(key);
  if (isSaved) {
    keys.delete(key);
    storedPapers.delete(key);
  } else {
    keys.add(key);
    try {
      const paper = JSON.parse(decodeURIComponent(button.dataset.paperPayload || ""));
      if (paper?.title) {
        const payload = getFavoritePaperPayload({ ...paper, favoriteKey: key });
        storedPapers.set(key, payload);
        favoritePaperCatalog.set(key, payload);
      }
    } catch {
      const knownPaper = favoritePaperCatalog.get(key);
      if (knownPaper) storedPapers.set(key, getFavoritePaperPayload({ ...knownPaper, favoriteKey: key }));
    }
  }
  setFavoriteKeys(keys);
  setStoredFavoritePapers(storedPapers);
  updateFavoriteButtons(key, !isSaved);
  renderFavoriteDirectory();
}

function getRecommendationDate(paper = {}, fallback = "") {
  return paper.recommendedAt || paper.recommendationDate || fallback || "";
}

function groupPapersByRecommendationDate(papers = [], fallbackDate = "") {
  const groups = [];
  const groupMap = new Map();

  papers.forEach((paper) => {
    const date = getRecommendationDate(paper, fallbackDate) || "undated";
    if (!groupMap.has(date)) {
      const group = { date, papers: [] };
      groupMap.set(date, group);
      groups.push(group);
    }
    groupMap.get(date).papers.push(paper);
  });

  return groups;
}

function createLatestPaperCard(paper) {
  return `
    <article class="latest-paper-card">
      <div class="card-meta">
        <strong>发表 ${paper.date || "recent"}</strong>
        <span>${paper.journal || "Journal article"}</span>
      </div>
      <h3>${paper.title}</h3>
      <p>${paper.innovation}</p>
      <div class="card-links">
        ${createFavoriteButton(paper)}
        ${
          paper.pdfUrl
            ? `<a href="${paper.pdfUrl}" target="_blank" rel="noreferrer">PDF ↗</a>`
            : "<span>PDF待补</span>"
        }
        ${
          paper.doi
            ? `<a href="https://doi.org/${paper.doi}" target="_blank" rel="noreferrer">DOI: ${paper.doi} ↗</a>`
            : "<span>DOI待补</span>"
        }
      </div>
    </article>
  `;
}

function createHistoryPaperItem(paper) {
  return `
    <article class="history-paper-item">
      <div class="history-paper-meta">
        <strong>${paper.journal || "Journal article"}</strong>
        <span>发表 ${paper.date || "n.d."}</span>
      </div>
      <div class="history-paper-copy">
        <h3>${paper.title}</h3>
        <p>${paper.innovation}</p>
      </div>
      <div class="history-paper-actions">
        ${createFavoriteButton(paper)}
        ${
          paper.doi
            ? `<a href="https://doi.org/${paper.doi}" target="_blank" rel="noreferrer">DOI ↗</a>`
            : "<span>DOI待补</span>"
        }
      </div>
    </article>
  `;
}

function createRecommendationDateGroup(group, variant, renderPaper) {
  const countLabel = `${group.papers.length} 篇论文`;
  return `
    <section class="paper-date-group ${variant}">
      <div class="paper-date-heading">
        <span>推荐日期</span>
        <strong>${group.date}</strong>
        <small>${countLabel}</small>
      </div>
      <div class="paper-date-content">
        ${group.papers.map(renderPaper).join("")}
      </div>
    </section>
  `;
}

function isDoiLikeKey(key = "") {
  return /^10\.\d{4,9}\//i.test(key);
}

function createFavoritePlaceholder(key = "") {
  const favoriteKey = normalizeFavoriteStorageKey(key);
  const doi = isDoiLikeKey(favoriteKey) ? favoriteKey : "";
  return {
    favoriteKey,
    title: doi ? `DOI ${doi}` : "已收藏论文",
    journal: "等待重新载入论文信息",
    date: "",
    recommendedAt: "",
    doi,
    pdfUrl: "",
    abstract: "",
    innovation: "收藏记录仍在；当相关论文再次出现在当前页面、历史页或缓存数据中时，会自动恢复完整信息。",
    isFavoritePlaceholder: true,
  };
}

function getFavoriteDirectoryPapers() {
  const keys = getFavoriteKeys();
  const storedPapers = getStoredFavoritePapers();
  return [...keys]
    .map((key) => {
      const paper = favoritePaperCatalog.get(key) || storedPapers.get(key);
      return paper ? { ...paper, favoriteKey: key } : createFavoritePlaceholder(key);
    })
    .filter(Boolean)
    .sort((a, b) => {
      const left = getRecommendationDate(a) || a.date || "";
      const right = getRecommendationDate(b) || b.date || "";
      return right.localeCompare(left);
    });
}

function createFavoriteDirectoryItem(paper) {
  const recommendationDate = getRecommendationDate(paper);
  return `
    <article class="favorite-directory-item">
      <div class="favorite-directory-copy">
        <span>${recommendationDate ? `推荐 ${recommendationDate}` : "已收藏"}</span>
        <h4>${paper.title}</h4>
        <p>${paper.isFavoritePlaceholder ? paper.innovation : `${paper.journal || "Journal article"}${paper.date ? ` · 发表 ${paper.date}` : ""}`}</p>
      </div>
      <div class="favorite-directory-actions">
        ${createFavoriteButton(paper)}
        ${
          paper.doi
            ? `<a href="https://doi.org/${paper.doi}" target="_blank" rel="noreferrer">DOI ↗</a>`
            : "<span>DOI待补</span>"
        }
      </div>
    </article>
  `;
}

function renderFavoriteDirectory() {
  if (!favoriteDirectory) return;
  const favorites = getFavoriteDirectoryPapers();
  const isOpen = isFavoriteDirectoryOpen();

  favoriteDirectory.innerHTML = `
    <button
      class="favorite-directory-head"
      type="button"
      data-favorite-directory-toggle
      aria-expanded="${isOpen ? "true" : "false"}"
    >
      <div>
        <p class="eyebrow">Saved Papers</p>
        <h3>收藏论文目录</h3>
      </div>
      <span>${favorites.length} 篇 · ${isOpen ? "收起" : "展开"}</span>
    </button>
    ${
      isOpen
        ? favorites.length
          ? `<div class="favorite-directory-list">${favorites.map(createFavoriteDirectoryItem).join("")}</div>`
          : `<p class="favorite-directory-empty">点击论文旁的“收藏”后，会在这里形成可快速回看的目录。</p>`
        : ""
    }
  `;
}

function createPaperKeySet(papers = []) {
  const seenKeys = new Set();
  papers.forEach((paper) => rememberPaper(seenKeys, paper));
  return seenKeys;
}

function filterAgainstPaperHistory(papers = [], historyPapers = []) {
  const seenKeys = createPaperKeySet(historyPapers);
  const filtered = [];
  for (const paper of papers || []) {
    if (!paper || isCorrectionLikeTitle(paper.title) || hasSeenPaper(seenKeys, paper)) continue;
    rememberPaper(seenKeys, paper);
    filtered.push(paper);
  }
  return filtered;
}

async function fetchPaperHistoryData() {
  try {
    const response = await fetch("./data/paper-history.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`History request failed: ${response.status}`);
    const data = await response.json();
    return {
      updatedAt: data.updatedAt || "",
      papers: data.papers || paperHistoryFallback,
    };
  } catch {
    return {
      updatedAt: "2026-06-24",
      papers: paperHistoryFallback,
    };
  }
}

function getCrossrefDate(item) {
  const parts =
    item.published?.["date-parts"]?.[0] ||
    item["published-online"]?.["date-parts"]?.[0] ||
    item.created?.["date-parts"]?.[0] ||
    [];
  const [year, month = 1, day = 1] = parts;
  if (!year) return "";
  return [year, String(month).padStart(2, "0"), String(day).padStart(2, "0")].join("-");
}

function getCrossrefAbstract(item) {
  return cleanCrossrefText(item.abstract || "").replace(/^abstract\s*/i, "");
}

function getPdfUrl(item) {
  const links = item.link || [];
  const pdf = links.find((link) => {
    const type = String(link["content-type"] || "").toLowerCase();
    const url = String(link.URL || "");
    return type.includes("pdf") || /\.pdf(\?|$)/i.test(url);
  });
  return pdf?.URL || inferPdfUrl(item);
}

function inferPdfUrl(item) {
  const doi = normalizeDoi(item.DOI);
  if (!doi) return "";
  if (doi.startsWith("10.1103/")) return `https://link.aps.org/pdf/${doi}`;
  if (doi.startsWith("10.1088/")) return `https://iopscience.iop.org/article/${doi}/pdf`;
  if (doi.startsWith("10.1038/")) return `https://www.nature.com/articles/${doi.split("/")[1]}.pdf`;
  if (doi.startsWith("10.1126/")) return `https://www.science.org/doi/pdf/${doi}`;
  if (doi.startsWith("10.1021/")) return `https://pubs.acs.org/doi/pdf/${doi}`;
  if (doi.startsWith("10.1007/")) return `https://link.springer.com/content/pdf/${doi}.pdf`;
  if (doi.startsWith("10.3390/")) {
    return `https://www.mdpi.com/resolver?pii=${doi.split("/")[1]}&type=check_update&version=1`;
  }
  return "";
}

function getRelatedPaperScore(item) {
  const title = cleanCrossrefText(item.title?.[0]);
  const journal = cleanCrossrefText(item["container-title"]?.[0]);
  const abstract = getCrossrefAbstract(item);
  const text = `${title} ${journal} ${abstract}`.toLowerCase();
  const physicsScore = relatedPhysicsTerms.filter((term) => text.includes(term)).length;
  const sensingScore = relatedSensingTerms.filter((term) => text.includes(term)).length;
  const journalBoost = relatedJournalHints.some((journal) => text.includes(journal.toLowerCase())) ? 1 : 0;
  if (!physicsScore || !sensingScore) return 0;
  return physicsScore * 4 + sensingScore * 2 + journalBoost;
}

function isRelatedCrossrefItem(item) {
  return getRelatedPaperScore(item) > 0;
}

function reconstructOpenAlexAbstract(invertedIndex) {
  if (!invertedIndex || typeof invertedIndex !== "object") return "";
  const words = [];
  Object.entries(invertedIndex).forEach(([word, positions]) => {
    if (!Array.isArray(positions)) return;
    positions.forEach((position) => {
      if (Number.isInteger(position)) words[position] = word;
    });
  });
  return cleanCrossrefText(words.filter(Boolean).join(" "));
}

async function fetchOpenAlexAbstractByDoi(doi) {
  const normalizedDoi = normalizeDoi(doi);
  if (!normalizedDoi) return "";
  try {
    const response = await fetch(`https://api.openalex.org/works/doi:${encodeURIComponent(normalizedDoi)}`);
    if (!response.ok) return "";
    const data = await response.json();
    return reconstructOpenAlexAbstract(data.abstract_inverted_index);
  } catch {
    return "";
  }
}

async function enrichRelatedPaperAbstracts(papers = []) {
  await Promise.all(
    papers.map(async (paper) => {
      if (paper.abstract || !paper.doi) return;
      paper.abstract = await fetchOpenAlexAbstractByDoi(paper.doi);
    })
  );
  return papers;
}

function innovationForRelatedPaper(title, abstract = "") {
  const titleText = cleanCrossrefText(title).toLowerCase();
  const abstractText = cleanCrossrefText(abstract).toLowerCase();
  const text = `${titleText} ${abstractText}`;
  const hasAbstract = abstractText.length > 80;

  if (text.includes("higher-order spectral splitting") || text.includes("second-order exceptional point")) {
    return hasAbstract
      ? "摘要聚焦二阶奇异点附近可调的高阶谱分裂，把微扰响应从普通频移扩展为可设计的分裂阶数；适合作为高阶 EP 读出和增强传感标定的参考。"
      : "围绕二阶奇异点附近的高阶谱分裂展开，突出可调谱响应与增强传感之间的关系，可作为高阶 EP 读出机制的参考。";
  }
  if (text.includes("squeezing-enhanced") || text.includes("squeezing") || text.includes("squeezed-state")) {
    return hasAbstract
      ? "摘要把压缩态资源与开放系统 EP 统一起来，强调在参数振荡阈值附近通过压低量子噪声并获得四次标度灵敏度，而不只是依赖本征值分裂放大。"
      : "把压缩态资源引入奇异点传感，强调在量子噪声受限场景下提升测量灵敏度，而不只是依赖本征值分裂放大。";
  }
  if (text.includes("transmission peak degeneracies") || text.includes("transmission peak")) {
    return hasAbstract
      ? "摘要系统比较传输峰简并与真正 EP 的传感收益，强调前者可产生平方根频率分裂且避免本征基坍缩带来的噪声放大；适合做 EP 机制判别与对照设计。"
      : "区分奇异点与传输峰简并对非厄米传感的作用，适合用来检查实验中峰值响应是否真正来自 EP 机制。";
  }
  if (text.includes("photonic time crystals")) {
    return "摘要围绕光子时间晶体中的时变非厄米动力学展开，利用奇异点附近的模耦合和谱响应实现传感增强，为动态光子平台提供 EP 调控路径。";
  }
  if (text.includes("standard quantum limit") || text.includes("quantum fisher") || text.includes("fisher information")) {
    return "摘要从量子估计界限或 Fisher 信息角度评估 EP 传感，重点不只是响应放大，而是把噪声、可测精度和标准量子极限放进同一套判据。";
  }
  if (text.includes("phase sensing") || (text.includes("phase") && text.includes("sensor"))) {
    return "摘要把目标信息编码在相位扰动中，并用 EP 附近的谱响应增强弱信号读出；适合比较外置传感单元与主谐振系统分离后的稳定性收益。";
  }
  if (text.includes("jacobian exceptional point")) {
    return "从 Jacobian 奇异点角度重构传感灵敏度，提供了不同于传统哈密顿量 EP 的响应设计思路。";
  }
  if (text.includes("rotation sensing")) {
    return "面向旋转传感的奇异点增强方案，重点在稳健性和实频分裂读出，对陀螺类系统有参考价值。";
  }
  if (text.includes("refractive index") || text.includes("metasurface") || text.includes("biosensing")) {
    return "摘要面向折射率、超表面或生物传感读出，把非厄米谱奇异性转化为可观测峰位/线形变化，适合与电路和无线 EP 传感做跨平台比较。";
  }
  if (text.includes("thermometry") || text.includes("temperature") || text.includes("piezoelectric")) {
    return hasAbstract
      ? "摘要把反宇称-时间对称体系中的 EP 响应用于压电热测温，重点是把温度扰动转化为更敏感的频谱/电学读出，可作为非光学 EP 传感平台参考。"
      : "面向压电热测温或温度传感的 EP 增强方案，适合与电路非厄米传感中的读出量和稳定性进行横向比较。";
  }
  if (
    text.includes("gain-free") ||
    text.includes("pt-like") ||
    text.includes("pt-symmetric") ||
    text.includes("parity-time")
  ) {
    return hasAbstract
      ? "摘要提出无传统增益-损耗平衡的 PT-like 相干增强方案，并把最佳传感区间与相干参数相位联系起来；可用于比较非厄米传感中的噪声、稳定性与可实现性。"
      : "突出无增益或 PT-like 相干增强路线，可用于比较非厄米传感中的噪声、稳定性与实验可实现性。";
  }
  if (text.includes("random matrix")) {
    return hasAbstract
      ? "摘要解析和数值比较非厄米随机矩阵边缘统计的间距比与近邻分布，提供谱统计普适类基准，可辅助建模 EP 附近噪声放大与谱响应。"
      : "从非厄米谱统计角度刻画普适类，可为奇异点附近噪声放大与谱响应建模提供理论背景。";
  }
  if (text.includes("simulation")) {
    return hasAbstract
      ? "摘要提出轮廓矩阵分解来模拟非厄米矩阵函数和动力学，以受控截断误差处理不可对角化矩阵；有助于把抽象非厄米模型转化为可计算系统。"
      : "提供非厄米动力学和特殊函数的模拟路径，有助于把抽象非厄米模型转化为可计算、可验证的系统。";
  }
  if (text.includes("signal-to-noise") || text.includes("snr") || text.includes("noise amplification")) {
    return "摘要把信噪比、噪声放大和谱响应放在同一框架中讨论，适合用来判断 EP 增强在真实读出链路中是否仍有净收益。";
  }
  if (text.includes("rydberg") || text.includes("atomic electrometer") || text.includes("electric-field")) {
    return "摘要面向原子电场计或 Rydberg 传感，把非厄米简并用于增强弱电场响应，可作为电路传感之外的精密测量参照。";
  }
  if (text.includes("sensing")) {
    return hasAbstract
      ? "摘要围绕量子或非厄米传感机制给出新的增强路径，建议重点关注其噪声处理、可调参数和实际读出量，再与奇异点放大方案并列比较。"
      : "围绕量子或非厄米传感机制提出新的增强路径，适合与奇异点放大方案并列比较。";
  }
  return "近 30 天内与非厄米、奇异点或量子传感相关，并带有可访问 PDF 的期刊论文。";
}

async function fetchCrossrefRelatedPapers(excludedPapers = [], days = 30) {
  const fromDate = getDateDaysAgo(days);
  const untilDate = new Date().toISOString().slice(0, 10);
  const seenKeys = createPaperKeySet(excludedPapers);
  const papers = [];
  const requests = relatedPaperQueries.map((query) => {
    const params = new URLSearchParams({
      "query.bibliographic": query,
      filter: `type:journal-article,from-pub-date:${fromDate},until-pub-date:${untilDate}`,
      sort: "score",
      order: "desc",
      rows: "18",
      mailto: "holenn@example.com",
    });
    return fetch(`https://api.crossref.org/works?${params}`)
      .then((response) => (response.ok ? response.json() : { message: { items: [] } }))
      .catch(() => ({ message: { items: [] } }));
  });

  const results = await Promise.all(requests);

  for (const data of results) {
    for (const item of data.message?.items || []) {
      const title = cleanCrossrefText(item.title?.[0]);
      const journal = cleanCrossrefText(item["container-title"]?.[0]);
      const doi = normalizeDoi(item.DOI);
      const date = getCrossrefDate(item);
      const pdfUrl = getPdfUrl(item);
      const abstract = getCrossrefAbstract(item);
      if (!title || !journal || !doi || !date || !pdfUrl) continue;
      if (isCorrectionLikeTitle(title)) continue;
      if (firstAuthorDois.includes(doi) || doi === "10.1063/5.0333910" || doi === "10.1109/lmwt.2025.3642799") {
        continue;
      }
      const relevanceScore = getRelatedPaperScore(item);
      const candidate = {
        title,
        journal,
        date,
        recommendedAt: untilDate,
        doi,
        pdfUrl,
        abstract,
        relevanceScore,
      };
      if (hasSeenPaper(seenKeys, candidate) || !relevanceScore) continue;
      rememberPaper(seenKeys, candidate);
      papers.push(candidate);
    }
  }

  const selectedPapers = papers
    .sort(
      (left, right) =>
        String(right.date || "").localeCompare(String(left.date || "")) ||
        (right.relevanceScore || 0) - (left.relevanceScore || 0)
    )
    .slice(0, 3);

  await enrichRelatedPaperAbstracts(selectedPapers);
  return selectedPapers.map((paper) => ({
    ...paper,
    innovation: innovationForRelatedPaper(paper.title, paper.abstract),
  }));
}

function renderLatestPapers(papers, updatedAt = "", sourceLabel = "Crossref public API") {
  if (!latestPaperGrid) return;

  if (!papers.length) {
    latestPaperGrid.innerHTML = `
      <div class="empty-paper-state">
        <span aria-hidden="true"></span>
        <p>已排除历史推荐，近 1 年内暂未找到新的开放 PDF 论文。</p>
        <a href="./history.html">查看历史论文</a>
      </div>
    `;
    renderFavoriteDirectory();
    return;
  }

  const visiblePapers = papers.slice(0, 3);
  indexFavoritePapers(visiblePapers);
  latestPaperGrid.innerHTML = groupPapersByRecommendationDate(
    visiblePapers,
    updatedAt || getTodayString()
  )
    .map((group) => createRecommendationDateGroup(group, "latest-paper-group", createLatestPaperCard))
    .join("");

  if (updatedAt) {
    latestPaperGrid.insertAdjacentHTML(
      "beforeend",
      `<p class="latest-note">Last update: ${updatedAt} · Source: ${sourceLabel}</p>`
    );
  }
  renderFavoriteDirectory();
}

function mergeLatestPapers(...groups) {
  const seenKeys = new Set();
  const merged = [];
  for (const group of groups) {
    for (const paper of group || []) {
      if (!paper || isCorrectionLikeTitle(paper.title) || hasSeenPaper(seenKeys, paper)) continue;
      rememberPaper(seenKeys, paper);
      merged.push(paper);
      if (merged.length >= 3) return merged;
    }
  }
  return merged;
}

function renderPaperHistory(papers, updatedAt = "") {
  if (!historyPaperGrid) return;

  const sourcePapers = papers.length ? papers : paperHistoryFallback;
  indexFavoritePapers(sourcePapers);
  historyPaperGrid.innerHTML = groupPapersByRecommendationDate(sourcePapers, updatedAt || "archived")
    .map((group) => createRecommendationDateGroup(group, "history-paper-group", createHistoryPaperItem))
    .join("");

  if (updatedAt) {
    historyPaperGrid.insertAdjacentHTML(
      "beforeend",
      `<p class="latest-note">Archived through: ${updatedAt}</p>`
    );
  }
  renderFavoriteDirectory();
}

async function loadLatestPapers() {
  if (!latestPaperGrid) return;

  latestPaperGrid.innerHTML = `
    <div class="loading-state">
      <span aria-hidden="true"></span>
      正在优先筛选近 30 天开放 PDF 论文
    </div>
  `;

  try {
    const historyData = await fetchPaperHistoryData();
    const historyPapers = historyData.papers || [];
    indexFavoritePapers(historyPapers);
    let livePapers = await fetchCrossrefRelatedPapers(historyPapers, 30);
    let sourceLabel = "Crossref API + OpenAlex abstracts · 30-day priority";
    if (!livePapers.length) {
      latestPaperGrid.innerHTML = `
        <div class="loading-state">
          <span aria-hidden="true"></span>
          近 30 天暂无新候选，正在放宽到近 1 年
        </div>
      `;
      livePapers = await fetchCrossrefRelatedPapers(historyPapers, 365);
      sourceLabel = "Crossref API + OpenAlex abstracts · 365-day fallback";
    }
    indexFavoritePapers(livePapers);
    let storedPapers = [];
    let storedDate = "";
    try {
      const response = await fetch("./data/latest-papers.json", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        storedPapers = filterAgainstPaperHistory(data.papers || [], historyPapers).map((paper) => ({
          ...paper,
          recommendedAt: paper.recommendedAt || data.updatedAt || "",
        }));
        indexFavoritePapers(storedPapers);
        storedDate = data.updatedAt || "";
      }
    } catch {
      storedPapers = [];
    }
    const latestFallback = filterAgainstPaperHistory(latestPapersFallback, historyPapers);
    const merged = mergeLatestPapers(livePapers, storedPapers, latestFallback);
    renderLatestPapers(
      merged,
      livePapers.length ? new Date().toISOString().slice(0, 10) : storedDate,
      livePapers.length ? sourceLabel : "Crossref API + OpenAlex abstracts · 365-day fallback"
    );
  } catch (error) {
    console.info("Using local latest-paper fallback.", error);
    renderLatestPapers(latestPapersFallback);
  }
}

async function loadPaperHistoryPage() {
  if (!historyPaperGrid) return;

  historyPaperGrid.innerHTML = `
    <div class="loading-state">
      <span aria-hidden="true"></span>
      正在读取历史论文
    </div>
  `;

  const historyData = await fetchPaperHistoryData();
  renderPaperHistory(historyData.papers || [], historyData.updatedAt);
}

function initInteractions() {
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("is-scrolled", window.scrollY > 18);
      },
      { passive: true }
    );
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      setStoredTheme(nextTheme);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim().toLowerCase();
      renderPapers();
    });
  }

  if (filterGroup) {
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

  document.addEventListener("click", (event) => {
    const directoryToggle = event.target.closest("[data-favorite-directory-toggle]");
    if (directoryToggle) {
      setFavoriteDirectoryOpen(directoryToggle.getAttribute("aria-expanded") !== "true");
      renderFavoriteDirectory();
      return;
    }

    const button = event.target.closest("[data-favorite-paper]");
    if (!button) return;
    toggleFavoritePaper(button);
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
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let rafId = 0;
  let resizeRafId = 0;
  let lastDrawTime = 0;
  let isRunning = false;
  let isInView = true;
  const targetFrameMs = 1000 / 24;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = 1;
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
    const rows = width < 700 ? 7 : 10;
    const cols = width < 700 ? 28 : 42;
    const time = frame * 0.014;

    ctx.lineWidth = 1;
    for (let row = 0; row < rows; row += 1) {
      const yBase = (height / (rows + 1)) * (row + 1);
      ctx.beginPath();
      for (let col = 0; col < cols; col += 1) {
        const x = (width / (cols - 1)) * col;
        const wave =
          Math.sin(col * 0.34 + row * 0.72 + time) * 18 +
          Math.cos(col * 0.18 - time * 1.8) * 9;
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
    const loops = 120;
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

  function renderFrame() {
    drawBackground();
    drawField();
    drawExceptionalCurve();
    frame += 1;
  }

  function draw(timestamp = 0) {
    if (!isRunning) return;

    if (!lastDrawTime || timestamp - lastDrawTime >= targetFrameMs) {
      renderFrame();
      lastDrawTime = timestamp;
    }

    rafId = requestAnimationFrame(draw);
  }

  function startAnimation() {
    if (reduceMotion || isRunning || document.hidden || !isInView) return;
    isRunning = true;
    lastDrawTime = 0;
    rafId = requestAnimationFrame(draw);
  }

  function stopAnimation() {
    isRunning = false;
    cancelAnimationFrame(rafId);
  }

  function scheduleResize() {
    cancelAnimationFrame(resizeRafId);
    resizeRafId = requestAnimationFrame(() => {
      resize();
      renderFrame();
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  if ("IntersectionObserver" in window) {
    const hero = canvas.closest(".hero") || canvas;
    const observer = new IntersectionObserver(
      (entries) => {
        isInView = entries.some((entry) => entry.isIntersecting);
        if (isInView) startAnimation();
        else stopAnimation();
      },
      { rootMargin: "120px 0px" }
    );
    observer.observe(hero);
  }

  window.addEventListener("resize", scheduleResize, { passive: true });
  resize();
  renderFrame();
  startAnimation();
}

initTheme();
initializePapers();
renderDatasets();
renderFavoriteDirectory();
loadLatestPapers();
loadPaperHistoryPage();
initInteractions();
initReveal();
initFieldCanvas();

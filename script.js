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
    doi: "10.1088/2058-9565/ae7b7e",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/2058-9565/ae7b7e/pdf",
    innovation:
      "用轮廓矩阵分解模拟非厄米特殊函数与动力学，为非厄米模型的可实现模拟与参数响应分析提供工具。",
  },
  {
    title:
      "Three non-Hermitian random matrix universality classes of complex edge statistics: Spacing ratios and distributions",
    journal: "Journal of Physics A: Mathematical and Theoretical",
    date: "2026-06-23",
    doi: "10.1088/1751-8121/ae777d",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/1751-8121/ae777d/pdf",
    innovation:
      "从非厄米随机矩阵边缘统计出发区分三类普适行为，可为噪声、谱统计与奇异点附近响应建模提供理论参照。",
  },
  {
    title: "Gain-free quantum sensing via PT-like-induced coherence enhancement in cavity-magnomechanical system",
    journal: "Chinese Physics B",
    date: "2026-06-24",
    doi: "10.1088/1674-1056/ae8163",
    pdfUrl: "https://iopscience.iop.org/article/10.1088/1674-1056/ae8163/pdf",
    innovation:
      "提出无需增益的 PT-like 相干增强量子传感机制，适合与非厄米增益-损耗方案进行噪声和可实现性比较。",
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
  '"non-Hermitian"',
  '"exceptional point" sensing',
  '"quantum sensing" "PT-like"',
];

const relatedJournalHints = [
  "Physical Review",
  "Quantum Science and Technology",
  "Journal of Physics A",
  "Chinese Physics B",
  "Applied Physics Letters",
  "Optics Letters",
  "Optics Express",
  "Photonics Research",
  "Nanophotonics",
  "Scientific Reports",
  "Sensors",
];

function getDateDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

function cleanCrossrefText(value = "") {
  return String(value)
    .replace(/<[^>]+>/g, "")
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

function getPdfUrl(item) {
  const links = item.link || [];
  const pdf = links.find((link) => {
    const type = String(link["content-type"] || "").toLowerCase();
    const url = String(link.URL || "");
    return type.includes("pdf") || /\.pdf(\?|$)/i.test(url);
  });
  return pdf?.URL || "";
}

function isRelatedCrossrefItem(item) {
  const text = `${cleanCrossrefText(item.title?.[0])} ${cleanCrossrefText(
    item["container-title"]?.[0]
  )}`.toLowerCase();
  const hasTopic =
    text.includes("non-hermitian") ||
    text.includes("nonhermitian") ||
    text.includes("exceptional point") ||
    text.includes("quantum sensing") ||
    text.includes("pt-like") ||
    text.includes("pt-symmetric") ||
    text.includes("parity-time") ||
    text.includes("spectral splitting") ||
    text.includes("liouvillian");
  const hasJournalHint = relatedJournalHints.some((journal) => text.includes(journal.toLowerCase()));
  return hasTopic && hasJournalHint;
}

function innovationForRelatedPaper(title) {
  const text = title.toLowerCase();
  if (
    text.includes("gain-free") ||
    text.includes("pt-like") ||
    text.includes("pt-symmetric") ||
    text.includes("parity-time")
  ) {
    return "突出无增益或 PT-like 相干增强路线，可用于比较非厄米传感中的噪声、稳定性与实验可实现性。";
  }
  if (text.includes("random matrix")) {
    return "从非厄米谱统计角度刻画普适类，可为奇异点附近噪声放大与谱响应建模提供理论背景。";
  }
  if (text.includes("simulation")) {
    return "提供非厄米动力学和特殊函数的模拟路径，有助于把抽象非厄米模型转化为可计算、可验证的系统。";
  }
  if (text.includes("sensing")) {
    return "围绕量子或非厄米传感机制提出新的增强路径，适合与奇异点放大方案并列比较。";
  }
  return "近 30 天内与非厄米、奇异点或量子传感相关，并带有可访问 PDF 的期刊论文。";
}

async function fetchCrossrefRelatedPapers(excludedPapers = []) {
  const fromDate = getDateDaysAgo(30);
  const untilDate = new Date().toISOString().slice(0, 10);
  const seenKeys = createPaperKeySet(excludedPapers);
  const papers = [];

  for (const query of relatedPaperQueries) {
    const params = new URLSearchParams({
      "query.title": query,
      filter: `type:journal-article,from-pub-date:${fromDate},until-pub-date:${untilDate}`,
      sort: "published",
      order: "desc",
      rows: "60",
      mailto: "holenn@example.com",
    });
    const response = await fetch(`https://api.crossref.org/works?${params}`);
    if (!response.ok) continue;
    const data = await response.json();

    for (const item of data.message?.items || []) {
      const title = cleanCrossrefText(item.title?.[0]);
      const journal = cleanCrossrefText(item["container-title"]?.[0]);
      const doi = normalizeDoi(item.DOI);
      const date = getCrossrefDate(item);
      const pdfUrl = getPdfUrl(item);
      if (!title || !journal || !doi || !date || !pdfUrl) continue;
      if (isCorrectionLikeTitle(title)) continue;
      if (firstAuthorDois.includes(doi) || doi === "10.1063/5.0333910" || doi === "10.1109/lmwt.2025.3642799") {
        continue;
      }
      const candidate = {
        title,
        journal,
        date,
        doi,
        pdfUrl,
        innovation: innovationForRelatedPaper(title),
      };
      if (hasSeenPaper(seenKeys, candidate) || !isRelatedCrossrefItem(item)) continue;
      rememberPaper(seenKeys, candidate);
      papers.push(candidate);
      if (papers.length >= 3) return papers;
    }
  }

  return papers;
}

function renderLatestPapers(papers, updatedAt = "") {
  if (!latestPaperGrid) return;

  if (!papers.length) {
    latestPaperGrid.innerHTML = `
      <div class="empty-paper-state">
        <span aria-hidden="true"></span>
        <p>已排除历史推荐，暂未找到新的近月开放 PDF 论文。</p>
        <a href="./history.html">查看历史论文</a>
      </div>
    `;
    return;
  }

  latestPaperGrid.innerHTML = papers
    .slice(0, 3)
    .map(
      (paper) => `
        <article class="latest-paper-card">
          <div class="card-meta">
            <strong>${paper.date || "recent"}</strong>
            <span>${paper.journal || "Journal article"}</span>
          </div>
          <h3>${paper.title}</h3>
          <p>${paper.innovation}</p>
          <div class="card-links">
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
      `
    )
    .join("");

  if (updatedAt) {
    latestPaperGrid.insertAdjacentHTML(
      "beforeend",
      `<p class="latest-note">Last update: ${updatedAt} · Source: Crossref public API</p>`
    );
  }
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
  historyPaperGrid.innerHTML = sourcePapers
    .map(
      (paper) => `
        <article class="history-paper-item">
          <div class="history-paper-meta">
            <strong>${paper.date || "archived"}</strong>
            <span>${paper.journal || "Journal article"}</span>
          </div>
          <div class="history-paper-copy">
            <h3>${paper.title}</h3>
            <p>${paper.innovation}</p>
          </div>
          <div class="history-paper-actions">
            ${
              paper.doi
                ? `<a href="https://doi.org/${paper.doi}" target="_blank" rel="noreferrer">DOI ↗</a>`
                : "<span>DOI待补</span>"
            }
          </div>
        </article>
      `
    )
    .join("");

  if (updatedAt) {
    historyPaperGrid.insertAdjacentHTML(
      "beforeend",
      `<p class="latest-note">Archived through: ${updatedAt}</p>`
    );
  }
}

async function loadLatestPapers() {
  if (!latestPaperGrid) return;

  latestPaperGrid.innerHTML = `
    <div class="loading-state">
      <span aria-hidden="true"></span>
      正在筛选近 30 天可访问 PDF 论文
    </div>
  `;

  try {
    const historyData = await fetchPaperHistoryData();
    const historyPapers = historyData.papers || [];
    const livePapers = await fetchCrossrefRelatedPapers(historyPapers);
    let storedPapers = [];
    let storedDate = "";
    try {
      const response = await fetch("./data/latest-papers.json", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        storedPapers = filterAgainstPaperHistory(data.papers || [], historyPapers);
        storedDate = data.updatedAt || "";
      }
    } catch {
      storedPapers = [];
    }
    const latestFallback = filterAgainstPaperHistory(latestPapersFallback, historyPapers);
    const merged = mergeLatestPapers(livePapers, storedPapers, latestFallback);
    renderLatestPapers(merged, livePapers.length ? new Date().toISOString().slice(0, 10) : storedDate);
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
loadLatestPapers();
loadPaperHistoryPage();
initInteractions();
initReveal();
initFieldCanvas();

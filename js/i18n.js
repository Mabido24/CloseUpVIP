(function () {
  const SUPPORTED = ["en", "fr", "de", "it", "es", "pt", "ru", "zh", "ar"];
  const RTL = new Set(["ar"]);
  const cache = {};
  let current = "en";

  function detectLang() {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get("lang");
    if (fromQuery && SUPPORTED.includes(fromQuery)) return fromQuery;
    const saved = localStorage.getItem("closeup_lang");
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (nav === "zh") return "zh";
    if (SUPPORTED.includes(nav)) return nav;
    return "en";
  }

  async function load(lang) {
    if (cache[lang]) return cache[lang];
    const res = await fetch(`locales/${lang}.json`, { cache: "no-cache" });
    if (!res.ok) throw new Error("locale " + lang);
    const data = await res.json();
    cache[lang] = data;
    return data;
  }

  function apply(dict) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict["meta.description"]) meta.setAttribute("content", dict["meta.description"]);
    document.documentElement.lang = current === "zh" ? "zh-CN" : current;
    document.documentElement.dir = RTL.has(current) ? "rtl" : "ltr";
  }

  async function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = "en";
    current = lang;
    const dict = await load(lang);
    apply(dict);
    localStorage.setItem("closeup_lang", lang);
    const select = document.getElementById("lang-select");
    if (select) select.value = lang;
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  }

  window.CloseUPi18n = { setLang, detectLang, SUPPORTED };

  document.addEventListener("DOMContentLoaded", async () => {
    const lang = detectLang();
    try {
      await setLang(lang);
    } catch (e) {
      console.warn(e);
      if (lang !== "en") await setLang("en");
    }
    const select = document.getElementById("lang-select");
    if (select) {
      select.addEventListener("change", () => setLang(select.value));
    }
  });
})();

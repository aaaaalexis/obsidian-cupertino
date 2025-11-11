(() => {
  const modes = ["light", "dark", "light dark"],
    icons = { light: "sun", dark: "moon", "light dark": "sun-moon" },
    btn = document.querySelector(".mode-btn");
  const apply = (mode) => {
    document.documentElement.style.colorScheme = mode;
    if (btn) btn.dataset.mode = mode;
    const name = icons[mode] || "sun";
    let iconEl = document.querySelector(".mode-icon");
    if (!iconEl && btn) btn.insertAdjacentHTML("afterbegin", `<i class="mode-icon" data-lucide="${name}"></i>`);
    else if (iconEl) iconEl.setAttribute("data-lucide", name);
    lucide.createIcons();
    localStorage.setItem("colorMode", mode);
    document.documentElement.dataset.colorMode = mode;
    document.dispatchEvent(new CustomEvent("colorModeChange", { detail: { mode } }));
  };

  lucide.createIcons();
  const saved = localStorage.getItem("colorMode") || "light";
  if (btn) btn.addEventListener("click", () => apply(modes[(modes.indexOf(btn.dataset.mode || saved) + 1) % modes.length]));
  apply(saved);
})();

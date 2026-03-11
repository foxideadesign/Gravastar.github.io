document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".menu-block");

  blocks.forEach((block) => {
    const trigger = block.querySelector(".menu-head");
    const body = block.querySelector(".menu-body");

    if (!trigger || !body) return;

    trigger.addEventListener("click", () => {
      const isOpen = block.classList.contains("is-open");

      blocks.forEach((item) => {
        const itemTrigger = item.querySelector(".menu-head");
        item.classList.remove("is-open");
        if (itemTrigger) {
          itemTrigger.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        block.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1차 탭 (카테고리)
  ========================= */

  const categoryTabs = document.querySelectorAll(".category-tab");
  const categoryPanels = document.querySelectorAll(".category-panel");

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.category;

      categoryTabs.forEach((btn) => btn.classList.remove("is-active"));
      categoryPanels.forEach((panel) => panel.classList.remove("is-active"));

      tab.classList.add("is-active");

      const panel = document.querySelector(`[data-category-panel="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
  });

  /* =========================
     2차 탭 (제품 라인업)
  ========================= */

  const subTabs = document.querySelectorAll(".sub-tab");

  subTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const parentPanel = tab.closest(".category-panel");
      const target = tab.dataset.target;

      const tabs = parentPanel.querySelectorAll(".sub-tab");
      const panels = parentPanel.querySelectorAll(".sub-panel");

      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));

      tab.classList.add("is-active");

      const panel = parentPanel.querySelector(`[data-sub-panel="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
  });
});

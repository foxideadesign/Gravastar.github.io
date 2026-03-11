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

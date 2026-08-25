(function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value?.trim() || "";
      const message = form.querySelector('[name="message"]')?.value?.trim() || "";
      window.location.href =
        "mailto:closeupsecurity@protonmail.com?subject=" +
        encodeURIComponent("Close UP Security — Inquiry") +
        "&body=" +
        encodeURIComponent((name ? name + "\n\n" : "") + message);
    });
  }
})();

(function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".fade").forEach((el) => el.classList.add("on"));
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value?.trim() || "";
      const message = form.querySelector('[name="message"]')?.value?.trim() || "";
      const body = encodeURIComponent((name ? name + "\n\n" : "") + message);
      window.location.href =
        "mailto:closeupsecurity@protonmail.com?subject=" +
        encodeURIComponent("Close UP Security") +
        "&body=" +
        body;
    });
  }
})();

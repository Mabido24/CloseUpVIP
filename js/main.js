(function () {
  const topbar = document.querySelector(".topbar");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("to-top");

  if (burger && topbar && nav) {
    burger.addEventListener("click", () => {
      const open = topbar.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        topbar.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Hero slideshow
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (slides.length > 1) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove("is-on");
      i = (i + 1) % slides.length;
      slides[i].classList.add("is-on");
    }, 5200);
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Back to top
  const onScroll = () => {
    if (!toTop) return;
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value?.trim() || "";
      const message = form.querySelector('[name="message"]')?.value?.trim() || "";
      window.location.href =
        "mailto:closeupsecurity@protonmail.com?subject=" +
        encodeURIComponent("Close UP Security") +
        "&body=" +
        encodeURIComponent((name ? name + "\n\n" : "") + message);
    });
  }
})();

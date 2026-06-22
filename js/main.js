/* =====================================================================
   Rehoboth Ethiopian Café and Market — interactions
   Motion-safe: every animated path checks prefers-reduced-motion.
   ===================================================================== */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: solid on scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (navLinks) {
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero parallax (subtle, transform-only) ---------- */
  var heroBg = document.querySelector(".hero__bg");
  if (heroBg && !prefersReduced) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 700);
        heroBg.style.transform = "scale(1.05) translateY(" + (y * 0.12) + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Marquee: duplicate track for seamless loop ---------- */
  var marquee = document.getElementById("marquee");
  if (marquee && !prefersReduced) {
    marquee.innerHTML += marquee.innerHTML;
  }

  /* ---------- Menu filtering ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var dishes = Array.prototype.slice.call(document.querySelectorAll(".dish"));
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var filter = tab.getAttribute("data-filter");
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      var shown = [];
      dishes.forEach(function (dish) {
        var show = filter === "all" || dish.getAttribute("data-cat") === filter;
        dish.style.display = show ? "" : "none";
        if (show) shown.push(dish);
      });
      // Hand-crafted: matching cards re-enter with a soft stagger
      if (!prefersReduced) {
        shown.forEach(function (d, i) {
          d.classList.remove("in");
          d.style.transitionDelay = (i * 0.045) + "s";
        });
        void document.getElementById("menuGrid").offsetWidth; // reflow
        window.requestAnimationFrame(function () {
          shown.forEach(function (d) { d.classList.add("in"); });
        });
      }
    });
  });

  /* ---------- Highlight today's hours ---------- */
  var today = new Date().getDay(); // 0 = Sun
  var hoursLi = document.querySelector('#hoursList li[data-day="' + today + '"]');
  if (hoursLi) {
    hoursLi.classList.add("today");
    var t = hoursLi.querySelector(".time");
    if (t) t.insertAdjacentHTML("beforeend", " &nbsp;·&nbsp; Open today");
  }

  /* ---------- Scroll-progress hairline ---------- */
  var progress = document.getElementById("progress");
  if (progress) {
    var pTicking = false;
    var updateProgress = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = "scaleX(" + p.toFixed(4) + ")";
      pTicking = false;
    };
    updateProgress();
    window.addEventListener("scroll", function () {
      if (pTicking) return;
      pTicking = true;
      window.requestAnimationFrame(updateProgress);
    }, { passive: true });
  }

  /* ---------- Magnetic gold buttons (subtle, expensive) ---------- */
  if (!prefersReduced && window.matchMedia("(hover: hover)").matches) {
    Array.prototype.forEach.call(document.querySelectorAll(".btn--gold"), function (btn) {
      var strength = 0.28, max = 7;
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * strength;
        var dy = (e.clientY - (r.top + r.height / 2)) * strength;
        dx = Math.max(-max, Math.min(max, dx));
        dy = Math.max(-max, Math.min(max, dy));
        btn.style.transform = "translate(" + dx.toFixed(1) + "px," + (dy - 2).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- Story image: 3D tilt + cursor glare ---------- */
  var storyMedia = document.querySelector(".story__media");
  if (storyMedia && !prefersReduced && window.matchMedia("(hover: hover)").matches) {
    var TILT = 5.5;
    storyMedia.addEventListener("mouseenter", function () {
      storyMedia.style.transition = "transform 0.15s ease-out";
    });
    storyMedia.addEventListener("mousemove", function (e) {
      var r = storyMedia.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      storyMedia.style.transform =
        "perspective(1000px) rotateX(" + ((0.5 - py) * TILT).toFixed(2) +
        "deg) rotateY(" + ((px - 0.5) * TILT).toFixed(2) + "deg)";
      storyMedia.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      storyMedia.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    });
    storyMedia.addEventListener("mouseleave", function () {
      storyMedia.style.transform = "";
    });
  }

  /* ---------- Video dialog ("watch the ceremony") ---------- */
  var vModal = document.getElementById("videoModal");
  var vMount = document.getElementById("videoMount");
  var ceremony = document.getElementById("ceremonyMedia");
  if (vModal && vMount && ceremony) {
    var lastFocus = null;
    var closeEl = vModal.querySelector(".vmodal__close");

    function buildMedia() {
      var url = ceremony.getAttribute("data-video");
      if (url) {
        if (/youtube|youtu\.be|vimeo|player\./.test(url)) {
          var sep = url.indexOf("?") > -1 ? "&" : "?";
          vMount.innerHTML =
            '<iframe src="' + url + sep + 'autoplay=1&rel=0" allow="autoplay; fullscreen; encrypted-media" allowfullscreen title="The buna ceremony film"></iframe>';
        } else {
          vMount.innerHTML =
            '<video src="' + url + '" controls autoplay playsinline></video>';
        }
      } else {
        vMount.innerHTML =
          '<div class="vmodal__ph"><p>Your buna-ceremony film goes here</p>' +
          '<span>Add a YouTube, Vimeo or MP4 link to the <code>data-video</code> attribute on the ceremony photo, and it plays right here.</span></div>';
      }
    }

    function openModal() {
      lastFocus = document.activeElement;
      buildMedia();
      vModal.classList.add("open");
      vModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeEl) closeEl.focus();
    }
    function closeModal() {
      vModal.classList.remove("open");
      vModal.setAttribute("aria-hidden", "true");
      vMount.innerHTML = ""; // stop playback
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    ceremony.addEventListener("click", openModal);
    Array.prototype.forEach.call(vModal.querySelectorAll("[data-close]"), function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && vModal.classList.contains("open")) closeModal();
    });
  }

  /* ---------- Newsletter (Formspree-ready, graceful fallback) ---------- */
  var form = document.getElementById("newsletter");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("newsMsg");
      var input = document.getElementById("news-email");
      var btn = form.querySelector("button");
      var email = input ? input.value.trim() : "";
      if (!email) return;
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "…"; }
      if (msg) { msg.style.color = ""; msg.textContent = ""; }
      var done = function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Join"; } };
      var gotcha = form.querySelector('[name="_gotcha"]');
      window.rehobothSubmit({
        _subject: "New newsletter signup — Rehoboth website",
        type: "newsletter", Email: email, _gotcha: gotcha ? gotcha.value : ""
      })
        .then(function () {
          if (window.rehobothTrack) window.rehobothTrack("newsletter_signup");
          if (msg) msg.textContent = "Thanks — see you in your inbox.";
          if (input) input.value = "";
          done();
        })
        .catch(function () {
          if (msg) { msg.style.color = "var(--red)"; msg.textContent = "Couldn’t sign you up — please try again."; }
          done();
        });
    });
  }
})();

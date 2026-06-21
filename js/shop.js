/* =====================================================================
   Rehoboth Market — searchable shop (static, no backend)
   Data: window.SHOP_PRODUCTS / window.SHOP_CATEGORIES (js/shop-data.js)
   ===================================================================== */
(function () {
  "use strict";
  var ALL = window.SHOP_PRODUCTS || [];
  var CATS = window.SHOP_CATEGORIES || [];

  var grid = document.getElementById("grid");
  var noResults = document.getElementById("noresults");
  var countEl = document.getElementById("count");
  var catsEl = document.getElementById("cats");
  var q = document.getElementById("q");

  var state = { term: "", cat: "All" };

  /* ---- category chips ---- */
  function makeChip(label, value) {
    var b = document.createElement("button");
    b.className = "tab" + (value === state.cat ? " is-active" : "");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.textContent = label;
    b.addEventListener("click", function () {
      state.cat = value;
      Array.prototype.forEach.call(catsEl.children, function (c) { c.classList.remove("is-active"); });
      b.classList.add("is-active");
      render();
    });
    return b;
  }
  catsEl.appendChild(makeChip("All", "All"));
  CATS.forEach(function (c) { catsEl.appendChild(makeChip(c, c)); });

  /* ---- escape + card markup ---- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m];
    });
  }
  function card(p) {
    var sub = [p.a, p.c].filter(Boolean).join(" · ");
    var price = p.p
      ? '<span class="good__price">' + esc(p.p) + "</span>"
      : '<span class="good__price empty">In store</span>';
    return (
      '<article class="good"><span><span class="good__name">' + esc(p.n) + "</span>" +
      '<span class="good__tag">' + esc(sub) + "</span></span>" + price + "</article>"
    );
  }

  /* ---- filter + render ---- */
  function render() {
    var term = state.term.trim().toLowerCase();
    var list = ALL.filter(function (p) {
      if (state.cat !== "All" && p.c !== state.cat) return false;
      if (!term) return true;
      return (p.n + " " + p.a).toLowerCase().indexOf(term) > -1;
    });

    grid.innerHTML = list.map(card).join("");
    noResults.hidden = list.length > 0;

    var label = state.cat === "All" ? "items" : state.cat.toLowerCase();
    countEl.innerHTML =
      "<b>" + list.length + "</b> " + (term ? 'matching "' + esc(state.term.trim()) + '"' : label) +
      (state.cat !== "All" && term ? " in " + esc(state.cat) : "");
  }

  q.addEventListener("input", function () { state.term = q.value; render(); });

  /* current year (shared footer id) */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  render();
})();

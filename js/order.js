/* =====================================================================
   Rehoboth Ethiopian Café and Market — order builder
   Live summary + total. No backend (demo).
   ===================================================================== */
(function () {
  "use strict";

  var DRINKS = [
    { id: "buna", name: "Jebena Buna", meta: "Traditional · ceremony", price: 4.5 },
    { id: "spiced", name: "Spiced Buna", meta: "Cardamom · clove · cinnamon", price: 5.0 },
    { id: "macc", name: "Ethiopian Macchiato", meta: "Short & strong · 4 oz", price: 3.75 },
    { id: "spris", name: "Spris", meta: "Layered tea & coffee", price: 4.25 },
    { id: "yirg", name: "Yirgacheffe Pour-Over", meta: "Single origin · floral", price: 5.5 },
    { id: "sidamo", name: "Sidamo Pour-Over", meta: "Single origin · berry", price: 5.25 },
    { id: "harrar", name: "Harrar Cold Brew", meta: "18-hr steep · 16 oz", price: 5.0 }
  ];

  var state = { drink: null, milk: "Whole", addons: [] };

  var fmt = function (n) { return "$" + n.toFixed(2); };

  /* ---------- Render drink options ---------- */
  var list = document.getElementById("drinkList");
  if (list) {
    DRINKS.forEach(function (d) {
      var label = document.createElement("label");
      label.className = "opt";
      label.innerHTML =
        '<span class="opt__left">' +
          '<span class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>' +
          '<span><span class="opt__name">' + d.name + '</span><span class="opt__meta" style="display:block">' + d.meta + '</span></span>' +
        '</span>' +
        '<span class="opt__price">' + fmt(d.price) + '</span>' +
        '<input type="radio" name="drink" value="' + d.id + '" />';
      label.addEventListener("click", function () {
        state.drink = d;
        Array.prototype.forEach.call(list.querySelectorAll(".opt"), function (o) { o.classList.remove("sel"); });
        label.classList.add("sel");
        render();
      });
      list.appendChild(label);
    });
  }

  /* ---------- Chip groups (milk = single, addon = multi) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".chips"), function (group) {
    var mode = group.getAttribute("data-mode");
    var name = group.getAttribute("data-group");
    group.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      if (mode === "single") {
        Array.prototype.forEach.call(group.querySelectorAll(".chip"), function (c) { c.classList.remove("sel"); });
        chip.classList.add("sel");
        if (name === "milk") state.milk = chip.getAttribute("data-val");
      } else {
        chip.classList.toggle("sel");
        state.addons = Array.prototype.slice
          .call(group.querySelectorAll(".chip.sel"))
          .map(function (c) { return { name: c.getAttribute("data-val"), price: parseFloat(c.getAttribute("data-price")) }; });
      }
      render();
    });
  });

  /* ---------- Render summary ---------- */
  var linesEl = document.getElementById("summaryLines");
  var emptyEl = document.getElementById("summaryEmpty");
  var totalEl = document.getElementById("summaryTotal");

  function render() {
    if (!linesEl) return;
    var rows = [];
    var total = 0;

    if (state.drink) {
      total += state.drink.price;
      rows.push({ lbl: state.drink.name, val: fmt(state.drink.price) });
      if (state.milk && state.milk !== "Whole") {
        rows.push({ lbl: "&nbsp;&nbsp;" + state.milk + " milk", val: "free" });
      }
      state.addons.forEach(function (a) {
        total += a.price;
        rows.push({ lbl: "&nbsp;&nbsp;" + a.name, val: a.price ? "+" + fmt(a.price) : "free" });
      });
    }

    if (!rows.length) {
      linesEl.innerHTML = '<li class="summary__empty">Nothing selected yet.</li>';
    } else {
      linesEl.innerHTML = rows
        .map(function (r) { return '<li><span class="lbl">' + r.lbl + '</span><span>' + r.val + "</span></li>"; })
        .join("");
    }
    if (totalEl) totalEl.textContent = fmt(total);
  }

  /* ---------- Toast ---------- */
  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 4200);
  }

  var submit = window.rehobothSubmit || function () { return Promise.resolve({ demo: true }); };

  /* ---------- Place order ---------- */
  var placeBtn = document.getElementById("placeOrder");
  if (placeBtn) {
    placeBtn.addEventListener("click", function () {
      if (!state.drink) { showToast("Pick a drink to start your order."); return; }
      var nameInput = document.getElementById("name");
      var who = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "your order";
      var pickup = document.getElementById("pickup");
      var when = pickup ? pickup.value : "As soon as possible";
      var total = (document.getElementById("summaryTotal") || {}).textContent || "";
      placeBtn.disabled = true;
      submit({
        type: "order", drink: state.drink.name, milk: state.milk,
        addons: state.addons.map(function (a) { return a.name; }).join(", "),
        pickup: when, name: who, total: total
      }).then(function (res) {
        placeBtn.disabled = false;
        showToast(res && res.demo
          ? "Order placed — " + state.drink.name + " for " + who + ". (demo — set a Formspree ID to send for real)"
          : "Order received — " + state.drink.name + " for " + who + ", " + when.toLowerCase() + ".");
      }).catch(function () {
        placeBtn.disabled = false;
        showToast("Couldn’t place the order — please try again.");
      });
    });
  }

  /* ---------- Reservation ---------- */
  var reserveForm = document.getElementById("reserveForm");
  if (reserveForm) {
    reserveForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = reserveForm.querySelector('button[type="submit"]');
      var data = { type: "reservation" };
      Array.prototype.forEach.call(reserveForm.elements, function (el) {
        if (el.name) data[el.name] = el.value;
      });
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }
      var done = function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Request Reservation"; } };
      submit(data).then(function (res) {
        done();
        showToast(res && res.demo
          ? "Reservation requested — we’ll text to confirm. (demo)"
          : "Reservation requested — we’ll text to confirm shortly.");
        reserveForm.reset();
      }).catch(function () {
        done();
        showToast("Couldn’t send the request — please try again.");
      });
    });
  }

  render();
})();

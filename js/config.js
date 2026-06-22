/* =====================================================================
   Rehoboth — site config + form submission helper
   ---------------------------------------------------------------------
   TO GO LIVE WITH FORMS:
   1. Create a free form at https://formspree.io  (one form covers all three)
   2. Copy its ID (the part after /f/ — e.g. "xayzwbqr")
   3. Paste it below, replacing YOUR_FORM_ID, and redeploy.
   Until then, forms show a friendly confirmation but do not send.
   ===================================================================== */
window.REHOBOTH_CONFIG = { formspreeId: "mkolnrkg" };

/* Returns a Promise. Resolves {demo:true} when not yet configured,
   otherwise POSTs to Formspree and resolves on success / rejects on failure. */
window.rehobothSubmit = function (data) {
  var id = (window.REHOBOTH_CONFIG && window.REHOBOTH_CONFIG.formspreeId) || "";
  if (!id || id === "YOUR_FORM_ID") {
    return Promise.resolve({ demo: true });
  }
  return fetch("https://formspree.io/f/" + id, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(function (r) {
    if (!r.ok) throw new Error("Submission failed (" + r.status + ")");
    return r.json();
  });
};

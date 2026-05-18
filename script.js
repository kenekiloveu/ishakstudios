(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var form = document.getElementById("inquiry-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      // Demo: replace with Formspree / Netlify / your backend URL:
      // form.action = "https://formspree.io/f/YOUR_ID";
      // form.removeEventListener ... then form.submit() or use fetch

      var data = new FormData(form);
      var summary =
        "Thanks, " +
        (data.get("name") || "there") +
        ". Connect this form to Formspree or your email API to receive inquiries.";
      status.textContent = summary;
      status.classList.add("success");
      form.reset();
    });
  }
})();

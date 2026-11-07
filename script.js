(function () {
  var form = document.getElementById("wa-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var lines = [
      "Hello Raj Mobile Repairing Centre,",
      "My name is " + String(d.get("name") || "").trim() + ".",
      d.get("device") ? "Phone: " + String(d.get("device")).trim() : "",
      "Problem: " + String(d.get("problem") || "").trim(),
    ].filter(Boolean);
    var url = "https://wa.me/918707441342?text=" + encodeURIComponent(lines.join("\n"));
    var w = window.open(url, "_blank", "noopener");
    if (!w) window.location.href = url;
  });
})();

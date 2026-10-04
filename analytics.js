/* Lightweight site analytics.
   Powered by GoatCounter. This file stays inert until GOATCOUNTER_CODE is set
   to the site code from your GoatCounter account. */
(function () {
  var code = window.GOATCOUNTER_CODE || "";
  if (!code) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(script);
})();

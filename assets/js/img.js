document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-background]").forEach(function(el) {
      const bg = el.getAttribute("data-background");
      el.style.backgroundImage = `url('${bg}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    });
  });
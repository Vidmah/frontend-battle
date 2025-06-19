document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 1500);

  const html = document.documentElement;
  const toggle = document.getElementById("mode-toggle");
  toggle.addEventListener("click", () => {
    const isLight = html.getAttribute("data-theme")==="light";
    html.setAttribute("data-theme", isLight? "dark":"light");
    toggle.textContent = isLight? "☀️":"🌙";
  });

  const backBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY>300? "block":"none";
  });
  backBtn.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
});

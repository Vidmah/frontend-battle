document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 1500);
  * {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f9fa;
  color: #212529;
}

.hero {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 3rem 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin: 0;
}

.tagline {
  font-size: 1.25rem;
  margin-top: 0.5rem;
}

.content {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.main-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.intro-video {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 2px solid #ccc;
}

.description h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #333;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #eee;
  margin-top: 2rem;
}


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

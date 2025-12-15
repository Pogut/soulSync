// assets/js/app.js

// 1) Theme persistence (works across pages)
(function themeBoot() {
    const saved = localStorage.getItem("theme"); // "dark" | "light" | null
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefersDark;
  
    document.documentElement.classList.toggle("dark", shouldDark);
  })();
  
  function setTheme(mode) {
    // mode: "dark" | "light"
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }
  
  // 2) Simple navigation helper
  function go(path) {
    window.location.href = path;
  }
  
  // 3) Fake auth (optional)
  function setAuthed(v) {
    localStorage.setItem("auth", v ? "true" : "false");
  }
  function requireAuth(redirectTo = "index.html") {
    if (localStorage.getItem("auth") !== "true") {
      window.location.href = redirectTo;
    }
  }
  function logout() {
    setAuthed(false);
    window.location.href = "index.html";
  }
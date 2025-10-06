// ============================================================
// Toggle tema (persistenza + preferenza OS)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    // 1) Usa la preferenza salvata, altrimenti 2) preferenza OS, altrimenti 3) default "light"
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.dataset.theme = savedTheme;
      themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      body.dataset.theme = prefersDark ? "dark" : "light";
      themeToggle.textContent = prefersDark ? "☀️" : "🌙";
    }

    // Toggle idempotente: inverte tema, salva e aggiorna l'icona
    function toggleTheme() {
      const isDark = body.dataset.theme === "dark";
      body.dataset.theme = isDark ? "light" : "dark";
      localStorage.setItem("theme", body.dataset.theme);
      themeToggle.textContent = isDark ? "🌙" : "☀️";
    }

    // Click/tap
    themeToggle.addEventListener("click", toggleTheme);
    // Tastiera: Enter o Space (A11Y)
    themeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") toggleTheme();
    });
  }

  // ============================================================
  // US Telephone Number Validator
  //
  // Requisiti dei test:
  // - Se input vuoto: alert EXACT "Please provide a phone number".
  // - Messaggi EXACT nel results-div:
  //     * Valido:   "Valid US number: <input>"
  //     * Invalido: "Invalid US number: <input>"
  //   (N.B.: <input> è la stringa inserita, non normalizzata)
  //
  // Formati coperti:
  // - Country code "1" opzionale (con o senza spazio)
  // - Area code obbligatorio: tra parentesi o nudo a 3 cifre
  // - Separatori opzionali tra blocchi (spazio o trattino)
  // - Blocchi: (1 )? (xxx) o xxx  -  xxx  -  xxxx
  // ============================================================
  const input  = document.getElementById("user-input");
  const check  = document.getElementById("check-btn");
  const clear  = document.getElementById("clear-btn");
  const result = document.getElementById("results-div");

  // Guard clause: se mancano elementi chiave, evitiamo errori runtime.
  if (!input || !check || !clear || !result) return;

  // Regex US:
  // ^(1\s?)?            -> country code "1" opzionale con eventuale spazio
  // (\(\d{3}\)|\d{3})   -> area code: (xxx) oppure xxx
  // ([-\s])?            -> separatore opzionale (trattino o spazio)
  // \d{3}               -> blocco centrale (3 cifre)
  // ([-\s])?            -> separatore opzionale
  // \d{4}$              -> blocco finale (4 cifre)
  const usRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s])?\d{3}([-\s])?\d{4}$/;

  /**
   * Aggiorna l’area risultati con messaggio e classi di stato.
   * @param {string} message
   * @param {boolean} ok
   */
  function setResult(message, ok) {
    result.textContent = message;
    result.classList.toggle("ok", !!ok);
    result.classList.toggle("err", !ok);
  }

  /**
   * Verifica numero
   */
  function handleCheck() {
    const raw = input.value;

    // Vuoto -> alert EXACT richiesto dai test
    if (!raw || raw.trim() === "") {
      alert("Please provide a phone number");
      return;
    }

    // Valido US
    if (usRegex.test(raw)) {
      setResult(`Valid US number: ${raw}`, true);
      return;
    }

    // Invalido US (EXACT text)
    setResult(`Invalid US number: ${raw}`, false);
  }

  /**
   * Pulisce l'esito senza toccare l'input.
   */
  function handleClear() {
    result.textContent = "";
    result.classList.remove("ok", "err");
  }

  // Binding eventi
  check.addEventListener("click", handleCheck);
  clear.addEventListener("click", handleClear);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleCheck();
  });
});

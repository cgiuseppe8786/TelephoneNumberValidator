# Telephone Number Validator

Questo progetto è stato realizzato come parte del percorso **"JavaScript Algorithms and Data Structures"** di [freeCodeCamp](https://www.freecodecamp.org/).

L’obiettivo è creare un’applicazione che **valida numeri di telefono statunitensi (US)** in diversi formati ammessi dai test ufficiali FCC **e**, come estensione opzionale, **riconosce i numeri di cellulare italiani** (es. `+39 3xx ...`, `0039 3xx ...`, `3xx ...`).  
L’interfaccia è sviluppata in **HTML**, **CSS** e **JavaScript puro**, con **tema chiaro/scuro** persistente e una **grafica coordinata** con i progetti precedenti ma con **variazioni cromatiche** per non risultare identica.

---

### 🧠 Obiettivi

- Implementare la **validazione dei numeri US** secondo le specifiche del progetto FCC (inclusi country code `1`, parentesi opzionali ben formate, spazi o trattini ammessi).  
- Aggiungere una **validazione estesa per i cellulari italiani** (prefisso facoltativo `+39`/`0039`, avvio con `3` e conteggio cifre corretto).  
- Gestire dinamicamente il DOM: **input** (`#user-input`), **pulsanti** (`#check-btn`, `#clear-btn`) e **risultato** (`#results-div`).  
- Rispetto completo dei **test automatici di freeCodeCamp** per i numeri US (testo, id e comportamento).  
- **Tema light/dark** con persistenza via `localStorage`, toggle accessibile (ruoli ARIA e tastiera).  
- Interfaccia **responsive**, accessibile e coerente con i progetti precedenti, ma con **variazioni di layout e palette**.

---

### ⚙️ Funzionalità principali

- **Formati US validi** (esempi):  
  - `1 555-555-5555`, `1 (555) 555-5555`, `1(555)555-5555`, `1 555 555 5555`  
  - `5555555555`, `555-555-5555`, `(555)555-5555`  
  - **Area code obbligatorio**; se presente il country code, **deve essere `1`**.  

- **Estensione italiana (extra)**:  
  - Riconosce **cellulari IT** con o senza prefisso: `+39 3xx…`, `0039 3xx…`, `3xx…`  
  - Ammessi spazi e separatori comuni; verifica che il numero **inizi per `3`** e contenga **10 cifre** (escluso prefisso).  

- **Comportamenti richiesti dai test**:
  - Click su **`#check-btn`** con input vuoto → **`alert("Please provide a phone number")`**  
  - Output formattato in **`#results-div`**:  
    - Valid → `Valid US number: <input>`  
    - Invalid → `Invalid US number: <input>`  
  - Click su **`#clear-btn`** → svuota `#results-div`

- **Tema e UI**:  
  - Toggle tema sempre visibile (in alto a destra), **persistente**.  
  - **Palette e micro-animazioni** aggiornate rispetto ai progetti precedenti per una **vibe diversa**.

---

### 🧩 Dettagli di implementazione (high-level)

- **Regex US**: accetta le varianti previste dai test FCC, con parentesi dell’area code **bilanciate**, spazi/trattini opzionali e `^1?` per il country code facoltativo.  
- **Regex IT (extra)**: normalizza il valore rimuovendo prefisso `+39`/`0039` e separatori; verifica `^3` e il **conteggio cifre** corretto.  
- **Accessibilità**: ruoli ARIA per stato e comandi, gestione focus, `aria-live` sul risultato quando opportuno.  
- **Pulizia stato**: il pulsante **Clear** ripristina lo stato dell’output senza ricaricare la pagina.

---

### 🚀 Demo

👉 **Live Preview:** https://cgiuseppe8786.github.io/TelephoneValidator/

---

### 💻 Codice sorgente

📂 **Repository:** https://github.com/cgiuseppe8786/TelephoneValidator

---

### 🧾 Licenza

Rilasciato sotto **licenza MIT**.  
Utilizzo libero per scopi educativi e di portfolio.

# US Telephone Number Validator

Questo progetto è stato realizzato come parte del percorso **"JavaScript Algorithms and Data Structures"** di [freeCodeCamp](https://www.freecodecamp.org/).

L’obiettivo era creare un’applicazione che **valida numeri di telefono statunitensi (US)** nei vari formati riconosciuti dal progetto ufficiale *Telephone Number Validator*, rispettando tutte le **user stories e i test automatici FCC**.  
L’interfaccia è stata sviluppata in **HTML**, **CSS** e **JavaScript puro**, con particolare attenzione all’accessibilità, alla chiarezza dei messaggi e alla persistenza del tema chiaro/scuro.

---

### 🧠 Obiettivi

- Implementare la **logica di validazione** dei numeri telefonici statunitensi secondo gli standard FCC  
- Supportare i formati più comuni, con o senza *country code* (`1`) e *area code* obbligatorio  
- Gestire dinamicamente il DOM per la lettura dell’input, la verifica del numero e l’aggiornamento del risultato  
- Garantire la **piena compatibilità con i test automatici di FreeCodeCamp**, rispettando testi, ID e comportamento richiesti  
- Offrire un’esperienza utente curata, accessibile e coerente con gli altri progetti del percorso  
- Implementare un **tema light/dark** persistente tramite `localStorage`  

---

### ⚙️ Funzionalità principali

- **Formati US validi supportati:**  
  - `1 555-555-5555`  
  - `1 (555) 555-5555`  
  - `1(555)555-5555`  
  - `1 555 555 5555`  
  - `5555555555`  
  - `555-555-5555`  
  - `(555)555-5555`  

- **Regole di validazione:**  
  - L’*area code* è obbligatorio  
  - Se presente, il *country code* deve essere **1**  
  - Parentesi e separatori devono essere bilanciati e corretti  

- **Comportamenti richiesti dai test:**  
  - Click su **`#check-btn`** con input vuoto → `alert("Please provide a phone number")`  
  - Risultati mostrati in **`#results-div`**:  
    - Numero valido → `Valid US number: <input>`  
    - Numero non valido → `Invalid US number: <input>`  
  - Click su **`#clear-btn`** → svuota `#results-div`  

- **Tema e interfaccia:**  
  - Toggle tema sempre visibile (in alto a destra)  
  - Persistenza della preferenza in `localStorage`  
  - Layout centrato e completamente **responsive**  

---

### 🚀 Demo

👉 **Live Preview:** [https://cgiuseppe8786.github.io/TelephoneValidator/](https://cgiuseppe8786.github.io/TelephoneValidator/)

---

### 💻 Codice sorgente

📂 **Repository:** [https://github.com/cgiuseppe8786/TelephoneValidator](https://github.com/cgiuseppe8786/TelephoneValidator)

---

### 🧾 Licenza

Rilasciato sotto **licenza MIT**.  
Può essere utilizzato liberamente per scopi educativi e di portfolio.

# 🇩🇪 german-vocabulary-flashcards

> An open-source, interactive frontend web application designed to optimize language learning through active recall and persistent local data storage.

### 🌟 Project Images / Visual Preview
<img width="1017" height="715" alt="image" src="https://github.com/user-attachments/assets/5059d565-4b6c-49e2-912a-63f735317a9a" />
<img width="967" height="735" alt="Captura de pantalla 2026-08-30 220408" src="https://github.com/user-attachments/assets/1bd3cce5-dc68-4e5e-b79d-bd9396347b0e" />

---

# 🚀 Project Description

I started this personal project to accelerate my own German language learning journey. It allows users to create interactive study cards featuring German words, their Spanish translations, and custom categories.

The application solves a common frontend development challenge by ensuring that user-created flashcards persist and do not disappear when refreshing the browser window.

---

# 🛠️ Technologies & Core Concepts Used

### Core Stack
- **HTML5**: Clean semantic layout built using the BEM design methodology.
- **CSS3**: Adaptive layout (Responsive Design) leveraging Flexbox and global custom properties (`:root`).
- **Vanilla JavaScript**: Dynamic DOM manipulation to instantiate and render elements on the screen in real time.

### Data Persistence
- **LocalStorage**: Full data mutation cycle to maintain flashcards across different browser sessions.
- **Dynamic Deletion**: Implemented an index-based tracker via `.splice()` to target and remove specific entries from local memory without affecting state integrity.

---

# 💻 Data Structure Example (JSON)

The application manages local records inside LocalStorage using the following packed format:

```json
[
  {
    "aleman": "Hallo",
    "español": "Hola",
    "occion": "basico"
  }
]
```

---

# 📝 Key Features

- **Safe State Filter**: Global variables are strictly guarded against `null` references, ensuring overall application stability.
- **Dynamic Counter**: The system calculates and displays the exact number of active study cards in real time.
- **Zero Dependencies**: Built 100% with standard web browser APIs, without relying on external frameworks.

---

# 👤 Author

Developed and Designed by: **Osfran Dev**  
*🎯 Goal: Full-Stack Developer 2030* 💎

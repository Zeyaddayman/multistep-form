# 📝 Multi Step Form

A robust, user-friendly multi-step registration flow featuring real-time client-side validation, secure server-side verification, and data persistence.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://multistep-form-tau.vercel.app/your-info)

---

## 🚀 Features

* **Persistent State:** Uses **Context API** for global state management and **LocalStorage** to ensure users don't lose progress on page refresh.
* **Live Validation:** Instant client-side feedback to ensure data integrity before moving to the next step.
* **Review & Edit:** A final summary stage allowing users to jump back and modify specific fields before the final submission.
* **Server-Side Error Handling:** Re-validates data on submission; if an error is found, the user is **redirected** to the problematic step with specific error messages passed via **searchParams**.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15
* **Language:** TypeScript
* **State Management:** Context API
* **Styling:** Tailwind CSS
* **Validation:** Zod

---

## ⚡ Performance Optimizations

**The Challenge:** During development, I identified that frequent localStorage.setItem calls during input typing can make input lag because disk writes are synchronous and block the main thread. specially on low-powered devices.

**The Solution:** To solve this, I implemented a `backgroundSaveToLocalStorage` utility using a Debounce pattern. This ensures that disk writes only occur after the user has stopped typing for a specified duration

<img width="1780" height="772" alt="backgroundToLocalStorage" src="https://github.com/user-attachments/assets/01be2e3b-d494-4906-8bdf-540a3c0cd258" />

---

## 🧰 Installation & Setup

1. **Clone the repo:** `git clone https://github.com/Zeyaddayman/multistep-form.git`
2. **Install dependencies:** `npm install`
3. **Run Dev Server:** `npm run dev`
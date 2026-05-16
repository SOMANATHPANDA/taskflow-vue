# TaskFlow

A modern task management application built using Vue 3, TypeScript, Pinia, and Composition API.
The project demonstrates scalable frontend architecture, reusable components, reactive state management, and local storage persistence.

---

## 🚀 Features

* ✅ Create, edit, complete, and delete tasks
* 🔍 Real-time task search
* 📂 Task filtering (All / Completed / Pending)
* 🧠 Centralized state management with Pinia
* ⚡ Vue 3 Composition API architecture
* ♻️ Reusable component structure
* 💾 Local storage persistence
* ⏳ Async API simulation with loading states
* 🛠️ TypeScript integration
* 📱 Responsive modern UI

---

## 🧰 Tech Stack

* Vue 3
* TypeScript
* Pinia
* Vue Router
* Composition API
* Vite

---

## 📁 Project Structure

```bash
src
├── assets
├── components
├── composables
├── router
├── stores
├── types
├── views
└── layouts
```

---

## 🧩 Core Concepts Implemented

### Vue 3 Composition API

Implemented reactive state management using:

* `ref`
* `computed`
* `watch`
* `onMounted`

### Pinia State Management

Used Pinia for:

* centralized task state
* derived filtered state
* async actions
* scalable store architecture

### Composables

Extracted reusable localStorage persistence logic into a custom composable.

### Async State Handling

Implemented:

* async task loading
* loading state management
* simulated API architecture
* service layer separation

### Reactive Filtering & Search

Implemented dynamic task filtering and real-time search using computed reactive state.

### Component-Based Architecture

Structured the application using reusable components:

* `TaskForm`
* `TaskList`
* `TaskItem`

### CRUD Operations

Implemented complete CRUD functionality:

* Create task
* Read task list
* Update task
* Delete task

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/SOMANATHPANDA/taskflow-vue.git
```

Navigate to the project folder:

```bash
cd taskflow-vue
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 👨‍💻 Author

**Somanath Panda**

* GitHub: https://github.com/SOMANATHPANDA/
* LinkedIn: www.linkedin.com/in/somanath-panda-software-engineer

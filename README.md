# Cash Caddy

> A personal-finance app for tracking expenses, setting budgets, and achieving financial goals.

🔗 [**Live Demo → cashcaddy.vercel.app**](https://cashcaddy.vercel.app)

---

## 🧾 Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)

   * Prerequisites
   * Installation
   * Running Locally
   * Production Build / Deployment
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [License](#license)

---

## About

Cash Caddy is a web / PWA application designed to help users easily monitor and manage their finances: log incomes & expenses, set budgets, visualise spending patterns, and track progress toward financial goals.
It’s ideal for individuals who want a clean, self-hostable, lightweight budget tracker without the heavy complexity of enterprise tools.

---

## Features

* Add, edit, and delete income & expense transactions.
* Categorise transactions (e.g., Food, Utilities, Travel, etc.).
* Set custom budgets per category.
* View summary dashboards: total income vs expense, remaining budget, category breakdowns.
* Export or backup data in CSV format.
* Responsive UI (works on mobile / desktop).
* Light and dark theme support.
* PWA (Progressive Web App) support for offline access and app-like experience.

---

## Tech Stack

* **Language:** TypeScript
* **Bundler:** Vite 
* **UI Library:** React & MUI
* **Deployment:** Vercel
* **Lint:** ESLint 
* **Config files:** `tsconfig.json`, `vite.config.ts`
* **State management:** Redux & Redux tool-kit

---

## Getting Started

### Prerequisites

* Node.js 
* npm package manager

### Installation

```bash
git clone https://github.com/vmanidev/cash-caddy.git
cd cash-caddy
npm install 
```

### Running Locally

```bash
npm run dev 
```

Then open [http://localhost:5173](http://localhost:5173) (or whichever port you’ve configured) in your browser.

### Production Build / Deployment

```bash
npm run build
npm run preview    # to test the build locally
```

Deploy the `dist/` or output folder to your preferred hosting (e.g., Vercel, Netlify).

---

## Usage

Once launched, you should:

* Click **Let’s Begin** on the welcome screen.
* Click **Add Transaction** to input incomes or expenses.
* Assign a category, date, and description.
* Go to the **Dashboard** to view balance, budget status, and category breakdown.
* Adjust budgets in **Settings → Budgets**.
* Go to the **Transactions** page to view all entries.
* Export transactions as CSV from **Settings → Export Data**.
* Save your theme preference in **Settings → Theme**.

---

## Project Structure

```
cash-caddy/
├─ public/                  # Static assets (favicon, icons, etc.)
│
├─ src/
│  ├─ components/           # Reusable UI components (forms, dialog, charts, drawer, etc.)
│  ├─ pages/                # Route-level pages (Dashboard, Transactions, Settings, Welcome)
│  ├─ hooks/                # Custom React hooks (budget logic, data helpers, category map)
│  ├─ utils/                # Shared helper functions (formatters, math, date, CSV export)
│  ├─ routes/               # Route definitions
│  ├─ store/                # State manangement 
│  ├─ types/                # TypeScript definitions and interfaces
│  ├─ App.tsx               # Root application component
│  └─ main.tsx              # Client entry point
│
├─ index.html               # Vite entry HTML
├─ package.json             # Dependencies and scripts
├─ tsconfig*.json           # TypeScript configs
├─ eslint.config.js         # Linting rules
├─ vite.config.ts           # Vite build config
├─ vercel.json              # Deployment config for Vercel
├─ LICENSE
└─ README.md
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/vmanidev/cash-caddy/blob/6666461514cc0878a0faef109733482d7cdf20e4/LICENSE) file for details. 

---

# 🛍️ Products Dashboard (React.js)

A simple and responsive **Products Dashboard** built with React.js and Tailwind CSS using the Fake Store API.  
The project demonstrates core frontend skills such as API integration, state management, filtering, pagination, and UI/UX handling.

---

## ✨ Features

### 📦 Products Display
- Fetch products from Fake Store API
- Display products in responsive cards
- Show:
  - Product Image
  - Title
  - Category
  - Price

---

### 🔍 Search Functionality
- Search products by name
- Real-time filtering

---

### 🏷️ Category Filter
- Filter products by category
- Dynamic categories from API data

---

### 📄 Pagination
- Client-side pagination
- 8 products per page
- Page navigation buttons

---

### 🌙 Dark Mode
- Toggle between Light & Dark mode
- Fully responsive theme support

---

### ⏳ Loading State
- Skeleton loading UI for better UX

---

### ❌ Error Handling
- Displays error message if API fails

---

### 📱 Responsive Design
- Mobile, tablet, and desktop friendly layout

---

## 🛠️ Tech Stack

- React.js (Hooks: useState, useEffect)
- Tailwind CSS
- Fake Store API
- JavaScript (ES6+)

---

## 📡 API Used

https://fakestoreapi.com/products


---

📁 Project Structure
```
src/
│
├── components/
│   ├── ui/
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │
│   ├── ProductCard.jsx
│   ├── ProductSkeleton.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   
│
├── pages/
│   └── Dashboard.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx

```
---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/products-dashboard.git

cd products-dashboard

npm install

npm run dev

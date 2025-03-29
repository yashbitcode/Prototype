# **Data Query Dashboard Prototype**  

🚀 **A React-based Data Query Dashboard** where users can input business-related queries and get AI-powered suggestions, instant insights, and dynamic data visualizations.  

---

## **🌟 Features**  

✅ **AI-Powered Search Suggestions** – Query suggestions are fetched from **Gemini AI** dynamically.  
✅ **Debouncing & Cache Optimization** – Reduces unnecessary API calls and caches suggestions using **Redux Store**.  
✅ **AI-Generated Insights** – AI provides a **4-point summary** based on mock data for each query.  
✅ **Interactive Data Visualization** – Displays results as a **line chart** for better business insights.  
✅ **Skeleton Loading Effect** – Enhances user experience while data is being fetched.  
✅ **Error Handling** – Shows an error message for **invalid queries** (random text or irrelevant searches).  
✅ **Search History Tracking** – Queries and results are stored in **Redux Store** for future reference.  
✅ **Preloaded Sample Queries** – The history section comes with 3 sample query results for demonstration.  
✅ **Multiple Routes with React Router** – Implements different routes for a structured UI.  
✅ **Modern UI & Styling** – Uses **Tailwind CSS & Material UI** for a clean and responsive design.  
✅ **Charts Visualization** – Uses **Recharts** for smooth and dynamic chart rendering.  

---

## **📸 Demo**  
👉 [Live Deployment Link](https://dashboard-prototype-nine.vercel.app/)  

---

## **🚀 Tech Stack**  

| Technology  | Purpose |
|-------------|---------|
| **React.js** | Frontend framework |
| **Redux** | Global state management |
| **React Router** | Routing between pages |
| **Tailwind CSS & MUI** | Styling |
| **Gemini AI API** | AI-powered query suggestions & insights |
| **Recharts** | Data visualization |
| **Debouncing** | Optimized API calls |
| **Skeleton Loaders** | Enhancing UI experience |

---

## **📂 Project Structure**  

```
📦 Prototype  
 ┣ 📂 src  
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ DropDownMenu.jsx 
 ┃ ┃ ┣ ErrorState.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ HeaderLogo.jsx  
 ┃ ┃ ┣ LineChart.jsx 
 ┃ ┃ ┣ NavItem.jsx 
 ┃ ┃ ┣ NotFound.jsx 
 ┃ ┃ ┣ Result.jsx 
 ┃ ┃ ┣ SearchSuggestions.jsx 
 ┃ ┃ ┣ Summary.jsx 
 ┃ ┣ 📂 hooks  
 ┃ ┃ ┣ useHistoryInfo.jsx
 ┃ ┃ ┣ useHomeData.jsx
 ┃ ┣ 📂 pages  
 ┃ ┃ ┣ HistoryShowcase.jsx
 ┃ ┃ ┣ Home.jsx 
 ┃ ┃ ┣ SpecificHistory.jsx 
 ┃ ┣ 📂 services  
 ┃ ┃ ┣ appStore.js
 ┃ ┃ ┣ currentResultSlice.js
 ┃ ┃ ┣ geminiData.js
 ┃ ┃ ┣ geminiSuggestions.js
 ┃ ┃ ┣ historySlice.js
 ┃ ┃ ┣ suggestionSlice.js
 ┃ ┣ 📂 utils  
 ┃ ┃ ┣ contants.js
 ┃ ┣ App.jsx
 ┃ ┣ index.css  
 ┃ ┣ main.jsx  
 ┣ index.html  
 ┣ package.json  
 ┣ package-lock.json  
 ┣ vercel.json  
 ┣ README.md  
```

---

## **⚙️ Installation & Setup**  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yashbitcode/Prototype.git
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Create a `.env` file and add your Gemini AI API Key**  
```sh
VITE_GEMINI_API=your_api_key_here
```

4️⃣ **Start the development server**  
```sh
npm start
```

---

## **🛠 Usage**  

1️⃣ **Start typing a business-related query** _(e.g., "Past month sales")_  
2️⃣ **Get AI-powered suggestions** _(Fetched from Gemini API)_  
3️⃣ **Click the search button to fetch insights**  
4️⃣ **See a short 4-point summary** _(Generated from mock data)_  
5️⃣ **View interactive line charts** _(Using Recharts)_  
6️⃣ **All searches are stored in history** _(Managed via Redux)_  

---

## **🔀 Routing**  

| Route  | Description |
|--------|-------------|
| `/` | Home Page (Query Input & Results) |
| `/history` | Query History Showcase |
| `/history/:id` | Specific History Info |

---

## **📌 Example Queries**  

```json
[
  "Past month sales",
  "Average sales per month",
  "Total revenue per category",
  "Customer growth over time",
  "Product sales distribution",
  "Monthly website traffic",
  "Top 5 selling products",
  "Order fulfillment rate",
  "Return rate by product category",
  "Employee performance score"
]
```

---

## **🚀 Deployment**  

Deploy on **Vercel or Netlify**:  
```sh
npm run build
```
Upload the **build** folder to **Vercel/Netlify**.  

---

## **📜 License**  
This project is licensed under the **MIT License**.  


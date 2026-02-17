# Zerodha Clone Final

A full-stack clone of the Zerodha trading platform. This project features a unified backend and two specialized React applications: a marketing frontend and a trading dashboard.

## 🚀 Project Overview

This project replicates the core functionalities of Zerodha, including landing pages, stock watchlists, holdings, positions, and order management.

### Architecture

The repository is organized into three main modules:

1.  **[backend/](file:///Users/mananmeemroth/Projects/Zerodha%20Clone%20Final/backend)**: Node.js/Express API with MongoDB for data persistence.
2.  **[frontend/](file:///Users/mananmeemroth/Projects/Zerodha%20Clone%20Final/frontend)**: Marketing website for public-facing information.
3.  **[dashboard/](file:///Users/mananmeemroth/Projects/Zerodha%20Clone%20Final/dashboard)**: Interactive trading interface with charts and live-data simulation.

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Material UI (MUI), Chart.js, Axios
- **Backend**: Node.js, Express, Mongoose (MongoDB ODM)
- **Database**: MongoDB
- **Dev Tools**: Nodemon, Dotenv, CORS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Cloud instance)

### 1. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```
Start the server:
```bash
npm start
```

### 2. Setup Dashboard
```bash
cd dashboard
npm install
npm start
```

### 3. Setup Marketing Frontend
```bash
cd frontend
npm install
npm start
```

## 📈 Features

- **Marketing Landing Pages**: Clean and responsive landing pages.
- **Watchlist**: Real-time asset tracking.
- **Order Management**: Execute buy/sell orders.
- **Portfolio Tracking**: View holdings and positions with P&L calculations.
- **Visual Analytics**: Interactive charts for portfolio distribution.

---

*For a detailed architectural breakdown, see the [Walkthrough Artifact](file:///Users/mananmeemroth/.gemini/antigravity/brain/7a5771a7-e53a-44ae-aaca-3dc2063c659a/walkthrough.md).*

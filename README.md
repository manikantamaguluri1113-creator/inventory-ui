# Inventory Management System — Frontend

A real-time inventory management dashboard built with Angular 19 and Angular Material.

## 🚀 Features

- **JWT Authentication** — Secure login with token-based authentication
- **Real-Time Dashboard** — Live stock updates via WebSocket (STOMP)
- **Stock Management** — View and adjust stock levels across warehouses
- **Multi-Warehouse View** — Monitor stock across multiple warehouse locations
- **Stock Alerts** — Real-time low stock and out-of-stock notifications
- **Responsive Design** — Clean UI built with Angular Material

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 19 |
| UI Library | Angular Material |
| Real-Time | STOMP WebSocket, SockJS |
| HTTP Client | Angular HttpClient |
| Styling | SCSS |
| Language | TypeScript |

## 📁 Project Structure
```
src/app/
├── core/
│   ├── auth/          # JWT interceptor, auth guard
│   ├── models/        # TypeScript interfaces
│   └── services/      # HTTP + WebSocket services
├── features/
│   ├── dashboard/     # Real-time overview
│   ├── stock/         # Stock management
│   ├── warehouse/     # Warehouse overview
│   ├── alerts/        # Stock alerts
│   └── login/         # Authentication
└── shared/
    ├── sidebar/       # Navigation
    └── adjust-stock-dialog/  # Stock adjustment dialog
```

## ⚙️ Prerequisites

- Node.js 18+
- Angular CLI 17+

## 🔧 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/inventory-ui.git
cd inventory-ui

# Install dependencies
npm install

# Start development server
ng serve
```

Open `http://localhost:4200` in your browser.

## 🔑 Default Credentials
```
Username: admin
Password: admin
```

## 🌐 Environment Configuration

Update `src/environments/environment.development.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081'
};
```


# 🛒 Stationery Shop - Backend

## 📌 Overview  
The **Stationery Shop Backend** is a robust API built with **Node.js and Express.js**, providing **secure authentication, role-based access, product management, and order processing**. It supports **JWT authentication, payment integration, and RESTful API endpoints** for seamless frontend interaction. 


🚀 **Live Site:** [Stationery Shop](https://stationery-shop-kappa.vercel.app/)  

---

## 🚀 Features  

### 🔐 Authentication & Authorization  
- **User Registration & Login** with JWT authentication.  
- **Secure Password Hashing** using **bcrypt** before storing credentials.  
- **Role-Based Access Control (RBAC):**  
  - **User Role:** Can browse products, manage orders, and update profile settings.  
  - **Admin Role:** Can manage users, products, and orders.  
- **Session Management:** JWT stored in HTTP-only cookies for security.  
- **Logout:** Clears authentication token on user logout.  

### 📦 Product Management (CRUD)  
- Admins can **Create, Read, Update, and Delete (CRUD)** products.  
- Supports product **categories, price, stock, and availability**.  
- **Pagination & Filtering** for efficient product retrieval.  

### 🛒 Order Management (CRUD)  
- Users can **place orders**, and orders are stored with a status of **Pending**.  
- Admins can **approve orders**, updating status to **Shipped**.  
- **Stock Validation** before processing orders.  

### 💳 Payment Integration  
- Supports **SurjoPay, Stripe**, or other payment gateways.  
- Secure payment processing with proper transaction handling.  

### 🔒 Security & Error Handling  
- **JWT Authentication Middleware** for securing private routes.  
- **Input Validation** to prevent invalid or malicious data.  
- **Error Handling Middleware** for consistent API responses.  

---

## 🛠️ Tech Stack  

| Technology     | Description                  |  
|---------------|------------------------------|  
| **Node.js**   | Backend runtime environment  |  
| **Express.js**| Web framework for Node.js    |  
| **MongoDB**   | NoSQL Database for storing users, products, and orders |  
| **Mongoose**  | MongoDB Object Modeling (ODM) |  
| **JWT**       | Secure authentication |  
| **Bcrypt.js** | Password hashing |  
| **SurjoPay** | Payment gateway integration |  
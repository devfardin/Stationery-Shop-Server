# Stationery Shop Server

Welcome to the **Stationery Shop API**! This project is designed to manage a shop's stationery products and orders efficiently. It is built with **Express.js** and **TypeScript**, using **MongoDB** for data storage and **Mongoose** for schema definition and data operations.

---

## Features

### General
- **Express.js** project created with TypeScript.
- **MongoDB** integration to store and manage stationery products and orders.
- **Mongoose** for schema definitions and seamless data operations.
- Fully functional **CRUD operations** for products and orders.

---

## Models

### 1. **Product Model**
Defines the schema for stationery products. Includes fields for:
- `name`
- `brand`
- `price`
- `category`
- `description`
- `quantity`
- `inStock`
- `createdAt`
- `updatedAt`

### 2. **Order Model**
Defines the schema for customer orders. Includes fields for:
- `customer email`
- `product ID`
- `quantity`
- `total price`

---

## API Endpoints

### 1. **Upload Product**
- **Endpoint**: `/api/products`
- **Method**: `POST`
- **Description**: Adds a new stationery product to the database.
- **Responses**:
  - **Success**: Returns a success message, status `true`, and the uploaded product.
  - **Error**: Returns an error message and status `false`.

### 2. **Get All Products**
- **Endpoint**: `/api/products`
- **Method**: `GET`
- **Description**: Retrieves all products. Includes filterable options for `name`, `brand`, and `category`.
- **Response**: A list of all products, with filtering applied if specified.

### 3. **Update Product**
- **Endpoint**: `/api/products/:productId`
- **Method**: `PUT`
- **Description**: Updates a product using its `productId`. Automatically updates the `updatedAt` field.
- **Responses**:
  - **Success**: Returns a success message and the updated product details.
  - **Error**: Returns an error message if the update fails.

### 4. **Delete Product**
- **Endpoint**: `/api/products/:productId`
- **Method**: `DELETE`
- **Description**: Deletes a product using its `productId`.
- **Responses**:
  - **Success**: Returns a success message and an empty object.
  - **Error**: Returns an error message if the product ID is invalid.

### 5. **Place an Order**
- **Endpoint**: `/api/orders`
- **Method**: `POST`
- **Description**: Places an order using the customer's email, product ID, quantity, and total price.
- **Features**:
  - Validates the product ID before placing an order.
  - Updates the product inventory (`quantity` field).
  - Sets `inStock` to `false` if the inventory reaches zero.
- **Responses**:
  - **Success**: Returns a success message and order details.
  - **Error**: Returns an error message if the product ID is invalid or any other issue occurs.

### 6. **Order Revenue**
- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`
- **Description**: Calculates the total revenue from all orders.
- **Response**: Returns a success message, status, and a `data` object containing `totalRevenue`.
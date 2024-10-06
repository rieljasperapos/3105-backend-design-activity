# **Backend Design Exercise: Structuring a Node.js Application**

### **Overview**
This repository demonstrates a well-structured Node.js backend application using Express.js. It simulates a full-stack system with three key functionalities:
1. **User Registration**
2. **User Login**
3. **Profile Management**

The application employs **mock models** (using an in-memory array) to simulate database operations and leverages **middleware** for request logging, rate limiting, and user authentication.

## **Usage**

### **Environment Variables**

Create a `.env` file in the root directory to store secret keys:

```bash
PORT=your_port_number
SALTROUNDS=your_salt_rounds_for_hashing
JWT_SECRET=your_jwt_secret_key
COOKIE=your_cookie_name
```

## **API Endpoints**

| Method | Endpoint    | Description                  |
|--------|-------------|------------------------------|
| POST   | `/register` | Registers a new user         |
| POST   | `/login`    | Logs in and returns a JWT    |
| GET    | `/profile`  | Retrieves user profile       |

### **POST /register**

Registers a new user with the following required fields: `username`, `password`, and `email`.

- **Request Body:**

  ```json
  {
    "username": "johnDoe",
    "password": "password123",
    "email": "john@example.com"
  }

  ```

### **POST /signin**

Registers a new user with the following required fields: `username`, `password`, and `email`.

- **Request Body:**

  ```json
  {
    "username": "johnDoe",
    "password": "password123"
  }

  ```

### **GET /profile/:id**

Registers a new user with the following required fields: `username`, `password`, and `email`.

- **Headers:**

  ```bash
  Authorization: Bearer <token>

  ```


## Installation

### **Step-by-Step Guide**

1. **Clone the repository**

    ```bash
    git clone repo url
    cd backend-design-exercise
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**

    Start the development server using nodemon:

    ```bash
    nodemon app.ts
    ```

            

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
| GET    | `/profile/:id`  | Retrieves user profile       |

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

Authenticate a user with their credentials

- **Request Body:**

  ```json
  {
    "username": "johnDoe",
    "password": "password123"
  }

  ```

### **GET /profile/:id**

Retrives a user with the given id.

- **Headers:**

  ```bash
  Authorization: Bearer <token>

  ```

## **API Testing with Curl**

You can test the API endpoints using `curl` from the command line by following these examples:

### **1. Testing the `POST /register` endpoint:**

To register a new user, use the following `curl` command:

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"username": "johnDoe", "password": "Password123!@#", "email": "john@example.com"}'
```

- **Successful Response:**

```json
{
    "message": "Registered Successfully",
    "newUser": {
        "id": 1,
        "username": "johnDoe",
        "email": "john@example.com",
        "password": "$2b$10$ip7B5K71JSBxsos6TBJiI.Gqwb.k2dFcngTFhthkNgSOrXV2BzU9e"
    }
}
```


### **1. Testing the `POST /signin` endpoint:**

To sign in a user, use the following `curl` command:

```bash
curl -X POST http://localhost:3000/signin \
-H "Content-Type: application/json" \
-d '{"username": "johnDoe", "password": "Password123!@#"}'
```

- **Successful Response:**

```json
{
    "message": "Log in successful ",
    "token": "token-here"
}
```

### **1. Testing the `POST /profile/:id` endpoint:**

To retrieve a specific user, use the following `curl` command:

```bash
-H "Authorization: Bearer <token>"
```

- **Successful Response:**

```json
{
    "message": "Successfully retrieved profile",
    "profile": {
        "id": 1,
        "username": "elo",
        "email": "john@mail.com",
    }
}
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

            

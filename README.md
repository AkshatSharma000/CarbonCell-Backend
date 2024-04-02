# Crypto Backend

This is the backend for the Crypto web application. It provides API endpoints for user authentication, fetching data from public APIs, protected routes.
## Features

- User authentication with JWT (JSON Web Tokens)
- RESTful API endpoints for various functionalities
- Integration with public APIs for fetching data
- Error handling and middleware implementation

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)

## Getting Started

To get started with the Crypto backend, follow these steps:

```bash
git clone [https://github.com/your-username/crypto-backend.git](https://github.com/AkshatSharma000/CarbonCell-Backend.git)
cd CarbonCell-Backend
npm install
npm start
```

## File structure
CarbonCell-Backend/
  |-- config/
  |-- controllers/
  |-- models/
  |-- routes/
  |-- utils/
  |-- index.js
  |-- package.json

- config/: Contains configuration files, including Swagger configuration.
- controllers/: Contains route handlers for different API endpoints.
- models/: Contains Mongoose models for interacting with MongoDB.
- routes/: Contains route definitions for different API endpoints.
- utils/: Contains utility functions and middleware.
- index.js: Entry point of the application.
- package.json: Contains project dependencies and scripts.
- .env: Environment variable configuration file.


# CRUD-API-MODEL
![GitHub License](https://img.shields.io/github/license/AlvinJoby/CRUD-API-MODEL)
![GitHub repo size](https://img.shields.io/github/repo-size/AlvinJoby/CRUD-API-MODEL)

Welcome to the CRUD-API-MODEL, a simple yet powerful API built using Node.js, Express, and MongoDB. This project demonstrates how to create a fully functional CRUD (Create, Read, Update, Delete) API with clean and maintainable code.

- **Create** new products
- **Read** existing products
- **Update** existing products
- **Delete** existing products

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlvinJoby/CRUD-API-MODEL.git
   ```
   ```bash
   cd CRUD-API-MODEL
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your MongoDB connection string:**
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase?retryWrites=true&w=majority
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

## Usage

Once the server is running, you can interact with the API using a tool like Postman or cURL.

### Endpoints

- **GET** `/api/products` - Retrieve all products
- **GET** `/api/products/:id` - Retrieve a single product by ID
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

## Project Structure

```plaintext
CRUD-API-MODEL/
├── controller/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── product.route.js
├── .env
├── index.js
├── LICENSE.txt
├── package.json
└── README.md
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js

## Additional Packages

- **Router** - For modular route handling
- **Nodemon** - For automatic server restarts during development
- **External Controllers** - To keep route handlers clean and separated

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License.](LICENSE.txt)

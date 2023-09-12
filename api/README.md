# ShopSmart API Documentation

## Introduction

The ShopSmart API is a robust backend application built using Express and MongoDB. It serves as the backbone for your e-commerce platform, providing essential functionalities for managing users, categories, brands, and products.

**Technology Stack:**
- Express.js
- MongoDB

## Table of Contents
  - [Introduction](#introduction)
  - [Endpoints](#endpoints)
    - [User Management](#user-management)
    - [Category Management](#category-management)
    - [Brand Management](#brand-management)
    - [Product Management](#product-management)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Endpoints

### User Management

- `/api/users/signin`: User login endpoint.
- `/api/users/signup`: User registration endpoint.
- `/api/users/getUsers`: Get all users from the database.
- `/api/users/updateUser`: Update user profile.
- `/api/users/getUserByID`: Get user details by ID.
- `/api/users/deleteUser`: Delete a user from the database.

### Category Management

- `/api/category/getCategory`: Get all categories from the database.
- `/api/category/getCategoryByName`: Get category details by name.
- `/api/category/createCategory`: Create a new category.
- `/api/category/deleteCategory`: Delete a category from the database.
- `/api/category/updateCategory`: Update category details.

### Brand Management

- `/api/brand/getBrand`: Get all brands from the database.
- `/api/brand/getBrandByName`: Get brand details by name.
- `/api/brand/createBrand`: Create a new brand.
- `/api/brand/deleteBrand`: Delete a brand from the database.
- `/api/brand/updateBrand`: Update brand details.

### Product Management

- `/api/product/getProduct`: Get all products from the database.
- `/api/product/getProductByName`: Get product details by name.
- `/api/product/createProduct`: Create a new product.
- `/api/product/deleteProduct`: Delete a product from the database.
- `/api/product/updateProduct`: Update product details.

## Environment Variables

Before running the API, ensure that you set the following environment variables in a `.env` file:

- `SERVER_PORT`: Port for the API to listen on.
- `MONGO_URI`: MongoDB connection string for data storage.
- `JWT_SECRET`: Secret key used for JWT token generation and validation.
- `NODEMAILER_EMAIL`: Email address used for sending emails via Nodemailer.
- `NODEMAILER_PASSWORD`: Password for the email account used with Nodemailer.

## How to Run

1. Install Node.js and npm if not already installed on your system.
2. Install the required dependencies using `npm install`.
3. Set up the environment variables in the `.env` file.
4. Start the server with `npm start`.
5. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port number specified in your environment or the default `3000`.

## Customization

Feel free to customize the API according to your specific requirements. You can add more endpoints or modify existing ones to tailor the API to your application's needs. Consider documenting any customizations for future reference.

## Contributing

Contributions are welcome! To contribute to this project, please follow these guidelines:

- Check the [GitHub repository](https://github.com/your-repo-link) for open issues and discussions.
- If you find any issues or have suggestions for improvements, please open an issue.
- To contribute code, fork the repository, create a branch, and submit a pull request with your changes.
- Follow any code style and contribution guidelines mentioned in the repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, please reach out to us at [s.ammarahmed14@gmail.com](mailto:s.ammarahmed14@gmail.com) or visit our [GitHub repository](https://github.com/your-repo-link).

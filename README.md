# 📨 Saraha App Clone - RESTful API

[![Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/Sayed-Herzallah/Sharaha-App-BackEnd)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green) ![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green) ![License](https://img.shields.io/badge/License-MIT-blue)

A robust and scalable **Backend RESTful API** for an anonymous messaging platform (inspired by Saraha). This project demonstrates a clean **Modular Architecture**, focusing on separation of concerns, security, and performance.

## 🚀 Key Features

* **🔐 Authentication & Authorization:**
    * Secure User Signup & Login.
    * **JWT** (JSON Web Tokens) for stateless authentication.
    * **Bcrypt** for password hashing.
    * Email Verification using **Nodemailer**.
* **📩 Messaging System:**
    * Send anonymous messages to registered users.
    * Retrieve received messages.
    * Reply to messages (optional logic included).
* **🛡️ Security & Validation:**
    * **Joi** Validation for all input data (Request Body, Query, Params).
    * Protection against common vulnerabilities (XSS, NoSQL Injection).
    * Global Error Handling Middleware.

## 🛠️ Tech Stack

* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Validation:** Joi
* **File Uploads:** Multer & Cloudinary
* **Email Service:** Nodemailer
* **Tools:** VS Code, Postman, Git

## 📂 Project Structure

The project follows a **Module-Based Architecture**, where each feature (Auth, User, Messages) is self-contained.

```text
src
├── DataBase
│   ├── Models          # Mongoose Schemas (User, Message)
│   └── connection.js   # Database Connection Logic
├── middleware          # Global Middlewares (Auth, Error Handling, Multer)
├── Modules             # Business Logic Modules
│   ├── Auth            # Authentication Module (Signup, Login)
│   ├── Messages        # Message Handling Module
│   └── User            # User Profile Module
├── utils               # Helper Functions (Cloudinary, Emails, Encryption)
├── index.js            # Entry Point
└── app.controller.js   # App-level Bootstrapping

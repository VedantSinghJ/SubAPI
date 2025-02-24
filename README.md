# 📌 SubAPI

## 📝 Project Description

The **Subscription Tracker API** is a robust and secure backend service designed to manage user subscriptions effortlessly. It provides essential functionalities like user authentication, subscription management, workflow automation, and security enhancements. The API leverages **Node.js** and **Express.js**, with **MongoDB** as the database. It includes middleware for security, error handling, and rate limiting to ensure a reliable and scalable system.

## 🌍 Real-World Use Cases

- **Personal Finance Management:** Users can track and manage their recurring subscriptions for streaming services, gym memberships, SaaS products, etc.
- **Business Subscription Services:** Companies offering subscription-based products can integrate this API to manage customer subscriptions, automate renewals, and send reminders.
- **E-commerce & Digital Goods:** Online marketplaces selling subscription-based services (e.g., premium memberships, online courses) can use this API for efficient management.
- **Freelancers & Agencies:** Professionals offering recurring billing services can use this API to automate client payments and reminders.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Security:** JWT, bcrypt, Arcjet (Rate Limiting & Bot Protection)
- **Email System:** Nodemailer, Upstash for automated workflows
- **Development Tools:** ESLint, Nodemon, Environment Variables

## 🚀 Features

### 🔐 User Authentication

- Sign up, sign in, and sign out functionality
- JWT-based authentication
- Password encryption with bcrypt

### 📑 Subscription Management

- Create and manage subscription records
- Supports multiple currencies (INR, USD, EUR)
- Various subscription frequencies (daily, weekly, monthly, yearly)
- Categorization (sports, news, entertainment, etc.)
- Automatic renewal date calculation
- Status tracking (active, cancelled, expired)

### 🛡️ Security Features

- **Arcjet Integration**
  - Rate limiting (5 requests per 10 seconds)
  - Bot detection
  - Request shielding
- JWT authentication middleware
- Centralized error handling

### 🔄 Automated Workflows

- **Upstash Integration**
- Automated email reminders for subscription renewals
- Configurable reminder schedules (7, 5, 2, 1 days before renewal)
- Custom email templates with subscription details

### 📩 Email System

- **Nodemailer integration** for email communications
- Professional HTML email templates
- Automated renewal reminders
- Support for transactional emails

## 🏗️ Database Design

- MongoDB with **Mongoose ODM**
- Well-structured schemas with **validations**
- Relationship between **User** and **Subscription** models

## 📂 Code Organization

- **MVC Architecture:** Models, Views, Controllers
- **Middleware-based request processing**
- **Modular routing** for better scalability
- **Centralized error handling**
- **Utility functions** for common operations

## ⚙️ Environment Configuration

Supports **Development** and **Production** environments. Environment variables required:

- **Database connection** (`MONGODB_URI`)
- **JWT settings** (`JWT_SECRET`, `JWT_EXPIRES_IN`)
- **Email credentials** (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
- **Third-party API keys** (Arcjet, Upstash, etc.)
- **Server configuration** (`PORT`)

## 🛠️ Development Features

- **ESLint** for code quality
- **Nodemon** for hot-reloading during development
- **Environment-specific configurations** for flexibility

## 🎓 What You Will Learn

Working on this project will help you gain experience in:

- Designing and structuring a **scalable REST API** using Express.js
- Implementing **secure authentication** with JWT and bcrypt
- Managing a **MongoDB database** with Mongoose ODM
- Handling **middleware, validation, and error handling** in an optimized way
- Using **Arcjet for security** enhancements (rate limiting, bot detection)
- Implementing **automated email workflows** with Nodemailer and Upstash
- Writing **clean, modular, and maintainable code** using the MVC pattern

## 🏁 Getting Started

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/subscription-tracker-api.git
cd subscription-tracker-api

# Install dependencies
npm install
```

### ⚙️ Environment Variables

Create a **.env** file in the root directory and configure the required environment variables as mentioned in the Environment Configuration section.

```env
SERVER_URL="http://localhost:5500"
NODE_ENV=development
DB_URL="<your-mongodb-url>"
JWT_SECRET="secret"
JWT_EXPIRES_IN="1d"
ARCJET_KEY="<your-arcjet-key>"
ARCJET_ENV="development"
QSTASH_URL="http://127.0.0.1:8080"
QSTASH_TOKEN="<your-qstash-token>"
EMAIL_PASSWORD="<your-email-password>"
```

### 🚀 Running the Server

```bash
# Start development server
npm run dev

# Start production server
npm start
```

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 **Happy Coding!**


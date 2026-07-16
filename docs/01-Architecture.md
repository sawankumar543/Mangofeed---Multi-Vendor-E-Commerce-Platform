# Mangofeed Architecture

## Project Information

**Project Name:** Mangofeed

**Project Type:** Multi Vendor E-Commerce Platform

---

# Vision

Mangofeed is a modern multi-vendor e-commerce platform where anyone can create an account, purchase products, become a verified seller, and manage their own online store.

The platform focuses on scalability, clean architecture, security, performance, and maintainability while providing a professional shopping experience.

---

# Objectives

- Build a production-ready MERN application.
- Learn industry-level project architecture.
- Follow clean code principles.
- Build reusable components.
- Apply scalable folder structures.
- Implement secure authentication & authorization.
- Gain real-world software engineering experience.

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- React Router DOM
- Redux Toolkit
- RTK Query
- React Hook Form
- Zod
- Axios
- Tailwind CSS
- Framer Motion
- React Hot Toast
- Recharts
- React Helmet Async

---

## Backend

- Node.js
- Express.js
- JavaScript
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Bcrypt
- Nodemailer
- Multer
- Cloudinary
- Helmet
- Morgan
- Compression
- Express Rate Limit

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman
- MongoDB Compass


# High Level Architecture

```
                Browser
                    │
                    ▼
        React + TypeScript Frontend
                    │
          Axios / RTK Query (HTTP)
                    │
                    ▼
         Express.js REST API Server
                    │
      Authentication Middleware
                    │
                    ▼
        Controllers → Services
                    │
                    ▼
              MongoDB Database
```

# Architecture Pattern

Mangofeed follows a layered architecture.

Presentation Layer

↓

Routing Layer

↓

Controller Layer

↓

Service Layer

↓

Database Layer

Each layer has a single responsibility.

This makes the project easier to maintain and extend.

# Core Modules

Authentication

Users

Buyer

Seller

Products

Categories

Wishlist

Cart

Orders

Payments

Reviews

Notifications

Admin

Analytics

Search

Profile

Settings

# User Roles

There are four types of users inside Mangofeed.

## Guest

Can browse products.

Cannot purchase products.

Cannot access dashboard.

---

## User

Default account after registration.

Can update profile.

Can create wishlist.

Can add items to cart.

Can become Buyer.

Can become Seller.

---

## Buyer

Verified customer.

Can purchase products.

Can manage orders.

Can review purchased products.

---

## Seller

Verified store owner.

Can upload products.

Manage inventory.

Manage orders.

View earnings.

View analytics.

---

## Admin

Has complete system access.

Can manage users.

Manage products.

Manage categories.

Manage orders.

View platform analytics.

Approve sellers.

Suspend accounts.

Delete inappropriate content.

# Authentication Flow

Signup

↓

Email Verification

↓

Login

↓

JWT Access Token

↓

Refresh Token

↓

Protected Routes

↓

Role Based Authorization

# Frontend Folder Responsibilities

pages/

Contains route pages.

components/

Reusable UI components.

features/

Business logic related components.

store/

Redux Toolkit configuration.

services/

API calls.

schemas/

Zod validation schemas.

types/

Global TypeScript types.

utils/

Utility functions.

hooks/

Custom React hooks.

constants/

Application constants.

layouts/

Application layouts.

routes/

Protected and public routing.

# Backend Folder Responsibilities

controllers/

Receive request and return response.

services/

Contains business logic.

models/

MongoDB schemas.

middlewares/

Authentication and authorization.

routes/

REST API routes.

validators/

Request validation.

config/

Environment configuration.

database/

Database connection.

utils/

Helper functions.

emails/

Email templates.

uploads/

File upload handling.

constants/

Application constants.

# Development Principles

We will follow the following principles throughout the project.

- Clean Code

- Reusable Components

- Single Responsibility Principle

- Separation of Concerns

- Scalable Folder Structure

- Secure Authentication

- Consistent Naming

- Modular Architecture

- Performance Optimization

- Error Handling

- Validation First

- Documentation First

- Git Best Practices
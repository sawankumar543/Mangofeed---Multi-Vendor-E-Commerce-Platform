# Naming Conventions

## Purpose

This document defines the naming rules used throughout the Mangofeed project.

Following consistent naming conventions makes the project easier to read, maintain, and scale.

---

# General Rules

- Use meaningful names.
- Avoid abbreviations unless they are well known.
- Keep names descriptive.
- One responsibility = One name.

❌ data

✅ productList

❌ temp

✅ filteredProducts

---

# Folder Names

All folder names use lowercase.

Examples

components

features

hooks

services

utils

schemas

constants

middlewares

controllers

models

routes

---

# React Components

Use PascalCase.

Examples

ProductCard.tsx

Navbar.tsx

Sidebar.tsx

OrderSummary.tsx

CheckoutForm.tsx

---

# React Pages

Use PascalCase and end with "Page".

Examples

HomePage.tsx

LoginPage.tsx

RegisterPage.tsx

ProductDetailsPage.tsx

SellerDashboardPage.tsx

AdminDashboardPage.tsx

---

# Custom Hooks

Use camelCase and always start with "use".

Examples

useAuth.ts

useCart.ts

useProducts.ts

usePagination.ts

---

# Utility Functions

Use camelCase.

Examples

formatPrice.ts

generateSlug.ts

calculateDiscount.ts

formatDate.ts

---

# API Files

Use feature-based names.

Examples

auth.api.ts

user.api.ts

product.api.ts

seller.api.ts

order.api.ts

---

# Redux

Store

store.ts

Slices

authSlice.ts

cartSlice.ts

productSlice.ts

sellerSlice.ts

notificationSlice.ts

---

# TypeScript Types

Use feature-based naming.

Examples

user.types.ts

product.types.ts

order.types.ts

auth.types.ts

---

# Validation Schemas

Use feature names.

Examples

login.schema.ts

register.schema.ts

product.schema.ts

checkout.schema.ts

---

# Constants

Use descriptive names.

Examples

roles.ts

routes.ts

api.ts

storage.ts

---

# Backend Controllers

Use singular feature names.

Examples

auth.controller.js

product.controller.js

order.controller.js

seller.controller.js

---

# Backend Services

Examples

auth.service.js

product.service.js

payment.service.js

---

# Backend Models

Examples

user.model.js

product.model.js

order.model.js

---

# Backend Routes

Examples

auth.route.js

product.route.js

order.route.js

---

# Backend Middlewares

Examples

auth.middleware.js

error.middleware.js

upload.middleware.js

---

# Environment Variables

Use UPPER_SNAKE_CASE.

Examples

PORT

NODE_ENV

JWT_SECRET

MONGODB_URI

CLOUDINARY_API_KEY

---

# Database Collections

Use plural names.

Examples

users

products

orders

reviews

stores

categories

---

# Variables

Use camelCase.

Examples

userName

productPrice

totalAmount

---

# Boolean Variables

Always start with

is

has

can

should

Examples

isVerified

isLoggedIn

hasPermission

canEdit

shouldRefresh

---

# Functions

Use verbs.

Examples

createProduct()

deleteProduct()

updateProfile()

sendVerificationEmail()

calculateTotal()

---

# Async Functions

Use action-based names.

Examples

fetchProducts()

loginUser()

createOrder()

verifyEmail()

---

# CSS Classes

Use Tailwind utility classes.

For reusable variants use clsx + tailwind-merge.

---

# Git Branches

feature/auth

feature/products

feature/cart

feature/orders

bugfix/login

hotfix/payment

---

# Commit Messages

Follow Conventional Commits.

Examples

feat(auth): add login endpoint

fix(cart): resolve quantity issue

docs(api): update authentication endpoints

refactor(product): simplify product service

style(button): improve spacing

test(auth): add login tests
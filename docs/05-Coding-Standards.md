# Coding Standards

## Purpose

This document defines the coding standards for the Mangofeed project.

The goal is to ensure that every file follows the same structure, naming conventions, formatting, and best practices.

These standards improve readability, maintainability, collaboration, and scalability.

---

# Core Principles

Every piece of code should follow these principles.

- Readability over cleverness.
- Simplicity over complexity.
- Reusability over duplication.
- Composition over inheritance.
- Small reusable modules.
- One responsibility per function.
- One responsibility per component.

---

# Clean Code Rules

Always write self-explanatory code.

Avoid unnecessary comments.

Prefer descriptive names.

Keep functions small.

Avoid nested conditions whenever possible.

Never repeat the same logic twice.

---

# File Size

Recommended limits

Component

≤ 200 lines

Page

≤ 300 lines

Hook

≤ 150 lines

Utility

≤ 100 lines

Service

≤ 200 lines

If a file becomes too large, split it into smaller modules.

---

# Folder Responsibility

Each folder must have only one responsibility.

Example

components/

Only reusable UI.

pages/

Only route pages.

hooks/

Only custom hooks.

schemas/

Only Zod schemas.

services/

Only API communication.

Never mix responsibilities.

---

# React Component Rules

One component = One responsibility.

Prefer functional components.

Always use TypeScript.

Keep JSX clean.

Move complex logic into hooks.

Avoid deeply nested JSX.

---

# Component Structure

Imports

↓

Types

↓

Constants

↓

Component

↓

Hooks

↓

Functions

↓

Return JSX

↓

Export

---

# Props

Always define props using interfaces.

Example

interface ProductCardProps {

}

Avoid using any.

---

# State Management

Use useState only for local UI state.

Use Redux Toolkit for global state.

Server state should be handled by RTK Query.

Never store duplicated state.

---

# Custom Hooks

Move reusable logic into hooks.

Bad

Logic repeated in three pages.

Good

Create

useProducts()

useCart()

useAuth()

---

# Forms

Always use

React Hook Form

+

Zod

Never validate manually inside components.

---

# Validation

Frontend

React Hook Form

+

Zod

Backend

Zod validation

↓

Controller

↓

Service

↓

Database

Never trust client-side validation alone.

---

# API Calls

Never call Axios directly inside pages.

Wrong

HomePage

↓

Axios

Correct

HomePage

↓

Product Service

↓

Axios

---

# Redux

Each feature owns its own slice.

Example

authSlice

cartSlice

productSlice

sellerSlice

notificationSlice

---

# Error Handling

Never ignore errors.

Always

try

catch

Return meaningful error messages.

Never expose internal server errors to users.

---

# Async Code

Always use async/await.

Avoid promise chaining.

Good

async function login()

Bad

login().then()

---

# TypeScript

Never use any unless absolutely necessary.

Prefer interfaces.

Use utility types.

Use enums only when needed.

Keep types inside types folder.

---

# Styling

Use Tailwind CSS.

Avoid inline styles.

Reuse UI components.

Use clsx

+

tailwind-merge

for conditional classes.

---

# Imports Order

External libraries

↓

Absolute imports

↓

Relative imports

↓

Styles

Example

react

react-router-dom

redux

components

hooks

utils

./styles.css

---

# Constants

Never hardcode values.

Wrong

"/login"

Correct

ROUTES.LOGIN

Wrong

"admin"

Correct

ROLES.ADMIN

---

# Environment Variables

Never hardcode secrets.

Always use

.env

Example

JWT_SECRET

MONGODB_URI

CLOUDINARY_API_KEY

---

# Backend Architecture

Route

↓

Middleware

↓

Controller

↓

Service

↓

Model

↓

Database

Controllers never contain business logic.

Business logic belongs to Services.

---

# Controllers

Only receive requests.

Validate request.

Call service.

Return response.

Nothing more.

---

# Services

Contain business logic.

Communicate with database.

Return processed data.

No HTTP response handling.

---

# Models

Only database schema definitions.

No business logic.

---

# Middleware

Authentication

Authorization

Validation

Logging

Rate Limiting

Error Handling

Keep middleware focused.

---

# Logging

Never use console.log in production code.

Use Morgan for request logging.

Future enhancement:

Winston logger.

---

# Security Rules

Hash passwords.

Use HttpOnly cookies.

Validate every request.

Rate limit authentication APIs.

Sanitize user input.

---

# Performance

Lazy load pages.

Memoize expensive calculations.

Avoid unnecessary re-renders.

Paginate large datasets.

Optimize database queries.

---

# Git Rules

One feature per commit.

Write meaningful commit messages.

Never commit node_modules.

Never commit .env.

---

# Documentation

Every major feature must update

API.md

Database.md

README.md

if necessary.

Documentation should evolve with the code.

---

# Code Review Checklist

Before every commit, ask:

Is the code readable?

Is naming meaningful?

Can logic be reused?

Does it follow folder responsibility?

Are errors handled?

Are types correct?

Is validation implemented?

Will another developer understand this code?

If every answer is YES,

the code is ready.



## Common Mistakes

❌ Putting business logic inside controllers.

✅ Move it into services.

----------------------------

❌ Using any in TypeScript.

✅ Create proper interfaces.

----------------------------

❌ Calling axios inside pages.

✅ Use service layer.
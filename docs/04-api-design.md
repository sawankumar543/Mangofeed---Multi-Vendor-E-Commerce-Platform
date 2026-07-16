# Mangofeed REST API Design

## Overview

Mangofeed follows REST API architecture.

Base URL

/api/v1

All endpoints return JSON.

Authentication is handled using JWT stored in HttpOnly cookies.

---

# Response Format

Success Response

{
  "success": true,
  "message": "Success message",
  "data": {}
}

Error Response

{
  "success": false,
  "message": "Error message",
  "errors": []
}


## Authentication APIs
POST   /auth/register

POST   /auth/verify-email

POST   /auth/login

POST   /auth/logout

POST   /auth/refresh-token

POST   /auth/forgot-password

POST   /auth/reset-password

GET    /auth/me

## User APIs

GET    /users/profile

PATCH  /users/profile

PATCH  /users/avatar

PATCH  /users/password

DELETE /users/account

## Seller APIs

POST   /seller/apply

GET    /seller/dashboard

PATCH  /seller/store

GET    /seller/orders

GET    /seller/products

## Product APIs

GET    /products

GET    /products/:id

POST   /products

PATCH  /products/:id

DELETE /products/:id

## Category APIs

GET /categories

POST /categories

PATCH /categories/:id

DELETE /categories/:id

## Cart APIs

GET /cart

POST /cart

PATCH /cart/:productId

DELETE /cart/:productId

DELETE /cart


## Wishlist APIs

GET /wishlist

POST /wishlist/:productId

DELETE /wishlist/:productId

## Order APIs

POST /orders

GET /orders

GET /orders/:id

PATCH /orders/:id/cancel

## Review APIs

POST /reviews

PATCH /reviews/:id

DELETE /reviews/:id

## Admin APIs

GET /admin/dashboard

GET /admin/users

GET /admin/products

GET /admin/orders

PATCH /admin/users/:id

DELETE /admin/products/:id

DELETE /admin/users/:id

## HTTP Status Codes

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

500 Internal Server Error


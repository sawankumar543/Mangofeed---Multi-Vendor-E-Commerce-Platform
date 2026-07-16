# Mangofeed Database Design

## Overview

Mangofeed is a multi-vendor e-commerce platform.

The database is designed to support:

- Multiple user roles
- Product management
- Orders
- Reviews
- Wishlist
- Cart
- Seller Stores
- Analytics
- Notifications
- Future scalability

MongoDB will be used as the primary database.

Mongoose will be used as the ODM.

---

# Database Collections

The application consists of the following collections.

1. Users

2. Stores

3. Categories

4. Products

5. Product Images

6. Cart

7. Wishlist

8. Orders

9. Order Items

10. Reviews

11. Coupons

12. Notifications

13. Addresses

14. Payments

15. Sessions

16. Refresh Tokens

17. Activity Logs

18. Reports

19. Settings

20. Banners

## 1️⃣ Users Collection
Purpose

Stores every registered user.

Each account starts as a normal User.

A User can later become Buyer or Seller.

Admin is manually assigned.

### fields 

_id

fullName

username

email

password

phone

avatar

bio

role

isEmailVerified

isPhoneVerified

status

createdAt

updatedAt

### Role

user

buyer

seller

admin

## 2️⃣ Stores Collection

Har seller ka ek store hoga.

_id

ownerId

storeName

storeSlug

description

logo

banner

email

phone

address

verificationStatus

rating

followersCount

totalProducts

totalSales

createdAt

## 3️⃣ Categories

_id

name

slug

icon

image

parentCategory

isActive

createdAt

### Example
Electronics

Clothing

Books

Food

Subcategories ke liye parentCategory use karenge.

## 4️⃣ Products

_id

sellerId

storeId

title

slug

description

price

discountPrice

categoryId

brand

stock

sku

status

averageRating

totalReviews

images

tags

createdAt

updatedAt

### Status

Draft

Pending

Published

Rejected

## 5️⃣ Cart

_id

userId

items

totalQuantity

totalPrice

updatedAt

Ek user ka ek active cart hoga.

## 6️⃣ Wishlist
_id

userId

products

## 7️⃣ Orders
- _id

- orderNumber

- buyerId

- sellerId

- storeId

- items

- shippingAddress

- paymentMethod

- paymentStatus

- orderStatus

- subtotal

- discount

- shippingFee

- tax

- grandTotal

- createdAt


## 8️⃣ Reviews

_id

productId

userId

rating

title

comment

images

likes

createdAt

Sirf wahi user review de sakta hai jisne product kharida ho.

## 9️⃣ Addresses

_id

userId

fullName

phone

country

state

city

postalCode

addressLine1

addressLine2

isDefault

Ek user ke multiple addresses ho sakte hain.

## 🔟 Notifications

_id

userId

title

message

type

isRead

createdAt

## 1️⃣1️⃣ Payments

_id

orderId

userId

amount

currency

paymentMethod

transactionId

status

paidAt

Abhi COD support hoga. Baad me Razorpay/Stripe add karenge.

## 1️⃣2️⃣ Coupons
_id

code

discountType

discountValue

minimumAmount

expiryDate

usageLimit

isActive

## 1️⃣3️⃣ Reports
Users kisi product ya review ko report kar sakte hain.

_id

reportedBy

targetType

targetId

reason

status

## Relationships (Conceptual)
User
 ├── Store (1:1)
 ├── Cart (1:1)
 ├── Wishlist (1:1)
 ├── Orders (1:N)
 ├── Reviews (1:N)
 └── Addresses (1:N)

Store
 └── Products (1:N)

Category
 └── Products (1:N)

Product
 ├── Reviews (1:N)
 └── OrderItems (1:N)

Order
 ├── Buyer (N:1)
 ├── Seller (N:1)
 └── Payment (1:1)
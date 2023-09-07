# Product catalog API

## Base URL

All requests should start with the **BASE_URL**

https://ecommerce-server-ee7i.onrender.com/

## Load Products

GET `/products` returns an array of products

**Possible params**

- limit (12 by default)
- order (format is `fieldName:[ASC|DSC]`)
- productType (filter by category)
- searchQuery (filter by name)
- offset

**Example**  
GET
[/products?limit=5&order=year:asc&productType=phones&searchQuery=black](https://ecommerce-server-ee7i.onrender.com/products?limit=5&order=year:asc&productType=phones&searchQuery=black)

## Load Products with Hot Prices

GET [/products/discount](https://ecommerce-server-ee7i.onrender.com/products/discount) returns an array of 12 products with the biggest discount

## Load New Products

GET [/products/new](https://ecommerce-server-ee7i.onrender.com/products/new) returns an array of all products released in 2019

## Load One Product

GET `/products/:id` finds and returns a required product.  
Can be identified either by `id` or by `slug`

**Examples**  
GET [/products/35](https://ecommerce-server-ee7i.onrender.com/products/35)  
GET [/products/apple-iphone-11-pro-max-512gb-gold](https://ecommerce-server-ee7i.onrender.com/products/apple-iphone-11-pro-max-512gb-gold)

## Load Recommended Products

GET `/products/:id/recommended` returns an array of 12 products priced similar to the currently selected product.  
Requires either `id` or `slug` of the currently selected product.

**Examples**  
GET [/products/7/recommended](https://ecommerce-server-ee7i.onrender.com/products/7/recommended)  
GET [/products/apple-iphone-11-256gb-black/recommended](https://ecommerce-server-ee7i.onrender.com/products/apple-iphone-11-256gb-black/recommended)

## Load Static Images

Also, it's possible to get static images from the server.  

**Example**  
GET [/img/tablets/apple-ipad-10/yellow/00.jpg](https://ecommerce-server-ee7i.onrender.com/img/tablets/apple-ipad-10/yellow/00.jpg)

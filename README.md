# Paradise Nursery - Online Plant Shop

Welcome to **Paradise Nursery**, an online shopping application for houseplants built with **React** and **Redux Toolkit**. This project demonstrates state management, component composition, dynamic rendering, and event handling in a React application.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The **Paradise Nursery** project allows users to:

- Browse a variety of houseplants on a **Product Listing Page**.
- Add plants to a **Shopping Cart**.
- Update quantities, remove items, and view total costs.
- Navigate easily between the **Landing Page**, **Product Listing Page**, and **Shopping Cart Page**.

This project was built as part of the **React and Redux final project** for learning purposes and is deployed publicly using GitHub Pages.

---

## Features

### Landing Page

- Company name and introduction paragraph.
- A **Get Started** button that navigates to the product listing page.
- Background image showcasing houseplants.

### Product Listing Page

- At least six houseplants, organized into categories (e.g., "Aromatic Plants", "Medicinal Plants").
- Each plant card displays:
  - Thumbnail image
  - Name
  - Price
  - Add to Cart button
- Dynamically updates cart quantity in the navbar icon when items are added.

### Shopping Cart Page

- Displays all items added to the cart.
- Each cart item card includes:
  - Thumbnail
  - Name
  - Unit price
  - Quantity with increment/decrement buttons
  - Subtotal
  - Delete button
- Calculates **total cost** for all items in the cart.
- **Continue Shopping** button to return to the product listing page.
- **Checkout** button with placeholder alert for future functionality.

### State Management

- Uses **Redux Toolkit** for managing cart state.
- Reducers:
  - `addItem()` – Add a plant to the cart.
  - `removeItem()` – Remove a plant from the cart.
  - `updateQuantity()` – Update quantity of a specific plant.
- State updates trigger UI re-render for real-time feedback.

---

## Technologies Used

- React (Functional Components & Hooks)
- Redux Toolkit (State Management)
- JavaScript (ES6+)
- CSS / SCSS
- HTML
- Git / GitHub
- GitHub Pages (Deployment)

---

## Project Structure


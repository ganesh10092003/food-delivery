# InstaFood

**InstaFood** is a responsive and feature-rich food delivery web application built using the MERN Stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. The application provides a seamless experience for users to browse, order food, and manage orders. It includes both user and admin interfaces to handle operations effectively.

## Features

- **User Authentication:**
  - Secure login and registration using JWT tokens.
  - Role-based access control for users and admins.

- **Home Page:**
  - Browse and search for food items.
  - View detailed descriptions and prices of food items.
  - Add items to the cart and place orders.

- **Cart Management:**
  - View items in the cart with the ability to adjust quantities.
  - Secure checkout process.

- **Admin Interface:**
  - Admin dashboard with controls to manage food items, orders, and users.
  - Add, update, and delete food items.
  - View and manage customer orders.

- **Order Tracking:**
  - Users can view their order history and current order status.

## Tech Stack

- **Frontend:**
  - React.js for building the user interface.
  - Tailwind CSS for responsive and modern styling.

- **Backend:**
  - Node.js and Express.js for server-side logic.
  - MongoDB for database management.
  - Mongoose for object data modeling (ODM).

- **Authentication:**
  - JWT (JSON Web Tokens) for secure authentication.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/InstaFood.git

2. Navigate to the project directory:

   ```bash
   cd InstaFood
   
3. Install the dependencies for both client and server:

   ```bash
   cd frontend
   npm install
   cd backend
   npm install

4. Set up environment variable in a .env file in the server directory:

   ```bash
   JWT_SECRET=your_jwt_secret

5. Start the development servers:
   ```bash
   cd frontend
   npm run dev
   cd ..
   cd backend
   npm run server
  
6. Open your browser and navigate to http://localhost:{port} to use the application.

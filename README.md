# User and Post Relational Database API

## Project Description
This project is a backend REST API built with Node.js, Express.js, Sequelize ORM, and MySQL. It manages users and posts and demonstrates a one-to-many relationship between database tables.

## Features
- Create, retrieve, update, and delete users.
- Create, retrieve, update, and delete posts.
- Establish relationships between Users and Posts.
- Use Sequelize migrations to manage database changes.
- Organize code into models, controllers, and routes.

## Technologies Used
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Express.js REST API
- Sequelize CLI

## Installation and Setup

### 1. Clone the repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure the database
Create a MySQL database named `user_post_db`.

Configure your MySQL username and password in the appropriate database configuration files. Never publish real passwords or secret credentials.

### 4. Run migrations
```bash
npx sequelize-cli db:migrate
```

### 5. Start the application
```bash
npm run dev
```

The server runs on port 500, unless configured otherwise.

## API Endpoints

### Users
| Method | Endpoint | Description |
|---|---|---|
| POST | `/users` | Create a user |
| GET | `/users` | Retrieve all users |
| GET | `/users/:id` | Retrieve a user |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |

### Posts
| Method | Endpoint | Description |
|---|---|---|
| POST | `/posts` | Create a post |
| GET | `/posts` | Retrieve all posts |
| GET | `/posts/:id` | Retrieve a post |
| PUT | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

## Database Relationship
A User can have many Posts, and each Post belongs to one User.

## Author
Afolabi Richard
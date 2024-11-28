# To-Do App (Array based)

This is a simple To-Do App built with Node.js and Express.js that uses in-memory storage (no database) to manage to-do tasks. It supports basic CRUD operations (Create, Read, Update, Delete).

\*\*(Harkirat Assignment 100xDev)

## Features

- Add a new to-do item.
- View all to-do items.
- Update an existing to-do item.
- Delete a to-do item.

## API Endpoints

1. Get All To-Dos
   - Method: `GET`
   - URL: `/todos`
   - Response:
   ```json
   {
     "success": true,
     "todos": [{ "id": 1, "title": "Sample To-Do" }]
   }
   ```
2. Add a New To-Do
   - Method: `POST`
   - URL: `/todos/create`
   - Request Body:
   ```json
   {
     "todo": "Learn Node.js"
   }
   ```
   - Response:
   ```json
   {
     "success": true,
     "message": "Todo added successfully!",
     "todo": { "id": 1, "title": "Learn Node.js" }
   }
   ```
3. Update a To-Do
   - Method: `PUT`
   - URL: `/todos/update/:id`
   - Request Body:
   ```json
   {
     "todo": "Master Node.js"
   }
   ```
   - Response:
   ```json
   {
     "success": true,
     "message": "Todo updated successfully!",
     "todo": { "id": 1, "content": "Master Node.js" }
   }
   ```
4. Delete a To-Do

   - Method: `DELETE`
   - URL:

     `1. /todos/delete/:id`(for specific todo)

     `2. /todos/delete/all`(for all todos)

   - Response:

   ```json
   {
     "success": true,
     "message": "Todo deleted successfully!",
     "todo": { "id": 1, "content": "Master Node.js" }
   }
   ```

5. Root Endpoint
   - Method: `GET`
   - URL: `/`
   - Response:
   ```json
   {
     "success": true,
     "message": [
       "1. All todos - /todos",
       "2. Delete todos - /todos/delete/:id",
       "3. Update todos - /todos/update/:id"
     ]
   }
   ```
   ## Setup and Installation
6. Clone the Repository
   ```bash
   git clone <repository-url>
   cd todo-app
   ```
7. Install Dependencies
   ```bash
   npm install
   ```
8. Run the App
   ```bash
   node app.js
   ```
9. Access the App

   Open your browser and go to : http://localhost:3000

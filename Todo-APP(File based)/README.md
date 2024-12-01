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
   [
    {
        "id": 1,
        "todo": "New todo"
    }
   ]
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
   [
    {
        "id": 1,
        "todo": "Learn Node.js"
    }
   ]
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
   [
    {
     
     "message": "Todo updated successfully!",
     "todo": { "id": 1, "content": "Master Node.js" }
   }
   ]
   ```
4. Delete a To-Do

   - Method: `DELETE`
   - URL:

     `1. /todos/delete/:id`(for specific todo)

     `2. /todos/delete/all`(for all todos)

   - Response:

   ```json
   {
    "message": "Task deleted successfully",
    "deletedTodo": [
            {
                "id": 5,
                "todo": "New todo 5"
            }
        ]
    }
   ```

   ## Setup and Installation
5. Clone the Repository
   ```bash
   git clone <repository-url>
   cd todo-app
   ```
6. Install Dependencies
   ```bash
   npm install
   ```
7. Run the App
   ```bash
   node app.js
   ```
8. Access the App

   Open your browser and go to : http://localhost:5000

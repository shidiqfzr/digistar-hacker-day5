# Simple Todo Application with Express

## Overview

This is a simple Todo application built using Express.js. It provides RESTful API endpoints to create, read, update, delete, and toggle the completion status of todo items. The application runs on port 3000 by default and uses an in-memory data structure for storing todo items.

## Features

- **Create**: Add new todo items with a description and date.
- **Read**: Retrieve a list of all todo items.
- **Update**: Modify existing todo items (description and date).
- **Delete**: Remove todo items from the list.
- **Toggle Completion**: Change the completion status of a todo item.

## Data Structure

Each todo item has the following properties:

- `id`: A unique identifier for each todo (generated using `Date.now().toString()`).
- `description`: A text description of the todo item.
- `date`: The date associated with the todo item in `dd-mm-yy` format.
- `is_checked`: A boolean indicating whether the todo item is completed or not.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/digistar-hacker-day4.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd digistar-hacker-day4
    ```

3. **Install dependencies:**

    ```bash
    npm install express mongoose nodemon dotenv
    ```

4. **Create a `.env` file** (if needed for environment-specific settings):

    ```bash
    touch .env
    ```

   Add any environment variables needed, such as port or database URLs.

5. **Start the server:**

    ```bash
    npm run dev
    ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Usage

### API Endpoints

- **GET /todos**: Retrieve all todo items.
- **POST /todos**: Create a new todo item.
  - Body: `{ "description": "your description", "date": "dd-mm-yy" }`
- **PUT /todos/:id**: Update an existing todo item.
  - Params: `id` of the todo item to update.
  - Body: `{ "description": "updated description", "date": "dd-mm-yy" }`
- **DELETE /todos/:id**: Delete a todo item by its ID.
  - Params: `id` of the todo item to delete.
- **PATCH /todos/:id/toggle**: Toggle the completion status of a todo item.
  - Params: `id` of the todo item to toggle.

### Testing with Postman

1. **Install Postman**: Download and install Postman from [here](https://www.postman.com/downloads/).

2. **Create Requests**:
   - **GET**: 
     - URL: `http://localhost:3000/todos`
   - **POST**: 
     - URL: `http://localhost:3000/todos`
     - Body: `{ "description": "New Todo", "date": "25-09-23" }`
   - **PUT**: 
     - URL: `http://localhost:3000/todos/{id}`
     - Body: `{ "description": "Updated Todo", "date": "26-09-23" }`
   - **DELETE**:
     - URL: `http://localhost:3000/todos/{id}`
   - **PATCH**:
     - URL: `http://localhost:3000/todos/{id}/toggle`

3. **Send Requests**: Use Postman to send the above requests and check the API responses.

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to open an issue or reach out at [shidiqfazar28@example.com](mailto:your-email@example.com).

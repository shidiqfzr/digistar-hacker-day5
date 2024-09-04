# Simple Todo Application with Express

## Overview

This is a simple Todo application built using Express.js. It provides basic functionality to create, read, update, delete, and toggle the completion status of todo items. The application runs on port 3000 and uses a basic in-memory data structure to store todo items.

## Features

- Create new todo items
- Update existing todo items
- Delete todo items
- Display all todo items
- Toggle the completion status of todo items

## Data Structure

Each todo item has the following properties:

- `id`: A unique identifier for each todo (generated using `Date.now().toString()`)
- `description`: A text description of the todo item
- `date`: The date associated with the todo in `dd-mm-yy` format
- `is_checked`: A boolean indicating whether the todo item is completed or not

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/digistar-hacker-day3.git
    ```

2. Navigate into the project directory:

    ```bash
    cd digistar-hacker-day3
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

   The server will be running on [http://localhost:3000](http://localhost:3000).
# Node.js & EJS Practice Project

A multi-page web application built to practice backend routing, server-side rendering, and serving static assets using Node.js, Express, and Embedded JavaScript (EJS).

## Features

* **Role Dice Simulator (`/roledice`)**: A dynamic page that generates and renders random dice rolls on the server side.
* **Instagram Mockup (`/instagram`)**: A mock Instagram profile and feed page that reads and renders dynamic data from a local `data.json` file.
* **EJS Partials**: Modular code structure utilizing EJS includes for the `<head>` and `<footer>` components across multiple pages.
* **Static Assets**: Custom CSS and client-side JavaScript served efficiently from the `public` directory.
* **Custom Error Handling**: A dedicated `error.ejs` template to gracefully handle unknown routes and catch errors.

## Project Structure

```text
node_ejs/
├── public/
│   ├── css/
│   │   └── style.css       # Global stylesheets
│   └── js/
│       └── app.js          # Client-side scripts
├── views/
│   ├── includes/
│   │   ├── footer.ejs      # Reusable footer component
│   │   └── head.ejs        # Reusable head/meta component
│   ├── error.ejs           # 404 / Error template
│   ├── home.ejs            # Landing page
│   ├── instagram.ejs       # Instagram mock page
│   └── roledice.ejs        # Dice roller page
├── data.json               # Mock database/JSON data
├── index.js                # Main Express server file
└── package.json            # Project dependencies
```

## Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mikail-munshi/node_ejs.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd node_ejs
   ```

3. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   *(Note: If you have `nodemon` installed globally, you can use `nodemon index.js` for hot-reloading during development.)*

5. **View the application:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your `index.js` file).

## Project Learnings

Building this project provided hands-on experience with:

* Setting up a basic Express server and defining routes.
* Configuring Express to use EJS as the view engine (`app.set('view engine', 'ejs')`).
* Passing data from an Express route (and parsing JSON) directly into EJS templates.
* Structuring a Node.js project directory with `public` folders for static files and `views` for templates.
* Implementing EJS `<%- include() %>` tags to keep code DRY and maintainable.
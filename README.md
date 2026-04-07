# To-Do App

A clean, dark-themed To-Do application built with vanilla HTML, CSS, and JavaScript.

## Features

- Add tasks with a due date
- Mark tasks as complete (strikethrough)
- Delete tasks
- Filter by All / Pending / Done
- Sort by date (ascending/descending) or name (A–Z)
- Input validation with error messages
- Press Enter to add a task
- Task completion counter
- Empty state message when all tasks are deleted

## Project Structure

```
📁 To-Do App
├── todo.html      # App structure and layout
├── todo.css       # Styling and dark theme
└── todo.js        # App logic and interactivity
```

## How to Run

No installation needed. Just clone the repo and open `todo.html` in your browser.

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Then open `todo.html` directly in any browser, or use a local server like VS Code Live Server.

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and layout |
| CSS3 | Styling, CSS Grid, CSS Variables |
| JavaScript (ES6) | App logic, DOM manipulation |
| Google Fonts | DM Sans + Syne typefaces |

## Key Concepts Used

- **CSS Variables** — for consistent dark theme colors across the whole app
- **CSS Grid** — for the input row and each task row layout
- **Array methods** — `.push()`, `.splice()`, `.filter()`, `.sort()`, `.map()` for managing tasks
- **DOM manipulation** — `innerHTML`, `querySelector`, `addEventListener`
- **originalIndex pattern** — ensures delete and complete always target the correct task even after filtering or sorting



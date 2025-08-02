# 📝 Note Taker App

A simple web-based note-taking application built with **Node.js**, **Express**, and **EJS**. Users can create, view, and edit text files from a browser interface.

---

## 📁 Features

- Create text notes (`.txt` files)
- View the contents of each note
- Edit existing notes (rename or update)
- Dynamic routing using Express
- EJS templating for rendering views
- File storage handled with Node.js `fs` module

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/note-taker.git
cd note-taker

### 2. Install Dependencies
       npm install

### 3. Run the app
       npx nodemon index.js


note-taker/
│
├── files/               # All note .txt files are saved here
├── public/              # Static files (if any)
├── views/               # EJS templates (index, edit, show)
│   ├── index.ejs
│   ├── edit.ejs
│   └── show.ejs
├── index.js             # Main Express server
├── package.json
└── README.md

🌐 Tech Stack
Node.js

Express.js

EJS (Embedded JavaScript Templates)

Tailwind CSS (for styling)

File System (fs) Module

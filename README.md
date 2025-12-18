# 🎬 Anime Website – Node.js MVC Project

A responsive anime streaming-style website built using **Node.js, Express, EJS, and Bootstrap** following the **MVC architecture**.  
This project demonstrates server-side form handling, routing, and dynamic data rendering.

---

## 🚀 Features

- MVC folder structure (Model–View–Controller)
- User Registration using Bootstrap Modal
- Form data handled via Node.js & Express
- Data rendered on a separate page using EJS
- Responsive UI with Anime-style dark theme
- Clean and professional UI (Bootstrap 5)

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Template Engine:** EJS
- **Architecture:** MVC Pattern

---

## 📂 Folder Structure

form-datacontroll/
│
├── app.js
├── package.json
│
├── routes/
│ └── pageRoutes.js
│
├── controllers/
│ └── pageController.js
│
├── views/
│ ├── index.ejs
│ └── pages/
│ ├── success.ejs
│ ├── anime-details.ejs
│ ├── anime-watching.ejs
│ ├── categories.ejs
│ ├── contact.ejs
│ └── sign-up.ejs
│
├── assets/
│ ├── css/
│ ├── images/
│ └── js/
│
└── README.md

---

## 🔁 How Form Handling Works

1. User fills the registration form in a Bootstrap modal
2. Form submits data using POST method
3. Express middleware parses data (`req.body`)
4. Controller receives and processes data
5. Data is rendered on a success page using EJS

---

## ▶️ How to Run the Project

```bash
npm install
node app.js



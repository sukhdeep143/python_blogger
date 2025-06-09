This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Here’s a sample `README.md` file for your GitHub project [`python_blogger`](https://github.com/sukhdeep143/python_blogger) that explains how the project works, including setup, features, and usage:

---

# 📝 Python Blogger

A simple blog frontend application built using **Next.js**. This project allows users to **read**, **create**, and **view blog posts**. The frontend is connected to a Python-based backend API which handles data storage and authentication.

👉 **Live demo**: [make-your-thoughts-heard.netlify.app](https://make-your-thoughts-heard.netlify.app/)

---

## 🚀 Features

* 🧾 User-friendly blog interface
* ✍️ Add new blog posts
* 👁️ View blog posts
* 🔐 Secure sign-up and login (via backend API)
* 🌐 Communicates with a Flask backend
* 💾 MongoDB used for storing blog data

---

## 📁 Project Structure

```
python_blogger/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BlogCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── CreatePost.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── public/
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Backend**: Python (Flask) - [Backend repo](https://github.com/sukhdeep143/python-backend)
* **Database**: MongoDB
* **Authentication**: JWT (JSON Web Tokens)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sukhdeep143/python_blogger.git
cd python_blogger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the frontend locally

```bash
npm run dev
```

Make sure the backend is also running locally (see backend README: [python-backend](https://github.com/sukhdeep143/python-backend)).

---

## 🔌 Environment Variables

You can set your environment variables in a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:5000
```

This is the URL where your Flask backend is hosted.

---

## 📡 API Endpoints Used

* `POST /register` → Register a new user
* `POST /login` → Login and receive JWT token
* `GET /posts` → Fetch all posts
* `POST /posts` → Create a new post *(requires token)*
* `DELETE /posts/:id` → Delete a post *(if authorized)*

---

## 📷 Screenshots

> You can include screenshots of the homepage, login form, blog editor, etc.

---

## 🧑‍💻 Author

**Sukhdeep Singh**
📧 [sukhdeepsingh141414@gmail.com](mailto:sukhdeepsingh141414@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/sukhdeep-singh-0107)

---

## ⭐ Feedback

If you like this project, consider starring ⭐ it on GitHub and giving feedback!

---


# Deskbird User Management Frontend

A simple Angular application for user management, built as a part of a sample project for Deskbird. The app features basic authentication, route protection, and state management using NgRx. UI is built with PrimeNG for rapid prototyping.

---

## 🚀 Features

- ✅ Login page with form validation
- ✅ User list with routing and protection
- ✅ Route guard implementation
- ✅ NgRx for state management
- ✅ PrimeNG UI components
- ✅ Responsive layout
- ✅ Deployed as a static site (Render)

---

## 🐞 Known Issues & Limitations

1. **Unexpectedly large bundle size (~1MB+)**  
   The initial build size seems larger than expected for the current app scope. The likely culprit is PrimeNG icons, but further investigation is needed to optimize the bundle.

2. **NgRx usage may need refactoring**  
   The NgRx store setup works but may not follow best practices strictly. Needs further review against the official documentation and style guide.

---

## 🔮 Future Enhancements

- 🤔 More fields for users (like title, date of birth, hired date etc.)
- ↕️ Table sorting
- 🚧 Virtual scroll support for large user lists
- 📝 Self-registration flow for users
- 🔐 Admin registration

---

## 🛠 Tech Stack

- **Angular**
- **NgRx**
- **PrimeNG**
- **TypeScript**
- **SCSS**
- **Deployed on Render (static hosting)**

---

## 📦 Setup & Development

```bash
npm install
npm start
```
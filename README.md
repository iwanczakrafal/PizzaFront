#  Pizza portal v1.0.0 frontend

## Description

This is a simple pizza portal.
As a guest you can only see the basic products, but after creating an account and logging in, you also get access to special products and the possibility of placing them in the basket.
As an administrator, you can do what the user can do with the extension of the ability to add new products, delete, edit and view all baskets.

##  Resources
**Live demo:** IN PROGRESS \
**Github backend:** https://github.com/iwanczakrafal/PizzaBack \
**Github frontend:** https://github.com/iwanczakrafal/PizzaFront 

## Tech Stack
<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>&nbsp; &nbsp;&nbsp;&nbsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>&nbsp; &nbsp;&nbsp;&nbsp;<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

##  Project structure
```
PizzaFront/
├── public/
│   └── img/
├── src/
│   ├── components/
│   │   ├── Banner
│   │   ├── Basket
│   │   ├── Footer
│   │   ├── LoginForm
│   │   ├── Navbar
│   │   ├── Products
│   │   ├── RegisterForm
│   │   ├── SingleProduct
│   │   └── Slider
│   ├── redux/
│   │   └── slice
│   ├── utils/
│   │   └── hooks
│   └── views/
│       ├── BasketView.tsx
│       ├── HomeView.tsx
│       ├── LoginView.tsx
│       ├── ProductView.tsx
│       └── RegisterView.tsx
├── .gitignore
├── config-overrides.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

##  Installation project

**Clone the project:**
```
git clone https://github.com/iwanczakrafal/PizzaFront.git
```
**Go to the project directory:**
```
cd PizzaFront
```
**Install dependencies:**
```
npm install
```
**Start the server:**
```
npm start 
```

## The application is currently being expanded to include functionality:
* admin dashboard,
* payment system,
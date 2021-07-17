# Alex Sanchez Website Portfolio
![GitHub](https://img.shields.io/github/license/dev4l3x/portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/dev4l3x/portfolio)
![GitHub branch checks state](https://img.shields.io/github/checks-status/dev4l3x/portfolio/main)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/dev4l3x/portfolio/next)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/dev4l3x/portfolio/react)

My portfolio website made with Next.js.
## Used technologies and packages
* Next.js
* Tailwind
* Fontawesome
* js-yaml-loader - To import yaml files with webpack

## Project structure
```
.
├── components                          # Reutilizable components used by the modules
├── hooks                               # Custom hooks used by the app
│   └── responsiveHook.js
├── modules                             # React.js components that represents each section of the web
├── pages                               # Next.js pages that uses the modules to build the full page
│   ├── _app.js
│   ├── index.jsx
│   └── index.module.css
├── resources       
│   └── data.yml                        # Data used to build the page by next.js
└── styles.css                          # Global styles of the application
```

## Web page capture
![Web page capture](https://user-images.githubusercontent.com/65862026/126032150-08d6d023-1c45-488b-b11b-0c7412c391e4.jpeg)

Check the full webpage [here](https://www.asiglesias.dev)

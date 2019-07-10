# Mark down previewer and Downloader

This project is a simple design using React and Webpack to host built from scratch. The purpose is to construct a simple markdown previewer, where markdown can be typed on one side of the screen, and displayed on the other side. The program uses marked library for the mark down. The program also supports downloading the markdown (.md) file and downloading the html (.html) blob that it generates with basic styles.

### Basic file structure
```
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Filename.js
│   │   ├── Input.js
│   │   └── Output.js
│   ├── index.html
│   ├── index.js
│   └── index.html
├── node_modules
├── .babelrc
├── package.json
├── webpack.config
├── README.md
└── .gitignore
```

### Usage

To use the project just clone the project and make sure to have Node.js installed on your local machine

Make sure you are in the project directory and then **Run:**

``` npm install ```

To download all of the dependencies for the project

To start the project use command:

``` npm start ```

Which will begin the webpack server hot on local host 3000.


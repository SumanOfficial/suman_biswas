# Gulp Setup

A simple way to build workflow for your frontend development with Gulp.

## 🎁 What this project can do

> This gulp setup can do all of your needs for fontend development. <br> forget to manage your `scss ➡ css` | `es6 ➡ es5` | `image minified` | `live server` | `zip export`

### 💻 DEV ENVIRONMENT

- _Live reload browser with BrowserSync_
- _Hotloading styles with CSS Injection_

### 🎨 STYLESHEET

- _Sass to CSS conversion_
- _Error handling_
- _Auto-prefixing_
- _Minification_
- _Sourcemaps_

### 🗻 Javascript

- _Concatenation_
- _Minification/uglification_
- _Separate vendor and custom JS files handling_

### 📷 IMAGES

- _Minification/optimization of images_
- _File types: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`_
- _Separate vendor and custom JS files handling_

### 👁‍🗨 WATCHING

- _For changes in files to recompile_
- _File types: `.css`, `.html`, `.php`, `.js`_

### 🏭 PRODUCTION

- _Zip export_
  <br>
  <br>
  <br>

# 🚀 Getting Started

> Run step #1, #2, and #3 quickly in one go — Run inside local theme folder.

## ➡ STEP #0 - `Node js Installation`

If you are a beginner in Node.js, JavaScript, and npm packages —

- Go to the [Node's](https://nodejs.org/en/) site download
- Install Node on your system.

`This will install both Node.js and npm, i.e., node package manager — the command line interface of Node.js.`
<br>
<br>
You can verify the install by opening your terminal app and typing...

```
node -v
# This will show the version of node.(Eg : v14.2.4)

npm -v
# This will show the version of npm (Eg : v6.14.10)
```

## ➡ STEP #1 - `Download the Required Files`

- You can download the files directly and unzip it.
- You can also clone the project
  ```
  git clone https://github.com/SumanOfficial/gulp-setup
  (Recomended if you are familiar with git)
  ```

> It'll take a couple of minutes to install.<br>
> Run this commend inside the gulp setup folder

```
npm install
#this will install all of the node packages.
```

> verify the install by opening your terminal app and typing <br>

```
gulp -v
# This will show the version of gulp.(Eg : v2.35)
```

## ➡ STEP #2 - `Editing the Project Variables`

Configure the project paths and other variables inside the gulp.config.js file. This is a compulsory step. <br>

`Main Production path`

```
export const prod_dir = "./your-production-path";
```

`Main Development path`

```
export const dev_dir = "./your-development-path";
```

`Scss Development path`

```
export const dev_scss_dir  = "./scss-development-path";
```

`Scss Development File`

```
export const dev_scss_file  = "./scss-development-file";
```

`css Development Compiled path`

```
export const dev_scss_file  = "./css-development-path";
```

`Js Development path`

```
export const dev_js_dir  = "./js-development-path";
```

`Js Development File`

```
export const dev_js_file  = "./js-development-file";
```

`Js Production Path`

```
export const prod_js_dir  = "./js-production-path";
```

`Images Development Path`

```
export const dev_img_dir  = "./img-development-path";
```

`Images Production Path`

```
export const prod_img_dir  = "./img-production-path";
```

`Image Types`

```
export const img_types = "jpg,jpeg,png,svg,gif";
```

`Final Zip Production Path`

```
export const prod_img_dir  = "./final-zip-path";
```

<br>
<br>

## ➡ STEP #3 - `Start your project`

Once the configuration is done, you can open your project folder and run the start script. <br>

```
npm start

# To stop press CTRL + C
```

## ➡ STEP #4 - `More Scripts/Tasks`

Once the configuration is done, you can open your project folder and run the start script. <br>

`To Style Sheet Compile`

```
gulp styles
```

`To Optimize Images`

```
gulp images
```

`To Javascript Compile`

```
gulp images
```

`To copy Project for production`

```
gulp copy
```

`To compress final project`

```
gulp compress
```

<br>
<br>
<br>

# 🎗 License & Attribution

This project is inspired by [wp-gulp](https://nodejs.org/en/) awesome Kick-start a build-workflow for your WordPress plugins and themes with Gulp. <br>

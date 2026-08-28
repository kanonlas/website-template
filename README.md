# 🚀 Getting Started

Before you start building this website, make sure you have installed the required tools and extensions in **Visual Studio Code**.

---

## ⚠️ Before You Start

### 1. Install Live Server

Make sure you have installed the **Live Server** extension in **Visual Studio Code**.

> **Live Server** allows you to preview your website in the browser and automatically see changes while developing.

### 🔑 How to Open Your Website

To see what your website looks like:

1. Open your project in **VS Code**.
2. Open the HTML file you want to preview, such as `index.html`.
3. **Right-click** inside the HTML file.
4. Select **Open with Live Server**.

**Keyboard shortcut:**

```text
Alt + L → Alt + O
```

Your website will automatically open in your default browser.

### 💡 Quick Reminder

Whenever you make changes to your **HTML, CSS, or JavaScript**, Live Server will automatically refresh the browser so you can see the result without manually reloading the page.

> ✅ **Make sure Live Server is installed before starting the project.**

---

# 🧰 Helpful VS Code Shortcuts

VS Code provides **Emmet** shortcuts that can help you write HTML much faster.

### `!` + `Tab`

Type:

```text
!
```

Then press:

```text
Tab
```

VS Code will automatically generate the basic HTML structure:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My website</title>
  </head>

  <body>
  </body>
</html>
```

This saves you from writing the basic HTML structure manually every time you create a new page.

---

### `link` + `Tab`

Inside the `<head>` section, type:

```text
link
```

Then press:

```text
Tab
```

VS Code will generate:

```html
<link rel="stylesheet" href="style.css" />
```

This connects your HTML file to your CSS file.

---

## 📝 Example HTML Structure

Here is a simple starting point for this website:

```html
<!-- type "!" then Tab to create this automatic syntax -->
<!doctype html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>My Website</title>

    <!-- type "link" then Tab to create this automatic syntax -->
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>

    <!-- Example:
    <h1>YooHoo</h1>
    -->

    <nav class="navbar">
      <div class="container">

        <a href="#" class="logo">
          My Website
        </a>

        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </nav>

  </body>
</html>
```

### 🔍 What is happening here?

The basic structure is:

```text
HTML
│
├── <head>
│   ├── Character encoding
│   ├── Viewport settings
│   ├── Page title
│   └── CSS connection
│
└── <body>
    └── Website content
```

The `<nav>` element is used to create the **navigation bar** of the website.

---

# 🎨 Tailwind CSS

## ⚠️ Don't Forget to Install Tailwind CSS

This project uses **Tailwind CSS** to make styling the website easier and faster.

### What is Tailwind CSS?

**Tailwind CSS** is a utility-first CSS framework.

Instead of writing a separate CSS rule for every element:

```css
h1 {
  color: red;
  font-size: 32px;
  margin-bottom: 20px;
}
```

You can apply styling directly to your HTML using utility classes:

```html
<h1 class="text-red-500 text-3xl mb-5">
  YooHoo
</h1>
```

Each class represents a specific style:

```text
text-red-500 → text color
text-3xl     → font size
mb-5         → margin-bottom
```

---

## 🤔 Why are we using Tailwind CSS?

Tailwind helps us build the website **faster and more consistently**.

### Without Tailwind

You may need to create many custom CSS rules:

```css
.navbar {
  background: black;
  padding: 20px;
}

.logo {
  color: white;
  font-size: 24px;
}

.button {
  background: blue;
  padding: 10px 20px;
}
```

As the project becomes larger, your CSS file can become difficult to manage.

### With Tailwind

You can style elements directly:

```html
<nav class="bg-black p-5">
  <a class="text-white text-2xl">
    My Website
  </a>
</nav>
```

This means you can quickly change:

* 🎨 Colors
* 📏 Spacing
* 🔤 Font sizes
* 📐 Width and height
* 📱 Responsive layouts
* ✨ Hover effects
* 🌙 Dark mode

without constantly creating new CSS classes.

---

## 🧠 Tailwind Concept

Think of Tailwind as having many small building blocks:

```text
bg-blue-500
     ↓
background color

text-white
     ↓
text color

p-5
     ↓
padding

mt-4
     ↓
margin-top

rounded-lg
     ↓
border radius

shadow-lg
     ↓
box shadow
```

You combine these small utilities to create your design.

For example:

```html
<button
  class="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg hover:bg-blue-600"
>
  Click Me
</button>
```

Instead of creating a large custom `.button` CSS class, Tailwind lets us describe the appearance directly in the HTML.

> 💡 **Important:** Tailwind CSS does not replace HTML.
> HTML creates the structure, while Tailwind helps us style that structure.

---

# 🛠️ Tools Used in This Project

Before starting, make sure you have:

| Tool                   | Purpose             |
| ---------------------- | ------------------- |
| **Visual Studio Code** | Code editor         |
| **Live Server**        | Preview the website |
| **HTML**               | Website structure   |
| **Tailwind CSS**       | Website styling     |
| **JavaScript**         | Website interaction |

### Recommended Workflow

```text
Write HTML
    ↓
Add Tailwind classes
    ↓
Run Live Server
    ↓
Open website in browser
    ↓
Check the design
    ↓
Modify code
    ↓
Live Server refreshes
    ↓
Repeat 🔄
```

> 🚀 **Start small, understand what each part does, and build the website step by step.**

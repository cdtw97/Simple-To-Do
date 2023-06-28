# Simple-To-Do App in JavaScript

This repository contains the source code for a simple Todo List application implemented in two different versions: one with jQuery and another with pure JavaScript. 

The functionality between the two versions is identical, but the jQuery version uses jQuery's convenience methods for DOM manipulation and event handling, making the code more concise and easier to read. The pure JavaScript version does not rely on any external libraries and provides the same functionality using only standard JavaScript DOM APIs.

## Non-Persistent Data

Currently, this application does not persist data. Any tasks added or completed will be lost upon refreshing the page, as all data is currently stored only in memory and not saved to a database or local storage.


## Disclaimer

This project is intended for educational and learning purposes. The implementations are simple and not optimized for large-scale applications or production environments. They serve to demonstrate the fundamental differences between using jQuery and pure JavaScript for basic DOM manipulation and event handling in a simple web application. Use this code as a starting point and feel free to expand upon it for your own projects.

## Getting Started

To run this project, simply clone this repository, open `index.html` in your browser, and start adding, completing, and removing tasks.

## Comparison Between jQuery and Pure JavaScript Implementation

### jQuery Version

The jQuery version of this application takes advantage of jQuery's simple and readable syntax for DOM manipulation and event handling. jQuery also provides some useful utility functions that simplify tasks like AJAX requests and animations.

### Pure JavaScript Version

The pure JavaScript version of this application does not rely on any external libraries, meaning it will run in any environment where JavaScript is supported without the need for any additional dependencies. While the syntax may be a bit more verbose, it offers more control over the code's execution and is beneficial for understanding the underlying DOM API.

For those interested in understanding how JavaScript works at a lower level, or those working in environments where external libraries are not available or desirable, the pure JavaScript version could be preferable.

Enjoy using the Todo List App!

<p align="center">
    <img src="assets/logo.png" alt="TodoMVC">
</p>

<h1 align="center">TodoMVC - TypeScript & React</h1>


> TodoMVC is a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today. For this project, we will be going with the TypeScript & React implementation.

> _[TodoMVC - todomvc.com](http://todomvc.com)_

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

> React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.

> _[React - facebook.github.io/react](http://facebook.github.io/react)_

<br>

# Table of Contents

0. [Introduction](#introduction)
0. [Task One](#task-one)
0. [Task Two](#task-two)
1. [Task Three](#task-three)
2. [Notes](#notes)

<br>

> ## Introduction

Our frontend stack consists of React with TypeScript and various backends using REST and GraphQL APIs. You might have heard of [TodoMVC](http://todomvc.com/). It's a neat project which contains a reference implementation of a simple to-do app written in various JavaScript frameworks, libraries and dialects. The quality of the various implementations vary and your goal will be to improve one of the implementations and to add new features.

<br>

> ## Task One

Fork the project from GitHub. The implementation we are interested in is located in [examples/typescript-react](https://github.com/tastejs/todomvc). 

Start it using:
```cd examples/typescript-react && npm install && npm build && npm start```

Try to answer the following questions:

    1. What would you do differently?
    2. What's good?
    3. What's bad?
    4. Are you missing anything in the tooling department?

Optionally, if you think it will help you, apply some of your suggestions to the code.

<br>

> ## Task Two

We would like to be able to add labels to each to-do item.

1. When entering a new item we want to add one or more labels by adding words like @work or @important to an item.
2. These labels should not be part of the item title itself, but instead show up right-aligned as badges.
3. When editing the item (double-click) we want to be able to add, edit or remove labels.
4. Examples
    - "Buy groceries @shopping @household"
      - To-do: "Buy groceries"
      - Tags: "shopping", "household"



<br>

> ## Task Three

Optional, but bonus points if you write React component tests for your newly added features.

<br>

> ## Notes

What is important for us is that you document your work by writing proper Git commits (i.e. a clean history that shows us how you work). We care more about high quality work, than delivering lots of features with bad code. Styling does not have to be pixel-perfect.

Have fun with the challenge,

Team Mercateo
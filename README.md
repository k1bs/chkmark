![logo](/public/logo-readme.png)

## What is chk(mark) ?

chk(mark) is a note-taking app that makes your life a little bit richer. By using markdown, your notes come to life!

![screenshot](/public/screenshot.png)
## Getting Started

Using chk(mark) is simple!

After creating your user, simply click the `+` icon to add your first note.

The provided text field allows you to type plain text or [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

For instance, entering this:

```markdown
[I'm an inline-style link](https://www.google.com)
`inline.Code`
_this is italics_
```

renders as:

[I'm an inline-style link](https://www.google.com)  
`inline.Code`  
_this is italics_

## Creation Process

![wireframe 1](/public/wire1.jpg)


![wireframe 2](/public/wire2.jpg)

Setting out to build the app, I was inspired by an [article](https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d) to create a notes app with a twist.

I decided very early on that I was going to use this project as an opportunity to use the Redux workflow. For those unfamiliar with Redux, it defines a method of building a web app where the entire state of the application lives in one place, and can only be mutated through predefined methods, by dispatching what are called actions. The entire web app is made interactive by the dispatch of these actions.

```javascript
export const updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    text
  }
}
```

These actions are then processed by functions called reducers, affecting the state in the prescribed manner, seen below.

```javascript
const fetchingNotes = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_NOTES':
      return action.value
    case 'SET_NOTES':
      return false
    default:
      return state
  }
}
```

Concerning Markdown parsing, I decided early on to use a basic parser, and handle the editing of notes myself through the use of a `<textarea>` tag. This project makes use of the [react-markdown](https://github.com/rexxars/react-markdown) npm module for parsing.

## User Stories

* User clicks `+` icon, opening empty text area.
* User types note, optionally using Markdown.
* User clicks the 'save floppy' icon, note is displayed parsed in markdown.
* User can edit existing note by clicking on it on note list, and clicking the pencil.
* After clicking the pencil, the note is once again rendered in plain text inside a text area.
* User can delete an existing note by clicking the trash can icon.

## Built With

* [React](https://reactjs.org/) and [Redux](https://redux.js.org/) - Frontend frameworks
* [Ruby on Rails](http://rubyonrails.org/) - Backend API
* [react-markdown](https://github.com/rexxars/react-markdown) by rexxars - Markdown parser for react

## Acknowledgements

* Thanks to [John Master](https://github.com/jsm13) for being a wonderful guide to learning Redux.
* Also, thanks to [Hrishi Mittal](https://github.com/hrishimittal) for writing [this](https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d) article.

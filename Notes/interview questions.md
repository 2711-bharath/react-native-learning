## Why react js is called a library where as React Native is called a framework ?

<p>
React.js is called a library because it primarily handles the view layer, providing a declarative syntax for UI components. React Native is termed a framework because it offers a more comprehensive solution for mobile app development, providing tools, pre-built components, and access to device features. The distinction lies in their respective scopes and levels of abstraction.
</p>
<p>
React.js is designed for web applications and renders components in the browser using the DOM (Document Object Model), while React Native is designed for mobile app development and renders components using native UI elements on iOS and Android platforms. React Native also allows for platform-specific code adjustments when needed.
</p>

## Differences between package.json and package-lock.json

<p> The package.json file focuses on project metadata and specifying the desired versions of dependencies, while the package-lock.json file ensures deterministic installations by locking the exact versions of dependencies and their dependencies.
</p>

## Can we use text or string directly in View component? What is difference between html elements and react native components?

<p>No we can't write text or string in view directly.</p>

<p>HTML elements start with lower case where as react native components start with capital case.</p>

## What is JSX?

<p>JSX stands for JavaScript XML and it is a syntax extension of JavaScript. JSX is an easier way to create and work with user interface elements in JavaScript. It is a mix of HTML and JavaScript, making it is easier to express how our web page should look and behave.</p>

<p>
<b>JSX supports embedding JavaScript expressions within curly braces `{}`.</b> 
Example:
</p>

```
const name = 'Bharath';
const element = <p>Hello, {name}!</p>;
```

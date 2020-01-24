---
id: html
title: Lesson 1
sidebar_label: Getting Started With HTML
---
# Introduction to HTML! 

In order to work with HTML / CSS / Javascrip / etc. we're going to need to use some special tools! 

### VS Code: 

​	VS Code is a lightweight editor for code that has syntax highlighting! This may not seem like much now, but this will become incredibly helpful when you start building more and more complex sites! 

### A Github Account: 

​	Git is a powerful tool for version control (that we'll use much later into the course). Github is a site that allows for us to upload our code for free AND they host websites for free! This is where we'll host all of our code (you're looking at a github io site right now)! 

### A Codepen.io Account: 

​	Codepen allows for us to make really quick changes to code blocks (HTML, CSS, and Javascript) to see how they render. This is incredibly helpful for testing out small chunks of code before we add them to our sites. 



## What is HTML? 

​	Now that we've gotten all of the hard boring stuff out of the way, let's explore what HTML is. HTML stands for **Hyper-Text Markup Language**. When you think of a coding language, you may think of something that looks like: 

```javascript
const sayHello = personName => {
    console.log("Hello ", personName)
}
```

The code above is a type of javascript function (which we'll explore in a few weeks). HTML does not have functions like javascript. 

HTML creates and renders a document for our web browsers to read (Chrome, Firefox, Safari, Internet Explorer, etc.). The way that HTML renders onto a page is through **elements** and **attributes**! 



## Elements

Elements display content. They start with an opening tag and end with a closing tag. 

```html
<element> Here's some content inside my element </element>
```

The very first element that we see is the doctype element. The element stands alone at the top of the page that you want to render. This tells your browser that the page it's looking at is html. 

``` 
<!DOCTYPE>
```



The **html** element is where we put all the code: 

```html
<html>
    ALL HTML CODE GOES HERE
</html>
```



The **head** element is where we put *header* elements, such as the page *title*. The head is where the *brains* of the site live! 



The **body** element is where all the html that we see rendered on a page lives! 



Some elements hold no content (like line breaks, horizontal rules, and images, but we'll get to those later): 

```html
<br />
<hr />
<img />
```

And remember: 

**ALWAYS CLOSE YOUR ELEMENTS!**



### Block Elements

Elements take take up all the space from left to right are block elements! Many types of elements do this!

 `<div></div> `,` <p> </p>`,`<table> </table>` and `<hr />` are also block elements! 

 

```html
<div>
  This takes up all the space it can from left to right!
</div>

<p>
    I also take up as much space as I can!
</p>
```

Block elements are greedy! Without using CSS, block elements take up as much space as they can! There are a lot of ways to get around this, but block elements 
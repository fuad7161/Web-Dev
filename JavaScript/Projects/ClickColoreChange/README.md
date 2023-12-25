```Javascript
const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')

btns.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
});
```
# Important note

```Javascript
const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')
```
**Select all button to do some operation. And also select the body.**

```js
button.addEventListener('click',function(e)
```
**event listener to add event when button is called.**

## Keyword
- addEventListener
- querySelectorAll
- querySelector
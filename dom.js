//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document); //shows all diff props & method attached to the document object
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123 //to change title
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links)

//GETELEMENTBYID //
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = "Hello" //doesn'trespect styling
// headerTitle.innerText = 'Goodbye' //respects styling
// headerTitle.innerHTML = '<h3>Wowed</h3>'
// header.style.borderBottom = 'solid 3px #000'

//GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = '800'
// items[1].style.backgroundColor = 'yellow'

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'green'
// }

//GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = '800'
// li[1].style.backgroundColor = 'yellow'

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'green'
// }

//QUERYSELECTOR //
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input')
// input.value = 'Hello World'
// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = '#e60000'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'green'

//QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title')

// console.log(titles)
// titles[0].textContent = 'new one'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for (var i =0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'brown'
//     even[i].style.backgroundColor = 'yellow'
// }

//TRAVERSING THE DOM //
// var itemList = document.querySelector('#items')
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#e60000"
// console.log(itemList.parentNode.parentNode);

//parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#989898"
// console.log(itemList.parentElement.parentElement);

// //childnodes
// console.log(itemList.childNodes); //shows linebreaks which is not so good

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// //firstChild : includes line break
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);

//lastElementChild
// console.log(itemList.lastElementChild);

// //nextElementSibling
// console.log(itemList.nextElementSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = "#e60000"

// createElement

//Create a div with class, id and text in it.
// var newDiv = document.createElement('div')
// newDiv.className= 'hello'
// newDiv.id = 'identify'
// newDiv.setAttribute('title', 'Hello Div')
// var newDivText = document.createTextNode('Hello World')
// newDiv.appendChild(newDivText)


// // adding the div to the dom
// var container = document.querySelector('header .container') //locates the container class in the header
// var h1 = document.querySelector('header h1') // locates the h1 tag in the header
// console.log(newDiv)

// container.insertBefore(newDiv, h1) //adds the newDiv before the h1 tag
// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123)
// }) //to pass in direct function



//EVENTS

// var button = document.getElementById('button').addEventListener('click', buttonClick) // to pick from the function below

// function buttonClick(e){
    // console.log("Button clicked")
    // document.getElementById('header-title').textContent = 'Changed'
    // document.querySelector('#main').style.backgroundColor = '#e60000'
    // console.log(e)

//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.target.className)
//     console.log(e.target.classList)

//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)
// }


//MOUSE EVENTS
// var button = document.getElementById('button')
// var box = document.getElementById('box')

// button.addEventListener('click', runEvent) 
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent) 
// button.addEventListener('mouseup', runEvent) 

// box.addEventListener('mouseenter', runEvent) //fires for parent element
// box.addEventListener('mouseleave', runEvent) //fires for parent element
// box.addEventListener('mouseover', runEvent) //fires for content in parent element as well
// box.addEventListener('mouseout', runEvent) //fires for content in parent element as well

// box.addEventListener('mousemove', runEvent) 

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)

//     output
// }
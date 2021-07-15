var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//Form submit event
form.addEventListener('submit', addItem)
//delete event
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e){
    e.preventDefault()

    //get input value

    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li')
    //add class
    li.className = 'list-group-item';
    console.log(li)
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem))

    //create delete button
    var deleteBtn = document.createElement('button')

    //add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'))

    //append deletebtn to li
    li.appendChild(deleteBtn)

    //append li to list
    itemList.appendChild(li)
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
    }
    }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li')
    console.log(items)
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block'
        }else {
            item.style.display = 'none'
        }
    })
}
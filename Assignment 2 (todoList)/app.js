const newItems = document.querySelector('#addItem');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

console.log(newItems.value);
console.log(btn);
console.log(list);

window.onload = function() {
    const data = getList();
    if(data)
        list.innerHTML = data;
}

btn.addEventListener('click', function() {
    const newItem = newItems.value;
    if(!newItem)
        return;
    console.log(newItem);

    const newList = document.createElement('li');
    newList.innerText = newItem;
    list.appendChild(newList);
    saveList(newList.innerHTML);
    newItems.value = "";
    newItems.focus();
})

function saveList(list) {
    localStorage.setItem("todoList", list);
}
function getList(list) {
    return localStorage.getItem("todoList");
}
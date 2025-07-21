const buttonAdd = document.querySelector(".button_add")
const buttonDelete = document.querySelector(".button_delete")
const ul = document.querySelector("ul")

let  count = 1

buttonAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `${count}) Новый элемент`
    ul.appendChild(li)
    count++
})
buttonDelete.addEventListener('click', () => {
    ul.removeChild(ul.lastChild)
    count--
})
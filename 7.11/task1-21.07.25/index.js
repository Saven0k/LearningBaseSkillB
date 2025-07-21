const createB = document.querySelector('.create')
const serachB = document.querySelector('.search')

const ol = document.querySelector('ol')

const library = []



const createBook = (name) => {
    library.push(name)
    const li = document.createElement('li')
    li.textContent = name
    li.setAttribute('id', name)
    ol.appendChild(li)
}

const searchBook = (name) => {
    if (library.indexOf(name) === -1) {
        return {
            finded: false,
            name: name,
        }
    } else {
        return {
            finded: true,
            name: name
        }
    }
}

createB.addEventListener('click', () => {
    const newName = prompt("Введите название книги")
    if (!newName) {
        alert("Название книги не введено!")
    }
    else {
        createBook(newName)
    }
})

serachB.addEventListener('click', () => {
    const bookName = prompt("Введите название книги")

    if (!bookName) {
        alert("Название книги не введено!")
    }
    else {
        const searchedBook = searchBook(bookName)
        if (!searchedBook.finded) {
            alert("Книга не найдена")
        }
        else {
            const findLi = document.getElementById(searchedBook.name)
            findLi.classList.add('color')
        }
    }
})
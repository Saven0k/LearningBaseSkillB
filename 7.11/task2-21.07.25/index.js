const createB = document.querySelector('.create')
const serachB = document.querySelector('.search')

const ol = document.querySelector('ol')

const library = []



function renderList(library) {
    ol.innerHTML = ''
    library.forEach(rost => {
        const li = document.createElement('li');
        li.textContent = rost
        ol.appendChild(li);
    });
}


const createRost = (name) => {
    library.push(name)
    renderList(library)
}

const filter = (min) => {
    renderList(library.filter((rost) => rost > min))
}

createB.addEventListener('click', () => {
    const newROst = prompt("Введите рост")
    if (!newROst) {
        alert("Рост не введен!")
    }
    else {
        createRost(newROst)
    }
})

serachB.addEventListener('click', () => {
    const rost = prompt("Введите минимальный рост")

    if (!rost) {
        alert("Рост не введен!")
    }
    filter(rost)
})
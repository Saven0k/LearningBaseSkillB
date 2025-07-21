const createB = document.querySelector('.create')

const ol = document.querySelector('ol')

const cart = []



function renderList(cart) {
    ol.innerHTML = ''
    cart.forEach(rost => {
        const li = document.createElement('li');
        li.textContent = rost
        ol.appendChild(li);
    });
}


const createRost = (name) => {
    cart.push(name)
    renderList(cart.sort((a, b) => a.localeCompare(b, 'ru')))
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
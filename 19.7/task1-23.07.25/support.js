function createCart() {
    let cardEl = document.createElement('div');
    cardEl.classList.add("card")
    return cardEl;
}

function createDiv() {
    let div = document.createElement('div');
    div.classList.add("div")
    return div;
}

function createP(text) {
    let p = document.createElement('p')
    p.textContent = text
    return p;
}

function createh3(text) {
    let h3 = document.createElement('h3')
    if (typeof text === "number") {
        h3.textContent = text + " км"
    }
    else {
        h3.textContent = text
    }
    return h3;
}

function createButtonChange() {
    let button = document.createElement('button')
    button.classList.add('change')
    button.innerText = "Изменить"
    return button;
}


function createDistanceButton() {
    let button = document.createElement('button');
    button.classList.add('distance-button');
    button.textContent = "Рассчитать общее расстояние";
    return button;
}


function showDistanceResult(newDistance) {
    let result = document.createElement('h2');
    result.classList.add('distance-result');
    result.textContent = `Общее расстояние: ${newDistance} км`;
    return result;
}



export {
    createCart,
    createDiv,
    createP,
    createh3,
    createButtonChange,
    createDistanceButton,
    showDistanceResult
}
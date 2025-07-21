const buttonUp = document.querySelector(".button_up")
const buttonDown = document.querySelector(".button_down")
const ul = document.querySelector("ul")

let array = [110, 50, 384, 1, 51, 12]

render(array)

function render(array){
    ul.innerHTML = ``
    array.forEach(num => {
        ul.innerHTML = ul.innerHTML + `<li>${num}</li>`
    })

}

buttonUp.addEventListener('click', () => {
    render(array.sort((a,b) => a- b))
})
buttonDown.addEventListener('click', () => {
     render(array.sort((a,b) => b - a ))
})
const promocodeList = [
    {
        promocode: "PROM50",
        gift: "Скидка 50%"
    },
    {
        promocode: "PROM12",
        gift: "Скидка 12%"
    },
    {
        promocode: "PROM51",
        gift: "Скидка 51%"
    }
]

const button = document.querySelector('.button')
const span = document.querySelector('.span')
const input = document.querySelector('.promo')

const getCookie = () => {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [key, value] = item.split('=')
        acc[key] = value
        return acc
    }, {})
}

document.addEventListener('DOMContentLoaded', function () {
    for (const [key, value] of Object.entries(getCookie())) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${value}`;
        p.classList.add('success')
        span.appendChild(p);
    }
})



const hasCookie = (name) => {
    return document.cookie.split('; ').some(item => item.startsWith(`${name}=`));
}

button.addEventListener('click', () => {
    const p = document.createElement('p')
    let text = 'Такого промокода не существует'
    let clas = 'error'
    console.log(document.cookie)

    promocodeList.map(promo => {
        if (promo.promocode === input.value) {
            if (!hasCookie(input.value)) {
                document.cookie = `${promo.promocode}=${promo.gift}`
                text = `Промокод ${promo.promocode} применен. ${promo.gift}`
            } else {
                text = `Промокод ${promo.promocode} уже применен.`
            }
            clas = 'success'

        }
    })
    p.textContent = text
    p.classList.add(clas)
    span.appendChild(p)
})

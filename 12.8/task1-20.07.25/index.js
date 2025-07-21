const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "/img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "/img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "/img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "/img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "/img/discount_3.svg"
    }
]

const randomTitle = () => {
    return Math.round(Math.random() * (5 - 1) + 1)
}

document.addEventListener('DOMContentLoaded', function () {

    const popup = document.querySelector('.popup-add')
    const title = document.querySelector('.popup-add__text')
    const randomNumber = randomTitle()
    
    title.textContent = giftArr[randomNumber - 1].title

    setTimeout(() => {
        popup.style.display = "flex";
    }, 3000);

    const button = document.querySelector('.popup-add__button')
    button.addEventListener('click', () => {
        popup.style.display = "none";
    })


});
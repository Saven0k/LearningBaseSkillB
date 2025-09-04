import { Delivery } from './delivery.js';
import { EditDelivery } from './EditDelivery.js';
import {  createDistanceButton, showDistanceResult } from './support.js';

const cardList = document.querySelector('.card-list');

// const deliveryArr = [
//     new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
//     new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
//     new Delivery("Оля", "ул. Ткачей, д. 43", 11)
// ];


// deliveryArr.forEach(delivery => {
//     cardList.appendChild(delivery.getCard());
// });


const deliveries = [
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Анна", "пр. Примерный, д. 15", 5, "delivery"),
    new EditDelivery("Иван", "ул. Тестовая, д. 42", 10, "canceled")
];

// Добавляем кнопку длч расстояния
const distanceButton = createDistanceButton();
document.body.appendChild(distanceButton);

distanceButton.addEventListener('click', () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveries);

    // Удаляем предыдущий результат
    const oldResult = document.querySelector('.distance-result');
    if (oldResult) {
        oldResult.remove();
    }

    const result = showDistanceResult(totalDistance);
    document.body.appendChild(result);
});


deliveries.forEach(delivery => {
    document.body.appendChild(delivery.getCard());
});
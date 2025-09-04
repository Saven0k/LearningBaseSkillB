import { Delivery } from './delivery.js';
import {  createButtonChange, createCart, createDiv, createP, createh3 } from './support.js';
class EditDelivery extends Delivery {
    constructor(name, address, km, status) {
        super(name, address, km);
        this.status = status;
        this.form = null;
    }

    // 3 task
    static getTotalDistance(deliveries) {
        return deliveries.reduce((total, delivery) => {
            if (delivery.getStatus && delivery.getStatus() !== 'canceled') {
                return total + delivery.getKm();
            }
            return total;
        }, 0);
    }

    getCard() {
        const card = super.getCard();
        this.applyStatusStyle(card);

        // Добавляем статус 
        const statusBlock = createDiv();
        const statusTitle = createP("Статус");
        const status = createh3(this.getStatusText());
        statusBlock.append(statusTitle, status);
        card.append(statusBlock);


        const buttonChange = card.querySelector('.change');
        buttonChange.addEventListener('click', () => this.showEditForm(card));

        return card;
    }

    getStatusText() {
        switch (this.status) {
            case 'delivery': return 'Доставляется';
            case 'delivered': return 'Доставлен';
            case 'canceled': return 'Отменён';
            default: return this.status;
        }
    }

    // УДалили -- добавили
    applyStatusStyle(card) {
        card.classList.remove('green', 'yellow', 'red');

        switch (this.status) {
            case 'delivery':
                card.classList.add('yellow');
                break;
            case 'delivered':
                card.classList.add('green');
                break;
            case 'canceled':
                card.classList.add('red');
                break;
        }
    }

    showEditForm(card) {
        // Если форма уже есть  показываем её
        if (this.form) {
            this.form.classList.add('visible');
            return;
        }

        // Создаем новую форму
        this.form = document.createElement('form');
        this.form.innerHTML = `
            <h3>Изменить</h3>
            <input class="name" type="text" placeholder="Имя" value="${this.name}">
            <input class="address" type="text" placeholder="Адрес" value="${this.address}">
            <input class="km" type="number" placeholder="Расстояние" value="${this.km}">
            <select class="status" name="status">
                <option value="delivery" ${this.status === 'delivery' ? 'selected' : ''}>Доставляется</option>
                <option value="delivered" ${this.status === 'delivered' ? 'selected' : ''}>Доставлен</option>
                <option value="canceled" ${this.status === 'canceled' ? 'selected' : ''}>Отменен</option>
            </select>
            <button type="submit" class="change-card">Сохранить</button>
        `;

        this.form.classList.add('visible');
        card.append(this.form);

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(card);
        });
    }

    handleFormSubmit(card) {
        const name = this.form.querySelector('.name').value;
        const address = this.form.querySelector('.address').value;
        const km = this.form.querySelector('.km').value;
        const status = this.form.querySelector('.status').value;

        // Обновляем данные
        this.setName(name);
        this.setAddress(address);
        this.setKm(km);
        this.setStatus(status);

        // Обновляем карточку
        const newCard = this.getCard();
        card.replaceWith(newCard);

        // Удаляем форму
        this.form = null;
    }

    // Геттер и сеттер для статуса
    getStatus() {
        return this.status;
    }

    setStatus(newStatus) {
        this.status = newStatus;
    }
}
export { EditDelivery };
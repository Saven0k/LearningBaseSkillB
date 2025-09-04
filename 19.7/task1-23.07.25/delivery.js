// Импорт вспомогательных функций
import { createButtonChange, createCart, createDiv, createP, createh3 } from './support.js';

class Delivery {
    constructor(name, address, km) {
        this.name = name;
        this.address = address;
        this.km = km;
    }

    getCard() {
        let card = createCart();

        let nameBlock = createDiv();
        let addressBlock = createDiv();
        let kmBlock = createDiv();

        let nameTitle = createP("Имя");
        let addressTitle = createP("Адрес");
        let kmTitle = createP("Расстояние");

        let name = createh3(this.name);
        let address = createh3(this.address);
        let km = createh3(this.km);

        let buttonChange = createButtonChange()


        nameBlock.append(nameTitle, name);
        addressBlock.append(addressTitle, address);
        kmBlock.append(kmTitle, km);
        card.append(buttonChange)
        card.append(nameBlock);
        card.append(addressBlock);
        card.append(kmBlock);
        return card;
    }

    // Геттеры
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    getKm() {
        return this.km;
    }

    // Сеттеры
    setName(newName) {
        this.name = newName;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }

    setKm(newKm) {
        this.km = newKm;
    }
}

export { Delivery };
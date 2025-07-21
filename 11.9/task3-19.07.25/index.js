document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text')
    const colorSelect = document.getElementById('color')
    const cardElement = document.getElementById('card')
    const card = document.querySelector('.card')

    textInput.addEventListener('input', function() {
        cardElement.textContent = textInput.value;
    })

    textInput.addEventListener('focus', function() {
        textInput.style.borderColor = '#4CAF50';
        textInput.style.backgroundColor = '#f9f9f9';
    })

    textInput.addEventListener('blur', function() {
        textInput.style.borderColor = '#ddd';
        textInput.style.backgroundColor = 'white';
    })

    colorSelect.addEventListener('change', function() {
        const color = colorSelect.value
        switch(color) {
            case 'red':
                card.style.backgroundColor = '#e74c3c'
                break;
            case 'green':
                card.style.backgroundColor = '#2ecc71'
                break;
            case 'blue':
                card.style.backgroundColor = '#3498db'
                break;
            default:
                card.style.backgroundColor = '#666'
        }
    });
});
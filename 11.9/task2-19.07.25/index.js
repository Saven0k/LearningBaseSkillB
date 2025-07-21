const form = document.querySelector('.form');
const tbody = document.querySelector('.tbody');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('.name').value
    const weight = document.querySelector('.weight').value
    const distance =    document.querySelector('.distance').value
    
    tbody.innerHTML = `
        <tr> 
            <td>${name}</td>
            <td>${weight}</td>
            <td>${distance}</td>
            <td>${weight * distance / 10} руб.</td>
        </tr>    
    `;
});
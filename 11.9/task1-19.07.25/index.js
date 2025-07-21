const form = document.querySelector('.form');
const card = document.querySelector('.card');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const checkedInterests = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value).join(', ');
    
    card.innerHTML = `
        <p>Имя пользователя: ${document.querySelector('.name').value}</p>
        <p>Email пользователя: ${document.querySelector('.email').value}</p>
        <p>Пол пользователя: ${document.querySelector('input[name="gender"]:checked')?.value || 'не указан'}</p>
        <p>Оценка сервиса: ${document.querySelector('.range').value}</p>
        <p>Интересы пользователя: ${checkedInterests || 'не указаны'}</p>
        <p>Комментарии пользователя: ${document.querySelector('.comments').value || 'нет'}</p>
    `;
});
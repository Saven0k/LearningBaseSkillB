import { deletePost, getPosts } from "./post.js"


console.log("Сайт запущен")


const add_link = document.querySelector('.add_link')
add_link.addEventListener('click', () => {
    window.location = ('../AddPostPage/addPost.html');
})
function deleteById(id) {
    deletePost(id)
}

const render = async () => {
    try {
        const posts = await getPosts();
        const tbody = document.querySelector('.tbody');
        
        if (posts.length === 0) {
            tbody.innerHTML = `<tr><td>Пусто</td></tr>`;
        } else {
            let html = '';
            posts.forEach(post => {
                html += `
                    <tr>
                        <td data-id="${post.id}" style="display:none">${post.id}</td>
                        <td>${post.name}</td>
                        <td>${post.shelf}</td>
                        <td>${post.weight}</td>
                        <td>${post.date}</td>
                        <td><button class="button_delete">Удалить</button></td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;
        }
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const posts = await getPosts();
        const tbody = document.querySelector('.tbody');
        
        if (posts.length === 0) {
            tbody.innerHTML = `<tr><td>Пусто</td></tr>`;
        } else {
            let html = '';
            posts.forEach(post => {
                html += `
                    <tr>
                        <td data-id="${post.id}" style="display:none">${post.id}</td>
                        <td>${post.name}</td>
                        <td>${post.shelf}</td>
                        <td>${post.weight}</td>
                        <td>${post.date}</td>
                        <td><button class="button_delete">Удалить</button></td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;

             // Вариация в тупую
            document.querySelectorAll('.button_delete').forEach(button => {
                button.addEventListener('click', () => {
                    const id = button.closest('tr').querySelector('[data-id]').textContent;
                    deletePost(id);
                    render()
                });
            });
        }
    } catch (e) {
        console.error('Ошибка:', e);
    }
});



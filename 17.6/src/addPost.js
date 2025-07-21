import { addPost } from "./post.js"

const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const post = {
        id: new Date(),
        name: form.querySelector('#name').value,
        shelf: form.querySelector('#shelf').value,
        weight: form.querySelector('#weight').value,
        date: form.querySelector('#date').value,
    }
    addPost(post)
    window.location = ('../StoragePage/storage.html');
})
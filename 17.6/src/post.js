// Компонент методов для записей

const getPosts = async () => {
    const posts = localStorage.getItem('posts')
    if (posts) {
        return JSON.parse(posts)
    }
    return  []
}


const addPost = (post) => {
    const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [] 
    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts))
    console.log("Записали данные")
}

const deletePost = (id) => {
    const posts = JSON.parse(localStorage.getItem('posts'))
    const newPosts = posts.filter((post) => post.id !== id)
    localStorage.setItem('posts', newPosts)
    console.log(`Пост с id ${id} удален`)
}

export {
    getPosts,
    addPost,
    deletePost,
}
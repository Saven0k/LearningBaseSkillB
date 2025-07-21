
const mathT = () => {
    let min = 1
    let max = 5
    return Math.round(Math.random() * (max - min) + min) * 1000
}

const time1 = async (image) => {
    const photos = document.querySelector('.photos')
    setTimeout(() => {
        photos.appendChild(image)
    }, mathT())
}
const getImg = (photo) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const img = document.createElement('img')
            img.setAttribute('src', photo)
            resolve(img)
        }, mathT())
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    const photosList = ['./cat1.jpg', './cat2.jpg', './cat3.jpg', './cat4.jpg', './cat5.jpg']

    for (const photo of photosList) {
        const image = await getImg(photo)
        time1(image)
    }
})
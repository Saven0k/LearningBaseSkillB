const appendPhoto = async (image,id ) => {
    const photos = document.getElementById(`photos${id}`)
    photos.appendChild(image)
}
const createImage = (photo) => {
    const img = document.createElement('img')
    img.setAttribute('src', photo)
    return img
}

const protoView = (id) => {
    const photosList = ['./cat1.jpg', './cat2.jpg', './cat3.jpg', './cat4.jpg', './cat5.jpg', './cat6.jpg', './cat7.jpg']

    for (let i = id; i < id * 3 + 1; i++) {
        const image = createImage(photosList[i])
        appendPhoto(image, id)
    }

}
// ВЫнесли функцию отрисовки, что бы не парится с передачей данных
const progressBar = (time, progressBarId, timerId) => {
    return new Promise((resolve) => {
        const duration = Math.max(time, 2); // Минималка 2 сек 
        const progressBar = document.getElementById(`progress-bar${progressBarId}`); // Получуили блок бара
        const timerElement = document.getElementById(`timer${timerId}`); // Получили блок для таймера

        progressBar.style.transition = 'none';
        progressBar.style.transform = 'scaleX(0)';

        setTimeout(() => {
            progressBar.style.transition = `transform ${duration}s linear`;
            progressBar.style.transform = 'scaleX(1)';
        }, 1000);

        let seconds = 0;
        const timerInterval = setInterval(() => {
            seconds++;
            timerElement.textContent = `${seconds} second${seconds !== 1 ? 's' : ''}`;

            if (seconds >= duration) {
                clearInterval(timerInterval);
                resolve(true); // Возвращаем значение после завершения
            }
        }, 1000);
    });
}


const progress = async (progressBarId, timerId) => {
    await progressBar(2, 1, 1)
    protoView(1)
    setTimeout(async () => {
        await progressBar(3, 2, 2)
        protoView(2)
    }, 1000)
}

progress(1,1)



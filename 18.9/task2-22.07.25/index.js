const progress = (time) => {
    const progressBar = document.querySelector('.progress-bar'); // Получуили блок бара
    const timerElement = document.querySelector('.progress-bar__timer'); // Получили блок для таймера

    const duration = Math.max(time, 2); // Минималка 2 сек 

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
        }
    }, 1000);
}


progress(5)


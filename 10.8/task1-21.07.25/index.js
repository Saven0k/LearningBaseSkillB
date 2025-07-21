const big_image = document.querySelector(".bigImage")
console.log(big_image)
const images =  document.querySelectorAll(".small_img")
images.forEach(image => {
    image.addEventListener('click', () => {
        big_image.setAttribute('src', image.getAttribute("src"))
    })
})
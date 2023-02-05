function hoverOnCard() {
    document.getElementById("arrow").classList.add("active")
}

function hoverOffCard() {
    document.getElementById("arrow").classList.remove("active")
}

function hoverOnCard2() {
    document.getElementById("arrow2").classList.add("active")
}

function hoverOffCard2() {
    document.getElementById("arrow2").classList.remove("active")
}

function hoverOnCard3() {
    document.getElementById("arrow3").classList.add("active")
}

function hoverOffCard3() {
    document.getElementById("arrow3").classList.remove("active")
}

function hoverOnCard4() {
    document.getElementById("arrow4").classList.add("active")
}

function hoverOffCard4() {
    document.getElementById("arrow4").classList.remove("active")
}



const slider = document.querySelector("#slider")
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#btnRight')
const btnBack = document.querySelector('#btnLeft')


sliderItems.forEach(function (slide, index) {


    // Скрываем все кроме 1
    if (index !== 0) {
        slide.classList.add("hidden")
    }

    // Добавляем индексы 
    slide.dataset.index = index

    // добавляем data атрибут active для первого актив слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик
    slide.addEventListener('click', function () {
        //   Скрываем
        slide.classList.add('hidden')
        slide.removeAttribute('data-active')

        // рассчитываем индекс
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1

        // находим
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)

        // Отображаем
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active', '')
    })
})

btnNext.onclick = function () {
    ///скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    // next slide
    let nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute("data-active", "")
}

btnBack.onclick = function () {
    ///скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    // next slide
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute("data-active", "")
}
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


sliderItems.forEach(function (slide, index) {


    // Скрываем все кроме 1
    if (index !== 0) {
        slide.classList.add("hidden")
    }

    // Добавляем индексы 
    slide.dataset.index = index
    // Клик
    slide.addEventListener('click', function () {
        //   Скрываем
        slide.classList.add('hidden')

        // рассчитываем индекс
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1

        // находим
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)

        // Отображаем
        nextSlide.classList.remove('hidden')
    })
})


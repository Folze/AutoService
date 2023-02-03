function init() {
    let map = new ymaps.Map('yandexMap', {
        center: [56.81588316882897, 60.52215187997916],
        zoom: 17
    });
}

ymaps.ready(init)
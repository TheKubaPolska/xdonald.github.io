//DATA aktualna:
var fulldata = new Date();
document.getElementsByClassName("datee__dzis")[0].innerHTML = "("+ fulldata.toLocaleString("pl-PL", {day: '2-digit' , month: '2-digit'})+ ")";


//Zdarzenia + zapis
document.addEventListener("click", (event) => {
    let food = event.target.dataset.food;
    if (food) {
        console.log(food);
        sessionStorage.setItem("Vfood", food);
    }
})

document.addEventListener("click", (event) => {
    let date = event.target.dataset.date;
    if (date) {
        console.log(date);
        sessionStorage.setItem("Vdate", date);
    }
})


document.addEventListener("click", (event) => {
    let wsparcie = event.target.dataset.wsparcie;
    if (wsparcie) {
        console.log(wsparcie);
        sessionStorage.setItem("Vwsparcie", wsparcie);
    }
})


//Service worker
    const PATH = '/service-worker.js';
    let isServiceWorkersSupport = ('serviceWorker' in navigator);
    if (isServiceWorkersSupport) {
        console.log('Will service worker register?');
        navigator.serviceWorker.register(PATH).then(function () {
            console.log("Yes it did.");
        }).catch(function (err) {
            console.log("No it didn't. This happened: ", err)
        });
    }
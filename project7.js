//  ,?><

const imgSlideContainer = document.querySelector(".img-slide-container")
const ulNumbers = document.querySelector("ul.numbers")
const slideNumber = document.querySelector(".slide-number span")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")


// :::::
for (let i = 1; i <= imgSlideContainer.childElementCount; i++) {
    ulNumbers.innerHTML += `<li data-nmb="${i - 1}">${i}</li>`
}
ulNumbers.firstElementChild.classList.add("active")

// :::::::

const listes = document.querySelectorAll("ul.numbers li")
const lisArr = Array.from(listes)
let varNumber = 0
lisArr.forEach(it => {
    it.addEventListener("click" ,(eo) => {
        lisArr.forEach(item => {
            item.classList.remove("active")
        });
        eo.target.classList.add("active")
        imgSlideContainer.style=`left:-${100 * eo.target.dataset.nmb}%`
        varNumber = 100 * eo.target.dataset.nmb
        slideNumber.innerText = `${parseInt(eo.target.dataset.nmb)+1}`
        check()
    })
});
// :::::

prev.addEventListener("click" ,(eo) => {
    if (varNumber > 0) {
    imgSlideContainer.style=`left:-${varNumber - 100}%`
    varNumber = varNumber - 100
    slideNumber.innerText = `${(varNumber / 100) + 1}`
    lisArr.forEach(item => {
        item.classList.remove("active")
    });
    lisArr[(varNumber / 100)].classList.add("active")
    check()
    }
    
})
next.addEventListener("click" ,(eo) => {
    if (imgSlideContainer.childElementCount > (varNumber / 100) + 1) {
    console.log(varNumber + 100);
    imgSlideContainer.style=`left:-${varNumber + 100}%`
    varNumber = varNumber + 100
    slideNumber.innerText = `${(varNumber / 100) + 1}`
    lisArr.forEach(item => {
        item.classList.remove("active")
    });
    lisArr[(varNumber / 100)].classList.add("active")
    check()
    }
})

function check() {
    if (varNumber == 0) {
        prev.classList.add("active")
        next.classList.remove("active")
    } else if (((varNumber / 100) +1) == imgSlideContainer.childElementCount){
        next.classList.add("active")
        prev.classList.remove("active")
    }else{
        prev.classList.remove("active")
        next.classList.remove("active")
    }
}
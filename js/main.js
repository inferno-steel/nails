const slider = document.querySelectorAll(".slider")
const sliderWrap = document.querySelector(".slider-wrap") 
const sliderImage = document.querySelectorAll(".slider_img")
const btnRight = document.querySelector(".button-right")
const btnLeft = document.querySelector(".button-left")
const sliderDot = document.querySelectorAll(".slider_dot")
let sliderCounter = 0
let sliderWidth;

window.addEventListener("resize", showSlide)

btnLeft.addEventListener("click", nextSlide)
btnRight.addEventListener("click", prevSlide)

function showSlide() {
    sliderWidth = document.querySelector(".slider").offsetWidth;
    sliderWrap.style.width = sliderWidth * sliderImage.length + "px";
    sliderImage.forEach(item => item.style.width = sliderWidth + "px");
    rollSlider()
}
 showSlide()

function prevSlide() {
    sliderCounter++;
    if (sliderCounter >= sliderImage.length) {
        sliderCounter = 0;
    }
    rollSlider()
    thisSlide(sliderCounter)
}

function nextSlide() {
    sliderCounter--;
    if (sliderCounter < 0) {
        sliderCounter = sliderImage.length -1;
    }
    rollSlider()
    thisSlide(sliderCounter)
}

function rollSlider() {
    sliderWrap.style.transform = `translateX(${-sliderCounter * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDot.forEach(item => item.classList.remove('active_dot'));
    sliderDot[index].classList.add('active_dot')
    
}

sliderDot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCounter = index;
        rollSlider();
        thisSlide(sliderCounter);
    })
})

const titles = document.querySelectorAll(".accordion__title");
const contents = document.querySelectorAll(".accordion__content");

    titles.forEach(item =>  item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);
        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });
            titles.forEach(element => element.classList.remove('active'));    
            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }));


    const links = document.querySelectorAll(".header__menu-item > a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
        }
    }
    
    const btnDesk = document.querySelector(".visible");
    const btnMob = document.querySelector(".hidden");
    
    btnDesk.addEventListener("click", () => {
        document.querySelector(".prices__wrap").scrollIntoView({behavior: "smooth"});
    });

    btnMob.addEventListener("click", () => {
        document.querySelector(".prices__wrap").scrollIntoView({behavior: "smooth"});
    });
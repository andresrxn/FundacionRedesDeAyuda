// Initial loader



document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;



        if (scrollTop <= 410) {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.remove("header-donate-active");
        } else {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.add("header-donate-active");
        }
    });

});
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 100) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});


let comment = document.getElementById('comment');
comment.addEventListener('click', () => {
    let shadow = document.getElementById('shadow');
    shadow.classList.add('visible');

    let times = document.getElementById('times');
    times.style.display = "block";
    comment.style.display = "none";
    let bubbles = document.getElementById('float-bubbles');
    bubbles.classList.add("bubble-active");



});

let times = document.getElementById('times');
times.addEventListener('click', () => {
    let comment = document.getElementById('comment');
    comment.style.display = "block";
    times.style.display = "none";
    let bubbles = document.getElementById('float-bubbles');
    bubbles.classList.remove("bubble-active");

    let shadow = document.getElementById('shadow');
    shadow.classList.remove('visible');
});

let shadow = document.getElementById('shadow');
shadow.addEventListener('click', () => {
    shadow.classList.remove('visible');

    let bubbles = document.getElementById('float-bubbles');
    bubbles.classList.remove("bubble-active");

    let times = document.getElementById('times');
    let comment = document.getElementById('comment');
    comment.style.display = "block";
    times.style.display = "none";

});
let bubbles = document.getElementById('mail');
bubbles.addEventListener('click', () => {
    let shadow = document.getElementById('shadow');
    shadow.classList.remove('visible');
    let bubbles = document.getElementById('float-bubbles');
    bubbles.classList.remove("bubble-active");
    let times = document.getElementById('times');
    times.style.display = "none";
    let comment = document.getElementById('comment');
    comment.style.display = "block";
});


// window.onscroll = function() {
//     if (document.documentElement.scrollTop > 130) {
//         document.querySelector('.go-top_container')
//             .classList.add('show');
//     } else {
//         document.querySelector('.go-top_container')
//             .classList.remove('show');
//     }
// }
// document.querySelector('.go-top_container')
//     .addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });


//burger menu button animation
const menuBtn = document.querySelector('.header-btn');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        let nav = document.getElementById('nav');
        nav.classList.add("nav-active");

        //
        let comment = document.getElementById('comment');
        comment.style.display = "block";
        let times = document.getElementById('times');
        times.style.display = "none";
        let bubbles = document.getElementById('float-bubbles');
        bubbles.classList.remove("bubble-active");
        let shadow = document.getElementById('shadow');
        shadow.classList.remove('visible');

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove("nav-active");
        const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")

        currentHeaderMenuDown.classList.toggle("icon-down-active");
        currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;
    }

});



const headerMenuIcons = document.querySelectorAll(".header-menu-icon");
headerMenuIcons.forEach(headerMenuIcon => {
    headerMenuIcon.addEventListener('click', (e) => {
        const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")
        if (currentHeaderMenuDown && currentHeaderMenuDown !== headerMenuIcon) {
            currentHeaderMenuDown.classList.toggle("icon-down-active");
            currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;
        }

        headerMenuIcon.classList.toggle("icon-down-active");
        const headerMenuDown = headerMenuIcon.nextElementSibling;

        if (headerMenuIcon.classList.contains("icon-down-active")) {
            headerMenuDown.style.maxHeight = headerMenuDown.scrollHeight + "px";
        } else {
            headerMenuDown.style.maxHeight = 0;
        }
    });
});

const headerMenuDownLis = document.querySelectorAll(".header-menu-down-li");
headerMenuDownLis.forEach(headerMenuDownLi => {
    headerMenuDownLi.addEventListener('click', () => {
        const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")

        currentHeaderMenuDown.classList.toggle("icon-down-active");
        currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;

        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove("nav-active");
    });
});


const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const textareas = document.querySelectorAll('#form textarea');
const textarea = document.querySelectorAll('msg');

const expressions = {

    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.

    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    msg: /^[a-zA-ZÀ-ÿ\s]{10,400}$/ // 7 a 14 numeros.
}
const fields = {
    name: false,
    email: false,
    msg: false,
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":

            validarCampo(expressions.name, e.target, 'name');
            const name = document.getElementById('name');


            if (name.value === null || name.value === '') {
                document.querySelector('#name-group .form-error').style.display = "none";

                document.querySelector("#name-group").classList.remove('error-active');
            }
            break;
        case "email":
            validarCampo(expressions.email, e.target, 'email');

            const email = document.getElementById('email');
            if (email.value === null || email.value === '') {
                document.querySelector('#email-group .form-error').style.display = "none";

                document.querySelector("#email-group").classList.remove('error-active');
            }
            break;
        case "msg":
            validarTextarea(expressions.msg, e.target, 'msg');

            const msg = document.getElementById('msg');
            if (msg.value === null || msg.value === '') {
                document.querySelector('#msg-group .form-error').style.display = "none";

                let formCheck = document.getElementById('form-submit');
                formCheck.style.marginTop = "20px";
                document.querySelector("#msg-group").classList.remove('error-active');
            }
            break;
    }
}
const validarCampo = (expresion, input, field) => {
    if (expresion.test(input.value)) {

        document.querySelector(`#${field}-group .form-error`).style.display = "none";

        document.querySelector(`#${field}-group`).classList.remove('error-active');
        fields[field] = false;
    } else {

        document.querySelector(`#${field}-group .form-error`).style.display = "block";
        document.querySelector(`#${field}-group`).classList.add('error-active');
        fields[field] = true;
    }

}
const validarTextarea = (expresion, textarea, field) => {

    let formCheck = document.getElementById('form-submit');


    if (expresion.test(textarea.value)) {

        document.querySelector(`#${field}-group .form-error`).style.display = "none";
        fields[field] = false;
        formCheck.style.marginTop = "10px";
        document.querySelector(`#${field}-group`).classList.remove('error-active');
    } else {

        document.querySelector(`#${field}-group .form-error`).style.display = "block";
        fields[field] = true;
        formCheck.style.marginTop = "50px";
        document.querySelector(`#${field}-group`).classList.add('error-active');
    }

}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario);
    textarea.addEventListener('blur', validarFormulario);
});





// window.addEventListener('scroll', () => {
//     let counter = document.getElementById("counter");
//     let position = counter.getBoundingClientRect().top;
//     let screenHeight = window.innerHeight / 5;

//     if (position - 500 < screenHeight) {
//         let counter = document.getElementById("counter");
//         counter.style.opacity = 1;

//         const velocity = 2200;

//         const counterAnimation = () => {
//             const counterUpdate = () => {
//                 let maxValue = +counter.dataset.count,
//                     currentValue = +counter.innerText,
//                     increasing = maxValue / velocity;

//                 if (currentValue < maxValue) {
//                     counter.innerText = Math.ceil(currentValue + increasing);
//                     setTimeout(counterUpdate, 5);
//                 } else {
//                     counter.innerText = maxValue;
//                 }
//             }
//             counterUpdate();

//         }
//         counterAnimation();


//     }
// });

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {



        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


// form.addEventListener('submit', (e) => {

//     if (fields.name && fields.email && fields.msg) {
//         e.doDefault();
//         form.reset();

//         let submitError = document.querySelector('#form-submit .submit-error');
//         submitError.style.display = "none";

//     } else {
//         e.preventDefault();
//         let submitError = document.querySelector('#form-submit .submit-error');
//         submitError.style.display = "block";

//     }
// });
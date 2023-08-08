/* ========== about me section ========== */

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

/* ========== Section active link ========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

/* ========== contact form activation ========== */
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/* ========== menu icon ========== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function toggleButton() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleButton);

/* ========== theme mode ========== */

let theme = document.querySelector('#theme-icon');
let root_theme = document.querySelector(':root');

function toggleTheme() {
    theme.classList.toggle('bxs-sun');
    bg_color = getComputedStyle(root_theme).getPropertyValue('--bg-color');
    second_bg_color = getComputedStyle(root_theme).getPropertyValue('--second-bg-color');
    text_color = getComputedStyle(root_theme).getPropertyValue('--text-color');
    main_color = getComputedStyle(root_theme).getPropertyValue('--main-color')

    if (bg_color == '#1f242d') {
        root_theme.style.setProperty('--bg-color', '#f5f5dc');
    }
    else if (bg_color == '#f5f5dc'){
        root_theme.style.setProperty('--bg-color', '#1f242d');
    }

    if (second_bg_color == '#323946') {
        root_theme.style.setProperty('--second-bg-color', '#fafdf3');
    }
    else if (second_bg_color == '#fafdf3'){
        root_theme.style.setProperty('--second-bg-color', '#323946');
    }

    if (text_color == '#fff') {
        root_theme.style.setProperty('--text-color', '#000000')
    }
    else if (text_color == '#000000'){
        root_theme.style.setProperty('--text-color', '#fff');
    }
    
    if (main_color == '#0ef') {
        root_theme.style.setProperty('--main-color', 'coral')
    }
    else if (main_color == 'coral'){
        root_theme.style.setProperty('--main-color', '#0ef');
    }
}

theme.addEventListener('click', toggleTheme);

/* ========== scroll reveal ========== */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.about-img, .container, .project-box, .contact-right form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .contact-left', {origin: 'left'});
ScrollReveal().reveal('.about-content', {origin: 'right'});

/* ========== contact form activation ========== */

const scriptURL = 'https://script.google.com/macros/s/AKfycbwVf16ZbJ0U5CyiLXdCdofaKFn9e3ESFmokCQ8dfCtcYJ9VbjXvUOGI8E6_PsWErH3S/exec'
const form = document.forms['contact-us']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
        msg.innerHTML = "<i class='bx bxs-check-circle' ></i> Message sent successfully!"
        console.log('Success!', response)
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});
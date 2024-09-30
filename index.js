const menuBtn = document.getElementById("menu-btn")
const menuBtnIcon = menuBtn.querySelector("i")
const navLinks = document.getElementById("nav-links")

menuBtn.onclick = () => {
    navLinks.classList.toggle("open")
    document.body.classList.toggle('no-scroll');
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", (isOpen)? "ri-close-line" : "ri-menu-line")
}

navLinks.onclick = () => {
    navLinks.classList.remove("open")
    document.body.classList.remove('no-scroll');
    menuBtnIcon.setAttribute("class", "ri-menu-line")
}



const scrollRevealOption = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
}

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
})
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 1500,
})

const banner = document.querySelector(".banner-container")
const bannerChildren = Array.from(banner.children)

bannerChildren.forEach((child) => {
    const duplicate = child.cloneNode(true)
    duplicate.setAttribute("aria-hidden", true)
    banner.appendChild(duplicate)
})

ScrollReveal().reveal(".arrival-card", {
    ...scrollRevealOption,
     interval: 500,
})

ScrollReveal().reveal(".sale-image img", {
    ...scrollRevealOption,
    origin: "left",
})
ScrollReveal().reveal(".sale-content h2", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".sale-content p", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".sale-content h4", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".sale-btn", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".favourite-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
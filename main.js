
const navbarHamburger = document.querySelector(".navbar__hamburger")
const navbarLink = document.querySelector("ul")
const closeMenu = document.querySelector(".navbar__closed")


navbarHamburger.addEventListener("click", ()=>{
    navbarHamburger.style.display = 'none'
    closeMenu.style.display = 'inline-block'
    navbarLink.classList.add('mobil-menu')
})


closeMenu.addEventListener("click", ()=>{
    closeMenu.style.display= 'none'
    navbarHamburger.style.display = 'block'
    navbarLink.classList.remove('mobil-menu')
})



    
   
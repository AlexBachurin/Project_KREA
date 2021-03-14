//hover works

const workItems = document.querySelectorAll('.works__item')
const itemOverlays = document.querySelectorAll('.works__item-overlay'),
    popupModals = document.querySelectorAll('.works__item-outer'),
    popupClose = document.querySelectorAll('.works__item-popupclose')
 

//show hovered effect
workItems.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        itemOverlays[i].style.display = "flex"
    })
    item.addEventListener('mouseleave', () => {
        itemOverlays[i].style.display = "none"
    })
});

//popup show


workItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        popupModals[i].classList.remove('hide')
        popupModals[i].classList.add('show')
        document.body.style.overflow = "hidden"
    })
})

//close popup
function close(item) {
    item.classList.add('hide')
    item.classList.remove('show')
    document.body.style.overflow = ''
}
//надо использовать workItems из-за всплытия событий
workItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        popupModals.forEach(popup => {
            if ((e.target === popup)) {
                close(popup)
            }
        })
         //close on X
        popupClose.forEach((closeBtn) => {
            if (e.target === closeBtn) {
                popupModals.forEach(popup => {
                    close(popup)
                })
            }
        })
    })
})

//slider

const slider = tns({
    container: '.references-slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    controlsContainer: '.slider__controls',
    autoplay: true,
    speed: 500,
    autoplayButtonOutput: false
});

//menu

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuOverlay = document.querySelector('.menu__overlay'),
    menuLinks = document.querySelectorAll('.menu__link')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active')
})

menuOverlay.addEventListener('click', () => {
    hamburger.classList.remove('is-active')
    menu.classList.remove('active')
})

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        menuLinks.forEach(item => {
            item.classList.remove('active')
        })
        link.classList.add('active')
        menu.classList.remove('active')
        hamburger.classList.remove('is-active')      
    })
})

//smooth scroll
const anchors = document.querySelectorAll('a.menu__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//change hamburger color on scroll
const root = document.querySelector(":root"); //grabbing the root element
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= header.offsetHeight) {
        root.style.setProperty("--pseudo-backgroundcolor", '#605bc1');
    }
    else {
        root.style.setProperty("--pseudo-backgroundcolor", '#fff');
    }
})




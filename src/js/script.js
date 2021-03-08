//hover works

const workItems = document.querySelectorAll('.works__item')
const itemOverlays = document.querySelectorAll('.works__item-overlay'),
      popupModals = document.querySelectorAll('.works__item-outer')

workItems.forEach((item,i) => {
    item.addEventListener('mouseover', () => {
        itemOverlays[i].style.display = "flex"
    })
    item.addEventListener('mouseleave', () => {
        itemOverlays[i].style.display = "none"
    })
});

//popup

workItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        console.log('click')
        popupModals[i].classList.remove('hide')
        popupModals[i].classList.add('show')
        document.body.style.overflow = "hidden"
    })
})

//надо использовать workItems из-за всплытия событий
workItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
       popupModals.forEach(popup => {
           if(e.target === popup) {
               console.log('outer')
               console.log(popupModals)
               popup.classList.add('hide')
               popup.classList.remove('show')
               document.body.style.overflow = ''
               console.log(popupModals)
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
});
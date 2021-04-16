import Checker from './checker.js'
import Carousel from './carousel.js'

window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.btn-search')
    const carousel = new Carousel()
    carousel.images = carousel.getImages()
    
    submitBtn.addEventListener('click', e => {
        e.preventDefault()
        
        const checker = new Checker()
        checker.verifyInput()
    })
})
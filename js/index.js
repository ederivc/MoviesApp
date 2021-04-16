import Checker from './checker.js'
import Carousel from './carousel.js'

window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.btn-search')
    // const carousel = new Carousel()
    // carousel.start()
    
    submitBtn.addEventListener('click', e => {
        e.preventDefault()
        
        const checker = new Checker()
        checker.verifyInput()
    })
})

// window.onload = () => {
//     const el = document.querySelector('.loader')
//     el.classList.add('donutSpinner')

//     setTimeout(() => {
//         el.classList.toggle('donutSpinner')
//         document.body.style.opacity="100";
// },400)}

// window.onload = () => {

// }

// let spinnerWrapper = document.querySelector('.spinner-wrapper');
// window.addEventListener('load', () => {
//     spinnerWrapper.parentElement.removeChild(spinnerWrapper);
//     // const x = document.querySelector('.donutSpinner')
//     // x.style.display = 'none'
//     start()
// })

// function main() {
//     const submitBtn = document.querySelector('.btn-search')
//     // const carousel = new Carousel()
//     // carousel.start()
//     start()
//     submitBtn.addEventListener('click', e => {
//         e.preventDefault()
        
//         const checker = new Checker()
//         checker.verifyInput()
//     })
// }

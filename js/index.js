import Checker from './checker.js'

const submitBtn = document.querySelector('.btn-search')

submitBtn.addEventListener('click', e => {
    e.preventDefault()

    const checker = new Checker()
    checker.verifyInput()

})

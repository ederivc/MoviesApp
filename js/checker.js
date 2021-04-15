import Request from './request.js'

export default class Checker {
    constructor () {
        this.form = document.querySelector('.my-input')
        this.fragment = new DocumentFragment()
    } 

    verifyInput() {
        if(this.form.value === '') {

            let errorDiv = this.showError()
            errorDiv.style.display = "block"

            setTimeout(() => {
                errorDiv.style.display = "none"
        
                while (errorDiv.firstChild) {
                    errorDiv.firstChild.remove()
                }
            }, 1500)
            
        } else {
            const request = new Request(this.form.value)
            request.getInfo()

            this.form.value = ''
        }
    }

    showError() {
        const errorContainer = document.querySelector(".error-container")
        const errorTemplate = document.querySelector(".error-template").content
        
        const clone = errorTemplate.cloneNode(true);
        this.fragment.appendChild(clone)

        errorContainer.appendChild(this.fragment)

        return errorContainer
    }
}
import Request from './request.js'

export default class Checker {
    constructor () {
        this.form = document.querySelector('.my-input')
        this.fragment = new DocumentFragment()
    } 

    verifyInput() {
        if(this.form.value === '') {

            let newDiv = this.createElement()
            
            setTimeout(() => {
                document.body.removeChild(newDiv)
            }, 3000)
            
        } else {
            const request = new Request(this.form.value)
            request.getInfo()
        }
    }

    createElement() {
        let test = document.createElement('div')

        test.classList.add("alert", "alert-danger")
        test.textContent = "A simple danger alert—check it out!"
        
        this.fragment.appendChild(test)  
        document.body.appendChild(this.fragment)

        return test
    }
}

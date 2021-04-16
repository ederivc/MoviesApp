export default class Display {
    constructor(imgArray) {
        this.imgArray = imgArray
        this.cards = document.querySelectorAll('.img-test')
        this.cardTitle = document.querySelectorAll('.card-title')
        this.templateDefCard = document.querySelector('.default-cards').content
    }

    displayCards() {
        const container = document.querySelectorAll('.default-row')
        const fragment = new DocumentFragment()

        let movies = this.imgArray[0]
        let title = this.imgArray[1]
        let clone = this.templateDefCard.cloneNode(true)
        const newArray = this.getNewArray(movies)
        const newArrayname = this.getNewArray(title)
        container.forEach(row => {

            if(row.id === "row-1") {
                movies = newArray[1]
                title = newArrayname[1]
            } else {
                movies = newArray[0]
                title = newArrayname[0]
            }
            movies.forEach((movie, i) => {
                const card = this.templateDefCard.querySelector('.card')
    
                card.children[0].setAttribute('src', `${movie}`)
                card.children[1].children[0].innerText = title[i]
    
                clone = this.templateDefCard.cloneNode(true)
                fragment.appendChild(clone)
            })
            row.appendChild(fragment)
        })
    }

    displayUserCards(movies) {
        const test = document.querySelector('.new-row')
        const fragment = new DocumentFragment()
        const cardTeamplate = document.querySelector('.int-card').content
        
        this.clearMovies(test)
        this.filteruserCards(fragment, cardTeamplate, movies, test)
    }

    filteruserCards(fragment, template, movies, test) {
        let clone = template.cloneNode(true)
        const sliceMovies = movies.slice(0, 6)
        
        sliceMovies.forEach((movie, i) => {
            const card = template.querySelector('.card')
            card.id = `${i}`

            this.assignInfo(card, movie)

            clone = template.cloneNode(true)
            fragment.appendChild(clone)
        })

        test.appendChild(fragment)
    }

    assignInfo(card, movie) {
        const newCardImg = card.children[0]
        const newCardBody = card.children[1]
        newCardImg.setAttribute('src', `${movie.Poster}`)
        newCardBody.children[0].innerText = movie.Title
    }

    clearMovies(moviContainer) {
        while (moviContainer.firstChild) {
            moviContainer.firstChild.remove()
        }
    }

    getNewArray(movies) {
        const left = movies
        const right = left.splice(0, Math.ceil(left.length / 2))
        return [left, right]
    }
}

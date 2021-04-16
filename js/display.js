export default class Display {
    constructor(imgArray) {
        this.imgArray = imgArray
        this.cards = document.querySelectorAll('.img-test')
        this.cardTitle = document.querySelectorAll('.card-title')
    }

    displayCards() {
        this.cards.forEach((card, i) => {
            card.setAttribute('src', `${this.imgArray[0][i]}`)
        })

        this.cardTitle.forEach((title, i) => title.innerText = this.imgArray[1][i])
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
        // console.log(sliceMovies)
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
        // console.log(newCardBody.children)
        newCardBody.children[0].innerText = movie.Title
    }

    clearMovies(moviContainer) {
        while (moviContainer.firstChild) {
            moviContainer.firstChild.remove()
        }
    }
}

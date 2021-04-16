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
}

// card.forEach(element => element.setAttribute('src', `${json.Poster}`))
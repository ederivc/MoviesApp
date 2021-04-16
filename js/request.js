import Display from './display.js'

export default class Request {
    constructor (inputValue) {
        this.inputValue = inputValue
        this.multipleImg = [[], []]
    }

    async getInfo() {
        try {        
            // S general search
            // T individual
            const url = `http://www.omdbapi.com/?s=${this.inputValue}&apikey=34cd88eb`   
            const response = await fetch(url)
            const json = await response.json()
    
            // this.sendInfo(json)
            const display = new Display()
            display.displayUserCards(json.Search)
            // console.log(json.Search)

        } catch (error) {
            console.log(error)
        }
    }

    sendInfo(json) {
        console.log(json)
        

    }

    getMultipleInfo(imgArray) {
        imgArray.forEach(async movie => {
            try {
                const url = `http://www.omdbapi.com/?t=${movie}&apikey=34cd88eb`   
                const response = await fetch(url)
                const json = await response.json()

                this.multipleImg[0].push(json.Poster)
                this.multipleImg[1].push(json.Title)

            } catch (error) {
                console.log(error)
            }

            const display = new Display(this.multipleImg)
            display.displayCards()
            // console.log(this.multipleImg)
        })

    }
}
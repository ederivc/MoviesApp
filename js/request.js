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
    
            const display = new Display()
            display.displayUserCards(json.Search)
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    getMultipleInfo(imgArray) {
        // imgArray.forEach(async movie => {
        //     try {
        //         const url = `http://www.omdbapi.com/?t=${movie}&apikey=34cd88eb`   
        //         const response = await fetch(url)
        //         const json = await response.json()

        //         this.multipleImg[0].push(json.Poster)
        //         this.multipleImg[1].push(json.Title)

        //     } catch (error) {
        //         console.log(error)
        //     }
        // })
        // const display = new Display(this.multipleImg)
        // display.displayCards()

        // FROM HERE
        let result = imgArray.map(item => {
            return new Promise(async(resolve) => {
                try {
                    const url = `http://www.omdbapi.com/?t=${item}&apikey=34cd88eb`   
                    const response = await fetch(url)
                    const json = await response.json()
    
                    this.multipleImg[0].push(json.Poster)
                    this.multipleImg[1].push(json.Title)
                   
                    resolve()
                } catch (error) {
                    console.log(error)
                }
            })
        })

        Promise.all(result).then(() => {
            const display = new Display(this.multipleImg)
            // console.log(this.multipleImg[1])
            display.displayCards()
        })
        // TO HERE
    }
}
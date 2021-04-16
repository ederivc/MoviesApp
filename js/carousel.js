import Request from './request.js'

export default class Carousel {
    constructor() {
        this.movieExamples = {
            "1": "Joker", "2": "Hulk", "3": "Batman", "4": "Justice league", 
            "5": "Avengers", "6": "The Godfather", "7": "Run", "8": "Titanic",
            "9": "It", "10": "Superman", "11": "King Kong", "12": "Boss Level",
            "13": "Infinity War", "14": "The Suicide Squad", "15": "Godzilla", "16": "Blackhat",
        }
        this.images = []
    }

    getImages() {
        const values = Object.values(this.movieExamples)
        const imgArray = []

        while(imgArray.length <= 11) {
            let item = this.newItem(values)
           
            imgArray.push(item)
        }
        
        // return imgArray
        const request = new Request()
        request.getMultipleInfo(imgArray)
    }

    newItem(values) {
        const item = values[Math.floor(Math.random() * values.length)]
        return item
    }



    // const cardTitle = document.querySelectorAll('.card-title')
    // const cardText = document.querySelectorAll('.card-text')

    // card.forEach(element => element.setAttribute('src', `${json.Poster}`))

    // cardTitle.forEach(element => element.innerText = json.Title)

    // cardText.forEach(element => element.innerText = json.Plot)

    // async start() {
    //     const random = Math.floor(Math.random() * 3204)
    //     const url = 'https://gist.githubusercontent.com/shaikh-shahid/f29703bf7e7dc37183d5/raw/fa7666e873476c024a1851346f7ccfeb73a7cb79/movieName'
        
    //     const response = await fetch(url)
    //     const json = await response.json()

    //     this.displayCoursel(json[random]) 
    // }

    // async displayCoursel(movie) {
    //     const image = document.querySelector('.img-test')
    //     const url = `http://www.omdbapi.com/?t=${movie.name}&apikey=34cd88eb`   
        
    //     const response = await fetch(url)
    //     const json = await response.json()
        
    //     image.src = json.Poster
    // }
}


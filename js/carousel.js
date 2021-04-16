export default class Carousel {
    constructor() {
        this.movieGenre = [
            'Action', 'Drame', 'Crime', 'Romance', 'Fantasy', 'Horror',
            'Thriller', 'Comedy', 'Science Fiction', 
        ]
    }

    async start() {
        const random = Math.floor(Math.random() * 3204)
        const url = 'https://gist.githubusercontent.com/shaikh-shahid/f29703bf7e7dc37183d5/raw/fa7666e873476c024a1851346f7ccfeb73a7cb79/movieName'
        
        const response = await fetch(url)
        const json = await response.json()

        this.displayCoursel(json[random]) 
    }

    async displayCoursel(movie) {
        const image = document.querySelector('.img-test')
        const url = `http://www.omdbapi.com/?t=${movie.name}&apikey=34cd88eb`   
        
        const response = await fetch(url)
        const json = await response.json()
        
        image.src = json.Poster
    }
}


export default class Request {
    constructor (inputValue) {
        this.inputValue = inputValue
    }

    async getInfo() {
        try {        
            const url = `http://www.omdbapi.com/?t=${this.inputValue}&apikey=34cd88eb`   
            const response = await fetch(url)
            const json = await response.json()
    
            this.sendInfo(json)
        } catch (error) {
            console.log(error)
        }
    }

    sendInfo(json) {
        console.log(json.Error)
    }
}
import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
    let houses = ProxyState.houses // Getting our houses from ProxyState
    let template = ""
    houses.forEach(c => template += c.Template) // Adding unique templates for each house
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor () {
        _draw()
        ProxyState.on("houses", _draw) //Watches houses and if it changes, calls draw
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target
        let rawHouse = {
                bedrooms: form.bedrooms.value,
                bathrooms: form.bathrooms.value,
                levels: form.levels.value,
                price: parseInt(form.price.value),
                description: form.description.value,
                imgUrl: form.imgUrl.value,
                year: form.year.value
        }
        housesService.createHouse(rawHouse)
    }

    bid(id) {
        housesService.bid(id)
    }

    deleteHouse(id) {
        housesService.deleteHouse(id)
    }
}
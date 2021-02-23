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
        console.log("create house")
        let form = event.target
        let rawHouse = {
                type: form.type.value,
                address: form.address.value,
                city: form.city.value,
                price: parseInt(form.price.value),
                description: form.description.value,
                imgUrl: form.imgUrl.value,
                zip: form.zip.value
        }
        housesService.createHouse(rawHouse)
    }

    bid(id) {
        console.log("bidding on " + id)
        housesService.bid(id)
    }

    deleteHouse(id) {
        console.log("deleted " + id)
        housesService.deleteHouse(id)
    }
}
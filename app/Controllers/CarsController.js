import { ProxyState } from "../AppState.js"
import { carsService} from "../Services/CarsService.js"

function _draw() {
    let cars = ProxyState.cars // Getting our cars from ProxyState
    let template = ""
    cars.forEach(c => template += c.Template) // Adding unique templates for each car
    document.getElementById('cars').innerHTML = template
}

export default class CarsController {
    constructor () {
        _draw()
        ProxyState.on("cars", _draw) //Watches cars and if it changes, calls draw
    }

    createCar(event) {
        event.preventDefault()
        console.log("create car")
        let form = event.target
        let rawCar = {
                make: form.make.value,
                model: form.model.value,
                year: form.year.value,
                price: parseInt(form.price.value),
                description: form.description.value,
                imgUrl: form.imgUrl.value,
                miles: form.miles.value
        }
        carsService.createCar(rawCar)
    }

    bid(id) {
        console.log("bidding on " + id)
        carsService.bid(id)
    }

    deleteCar(id) {
        console.log("deleted " + id)
        carsService.deleteCar(id)
    }
}
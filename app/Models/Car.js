import {generateId} from "../Utils/generateId.js"

export default class Car {
    constructor ({make, model, year, price, description, imgUrl, miles, _id, id}) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.miles = miles || "Not Available"
        this.id = _id || id
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-3 m-1">
                <img src="${this.imgUrl == "testing" ? "https://via.placeholder.com/200" : this.imgUrl}" alt="${this.model}" class="card-img-top">
                <div class="card-body">
                    <h4>${this.year} ${this.make} ${this.model}</h4>
                    <p>${this.description}</p>
                    <p>Miles: ${this.miles}</p>
                    <p>Price: $${this.price}</p>
                    <div>
                        <button class="btn btn-success" onclick="app.CarsController.bid('${this.id}')">Bid</button>
                        <button onclick="app.CarsController.deleteCar(${this.id})" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}


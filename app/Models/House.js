import {generateId} from "../Utils/generateId.js"

export default class House {
    constructor ({type, address, city, description, zip, price, imgUrl}) {
        this.type = type
        this.address = address
        this.city = city
        this.description = description
        this.zip = zip
        this.price = price
        this.imgUrl = imgUrl
        this.id = generateId()
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-3">
                <img src="${this.imgUrl}" alt="${this.type}" class="card-img-top">
                <div class="card-body">
                    <h4>${this.city} ${this.type} ${this.description}</h4>
                    <p>${this.address}</p>
                    <p>Zip Code: ${this.zip}</p>
                    <p>Price: $${this.price}</p>
                    <div>
                        <button class="btn btn-success" onclick="app.HousesController.bid('${this.id}')">Bid</button>
                        <button onclick="app.HousesController.deleteHouse(${this.id})" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}


import {generateId} from "../Utils/generateId.js"

export default class House {
    constructor ({bedrooms, bathrooms, levels, description, year, price, imgUrl, _id, id}) {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.description = description
        this.year = year
        this.price = price
        this.imgUrl = imgUrl
        this.id = _id || id
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-3">
                <img src="${this.imgUrl}" alt="${this.description}" class="card-img-top">
                <div class="card-body">
                    <h4>${this.description}</h4>
                    <p>Bedrooms: ${this.bedrooms}</p>
                    <p>Bathrooms: ${this.bathrooms}</p>
                    <p>Stories: ${this.levels}</p>
                    <p>Year: ${this.year}</p>
                    <p>Price: $${this.price}</p>
                    <div>
                        <button class="btn btn-success" onclick="app.HousesController.bid('${this.id}')">Bid</button>
                        <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}


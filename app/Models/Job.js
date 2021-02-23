import {generateId} from "../Utils/generateId.js"

export default class Job {
    constructor ({title, city, pay, tasks, website, phone, imgUrl}) {
        this.title = title
        this.city = city
        this.pay = pay
        this.tasks = tasks
        this.website = website
        this.imgUrl = imgUrl
        this.phone = phone
        this.id = generateId()
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-3">
                <img src="${this.imgUrl}" alt="${this.title}" class="card-img-top">
                <div class="card-body">
                    <h4>${this.title} in ${this.city} for $${this.pay}/yr</h4>
                    <p>${this.tasks}</p>
                    <p>Website: ${this.website}</p>
                    <p>Phone: ${this.phone}</p>
                    <p>Salary: $${this.pay}/yr</p>
                    <div>
                        <button class="btn btn-success" onclick="app.JobsController.bid('${this.id}')">Bid</button>
                        <button onclick="app.JobsController.deleteJob(${this.id})" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}


import {generateId} from "../Utils/generateId.js"

export default class Job {
    constructor ({jobTitle, company, rate, hours, description, _id}) {
        this.jobTitle = jobTitle
        this.company = company
        this.rate = rate
        this.hours = hours
        this.description = description
        this.id = _id
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-3">
                <div class="card-body">
                    <h4>${this.jobTitle} at ${this.company} for $${this.rate}/hr</h4>
                    <p>Hours: ${this.hours}</p>
                    <p>Description: ${this.description}</p>
                    <p>Pay Rate: $${this.rate}/yr</p>
                    <div>
                        <button class="btn btn-success" onclick="app.JobsController.bid('${this.id}')">Bid</button>
                        <button onclick="app.JobsController.deleteJob('${this.id}')" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}


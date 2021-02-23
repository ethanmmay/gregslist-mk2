import { ProxyState } from "../AppState.js"
import { jobsService} from "../Services/JobsService.js"

function _draw() {
    let jobs = ProxyState.jobs // Getting our jobs from ProxyState
    let template = ""
    jobs.forEach(c => template += c.Template) // Adding unique templates for each job
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
    constructor () {
        _draw()
        ProxyState.on("jobs", _draw) //Watches jobs and if it changes, calls draw
    }

    createJob(event) {
        event.preventDefault()
        let form = event.target
        let rawJob = {
                jobTitle: form.jobTitle.value,
                company: form.company.value,
                hours: form.hours.value,
                rate: parseInt(form.rate.value),
                description: form.description.value
        }
        jobsService.createJob(rawJob)
    }

    bid(id) {
        jobsService.bid(id)
    }

    deleteJob(id) {
        jobsService.deleteJob(id)
    }
}
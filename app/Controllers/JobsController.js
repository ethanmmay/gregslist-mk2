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
        console.log("create job")
        let form = event.target
        let rawJob = {
                title: form.title.value,
                city: form.city.value,
                tasks: form.tasks.value,
                pay: parseInt(form.pay.value),
                website: form.website.value,
                imgUrl: form.imgUrl.value,
                phone: form.phone.value
        }
        jobsService.createJob(rawJob)
    }

    bid(id) {
        console.log("bidding on " + id)
        jobsService.bid(id)
    }

    deleteJob(id) {
        console.log("deleted " + id)
        jobsService.deleteJob(id)
    }
}
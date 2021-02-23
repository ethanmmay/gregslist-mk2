import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"

class JobsService {
    constructor() {
    }

    createJob(rawJob) {
        let newJob = new Job(rawJob)
        ProxyState.jobs = [...ProxyState.jobs, newJob] // pushes newJob to ProxyState.jobs
    }

    bid(id) {
        let temp = ProxyState.jobs
        let job = temp.find(c => c.id == id)
        job.pay -= 100
        ProxyState.jobs = temp
    }

    deleteJob(id) {
        let temp = ProxyState.jobs
        let jobIndex = temp.findIndex(c => c.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.jobs = temp
    }
}

export const jobsService = new JobsService()
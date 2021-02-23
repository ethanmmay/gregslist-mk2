import {
    ProxyState
} from "../AppState.js"
import Job from "../Models/Job.js"
import {
    api
} from "../Services/AxiosService.js"

class JobsService {
    constructor() {
        this.getJobs()
    }

    async createJob(rawJobData) {
        let newJob = new Job(rawJobData)
        try {
            const res = await api.post('jobs', newJob)
            this.getJobs()
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async getJobs() {
        try {
            const res = await api.get('jobs')
            ProxyState.jobs = res.data.map(j => new Job(j))
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    async bid(id) {
        try {
            let job = ProxyState.jobs.find(j => j.id == id)
            job.rate -= 1
            const res = await api.put('jobs/' + id, job)
            console.log(res.data)
            this.getJobs()
        } catch (err) {
            console.error(err)
        }
    }

    async deleteJob(id) {
        const res = await api.delete('jobs/' + id)
        this.getJobs()
    } catch (err) {
        console.error(err)
    }
}

export const jobsService = new JobsService()
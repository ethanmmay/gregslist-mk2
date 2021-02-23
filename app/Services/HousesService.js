import {
    ProxyState
} from "../AppState.js"
import House from "../Models/House.js"
import {
    api
} from "../Services/AxiosService.js"

class HousesService {
    constructor() {
        this.getHouses()
    }

    async createHouse(rawHouse) {
        let newHouse = new House(rawHouse)
        try {
            const res = await api.post('houses', newHouse)
            this.getHouses()
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async getHouses() {
        try {
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(h => new House(h))
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    async bid(id) {
        try {
            let house = ProxyState.houses.find(h => h.id == id)
            house.price += 100
            const res = await api.put('houses/' + id, house)
            console.log(res.data)
            this.getHouses()
        } catch (err) {
            console.error(err)
        }
    }

    async deleteHouse(id) {
        const res = await api.delete('houses/' + id)
        this.getHouses()
    } catch (err) {
        console.error(err)
    }
}


export const housesService = new HousesService()
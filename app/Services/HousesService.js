import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

class HousesService {
    constructor() {
    }

    createHouse(rawHouse) {
        let newHouse = new House(rawHouse)
        ProxyState.houses = [...ProxyState.houses, newHouse] // pushes newHouse to ProxyState.houses
    }

    bid(id) {
        let temp = ProxyState.houses
        let house = temp.find(c => c.id == id)
        house.price += 100
        ProxyState.houses = temp
    }

    deleteHouse(id) {
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(c => c.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp
    }
}

export const housesService = new HousesService()
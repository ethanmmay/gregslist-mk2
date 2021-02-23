import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "../Services/AxiosService.js"

class CarsService {
    constructor() {
        this.getCars()
    }

    async createCar(rawCar) {
        let newCar = new Car(rawCar)
        try {
            const res = await api.post('cars', newCar)
            this.getCars()
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    async getCars() {
        try {
            const res = await api.get('cars')
            ProxyState.cars = [...ProxyState.cars, ...res.data.map(c => new Car(c))]
        } catch (err) {
            console.error(err)
        }
    }

    async bid(id) {
        try {
            let car = ProxyState.cars.find(c => c.id == id)
            car.price += 100
            ProxyState.cars = ProxyState.cars
            const res = await api.put('cars/' + id, car)
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
        
    }

    async deleteCar(id) {
        try {
            const res = await api.delete(`cars/${id}`)
            this.getCars()
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }
}

export const carsService = new CarsService()
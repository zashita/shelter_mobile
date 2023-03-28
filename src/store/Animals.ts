import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class Animals{

    animals: IAnimal[] = []

    constructor() {
        makeAutoObservable(this)
    }
    async setAnimals(){
        const response = await axios.get('https://64202b9225cb65721043b12e.mockapi.io/shelter/animals')
        this.animals = response.data;
    }
}

export default new Animals();
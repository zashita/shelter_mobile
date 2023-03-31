import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class Animals{

    animals: IAnimal[] = [];
    currentAnimal: IAnimal = {
        id: 'vjadvh7vgsdifv',
        age: 0,
        name: '',
        sex: 'female',
        type: 'other',

        description: '',
        castrated: false,
        sterilized: false,
        vaccinated: false,
        shelter: ' '
    };

    constructor() {
        makeAutoObservable(this)
    }
    async setAnimals(){
        const response = await axios.get('https://64202b9225cb65721043b12e.mockapi.io/shelter/animals')
        this.animals = response.data;
    };

    setCurrentAnimal(animal:IAnimal){
        this.currentAnimal = animal
    }
}

export default new Animals();
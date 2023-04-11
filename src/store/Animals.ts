import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import url from '../url'
import server_url from "../url";


class Animals{
    url: URL = new URL(server_url);
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
        // const response = await axios.get('https://64202b9225cb65721043b12e.mockapi.io/shelter/animals')
        // @ts-ignore
        const response = await fetch(this.url)
        const responseData = await response.json();

        this.animals = responseData;
    };

    setCurrentAnimal(animal:IAnimal){
        this.currentAnimal = animal
    }

    setUrl(newUrl: URL){
        this.url = newUrl
     }
}

export default new Animals();

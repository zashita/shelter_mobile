import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import url from '../url'


class Animals{
    url: URL = new URL(url.server);
    animals: IAnimal[] = [];
    currentAnimal: IAnimal = {
    id:1,
    age:12,
    name: "Василиса",
    sex:1,
    type:"Кот",
    description:"Кошечка Василиса ищет новых хозяев",
    sterilized:true,
    vaccinated:false,
    on_rainbow:false,
    on_happiness:false,
    shelter:"Фауна Города",
    photos:["/animals/cat1.jpeg","/animals/cat11.jpeg"]
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

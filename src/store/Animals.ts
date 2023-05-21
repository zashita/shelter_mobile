import {IAnimal} from "../types/Animal";
import {action, makeAutoObservable, runInAction} from "mobx";
import server from '../server'


class Animals {
    animals: IAnimal[] = [];
    currentAnimal: IAnimal = { id:1,
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
        address:"Центральная 33",
        phone:"+375(29)123-13-32",
        photos:["/animals/cat1.jpeg","/animals/cat11.jpeg"]};

    constructor() {
        makeAutoObservable(this);
    }

    async setAnimals() {
        const response = await fetch(server.animals);
        const responseData = await response.json();

        runInAction(() => {
            this.animals = responseData;
        });
    }

    setCurrentAnimal(animal: IAnimal) {
        this.currentAnimal = animal;
    }
}
export default new Animals();

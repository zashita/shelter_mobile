import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";


class CurrentAnimal{
    currentAnimal: IAnimal = {
        id: 'vjadvh7vgsdifv',
        age: 3,
        name: 'mobx',
        sex: 'female',
        type: 'other',

        description: 'string',
        castrated: false,
        sterilized: false,
        vaccinated: false
    };


    constructor() {
        makeAutoObservable(this)
        }
        setCurrentAnimal(animal:IAnimal){
            this.currentAnimal = animal
        }
    }

    export default new CurrentAnimal();



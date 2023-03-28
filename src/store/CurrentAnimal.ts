import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";


class CurrentAnimal{
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
        setCurrentAnimal(animal:IAnimal){
            this.currentAnimal = animal
        }
    }

    export default new CurrentAnimal();



import {IAnimal} from "../types/Animal";
import {action, makeAutoObservable, runInAction} from "mobx";
import server from '../server'
import {Geocoder} from "react-native-yamap";

const GEO_KEY = 'c3214d53-f6bf-41d6-9155-9e71c9a69ce6'
Geocoder.init(GEO_KEY)
class Animals {
    animals: IAnimal[] = [];
    lat: number = 0;
    lon: number = 0;
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

    async setGeoCode(adress: string){
        this.lat = await Geocoder.addressToGeo(adress).then(promise =>{
            return promise?.lat
        });
        this.lon = await Geocoder.addressToGeo(adress).then(promise =>{
            return promise?.lon
        })
    }
}
export default new Animals();

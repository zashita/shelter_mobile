import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import typeFilters from "../components/TypeFilters";

class Filters{

  typeFilters: string[] = [];
  sex: number | null = null;
  sterialized: boolean = false
  vaccinated: boolean = false;
  ageMin:number = 0;
  ageMax: number = 20;

  constructor() {
    makeAutoObservable(this)
  }

  setDog(newValue: boolean){
    if(newValue){
      this.typeFilters.push('Собака')
    } else{
      this.typeFilters.splice(this.typeFilters.indexOf('Собака'), 1)
    }
}
  setCat(newValue: boolean){
    if(newValue){
      this.typeFilters.push('Кот')
    } else{
      this.typeFilters.splice(this.typeFilters.indexOf('Кот'), 1)
    }
  }
  setOther(newValue: boolean){
    if(newValue){
      this.typeFilters.push('Другой')
    } else{
      this.typeFilters.splice(this.typeFilters.indexOf('Другой'), 1)
    }
  }
  setBird(newValue: boolean){
    if(newValue){
      this.typeFilters.push('Птица')
    } else{
      this.typeFilters.splice(this.typeFilters.indexOf('Птица'), 1)
    }
  }


  setSex(newValue: number){
    if(this.sex === null|| this.sex !== newValue){
      this.sex = newValue
    }
    else
    {
      this.sex = null
    }
  }

  setSterialized(newValue: boolean){
    this.sterialized = newValue
  }

  setVaccinated(newValue: boolean){
    this.vaccinated = newValue
  }

  setMinAge (newValue: number){
    this.ageMin = newValue
}
  setMaxAge (newValue: number){
    this.ageMax = newValue
  }

}

export default new Filters();

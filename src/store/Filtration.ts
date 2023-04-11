import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class Filters{
  dog: boolean = false
  cat: boolean = false
  mouse: boolean = false
  bird: boolean = false

  fish: boolean = false

  male: boolean = false

  female: boolean = false



  constructor() {
    makeAutoObservable(this)
  }

  setDog(newValue: boolean){
    this.dog = newValue
}
  setCat(newValue: boolean){
    this.cat = newValue
  }
  setMouse(newValue: boolean){
    this.mouse = newValue
  }
  setBird(newValue: boolean){
    this.bird = newValue
  }
  setFish(newValue: boolean){
    this.fish = newValue
  }
  setMale(newValue: boolean){
    this.male = newValue
  }
  setFemale(newValue: boolean){
    this.female = newValue
  }

}

export default new Filters();

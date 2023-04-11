import {IAnimal} from "../types/Animal";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class Filters{




  constructor() {
    makeAutoObservable(this)
  }
  async setAnimals(){

  };

  setCurrentAnimal(animal:IAnimal){

  }
}

export default new Filters();

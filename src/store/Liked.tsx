import {makeAutoObservable} from "mobx";
import {ILiked} from "../types/Liked";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Liked{

    likedID: number[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setLikedId(newId: number)
    {
        this.likedID.push(newId)
        AsyncStorage.setItem('liked', JSON.stringify(this.likedID))
            .then(json => console.log('success!'))
            .catch(error => console.log('error!'));
    }
     likedState(id: number){
        return this.likedID.includes(id)
     }

     deleteLikedId(id: number){
        this.likedID.splice(this.likedID.indexOf(id), 1)
         AsyncStorage.setItem('liked', JSON.stringify(this.likedID))
             .then(json => console.log('success!'))
             .catch(error => console.log('error!'));
     }
     async setLiked(){
         AsyncStorage.getItem('liked')
             .then(req => JSON.parse(req))
             .then(json => {
                 json?
                 this.likedID = json:
                     this.likedID = []
             })
             .catch(error => console.log('error!'));
     }




}

export default new Liked();

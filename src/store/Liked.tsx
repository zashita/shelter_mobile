import {makeAutoObservable} from "mobx";
import {ILiked} from "../types/Liked";

class Liked{

    liked: ILiked = {
        id: []
    };

    constructor() {
        makeAutoObservable(this)
    }

    setLikedId(newArray: any)
    {
        this.liked = newArray
    }


}

export default new Liked();

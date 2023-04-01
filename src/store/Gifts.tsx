import {IGift} from "../types/Gift";
import {makeAutoObservable} from "mobx";

class Gifts{
    gifts: IGift[] = [];
    constructor() {
        makeAutoObservable(this)
    }
    async setGifts(){
        this.gifts = [
            {
                id: '892fhgo8wa',
                title: 'Задолженность по электроэнергии',
                name: '“Фауна города”  ул. Гурского 42'
            },
            {
                id: 'h4378qogfhpoiahf',
                title: 'Задолженность по электроэнергии',
                name: '“Фауна города”  ул. Гурского 42'
            }
        ]
    }
}
export default new Gifts();
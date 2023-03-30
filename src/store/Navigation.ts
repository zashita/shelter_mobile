import {makeAutoObservable} from "mobx";

class Navigation{
    currentScreen = "Home";
    constructor() {
        makeAutoObservable(this)
    }
    setCurrentScreen(screenName: string){
        this.currentScreen = screenName;
    }
}
export default new Navigation();
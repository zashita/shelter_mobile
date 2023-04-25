import {makeAutoObservable} from "mobx";

class Search{

    searchString: string = '';

    constructor() {
        makeAutoObservable(this)
    }

    setSearchString(newString: string)
    {
        this.searchString = newString
    }


}

export default new Search();

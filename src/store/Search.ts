import {makeAutoObservable} from "mobx";

class Search{

    searchString: string = '';

    constructor() {
        makeAutoObservable(this)
    }

    setSearchString(newString: any)
    {
        this.searchString = newString
    }

    clearSearchString(){
        this.searchString = ''
    }


}

export default new Search();

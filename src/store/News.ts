import {INewsItem} from "../types/NewsItem";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class News{

    news: INewsItem[] = [];
    currentNewsItem: INewsItem = {
        id: "",
        title: '',
        text: '',
        date: ''
    }

    constructor() {
        makeAutoObservable(this)
    }
    async setNews(){
        const response = await axios.get('https://64202b9225cb65721043b12e.mockapi.io/shelter/news')
        this.news = response.data;
    }
    setCurrentNewsItem(newsItem: INewsItem){
        this.currentNewsItem = newsItem;
    }
}

export default new News();
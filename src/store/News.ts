import {INewsItem} from "../types/NewsItem";
import {makeAutoObservable, runInAction} from "mobx";
import server from "../server";

class News{

    news: INewsItem[] = [];
    currentNewsItem: INewsItem = {
        id :1,
        label:"Приглашаем на мероприятие!",
        description: "",
        photo:"/news/news2.jpeg",
        created_at:"29.04.2023"
    }

    constructor() {
        makeAutoObservable(this)
    }
    async setNews(){
        const response = await fetch(server.news);
        const responseData = await response.json();
        runInAction(() => {
            this.news = responseData;
        });
    }
    setCurrentNewsItem(newsItem: INewsItem){
        this.currentNewsItem = newsItem;
    }
}

export default new News();

import {makeAutoObservable} from "mobx";
import {ILiked} from "../types/Liked";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Liked {
    likedID: number[] = [];

    constructor() {
        makeAutoObservable(this);
        // this.setLiked();
    }


    setLikedId(newId: number) {
        this.likedID.push(newId);
        this.saveLikedIds();
    }

    likedState(id: number) {
        return this.likedID.includes(id);
    }

    deleteLikedId(id: number) {
        const index = this.likedID.indexOf(id);
        if (index !== -1) {
            this.likedID.splice(index, 1);
            this.saveLikedIds();
        }
    }

    async setLiked() {
        try {
            const storedLikedIds = await AsyncStorage.getItem("liked");
            // @ts-ignore
            const parsedLikedIds = JSON.parse(storedLikedIds);
            if (Array.isArray(parsedLikedIds)) {
                this.likedID = parsedLikedIds;
            } else {
                this.likedID = [];
            }
        } catch (error) {
            console.log("Error retrieving liked IDs from AsyncStorage:", error);
        }
    }

    saveLikedIds() {
        AsyncStorage.setItem("liked", JSON.stringify(this.likedID))
            .then(() => console.log("Liked IDs saved successfully!"))
            .catch(error => console.log("Error saving liked IDs:", error));
    }
}

export default new Liked();

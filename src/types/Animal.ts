export interface IAnimal{
    id: number;
    age: number;
    name: string;
    sex: 0 | 1;
    type: string;
    description:string;
    sterilized:boolean;
    vaccinated:boolean;
    on_rainbow:boolean;
    on_happiness:boolean;
    shelter:string;
    address: string;
    phone: string;
    photos: string[];
}


// export interface IAnim{
//     id:1,
//     age:12,
//     name: "Василиса",
//     sex:1,
//     type:"Кот",
//     description:"Кошечка Василиса ищет новых хозяев",
//     sterilized:true,
//     vaccinated:false,
//     on_rainbow:false,
//     on_happiness:false,
//     shelter:"Фауна Города",
//     photos:["/animals/cat1.jpeg","/animals/cat11.jpeg"]}
// }


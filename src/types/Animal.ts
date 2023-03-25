export interface IAnimal{
    id: string;
    age: number;
    name: string;
    sex: 'male' | 'female';
    type: 'dog' | 'cat' | 'other';

    description: string;
    castrated: boolean;
    sterilized: boolean;
    vaccinated: boolean;



}
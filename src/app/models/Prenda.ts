import { Img } from "./Img";

export class Prenda {
    constructor(
    name: string,
    review: string,
    colour: string,
    size: number,
    price: number,
    categorie: string,
    subCategorie: string,
    image: string[]
    ){
        this.name = name;
        this.review = review;
        this.colour = colour;
        this.size = size;
        this.price = price;
        this.categorie = categorie;
        this.subCategorie = subCategorie;
        this.price = price;
        this.images = image;
    }
    name: string;
    id!: number;
    review: string;
    colour: string;
    size: number;
    price: number;
    categorie: string;
    subCategorie: string;
    images: string[];
    user?: any;
}
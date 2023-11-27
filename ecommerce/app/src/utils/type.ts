import { StaticImageData } from "next/image";

export  type Product = {
    id:number,
    name: string,
    title:string,
    price: number|String,
    image:StaticImageData;
    category:string,
    productDetail:string,
    productCare:string[]
};


export class Category {
    id_cat?: number
    nombre_cat: string

    constructor(nombre_cat:string)
    {
        this.nombre_cat = nombre_cat
    }
}

export class Product {
    id_prod?: number
    nombre_prod: string
    stock_prod:number
    precio_prod:number
    categoria_prod:number

    constructor(nombre_prod:string,stock_prod:number,precio_prod:number,categoria_prod:number)
    {
        this.nombre_prod = nombre_prod
        this.stock_prod = stock_prod
        this.precio_prod = precio_prod
        this.categoria_prod = categoria_prod

    }
}
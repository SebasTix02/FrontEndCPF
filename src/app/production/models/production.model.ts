export class ProductionDetail {
    id_detaP?: number
    maestro_detaP: number
    producto_detaP:number
    cantidad_detaP:number

    constructor(maestro_detaP:number,producto_detaP:number,cantidad_detaP:number)
    {
        this.maestro_detaP = maestro_detaP
        this.producto_detaP = producto_detaP
        this.cantidad_detaP = cantidad_detaP
    }
}

export class ProductionMaster {
    id_prod?: number
    fecha_prod: Date

    constructor(fecha_prod:Date)
    {
        this.fecha_prod = fecha_prod
    }
}
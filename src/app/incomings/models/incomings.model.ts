export class Providers {
    id_prov?:number
    nombre_prov: string
    telefono_prov:string
    direccion_prov:string
    telefonoFijo_prov:string

    constructor(nombre_prov:string, telefono_prov:string, direccion_prov:string,telefonoFijo_prov:string)
    {
        this.nombre_prov = nombre_prov
        this.telefono_prov = telefono_prov
        this.direccion_prov = direccion_prov
        this.telefonoFijo_prov = telefonoFijo_prov
    }
}
export class MasterIncoming {
    id_ingr?:number
    proveedor_ingr: number
    fecha_ingr:Date
    total_ingr:number

    constructor(proveedor_ingr: number, fecha_ingr:Date, total_ingr:number)
    {
        this.proveedor_ingr = proveedor_ingr
        this.fecha_ingr = fecha_ingr
        this.total_ingr = total_ingr
    }
}

export class DetailIncoming {
    id_detaI?:number
    maestro_detaI: number
    producto_detaI:number
    cantidad_detaI:number
    precio_detaI: number
    constructor(maestro_detaI: number, producto_detaI:number, cantidad_detaI:number, precio_detaI: number)
    {
        this.maestro_detaI = maestro_detaI
        this.producto_detaI = producto_detaI
        this.cantidad_detaI = cantidad_detaI
        this.precio_detaI = precio_detaI
    }
}
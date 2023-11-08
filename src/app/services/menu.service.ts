import { Injectable } from '@angular/core';
export interface IMenu{
  title:string;
  url:string;
  icon:string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu:IMenu[] =[
    {title:'Productos', url:'/productos', icon:'products'},
    {title:'Produccion', url:'/produccion', icon:'production'},
    {title:'Entradas', url:'/entradas', icon:'incomings'}
  ]
  constructor() { }

  getMenu():IMenu[]{
    return [...this.listMenu];
  }

  getMenuByUrl(url:string): IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}

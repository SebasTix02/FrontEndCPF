import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { KeypadButton } from 'src/app/shared/interfaces/keypadbutton';
import { ProductsService } from '../../services/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { FormComponent } from '../../components/form/form.component';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';

@Component({
  selector: 'cpf-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  metaDataColumns:MetaDataColumn[]=[
    {field:"id_prod", title:"ID"},
    {field:"nombre_prod", title:"Nombre"},
    {field:"stock_prod", title:"Stock"},
    {field:"precio_prod", title:"Precio"},
    {field:"categoria_prod", title:"Categoria"}
  ]
  records:any[] = [
    {id_prod:1, nombre_prod:'Fideo Regin 10K', stock_prod:'100', precio_prod:'12', categoria_prod: 'Producto Terminado'},
    {id_prod:2, nombre_prod:'Fideo Regin 15K', stock_prod:'25', precio_prod:'15', categoria_prod: 'Producto Terminado'},
    {id_prod:3, nombre_prod:'Fideo Lazo 10K', stock_prod:'50', precio_prod:'21', categoria_prod: 'Producto Terminado'},
    {id_prod:4, nombre_prod:'Harina Harimax 50k', stock_prod:'60', precio_prod:'43', categoria_prod: 'Materia Prima'},
    {id_prod:5, nombre_prod:'Harina Plus 10k', stock_prod:'70', precio_prod:'12', categoria_prod: 'Materia Prima'}
  ];
  data:any[] = []

  totalRecords = this.records.length

  keypadButtons:KeypadButton[] = [
    {icon:"cloud_download",tooltip:"EXPORTAR",color:"accent",action:"DOWNLOAD"},
    {icon:"add",tooltip:"AGREGAR",color:"primary",action:"NEW"}
  ]

  constructor(private bottomSheet:MatBottomSheet,
    private productsService:ProductsService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar){
    this.changePage(0)
  }

  changePage(page:number){
    const pageSize = environment.PAGESIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }

  loadIncomings(){
    this.productsService.loadProducts().subscribe(data => {
      this.records = data
      this.totalRecords = this.records.length
      this.changePage(0)
    },error => {
      console.log(error)
    })
  }

  openForm(row:any=null){
    const options = {
      panelClass: 'panel-container',
      disableClose:true,
      data:row
    }
    const reference:MatDialogRef<FormComponent> = this.dialog.open(FormComponent,options)

    reference.afterClosed().subscribe((response) => {
      if(!response){return}
      if(response.id){
        const incoming = {...response}
        this.productsService.updateProduct(response.id,incoming).subscribe(() => {
          this.loadIncomings()
          this.showMessage('Registro actualizado')
        })
      }else {
        const incoming = {...response}
        this.productsService.addProduct(incoming).subscribe(() => {
          this.loadIncomings()
          this.showMessage('Registro exitoso')
        })
      }
    })
  }
  
  delete(id:any){}

  doAction(action:string)
  {
    switch(action)
    {
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Entradas","entradas",this.records)
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

  showBottomSheet(title:string, fileName:string, data:any)
  {
    this.bottomSheet.open(DownloadComponent)
  }

  showMessage(message:string, duration:number=5000)
  {
    this.snackBar.open(message,'',{duration})
  }
}

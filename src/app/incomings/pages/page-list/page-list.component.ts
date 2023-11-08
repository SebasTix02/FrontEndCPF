import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypadbutton';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { IncomingsService } from '../../services/incomings.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'cpf-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  records:any[] = [
    {id_detaI:1, maestro_detaI:'1', producto_detaI:'1', cantidad_detaI:'12', precio_detaI: '13'},
    {id_detaI:2, maestro_detaI:'2', producto_detaI:'2', cantidad_detaI:'15', precio_detaI: '11'},
    {id_detaI:3, maestro_detaI:'2', producto_detaI:'5', cantidad_detaI:'21', precio_detaI: '14'},
    {id_detaI:4, maestro_detaI:'3', producto_detaI:'6', cantidad_detaI:'43', precio_detaI: '16'},
    {id_detaI:5, maestro_detaI:'3', producto_detaI:'7', cantidad_detaI:'12', precio_detaI: '19'},
    {id_detaI:6, maestro_detaI:'1', producto_detaI:'10', cantidad_detaI:'16', precio_detaI: '23'},
    {id_detaI:7, maestro_detaI:'1', producto_detaI:'1', cantidad_detaI:'12', precio_detaI: '13'},
    {id_detaI:8, maestro_detaI:'2', producto_detaI:'2', cantidad_detaI:'15', precio_detaI: '11'},
    {id_detaI:9, maestro_detaI:'2', producto_detaI:'5', cantidad_detaI:'21', precio_detaI: '14'},
    {id_detaI:10, maestro_detaI:'3', producto_detaI:'6', cantidad_detaI:'43', precio_detaI: '16'},
    {id_detaI:11, maestro_detaI:'3', producto_detaI:'7', cantidad_detaI:'12', precio_detaI: '19'},
    {id_detaI:12, maestro_detaI:'1', producto_detaI:'10', cantidad_detaI:'16', precio_detaI: '23'}
  ]

  metaDataColumns:MetaDataColumn[] = [
    {field:"id_detaI", title:"ID"},
    {field:"maestro_detaI", title:"Maestro"},
    {field:"producto_detaI", title:"Producto"},
    {field:"cantidad_detaI", title:"Cantidad"},
    {field:"precio_detaI", title:"Precio"}
  ]
  data:any[] = []

  totalRecords = this.records.length

  keypadButtons:KeypadButton[] = [
    {icon:"cloud_download",tooltip:"EXPORTAR",color:"accent",action:"DOWNLOAD"},
    {icon:"add",tooltip:"AGREGAR",color:"primary",action:"NEW"}
  ]

  constructor(private bottomSheet:MatBottomSheet,
    private incomingService:IncomingsService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar){
    this.changePage(0)
    //this.loadIncomings()
  }

  changePage(page:number){
    const pageSize = environment.PAGESIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }

  loadIncomings(){
    this.incomingService.loadIncomings().subscribe(data => {
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
        this.incomingService.updateIncoming(response.id,incoming).subscribe(() => {
          this.loadIncomings()
          this.showMessage('Registro actualizado')
        })
      }else {
        const incoming = {...response}
        this.incomingService.addIncoming(incoming).subscribe(() => {
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

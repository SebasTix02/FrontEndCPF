import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { KeypadButton } from 'src/app/shared/interfaces/keypadbutton';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { ProductionService } from '../../services/production.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { FormComponent } from '../../components/form/form.component';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';

@Component({
  selector: 'cpf-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  metaDataColumns:MetaDataColumn[]=[
    {field:"id_prod", title:"ID"},
    {field:"fecha_prod", title:"fecha_prod"}
    
  ]
  records:any[] = [
    {id_prod:1, fecha_prod:'2023-10-17 14:04:11'},
    {id_prod:2, fecha_prod:'2023-10-18 14:04:11'},
    {id_prod:3, fecha_prod:'2023-10-19 14:04:11'},
    {id_prod:4, fecha_prod:'2023-10-20 14:04:11'},
    {id_prod:5, fecha_prod:'2023-10-21 14:04:11'},
    {id_prod:6, fecha_prod:'2023-10-22 14:04:11'},
    {id_prod:7, fecha_prod:'2023-10-23 14:04:11'},
    {id_prod:8, fecha_prod:'2023-10-24 14:04:11'},
    {id_prod:9, fecha_prod:'2023-10-25 14:04:11'},
    {id_prod:10, fecha_prod:'2023-10-26 14:04:11'},
    {id_prod:11, fecha_prod:'2023-10-27 14:04:11'},
    {id_prod:12, fecha_prod:'2023-10-28 14:04:11'}
  ];
  data:any[] = []

  totalRecords = this.records.length

  keypadButtons:KeypadButton[] = [
    {icon:"cloud_download",tooltip:"EXPORTAR",color:"accent",action:"DOWNLOAD"},
    {icon:"add",tooltip:"AGREGAR",color:"primary",action:"NEW"}
  ]

  constructor(private bottomSheet:MatBottomSheet,
    private productionService:ProductionService,
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
    this.productionService.loadProductions().subscribe(data => {
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
        this.productionService.updateProduction(response.id,incoming).subscribe(() => {
          this.loadIncomings()
          this.showMessage('Registro actualizado')
        })
      }else {
        const incoming = {...response}
        this.productionService.addProduction(incoming).subscribe(() => {
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

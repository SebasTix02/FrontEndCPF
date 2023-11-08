import { Component, Input, SimpleChanges, ViewChild, ContentChildren, QueryList  } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'cpf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data:any
  @Input() metaDataColumns!:MetaDataColumn[]
  
  @ContentChildren(MatColumnDef,{descendants:true}) columnsDef!:QueryList<MatColumnDef>
  @ViewChild(MatTable,{static:true}) table!:MatTable<any>
  listFields:string[] = []

  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns']){
      this.listFields = this.metaDataColumns.map((x) => x.field)
    }
  }

  ngAfterContentInit(){
    if(!this.columnsDef){return}
    this.columnsDef.forEach(columnDef => {
      this.listFields.push(columnDef.name)
      this.table.addColumnDef(columnDef)
    })
  }
}

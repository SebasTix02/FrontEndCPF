import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'cpf-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
@Output() onChangePage:EventEmitter<number> = new EventEmitter<number>();
@Input() length!:number;
@Input() currentPage:number = 0;
@Input() pageIndex!:number;
@ViewChild(MatPaginator) paginator !: MatPaginator

pageSize = environment.PAGESIZE
changePage(event:any){
  this.currentPage = event.pageIndex ?? event.value;
  this.paginator.pageIndex = this.currentPage;
  this.onChangePage.emit(this.currentPage);
}

}

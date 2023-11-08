import { Component } from '@angular/core';

@Component({
  selector: 'cpf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGestionServicios';
  expanded:boolean = true;
  
  toggleExpanded(expanded:boolean){
    this.expanded= expanded;
  }
}

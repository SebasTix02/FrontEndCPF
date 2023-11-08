import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cpf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title=""
  group!:FormGroup
  constructor(private reference:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.title = data ? "EDITAR" : "NUEVO"
    }
  
    ngOnInit(): void {
      this.loadForm()
    }
  
    loadForm(){
      this.group = new FormGroup({
        id_detaI: new FormControl(this.data?.id_detaI),
        maestro_detaI: new FormControl(this.data?.maestro_detaI, Validators.required),
        producto_detaI: new FormControl(this.data?.producto_detaI, Validators.required),
        cantidad_detaI: new FormControl(this.data?.cantidad_detaI, Validators.required),
        precio_detaI: new FormControl(this.data?.precio_detaI, Validators.required),
      })
    }
  
    save(){
      const record = this.group.value
      this.reference.close(record)
    }
}

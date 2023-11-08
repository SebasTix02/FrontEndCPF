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
        id_prod: new FormControl(this.data?.id_prod),
        fecha_prod: new FormControl(this.data?.fecha_prod, Validators.required)
      })
    }
  
    save(){
      const record = this.group.value
      this.reference.close(record)
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule,
    MatIconModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    PageLoginComponent,
    HeaderComponent,
    MenuComponent,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }

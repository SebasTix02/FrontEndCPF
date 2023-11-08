import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path: '',component:PageLoginComponent},{path:'productos',
    canLoad:[],
    loadChildren:()=>
    import ('./products/products.module').then((m) => m.ProductsModule)},
    {path:'produccion',
    canLoad:[],
    loadChildren:()=>
    import ('./production/production.module').then((m) => m.ProductionModule)},
    {path:'entradas',
    canLoad:[],
    loadChildren:()=>
    import ('./incomings/incomings.module').then((m) => m.IncomingsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

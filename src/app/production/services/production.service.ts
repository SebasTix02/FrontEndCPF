import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductionDetail } from '../models/production.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  urlDetail = '/api/productionDetail/'
  constructor(private http:HttpClient) {
   }

   loadProductions():Observable<any> {
    console.log(`Esta es la urlDetail: ${this.urlDetail}`)
    return this.http.get(this.urlDetail)
  }

  loadProduction(id:string):Observable<any> {
    return this.http.get(this.urlDetail+id)
  }

  addProduction(production:ProductionDetail):Observable<any>{
    return this.http.post(this.urlDetail,production)
  }

  updateProduction(id:string, production:ProductionDetail):Observable<any>{
    return this.http.put(this.urlDetail+id,production)
  }

  deleteProduction(id:string):Observable<any> {
    return this.http.delete(this.urlDetail+id)
  }
}

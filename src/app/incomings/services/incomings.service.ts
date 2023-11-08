import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailIncoming } from '../models/incomings.model';

@Injectable({
  providedIn: 'root'
})
export class IncomingsService {
  url = '/api/incomingsDetail/'
  constructor(private http:HttpClient) {
   }

   loadIncomings():Observable<any> {
    console.log(`Esta es la URL: ${this.url}`)
    return this.http.get(this.url)
  }

  loadIncoming(id:string):Observable<any> {
    return this.http.get(this.url+id)
  }

  addIncoming(detail:DetailIncoming):Observable<any>{
    return this.http.post(this.url,detail)
  }

  updateIncoming(id:string, detail:DetailIncoming):Observable<any>{
    return this.http.put(this.url+id,detail)
  }

  deleteIncoming(id:string):Observable<any> {
    return this.http.delete(this.url+id)
  }
}

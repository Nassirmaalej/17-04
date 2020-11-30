import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regle } from './regle';

@Injectable({
  providedIn: 'root'
})
export class RegleService {

  private baseUrl = 'http://localhost:8081/regle/liste';
  private baseUrl1= 'http://localhost:8081/regle/update';
  private baseUrldelte ='http://localhost:8081/regle/delete'
  private baseUrladd='http://localhost:8081/regle/add';
  private  regle: Regle ;
  constructor(private http: HttpClient) { }

  getregle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // createregle(regle: Regle) {
  //   return this.http.post(`${this.baseUrladd}`, regle,{responseType:'text' as 'json'});
  // }

  
  createregle(regle: any): Observable<any> {
    return this.http.post(this.baseUrladd, regle);
  }


  public deleteregle(regle) {
    return this.http.delete(this.baseUrldelte + "/"+ regle.id);
  }

  updateUser(regle:Regle){

    return this.http.put(this.baseUrl+'/update',regle,{responseType:'text' as 'json'})//,JSON.stringify(personnel),this.options).map((response:Response)=>response.json())

  }

  setter(regle:Regle){
    this.regle=regle;
  }

 getter(){
   return this.regle;
 }



  getregleList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }












}

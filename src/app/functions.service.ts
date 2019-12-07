import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  result : any;

  constructor(private http : HttpClient) { }

  getProducts() {
    const url = environment.API_URL + 'products';

    return this.http.get(url).toPromise();
  }
  post(usuario : any){
    let url= environment.API_URL+ "products";
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.http.post(url, usuario, {headers : headers}).toPromise();
    
    }
    
  atualizar(usuario : any, id : number){
    let url= environment.API_URL + "products/" + id;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.http.put(url, usuario, {headers : headers}).toPromise();
    }
  deletar(id : number){
    let url= environment.API_URL + "products/" + id;
    
    return this.http.delete(url).toPromise();
    }
    
}

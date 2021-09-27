import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatsService {
  url:string = "https://api.thecatapi.com/";
  api_key:string = '48b34b41-410c-495f-9c07-27f612fa5889' ;
  
  constructor(private http:HttpClient) { }

  catList():Observable<any>{
    let address = this.url + "v1/breeds?api_key=" + this.api_key;
    return this.http.get<any>(address);
  }

  catProfile():Observable<any>{
    let address = this.url + "v1/breeds/search?api_key=" + this.api_key + "&name" + name; 
    return this.http.get<any>(address);
  }

  catCategoriesImg(id:number):Observable<any>{
    let address = this.url + "v1/images/search?api_key=" + this.api_key + "&category_ids=" + id;
    return this.http.get<any>(address);
  }

  catCategories():Observable<any>{
    let address = this.url + "/v1/categories?api_key=" + this.api_key ;
    return this.http.get<any>(address);
  }


}

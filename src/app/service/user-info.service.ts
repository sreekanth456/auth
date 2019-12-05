import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private _http:HttpClient) { }

  private _url="https://jsonplaceholder.typicode.com/posts?userId=1";

  getData(){

    return this._http.get<any>(this._url);
  }

  
}

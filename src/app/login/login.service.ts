import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(payload:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/v1/auth/",payload)
  }
}

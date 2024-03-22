import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // public userItemList: any =[]


  constructor(private http:HttpClient) { }

  getUserList():Observable<any> {
    return this.http.get<any>("http://localhost:3000/v1/users/list")
  }
}

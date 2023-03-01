import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = "https://localhost:7243/api/User/";
  constructor(private http : HttpClient) { }

  signup(userObj : User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  login(loginObj : User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
}

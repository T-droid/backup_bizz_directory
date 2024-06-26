import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, ) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post(`${AUTH_API}/login`, { email, password });
  }

  register(username: string, email: string, password: string) {
    const data = { username, email, password };
    return this.http.post<any>(`${AUTH_API}/register`, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../interface/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class UserApiService {
  http = inject(HttpClient);
  private readonly baseUrl: string = "https://jsonplaceholder.typicode.com";

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }
}
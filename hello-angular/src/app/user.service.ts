import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll() {
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }
}

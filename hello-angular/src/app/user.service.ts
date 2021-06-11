import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addEvent = new EventEmitter<User>();

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll() {
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }
}

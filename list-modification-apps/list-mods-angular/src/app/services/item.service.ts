import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from "rxjs";
import { Item } from "../domain/item";

@Injectable({providedIn: 'root'})
export class ItemService {
  constructor(private httpClient: HttpClient) {}
  
  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('http://localhost:3456/list');
  }
}
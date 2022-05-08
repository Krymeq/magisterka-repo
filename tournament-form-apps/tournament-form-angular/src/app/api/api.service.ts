import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Discipline} from "../domain/Discipline";
import {Observable} from "rxjs";
import {Tournament} from "../domain/Tournament";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(public httpClient: HttpClient) { }

  getDisciplines(): Observable<Discipline[]> {
    return this.httpClient.get<Discipline[]>('http://localhost:3456/disciplines');
  }

  getTournaments(disciplineId: number, page: number = 1): Observable<Tournament[]> {
    return this.httpClient.get<Tournament[]>(`http://localhost:3456/disciplines/${disciplineId}/tournaments?page=${page}`)
  }
}

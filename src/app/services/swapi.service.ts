import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  url: any = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }

  getPeople(term: string, searchTerm: any, pageNum: number){
    return this.http.get(`${this.url}/${term}/?search=${searchTerm}&page=${pageNum}`)
  }
  
}

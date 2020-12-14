import { Injectable } from '@angular/core';
import { Response } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getListOfPokemon(): Observable<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/pokemon?limit=151&offset=0`);
  }

  getPokemonDetail(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pokemon/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pokemon, Response } from '../interface';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private pokeApiUrl = environment.apiUrl;
  listOfPokemon: Pokemon[] = [];

  ngOnInit(): void {
    axios
      .get(`${environment.apiUrl}/pokemon?limit=151&offset=0`)
      .then((res: AxiosResponse<Response>) => {
        console.log(res.data.results);
        this.listOfPokemon = res.data.results.map((pokemon, i) => {
          return {
            id: `000${i + 1}`.slice(-3),
            name: pokemon.name,
          };
        });
      });
  }

  log(message: string): void {
    console.log(message);
  }
}

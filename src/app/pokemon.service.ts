import { Injectable } from '@angular/core';
import { Pokemon, Response } from './interface';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getListOfPokemon(): Promise<Pokemon[]> {
    return axios
      .get(`${environment.apiUrl}/pokemon?limit=151&offset=0`)
      .then((res: AxiosResponse<Response>) => {
        return res.data.results.map((pokemon, i) => {
          return {
            id: `000${i + 1}`.slice(-3),
            name: pokemon.name,
            detailUrl: pokemon.url,
          };
        });
      });
  }
}

import { Injectable } from '@angular/core';
import { Pokemon, Response } from './interface';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  async getListOfPokemon(): Promise<Pokemon[]> {
    const res: AxiosResponse<Response> = await axios.get(
      `${environment.apiUrl}/pokemon?limit=151&offset=0`,
    );

    return res.data.results.map((pokemon, i) => {
      return {
        id: `000${i + 1}`.slice(-3),
        name: pokemon.name,
        detailUrl: pokemon.url,
      };
    });
  }
}

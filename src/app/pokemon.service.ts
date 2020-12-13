import { Injectable } from '@angular/core';
import { Pokemon, Response } from './interface';
import { environment } from '../environments/environment';
import { RESPONSE } from './list-of-pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getListOfPokemon(): Pokemon[] {
    return RESPONSE.results.map((pokemon, i) => {
      return {
        id: `000${i + 1}`.slice(-3),
        name: pokemon.name,
        detailUrl: pokemon.url,
      };
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pokemon, Response } from '../interface';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  constructor() {}

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
            detailUrl: pokemon.url,
          };
        });
      });
  }

  log(message: string): void {
    console.log(message);
  }
}

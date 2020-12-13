import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  listOfPokemon!: Pokemon[];

  ngOnInit(): void {
    this.getListOfPokemon();
  }

  async getListOfPokemon(): Promise<void> {
    this.listOfPokemon = await this.pokemonService.getListOfPokemon();
  }

  log(message: string): void {
    console.log(message);
  }
}

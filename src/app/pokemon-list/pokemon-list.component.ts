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

  getListOfPokemon(): void {
    this.pokemonService.getListOfPokemon().then((res) => {
      this.listOfPokemon = res;
    });
  }

  log(message: string): void {
    console.log(message);
  }
}

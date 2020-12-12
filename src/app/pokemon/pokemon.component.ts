import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pokemon } from '../interface';
import { RESPONSE } from '../list-of-pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private pokeApiUrl = environment.apiUrl;
  listOfPokemon: Pokemon[] = RESPONSE.results.map((pokemon, i) => {
    return {
      id: `000${i + 1}`.slice(-3),
      name: pokemon.name,
    };
  });

  ngOnInit(): void {}
}

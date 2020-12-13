import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor() {}

  @Input() pokemon!: Pokemon;

  ngOnInit(): void {}

  log(message: string): void {
    console.log(message);
  }
}

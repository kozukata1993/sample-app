import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail } from '../interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  pokemonDetail!: PokemonDetail;

  getPokemonDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id &&
      this.pokemonService.getPokemonDetail(id).subscribe((detail) => {
        this.pokemonDetail = {
          id: `000${detail.id}`.slice(-3),
          name: detail.name,
          weight: detail.weight,
          status: detail.stats.map(({ stat, base_stat }: any) => ({
            name: stat.name,
            base_stat: base_stat,
          })),
          types: detail.types.map(({ type }: any) => type.name),
        };
      });
  }

  ngOnInit(): void {
    this.getPokemonDetail();
    console.log(this.pokemonDetail);
  }
}

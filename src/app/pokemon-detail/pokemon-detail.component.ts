import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail } from '../interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
  ) {}

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
            value: base_stat,
          })),
          types: detail.types.map(({ type }: any) => type.name),
        };
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  // options
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xScaleMax = 170;
  roundDomains = false;
  trimXAxisTicks = false;

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

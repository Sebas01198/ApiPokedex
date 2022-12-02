import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(): void {
     this.getPokemons()
  }
  getPokemons(){
    this.pokemonService.getPokemons(10, this.page + 0)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result: { name: string; }) => {
        this.pokemonService.getMoreData(result.name)
          .subscribe((uniqresponse: any) => {
            this.pokemons.push(uniqresponse);

         });

    });
    });
  }

}

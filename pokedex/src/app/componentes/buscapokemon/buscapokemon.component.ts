import {Component, Input, OnInit} from '@angular/core';
import { PokeapiService} from "../../services/pokeapi.service";
import {PokemonDescribe} from "../../models/placeholder.model";

@Component({
  selector: 'poke-buscapokemon',
  templateUrl: './buscapokemon.component.html',
  styleUrls: ['./buscapokemon.component.css']
})
export class BuscapokemonComponent implements OnInit {

  pokemonDescribe: any ;
  erro: any;

  constructor(private pokeapiService: PokeapiService) {

  }

  quantidadePokemon : string = '1';
  ngOnInit(): void {
    
  }
  quantidadePokemonDigitada(){
    console.log(this.quantidadePokemon)
    this.getter();

  }
  getter(){
    this.pokeapiService.getPokemon(this.quantidadePokemon).subscribe(
      (data: PokemonDescribe) => {

        this.pokemonDescribe= data;
        //console.log(',sdsdf',this.pokeapiService);
        //console.log('sdfarerdata:',typeof (data));

      },
      (error: any) => {
        this.erro = error;
      }
    );
  }
}

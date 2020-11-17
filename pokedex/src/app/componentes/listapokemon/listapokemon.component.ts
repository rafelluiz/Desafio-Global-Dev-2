import { Component, OnInit } from '@angular/core';
import {PokeapiService} from "../../services/pokeapi.service";
import {PokemonDescribe} from "../../models/placeholder.model";


@Component({
  selector: 'poke-listapokemon',
  templateUrl: './listapokemon.component.html',
  styleUrls: ['./listapokemon.component.css']
})
export class ListapokemonComponent implements OnInit {


  pokemonDescribe: any ;
  erro: any;
  quantidade:number = 1;
  constructor(private pokeapiService: PokeapiService)  {


  }

  ngOnInit(): void {
    this.getter();
  }
  getter(){
    this.pokeapiService.getPokemon('5').subscribe(
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

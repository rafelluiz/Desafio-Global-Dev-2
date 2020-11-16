import { Component, OnInit } from '@angular/core';

import { BuscapokemonComponent} from "../buscapokemon/buscapokemon.component";
import { ListapokemonComponent} from "../listapokemon/listapokemon.component";

@Component({
  selector: 'poke-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

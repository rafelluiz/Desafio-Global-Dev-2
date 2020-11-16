import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BuscapokemonComponent} from "./buscapokemon/buscapokemon.component";
import {ListapokemonComponent} from "./listapokemon/listapokemon.component";

const routes: Routes = [
  //home
  {
    path:'',
    component: HomeComponent
  },
  //buscar pokemon
  {
    path:'buscapokemon',
    component:BuscapokemonComponent
  },
  //listapokemon
  {
    path:'listapokemon',
    component:ListapokemonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

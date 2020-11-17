import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PokemonDescribe} from "../models/placeholder.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http : HttpClient) { }
  public getPokemon(quantidade:string):Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${quantidade}`)
  }
}

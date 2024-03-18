import { Component } from '@angular/core';
import { RickAndMorty } from '../../interfaces/rickandmorty';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.css'
})
export class RickAndMortyComponent {

  characters?:RickAndMorty;
  results: any
  
  constructor(private auth:RickAndMortyService) {
    this.auth.getCharacter().subscribe(data=>{
      this.characters = data;
      this.results=this.characters?.results
    })
  }

}

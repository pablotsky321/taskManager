import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError,of } from 'rxjs';
import { RickAndMorty } from '../interfaces/rickandmorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  url:string = "https://rickandmortyapi.com/api/character"

  constructor(private http:HttpClient) {

   }

   getCharacter():Observable<RickAndMorty | undefined>{
    return this.http.get<RickAndMorty>(this.url).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined)
      })
    )
   }

}

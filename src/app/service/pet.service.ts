import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/Pet';


const options = {

  headers : new HttpHeaders( {
    'Content':'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})

export class PetService {

  
  private _url:string = 'https://6240d0a719f6098792404149.mockapi.io/pets';

  constructor(private http:HttpClient) { }

  public getPets():Observable<Array<Pet>>{

   return this.http.get<Array<Pet>>(this._url);

  }

  public addPet(pet:Pet):Observable<Pet>{
   

    return this.http.post<Pet>(this._url,pet);

  }

  public likePet(pet:Pet):Observable<Pet>{

    const update_url = `${this._url}/${pet.pet}`;
    
    return this.http.put<Pet>(update_url,pet,options);

  }

  public deletePet(pet:Pet):Observable<Pet>{

    const delete_url = `${this._url}/${pet.pet}`;

    return this.http.delete<Pet>(delete_url);

  }


}

import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetService } from '../../service/pet.service';

@Component({
  selector: '[app-pets]',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})

export class PetsComponent implements OnInit {


  public static pets:Array<Pet> = [];

  constructor(private http: PetService) {}
  
  ngOnInit(): void {
    this.http.getPets().subscribe(
      res=>{
         console.log(res);
      PetsComponent.pets = res;

      }
    )
  }


  public get _pets():Array<Pet>{
    return PetsComponent.pets;
  }

  


}

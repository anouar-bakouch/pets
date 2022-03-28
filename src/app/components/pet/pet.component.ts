import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetService } from '../../service/pet.service';
import { PetsComponent } from '../pets/pets.component';


@Component({
  selector: '[app-pet]',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {


  @Input() public  pet!:Pet;
  

  constructor(private http:PetService) { }

  ngOnInit(): void {
  }

  public likePet(pet:Pet){

      this.pet.petLike = !this.pet.petLike;

      this.http.likePet(pet).subscribe(
        res=>{
          console.log(res);
        }
      )

  }

  public deletePet(pet:Pet){
   this.http.deletePet(pet).subscribe
   (
     res=>{
            const index = PetsComponent.pets.indexOf(res);
            PetsComponent.pets.splice(index,1);
     }
   );  
  }


}

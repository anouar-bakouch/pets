import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pet } from '../../models/Pet';
import { PetService } from '../../service/pet.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: '[app-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fservice:FormBuilder,private petService:PetService) { }

  public pet!:Pet;
  public petForm = this.fservice.group({

    petName : [''],
    petImage : [''],
    petDescription : [''],
    petType : ['']

  })

  ngOnInit(): void {}

  public addPet(){

    const petName = this.petForm.get('petName')?.value;
    const petDescription = this.petForm.get('petDescription')?.value;
    const petImage = this.petForm.get('petImage')?.value;
    const petLike = false;
    const petType = this.petForm.get('petType')?.value;

    this.pet = new Pet(petName,petType,petImage,petDescription,petLike);
    console.log(this.pet) 

    this.petService.addPet(this.pet).subscribe(
      res=>{
        PetsComponent.pets.push(this.pet);
      }
    );
  
  
  
  }


}

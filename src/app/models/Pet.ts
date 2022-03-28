

export class Pet {

  public pet!:number;
  public petName : string;
  public petType : string;
  petImage : string;
  petDescription : string;
  petLike:boolean;

  constructor(petName:string,petType:string,petImage:string,petDescription:string,petLike:boolean){
    this.petName = petName;
    this.petDescription = petDescription;
    this.petImage = petImage;
    this.petLike = petLike;
    this.petType = petType;
  }

  
}
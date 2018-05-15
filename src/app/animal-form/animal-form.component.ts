import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';
import {AnimalService} from '../animal.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  animalForm: FormGroup;
  animal: Animal;
 
 constructor(private fb: FormBuilder, private animalService: AnimalService, private location: Location) {
    this.createForm();
  }

  createForm() {
    this.animalForm = this.fb.group({
      commonName: ['', Validators.required ],
      scientificName: ['', Validators.required ],
      family: ['', Validators.required ],
      imageURL: ['', Validators.required ],
    });
  }
  onSubmit(animal: any): void {  
    console.log('you submitted value: ', animal  );
    if(animal['commonName']){
       this.animalService.addAnimal(animal).subscribe(()=>this.goBack());
    }  
    else{
      alert("Common Name required!!!");
    }
   
  }
goBack(): void {
    this.location.back();
  }


}


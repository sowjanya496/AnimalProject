import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';
import {AnimalService} from '../animal.service';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];
  animal:Animal;
  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.getAnimals();
  }
  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe(animals => this.animals = animals['list']);
  }

  addAnimal(animal: Animal): void {
    //    commonName = animal.name.trim();
    if (!name) {return;}
    this.animalService.addAnimal(animal as Animal)
      .subscribe(animal => {
        this.animals.push(animal);
      });
  }
  getAnimal(id:string): void {

    console.log(id);
    this.animalService.getAnimal(id)
      .subscribe(animal => this.animal = animal['animal']);
  }
  deleteAnimal(animal: Animal): void {
    if (confirm("Are you sure you want to delete " + animal.commonName + "?")) {
      this.animals = this.animals.filter(a => a !== animal);
      this.animalService.deleteAnimal(animal).subscribe();
    }

  }
}

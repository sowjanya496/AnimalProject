import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Animal} from '../animal';
import {AnimalService} from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  @Input() animal: Animal;
  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location) {}

  ngOnInit() {
    this.getAnimal();
  }
  getAnimal(): void {

    const id:  string = this.route.snapshot.params.id;
    console.log(id);
    this.animalService.getAnimal(id)
      .subscribe(animal => this.animal = animal['animal']);
  }

  goBack(): void {
    this.location.back();
  }
}

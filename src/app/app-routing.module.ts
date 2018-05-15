import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalsComponent} from './animals/animals.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {AnimalDetailComponent} from './animal-detail/animal-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  {path: 'animal/:id', component: AnimalDetailComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'animals/add', component: AnimalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}

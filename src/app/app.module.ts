import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AnimalsComponent} from './animals/animals.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {AppRoutingModule} from './/app-routing.module';
import {AnimalDetailComponent} from './animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    AnimalFormComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Animal} from './animal';
import {query} from '@angular/animations';
import {HttpParams} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
};

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  constructor(
    private http: HttpClient
  ) {}


  private animalsUrl = 'https://animalrestapi.azurewebsites.net/Animal';  // URL to web api
  private candidateId = '29ba9c1a-a5bf-4b69-b21e-9ace5cf50e0a';
  private queryParam = `candidateId=${this.candidateId}`;

  /** GET Animals from the server */
  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.animalsUrl}/List?${this.queryParam}`);
  }


  /** GET animal by id. Return `undefined` when id not found */
  getAnimal(id): Observable<Animal> {
    const url = `${this.animalsUrl}/id/${id}?${this.queryParam}`;
    console.log(url);
    return this.http.get<Animal>(url);

  }

  /** POST: add an animal to the server */
  addAnimal(animal: Animal): Observable<any> {
    const url = `${this.animalsUrl}/Create?${this.queryParam}&commonName=${animal.commonName}&scientificName=${animal.scientificName}&family=${animal.family}&imageURL=${animal.imageURL}` 
    const request = this.http.post( url, animal, httpOptions);
    //httpOptions);
    //        .pipe(
    //      tap((animal: Animal) => this.log(`added animal w/ id=${animal.id}`)),
    //      catchError(this.handleError<Animal>('addAnimal'))
    //    )
    // ;
    console.log(request);
    return request;
  }


  /** DELETE: delete the animal from the server */
  deleteAnimal(animal: Animal): Observable<Animal> {
    const id = animal.id;
    const url = `${this.animalsUrl}/delete/${id}?candidateId=` + this.candidateId;
    console.log(url);
    return this.http.post<Animal>(url, id, httpOptions);
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AnimalService message with the MessageService */
  private log(message: string) {
    console.log(message);
    //this.add('AnimalService: ' + message);
  }
}

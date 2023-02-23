import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const JSON_URL = './assets/experiences.json';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private httpClient: HttpClient) { }

  listExperiences(): Observable<any> {
    return this.httpClient.get(JSON_URL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Theft } from './theft.model';

@Injectable({
  providedIn: 'root'
})
export class TheftService {
  theftSelected!:Theft;
  thefts!:Theft[];
  readonly baseURL = 'http://localhost:3000/theft';

  constructor(private http:HttpClient) { }

  getTheft(){
    return this.http.get(this.baseURL);
  }

  postTheft(theft: Theft) {
    return this.http.post(this.baseURL, theft);
  }

  putTheft(theft: Theft) {
    return this.http.put(this.baseURL + `/${theft._id}`, theft);
  }

  deleteTheft(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

import { Injectable } from '@angular/core';
// import http client module di service 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(
    private http:HttpClient
  ) { }
    

  headline() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=51dfd39984fe476f90f625457f70c96a');
  }

  category(cat) {
  	return this.http.get('https://newsapi.org/v2/top-headlines?apiKey=51dfd39984fe476f90f625457f70c96a&category='+cat+'&country=id');
  }


}

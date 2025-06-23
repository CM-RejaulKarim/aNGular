import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

baseurl: string="http://localhost:3000/students";

  constructor(private http:HttpClient) { }

getAllStudent(){

return this.http.get(this.baseurl);


}



}

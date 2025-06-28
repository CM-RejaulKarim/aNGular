import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseurl: string ="http://localhost:3000/member";

  constructor(private http:HttpClient) { }

  getAllMember(){}

}

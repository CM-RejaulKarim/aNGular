import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseurl: string = "http://localhost:3000/locations";

  constructor(private http: HttpClient) { }

  getAllLocation(): Observable<any> {

    return this.http.get(this.baseurl);
  }

  saveLocation(location: Location): Observable<any> {

    return this.http.post(this.baseurl, location);
  }


  deleteLocation(id: string): Observable<any> {

    return this.http.delete(this.baseurl + '/' + id);
  }


  getLocationById(id: string): Observable<any> {

    return this.http.get(this.baseurl + '/' + id);
  }


  updateLocation(id: string, l: Location): Observable<any> {
    
    return this.http.put(this.baseurl + '/' + id, l);
  }
}

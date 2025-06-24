import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-locations',
  standalone: false,
  templateUrl: './view-all-locations.html',
  styleUrl: './view-all-locations.css'
})
export class ViewAllLocations implements OnInit{
locations: any;
constructor(private locationService: LocationService,
  private router: Router
){ }



  ngOnInit(): void {
    this.loadAllLocation();
  }
  loadAllLocation(){
this.locations= this.locationService.getAllLocation();

  }

}

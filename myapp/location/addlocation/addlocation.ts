import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../src/app/service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlocation',
  standalone: false,
  templateUrl: './addlocation.html',
  styleUrl: './addlocation.css'
})
export class Addlocation implements OnInit {

  formGroup !: FormGroup;

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.formGroup = this.formBuilder.group({
    name: [''],
    city: [''],
    photo: ['']
   });
  }

  addLocation(): void{
    const location: Location= {...this.formGroup.value};
    this.locationService.saveLocation(location).subscribe({
      next: (res) => {
        console.log(res);
        this.formGroup.reset();
        this.router.navigate(['/allloc']);

      },
      error:(err) =>{
        console.error(err);
      }

    });

  }

}

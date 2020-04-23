import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisService } from 'src/app/Servis/servis.service';
import {Car} from 'src/app/Model/Car';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServisService) { }

  ngOnInit() {
  }

  Addnew(car:Car){
    this.service.createCar(car)
    .subscribe(data=>{
      alert("Car was sucessfully added");
      this.router.navigate(["lista"]);
    })
  } 

}

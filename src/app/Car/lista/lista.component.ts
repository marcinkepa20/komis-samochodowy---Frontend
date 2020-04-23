import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServisService} from '../../Servis/servis.service'
import { Car } from 'src/app/Model/Car';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  car:Car[];
  constructor(private service: ServisService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCar()
    .subscribe(data=>{
      this.car=data;
    })

  }

}

import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Car} from '../Model/Car';


@Injectable()
export class ServisService {

  
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/cars/';

  getCar(){
    return this.http.get<Car[]>(this.Url);
  }
  createCar(car:Car){
    return this.http.post<Car>(this.Url,car);
  }
} 

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaComponent } from './Car/lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'komis-front';

  constructor(private router:Router){}

  Lista(){
    this.router.navigate(["lista"]);
  }

  Nowy(){
    this.router.navigate(["add"]);
  }

  }


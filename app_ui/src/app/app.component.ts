import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  onSubmit(f: NgForm) {
    console.log(f.value); 
    console.log(f.valid); 
  }

  

}

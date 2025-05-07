import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 display=true
 toggleDiv=true
 show(){
  this.display=true;

 }
 hide(){
  this.display=false;

 }
 toggle(){
  this.display=!this.display;
 }
 toggleTwo(){
this.toggleDiv=!this.toggleDiv
 }
}

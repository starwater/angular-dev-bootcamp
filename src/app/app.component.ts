import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //if we change selector to attribute
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  styles: ['h3{color:dodgerblue;}']  but its a bad practice
})
export class AppComponent {
  title = 'exercise1';
}

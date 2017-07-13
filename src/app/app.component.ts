import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  author = 'Ángela O';
  count = 0;
  imgSource = 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg';
  enable = false;
  buttonText = 'Deactivate';

  change() {
    // Switch to enable === true if enable was === false
    // Switch to enable === false if enable was === true
    this.enable = !this.enable;

    // 'Activate' if enable === true
    // 'Deactivate' if enable === false
    this.buttonText = !this.enable ? 'Deactivate' : 'Activate';

    // count++
    this.count++;
  }
}

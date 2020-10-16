import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public first_name: string = '';
  public last_name: string = '';
  public full_name: string = '';

  public display_name() {
    this.full_name = (this.first_name ? this.first_name : '') + 
      (this.last_name && this.first_name ? ' ' + this.last_name : (this.last_name ? this.last_name : ''));
  }
}

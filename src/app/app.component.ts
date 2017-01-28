import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
  }

}

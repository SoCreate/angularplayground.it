import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-angular-cli',
  templateUrl: './non-angular-cli.component.html'
})
export class NonAngularCliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

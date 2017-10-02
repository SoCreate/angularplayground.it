import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapping',
  templateUrl: './bootstrapping.component.html'
})
export class BootstrappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

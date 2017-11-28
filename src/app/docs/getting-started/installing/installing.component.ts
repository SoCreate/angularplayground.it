import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html'
})
export class InstallingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

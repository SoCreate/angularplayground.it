import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-toggle',
  templateUrl: './quick-toggle.component.html'
})
export class QuickToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

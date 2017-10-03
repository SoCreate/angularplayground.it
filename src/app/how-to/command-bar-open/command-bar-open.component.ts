import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-bar-open',
  templateUrl: './command-bar-open.component.html'
})
export class CommandBarOpenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

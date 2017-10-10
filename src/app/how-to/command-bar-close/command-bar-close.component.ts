import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-bar-close',
  templateUrl: './command-bar-close.component.html'
})
export class CommandBarCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

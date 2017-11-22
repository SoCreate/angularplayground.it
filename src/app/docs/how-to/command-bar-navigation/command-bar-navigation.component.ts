import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-bar-navigation',
  templateUrl: './command-bar-navigation.component.html'
})
export class CommandBarNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

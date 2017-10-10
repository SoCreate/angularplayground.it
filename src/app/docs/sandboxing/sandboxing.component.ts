import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandboxing',
  templateUrl: './sandboxing.component.html'
})
export class SandboxingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

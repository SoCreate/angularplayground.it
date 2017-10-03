import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedding-sandboxes',
  templateUrl: './embedding-sandboxes.component.html'
})
export class EmbeddingSandboxesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

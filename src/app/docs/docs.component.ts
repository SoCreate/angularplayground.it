import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  @Input() navClosed = true;

  setShowNav(show: boolean) {
      this.navClosed = !show;
  }

}

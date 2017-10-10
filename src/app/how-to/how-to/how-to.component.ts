import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent {
  @Input() navClosed = true;

  setShowNav(show: boolean) {
      this.navClosed = !show;
  }

}

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const SHOW_MORE_FRAGMENT = 'show-more';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html'
})
export class InstallingComponent implements OnInit, AfterViewChecked {
  showingExtraContent = false;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.showingExtraContent = this.fragment === SHOW_MORE_FRAGMENT;
    });
  }

  ngAfterViewChecked(): void {
    try {
      document.querySelector(`#${this.fragment}`).scrollIntoView();
    } catch (e) {}
  }

  getFragment() {
    return this.showingExtraContent ? '' : SHOW_MORE_FRAGMENT;
  }
}

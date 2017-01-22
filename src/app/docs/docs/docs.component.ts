import {Component} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  path = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url
      .subscribe(() => {
        this.path = 'content/docs';
        this.activatedRoute.snapshot.url
          .forEach(urlSegment => {
            this.path += `/${urlSegment.path}`;
          });
        this.path += '.md';
      });
  }
}

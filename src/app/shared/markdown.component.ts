import { Component, ElementRef, Input } from '@angular/core';
import * as marked  from 'marked';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: '[markdown]',
  template: `<ng-content></ng-content>`
})
export class MarkdownComponent {
  @Input() path: string;
  private md;
  private ext;
  constructor(private el: ElementRef, private http: Http) {}

  ngAfterViewInit() {
    if (!this.path) {
      this.md = this.prepare(this.el.nativeElement.innerHTML);
      this.el.nativeElement.innerHTML = marked(this.md);
      Prism.highlightAll(false);
    } else {
      this.getContent();
    }
  }

  getContent() {
    if (!!this.path) {
      this.ext = this.path.split('.').splice(-1).join();
    }

    this.http.get(this.path)
      .toPromise()
      .then(resp => {
        this.md = resp.text();
        this.el.nativeElement.innerHTML = marked(this.prepare(this.md));
        Prism.highlightAll(false);
      })
      .catch(error => Promise.reject(error.message || error));
  }

  prepare(raw: any) {
    return raw ? raw : '';
  }
}

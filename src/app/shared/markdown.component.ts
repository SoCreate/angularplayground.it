import { Component, ElementRef, Input } from '@angular/core';
import * as marked from 'marked';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { Http } from '@angular/http';

declare var Prism: any;

@Component({
  selector: '[markdown]',
  template: `<ng-content></ng-content>`
})
export class MarkdownComponent {
  _path;
  @Input() set path(value) {
    this._path = value;
    if(this._path) {
      this.getContent();
    }
  }
  private md;
  private ext;
  constructor(private el: ElementRef, private http: Http) {}

  ngAfterViewInit() {
    if (!this._path) {
      this.md = this.prepare(this.el.nativeElement.innerHTML);
      this.el.nativeElement.innerHTML = marked(this.md);
      Prism.highlightAll(false);
    }
  }

  getContent() {
    if (!!this._path) {
      this.ext = this._path.split('.').splice(-1).join();
    }

    this.http.get(this._path)
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

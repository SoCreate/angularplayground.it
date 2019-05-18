import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import * as marked from 'marked';
import * as Prism from 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

@Component({
  selector: '[markdown]',
  template: `<ng-content></ng-content>`,
  styles: [`
    /* hide line numbers for prism line highlighting */
    ::ng-deep .line-highlight[data-start]:before,
    ::ng-deep .line-highlight[data-start]:after,
    ::ng-deep .line-highlight[data-end]:before,
    ::ng-deep .line-highlight[data-end]:after {
      content: '';
    }
  `]
})
export class MarkdownComponent implements AfterViewInit {
  _path;
  @Input() set path(value) {
    this._path = value;
    if (this._path) {
      this.getContent();
    }
  }
  // see example line number formats here: https://prismjs.com/plugins/line-highlight
  @Input() lines: string;
  private md;

  constructor(
    private el: ElementRef,
    private http: Http,
    private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this._path) {
      this.md = this.prepare(this.el.nativeElement.innerHTML);
      this.el.nativeElement.innerHTML = marked(this.md);
      Prism.highlightAll(false);
    }
  }

  private getContent() {
    this.http.get(this._path)
      .toPromise()
      .then(res => {
        this.md = res.text();
        // tokenize the content
        this.el.nativeElement.innerHTML = marked(this.prepare(this.md));
        if (this.lines) {
          // add line highlighting metadata
          const pre = this.el.nativeElement.querySelector('pre');
          this.renderer.setAttribute(pre, 'data-line', this.lines);
        }
        // prism does its magic
        Prism.highlightAll(false);
      })
      .catch(error => Promise.reject(error.message || error));
  }

  private prepare(raw: string) {
    return raw ? raw : '';
  }
}

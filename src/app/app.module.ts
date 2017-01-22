import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MarkdownComponent} from './shared/markdown.component';
import {AboutComponent} from './about/about/about.component';
import {HomeComponent} from './home/home.component';
import {DocsComponent} from './docs/docs/docs.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {
    path: 'docs',
    children: [
      {path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full'},
      {path: '**', component: DocsComponent}
    ]
  },
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    AboutComponent,
    HomeComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

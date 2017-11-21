import { QuickToggleComponent } from './how-to/quick-toggle/quick-toggle.component';
import { EmbeddingSandboxesComponent } from './how-to/embedding-sandboxes/embedding-sandboxes.component';
import { CommandBarOpenComponent } from './how-to/command-bar-open/command-bar-open.component';
import { CommandBarNavigationComponent } from './how-to/command-bar-navigation/command-bar-navigation.component';
import { CommandBarCloseComponent } from './how-to/command-bar-close/command-bar-close.component';
import { HowToComponent } from './how-to/how-to/how-to.component';
import { RequirementsComponent } from './docs/requirements/requirements.component';
import { NonAngularCliComponent } from './docs/non-angular-cli/non-angular-cli.component';
import { SoCreateLogoComponent } from './shared/socreate-logo/socreate-logo.component';
import { PlaygroundLogoComponent } from './shared/playground-logo/playground-logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './shared/markdown.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs/docs.component';
import { GithubCornerComponent } from './shared/github-corner.component';
import { IntroductionComponent } from './docs/introduction/introduction.component';
import { InstallingComponent } from './docs/installing/installing.component';
import { BootstrappingComponent } from './docs/bootstrapping/bootstrapping.component';
import { CliComponent } from './docs/cli/cli.component';
import { AngularCliComponent } from './docs/angular-cli/angular-cli.component';
import { SandboxingComponent } from './docs/sandboxing/sandboxing.component';
import { ApiComponent } from './docs/api/api.component';
import { CustomRootNgmoduleComponent } from './docs/custom-root-ngmodule/custom-root-ngmodule.component';
import { SearchingForSandboxesComponent } from './how-to/searching-for-sandboxes/searching-for-sandboxes.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/introduction', component: IntroductionComponent },
      { path: 'getting-started/requirements', component: RequirementsComponent },
      { path: 'getting-started/installing', component: InstallingComponent },
      { path: 'getting-started/bootstrapping', component: BootstrappingComponent },
      { path: 'getting-started/cli', component: CliComponent },
      { path: 'getting-started/angular-cli', component: AngularCliComponent },
      { path: 'getting-started/non-angular-cli', component: NonAngularCliComponent },
      { path: 'sandboxing/sandboxing-components', component: SandboxingComponent },
      { path: 'sandboxing/api', component: ApiComponent },
      { path: 'sandboxing/custom-root-ngmodule', component: CustomRootNgmoduleComponent },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  {
    path: 'how-to',
    component: HowToComponent,
    children: [
      { path: 'command-bar-close', component: CommandBarCloseComponent },
      { path: 'command-bar-navigation', component: CommandBarNavigationComponent },
      { path: 'command-bar-open', component: CommandBarOpenComponent },
      { path: 'embedding-sandboxes', component: EmbeddingSandboxesComponent },
      { path: 'quick-toggle', component: QuickToggleComponent },
      { path: 'searching-for-sandboxes', component: SearchingForSandboxesComponent },
      { path: '', redirectTo: 'command-bar-open', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundLogoComponent,
    SoCreateLogoComponent,
    GithubCornerComponent,
    MarkdownComponent,
    AboutComponent,
    HomeComponent,
    DocsComponent,
    IntroductionComponent,
    InstallingComponent,
    BootstrappingComponent,
    CliComponent,
    AngularCliComponent,
    NonAngularCliComponent,
    SandboxingComponent,
    ApiComponent,
    CustomRootNgmoduleComponent,
    RequirementsComponent,
    HowToComponent,
    CommandBarCloseComponent,
    CommandBarNavigationComponent,
    CommandBarOpenComponent,
    EmbeddingSandboxesComponent,
    QuickToggleComponent,
    SearchingForSandboxesComponent,
    SlideShowComponent
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

import { QuickToggleComponent } from './docs/how-to/quick-toggle/quick-toggle.component';
import { EmbeddingSandboxesComponent } from './docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { CommandBarOpenComponent } from './docs/how-to/command-bar-open/command-bar-open.component';
import { CommandBarNavigationComponent } from './docs/how-to/command-bar-navigation/command-bar-navigation.component';
import { CommandBarCloseComponent } from './docs/how-to/command-bar-close/command-bar-close.component';
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
import { SearchingForSandboxesComponent } from './docs/how-to/searching-for-sandboxes/searching-for-sandboxes.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import { appRoutes } from './app.routes';

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

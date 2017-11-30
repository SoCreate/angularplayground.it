import { QuickToggleComponent } from './docs/how-to/quick-toggle/quick-toggle.component';
import { EmbeddingSandboxesComponent } from './docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { CommandBarOpenComponent } from './docs/how-to/command-bar-open/command-bar-open.component';
import { CommandBarNavigationComponent } from './docs/how-to/command-bar-navigation/command-bar-navigation.component';
import { CommandBarCloseComponent } from './docs/how-to/command-bar-close/command-bar-close.component';
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
import { GithubCornerComponent } from './shared/github-corner.component';
import { SearchingForSandboxesComponent } from './docs/how-to/searching-for-sandboxes/searching-for-sandboxes.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import { appRoutes } from './app.routes';
import { DocsComponent } from 'app/docs/docs.component';
import { SandboxApiComponent } from 'app/docs/api/sandbox/sandbox.component';
import { IntroductionComponent } from 'app/docs/getting-started/introduction/introduction.component';
import { RequirementsComponent } from 'app/docs/getting-started/requirements/requirements.component';
import { InstallingComponent } from 'app/docs/getting-started/installing/installing.component';
import { AngularCliComponent } from 'app/docs/getting-started/angular-cli/angular-cli.component';
import { NonAngularCliComponent } from 'app/docs/getting-started/non-angular-cli/non-angular-cli.component';
import { SandboxingComponent } from 'app/docs/how-to/sandboxing/sandboxing.component';
import { CustomRootNgmoduleComponent } from 'app/docs/how-to/custom-root-ngmodule/custom-root-ngmodule.component';
import { ConfigurationComponent } from 'app/docs/api/configuration/configuration.component';
import { RunTheCliComponent } from 'app/docs/how-to/run-the-cli/run-the-cli.component';


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
    RunTheCliComponent,
    AngularCliComponent,
    NonAngularCliComponent,
    SandboxingComponent,
    SandboxApiComponent,
    ConfigurationComponent,
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

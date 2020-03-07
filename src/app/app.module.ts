import { SearchingForSandboxesComponent } from './docs/how-to/keyboard-shortcuts/searching-for-sandboxes/searching-for-sandboxes.component';
import { QuickToggleComponent } from './docs/how-to/keyboard-shortcuts/quick-toggle/quick-toggle.component';
import { EmbeddingSandboxesComponent } from './docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { CommandBarOpenComponent } from './docs/how-to/keyboard-shortcuts/command-bar-open/command-bar-open.component';
import { CommandBarNavigationComponent } from './docs/how-to/keyboard-shortcuts/command-bar-navigation/command-bar-navigation.component';
import { CommandBarCloseComponent } from './docs/how-to/keyboard-shortcuts/command-bar-close/command-bar-close.component';
import { SoCreateLogoComponent } from './shared/socreate-logo/socreate-logo.component';
import { PlaygroundLogoComponent } from './shared/playground-logo/playground-logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './shared/markdown.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GithubCornerComponent } from './shared/github-corner.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import { appRoutes } from './app.routes';
import { DocsComponent } from './docs/docs.component';
import { SandboxApiComponent } from './docs/api/sandbox/sandbox.component';
import { IntroductionComponent } from './docs/getting-started/introduction/introduction.component';
import { InstallingComponent } from './docs/getting-started/installing/installing.component';
import { UseAngularLibrariesComponent } from './docs/getting-started/use-angular-libraries/use-angular-libraries.component';
import { FaqsComponent } from './docs/getting-started/faqs/faqs.component';
import { SandboxingComponent } from './docs/how-to/sandboxing/sandboxing.component';
import { ConfigurationComponent } from './docs/api/configuration/configuration.component';
import { RunTheCliComponent } from './docs/how-to/run-the-cli/run-the-cli.component';
import { ReporterFormatsComponent } from './docs/api/reporter-formats/reporter-formats.component';
import { CheckingUtilityComponent } from './docs/how-to/checking-utility/checking-utility.component';
import { VisualRegressionsUtilityComponent } from './docs/how-to/visual-regressions-utility/visual-regressions-utility.component';
import { KeyboardShortcutsComponent } from './docs/how-to/keyboard-shortcuts/keyboard-shortcuts.component';
import { BuildProdComponent } from './docs/how-to/build-prod/build-prod.component';
import { MockServiceComponent } from './docs/how-to/mock-service/mock-service.component';
import { ConfigurationPluginsComponent } from './docs/api/configuration-plugins/configuration-plugins.component';


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
    ReporterFormatsComponent,
    CheckingUtilityComponent,
    VisualRegressionsUtilityComponent,
    UseAngularLibrariesComponent,
    FaqsComponent,
    KeyboardShortcutsComponent,
    SandboxingComponent,
    SandboxApiComponent,
    ConfigurationComponent,
    ConfigurationPluginsComponent,
    CommandBarCloseComponent,
    CommandBarNavigationComponent,
    CommandBarOpenComponent,
    EmbeddingSandboxesComponent,
    QuickToggleComponent,
    SearchingForSandboxesComponent,
    SlideShowComponent,
    BuildProdComponent,
    MockServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Routes } from '@angular/router';
import { AboutComponent } from 'app/about/about.component';
import { CommandBarCloseComponent } from 'app/docs/how-to/keyboard-shortcuts/command-bar-close/command-bar-close.component';
import { CommandBarNavigationComponent } from 'app/docs/how-to/keyboard-shortcuts/command-bar-navigation/command-bar-navigation.component';
import { CommandBarOpenComponent } from 'app/docs/how-to/keyboard-shortcuts/command-bar-open/command-bar-open.component';
import { EmbeddingSandboxesComponent } from 'app/docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { QuickToggleComponent } from 'app/docs/how-to/keyboard-shortcuts/quick-toggle/quick-toggle.component';
import { SearchingForSandboxesComponent } from 'app/docs/how-to/keyboard-shortcuts/searching-for-sandboxes/searching-for-sandboxes.component';
import { HomeComponent } from 'app/home/home.component';
import { DocsComponent } from 'app/docs/docs.component';
import { SandboxApiComponent } from 'app/docs/api/sandbox/sandbox.component';
import { IntroductionComponent } from 'app/docs/getting-started/introduction/introduction.component';
import { InstallingComponent } from 'app/docs/getting-started/installing/installing.component';
import { AngularCliComponent } from 'app/docs/getting-started/angular-cli/angular-cli.component';
import { NonAngularCliComponent } from 'app/docs/getting-started/non-angular-cli/non-angular-cli.component';
import { SandboxingComponent } from 'app/docs/how-to/sandboxing/sandboxing.component';
import { CustomRootNgmoduleComponent } from 'app/docs/how-to/custom-root-ngmodule/custom-root-ngmodule.component';
import { ConfigurationComponent } from 'app/docs/api/configuration/configuration.component';
import { RunTheCliComponent } from 'app/docs/how-to/run-the-cli/run-the-cli.component';
import { ReporterFormatsComponent } from 'app/docs/api/reporter-formats/reporter-formats.component';
import { CheckingUtilityComponent } from 'app/docs/how-to/checking-utility/checking-utility.component';
import { KeyboardShortcutsComponent } from 'app/docs/how-to/keyboard-shortcuts/keyboard-shortcuts.component';
import { BuildProdComponent } from 'app/docs/how-to/build-prod/build-prod.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/introduction', component: IntroductionComponent },
      { path: 'getting-started/installation', component: InstallingComponent },
      { path: 'getting-started/angular-cli', component: AngularCliComponent },
      { path: 'getting-started/non-angular-cli', component: NonAngularCliComponent },
      { path: 'api/sandbox', component: SandboxApiComponent },
      { path: 'api/configuration', component: ConfigurationComponent },
      { path: 'api/reporter-formats', component: ReporterFormatsComponent },
      { path: 'how-to/sandboxing-components', component: SandboxingComponent },
      { path: 'how-to/run-the-cli', component: RunTheCliComponent },
      { path: 'how-to/keyboard-shortcuts', component: KeyboardShortcutsComponent },
      { path: 'how-to/checking-utility', component: CheckingUtilityComponent },
      { path: 'how-to/embedding-sandboxes', component: EmbeddingSandboxesComponent },
      { path: 'how-to/custom-root-ngmodule', component: CustomRootNgmoduleComponent },
      { path: 'how-to/build-prod', component: BuildProdComponent },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];

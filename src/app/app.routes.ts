import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmbeddingSandboxesComponent } from './docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { SandboxApiComponent } from './docs/api/sandbox/sandbox.component';
import { IntroductionComponent } from './docs/getting-started/introduction/introduction.component';
import { InstallingComponent } from './docs/getting-started/installing/installing.component';
import { AngularCliComponent } from './docs/getting-started/angular-cli/angular-cli.component';
import { NonAngularCliComponent } from './docs/getting-started/non-angular-cli/non-angular-cli.component';
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
import { ConfigurationPluginsComponent } from './docs/api/configuration-plugins/configuration-plugins.component';

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
      { path: 'getting-started/use-angular-libraries', component: UseAngularLibrariesComponent },
      { path: 'getting-started/faqs', component: FaqsComponent },
      { path: 'api/sandbox', component: SandboxApiComponent },
      { path: 'api/configuration', component: ConfigurationComponent },
      { path: 'api/reporter-formats', component: ReporterFormatsComponent },
      { path: 'how-to/sandboxing-components', component: SandboxingComponent },
      { path: 'how-to/run-the-cli', component: RunTheCliComponent },
      { path: 'how-to/keyboard-shortcuts', component: KeyboardShortcutsComponent },
      { path: 'how-to/visual-regressions', component: VisualRegressionsUtilityComponent },
      { path: 'how-to/checking-utility', component: CheckingUtilityComponent },
      { path: 'how-to/embedding-sandboxes', component: EmbeddingSandboxesComponent },
      { path: 'how-to/configuration-plugins', component: ConfigurationPluginsComponent },
      { path: 'how-to/build-prod', component: BuildProdComponent },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];

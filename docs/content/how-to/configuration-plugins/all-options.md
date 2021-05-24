###### ./src/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';
import { SandboxesDefined } from './sandboxes';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [
        BrowserAnimationsModule
    ],
    sandboxesDefined: SandboxesDefined
  });
. . .
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

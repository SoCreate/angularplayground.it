###### ./src/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { SandboxesDefined } from './sandboxes';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [],
    sandboxesDefined: SandboxesDefined
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

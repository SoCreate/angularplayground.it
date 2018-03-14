###### ./src/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: []
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

###### ./src/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [
        BrowserAnimationsModule
    ]
  });
. . .
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

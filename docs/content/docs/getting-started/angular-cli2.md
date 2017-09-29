###### main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('ng-app');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

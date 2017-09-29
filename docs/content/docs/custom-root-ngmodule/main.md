###### main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground } from 'angular-playground';
import { CustomPlaygroundModule } from './custom-playground.module';

initializePlayground('ng-app');
platformBrowserDynamic().bootstrapModule(CustomPlaygroundModule);
```

###### my-playground.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent, PlaygroundCommonModule } from 'angular-playground';
import { environment } from './environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    PlaygroundCommonModule,
    environment.production
      ? ServiceWorkerModule.register('/ngsw-worker.js')
      : []
  ],
  bootstrap: [AppComponent]
})
export class MyPlaygroundModule {}
```
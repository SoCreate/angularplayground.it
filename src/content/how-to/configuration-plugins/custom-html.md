###### ./src/index.playground.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <!-- Angular Playground Root Element -->
  <ap-root></ap-root>
</body>
</html>
```

###### ./.angular-playground/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';
import { SandboxesDefined } from './sandboxes';

PlaygroundModule
  .configure({
    overlay: false,
    modules: [
        BrowserAnimationsModule
    ],
    sandboxesDefined: SandboxesDefined
  });
. . .
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

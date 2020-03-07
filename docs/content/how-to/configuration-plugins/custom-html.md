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

###### ./src/main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
    overlay: false,
    modules: [
        BrowserAnimationsModule
    ]
  });
. . .
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

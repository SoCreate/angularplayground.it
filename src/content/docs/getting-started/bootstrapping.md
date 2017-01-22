# Bootstrapping Angular Playground
It is designed to use your existing app as a host for serving up an Angular Playground
application, which is nothing more than an Angular entry module that can be 
bootstrapped.

To bootstrap the playground, you can create an entry script with the following:

*main.playground.ts*
```typescript
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
```

You can use your existing `index.html` and whatever other build/serve scenario you
have in place for you app, you just need to change your entry point to be this
`main.playground.ts` file instead of your `main.ts` file, or you could do some other
type of logic to run the `initializePlayground` and bootstrap the `PlaygroundModule` conditionally.

The `initializePlayground` function takes in an element selector string. The element 
selector is used to find your existing app element in your `index.html` DOM and 
replace it with the element selector used by the Angular Playground `AppComponent`.

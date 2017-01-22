# Setting up an Angular CLI Powered Project

Angular Playground ❤'s Angular CLI and has built in support for integrating with it.
If your app is using the **Angular CLI** you can set up your **angular-playground.json**
file to have Angular Playground make use of its `ng serve` under the hood.  

*angular-playground.json*
```json
{
  "sourceRoot": "./src",
  "angularCli": {
    "environment": "playground",
    "port": 4201
  }
}
```

When the `angularCli` property is present the `ng serve` command will be used when you 
run the `angular-playground` cli command. Below is a description of the properties of that
object:
+ `envionment` *(optional)*  
  The environment to target for serving up Angular Playground (will tell Angular CLI to use this instead of its default)
+ `port` *(optional)*  
  The port to tell `ng serve` to use. Defaults to `4201`.

You will most likely want to create a new environment file 
(see the [angular cli docs on GitHub](https://github.com/angular/angular-cli#build-targets-and-environment-files)
for the playground and make some changes to your existing `main.ts` file
and your existing environment files.

Starting with the new environment file for playground:

*environment.playground.ts*
```typescript
export { PlaygroundModule as AppModule } from 'angular-playground';
import { initializePlayground } from 'angular-playground';

export const environment = {
  production: false
};

initializePlayground('app-root');

```

Here the code is exporting the `PlaygroundModule` as the type `AppModule`. This is going
to allow you to keep your `platformBrowserDynamic().bootstrapModule(AppModule)` call
in your `main.ts` the same. You need to do this because **AngularCLI** only
supports one entry script in the project. So you need a way to dynamically 
tell that script to bootstrap either your host app module or the playground module.

Then you need to call `initializePlayground()` and pass it in the selector string
for your `AppComponent`.

You will also need to update your existing `environment.*.ts` files to export
your `AppModule`. You should be able to do this by simply adding a line similar to:
```typescript
export { AppModule } from '../app/app.module';
```

Ok, then over in the entry point script:

*main.ts*
```typescript
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, AppModule } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

You need to change the `AppModule` import to come from `./environments/environment` 
instead of the typical `./app/app.module` and that's it!

With that, you have added support to the single `main.ts` file to bootstrap
different modules based on environment used.

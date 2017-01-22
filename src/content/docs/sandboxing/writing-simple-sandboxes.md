# Writing sandboxes for your components

To create a sandbox with scenarios for components in your Angular application you need
to use the `sandboxOf` function and export the call to that as the default for the file.
This file needs to have the `.sandbox.ts` extension for it to be auto-discovered.

So let's say you have a `NoticeComponent` in a file named `notice.component.ts`.

*notice.component.ts*
```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-notice',
  template: `<ng-content></ng-content>`
})
export class NoticeComponent {}
```

You can create a file next to it named `notice.component.sandbox.ts` with the following content:

*notice.component.sandbox.ts*
```typescript
import { sandboxOf } from 'angular-playground';
import { NoticeComponent } from './notice.component';

export default sandboxOf(NoticeComponent)
  .add('with simple text', {
    template: `<app-notice>Hey playground!</app-notice>`
  });
```

The `sandboxOf` function returns an instance of a `SandboxBuilder` that has a fluid
api via it's `add` method. The `add` method is used to add scenarios for your sandboxed component.
Each scenario needs a `description` (the first parameter), and a `scenarioConfig` object
(the second parameter). The `scenarioConfig` object requires a `template` property at a minimum.

The `sandboxOf` function and `SandboxBuilder` are *"TypeScripted"* out so you can discover 
the different parameters/options/etc within your IDE/editor (if it has TypeScript support).
Or you can always explore the source code here! Or...you can contribute and add more docs to show
how to use the api. 😎

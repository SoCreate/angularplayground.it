Writing a sandbox for a component.

*notice.component.sandbox.ts*
```typescript
import { sandboxOf } from 'angular-playground';
import { NoticeComponent } from './notice.component';

export default sandboxOf(NoticeComponent)
  .add('with simple text', {
    template: `<app-notice>Hey playground!</app-notice>`
  });
```

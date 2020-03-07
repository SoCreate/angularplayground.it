###### notice.component.sandbox.ts
```typescript
import { sandboxOf } from 'angular-playground';
import { NoticeComponent } from './notice.component';

export default sandboxOf(NoticeComponent, {
    uniqueId: 'c48364e7-fbd0-487d-bc7f-4b8b1e0c42dd'  
})
  .add('with simple text', {
    template: `<app-notice>Hey playground!</app-notice>`
  });
```

###### my.component.sandbox.ts
```typescript
import { sandboxOf } from 'angular-playground';
import { of } from 'rxjs';

class MockLoadDataService {
    loadData() {
        return of({firstName: 'John', lastName: 'Smith'});
    }
}

export default sandboxOf(MyComponent, {
    providers: [{provide: LoadDataService, useClass: MockLoadDataService}]
})
    .add('Default', {
        template: `
            <my-component></my-component>
        `
    });
```

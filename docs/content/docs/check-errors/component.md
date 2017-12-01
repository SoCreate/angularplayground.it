###### my.component.ts
```typescript
@Component({ ... })
export class MyComponent {
    constructor(private myService: MyService) {}

    ngOnInit() {
        this.myService.doStuff();
    }
}
```
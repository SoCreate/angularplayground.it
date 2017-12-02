###### my.component.sandbox.ts
```typescript
export default sandboxOf(MyComponent, {
    providers: [
        { provide: myService, useValue: { doStuff: () => {} } }
    ]
})
// ...scenarios
```
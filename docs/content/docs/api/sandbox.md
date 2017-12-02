###### my-component.sandbox.ts
```typescript
export default sandboxOf(MyComponent)
    .add('Default', {
        template: `<my-component></my-component>`
    });
```
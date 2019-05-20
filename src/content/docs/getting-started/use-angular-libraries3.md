###### ./src/tsconfig.playground.json
```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": []
  },
  "include": [
    "**/*.ts",
    "../projects/my-lib/src/**/*.ts"
  ],
  "exclude": [
    "test.ts",
    "**/*.spec.ts",
    "../projects/my-lib/src/**/*.spec.ts"
  ]
}
```

###### ./.angular-playground/tsconfig.playground.json
```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": []
  },
  "files": [
    "./main.playground.ts",
    "../src/polyfills.ts"
  ],
  "include": [
    "../src/**/*.d.ts",
    "../src/**/*.sandbox.ts",
    "../projects/my-lib/src/**/*.sandbox.ts"
  ]
}
```

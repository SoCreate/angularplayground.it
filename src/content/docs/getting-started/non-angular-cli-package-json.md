###### ./package.json
```json
{
  . . .
  "scripts": {
    . . .
    "playground": "concurrently \"npm run playground:run\" \"npm run playground:serve\"",
    "playground:run": "angular-playground --no-serve",
    "playground:serve": "webpack-dev-server --port=4201"
},
```
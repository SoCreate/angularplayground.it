###### ./angular.json
```json
{
  . . .
  "projects": {
    . . .
    "playground": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/playground",
            "index": "src/index.html",
            "main": ".angular-playground/main.playground.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": ".angular-playground/tsconfig.playground.json",
            "aot": false,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "buildOptimizer": false,
              "extractLicenses": false,
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "development"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "playground:build"
          }
        }
      }
    }
    

  },
  . . .
}
```

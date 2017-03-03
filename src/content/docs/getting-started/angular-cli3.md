###### .angular-cli.json
```json
{
  . . .
  
  "apps": [
    
    . . .
    
    {
      "name": "playground",
      "root": "src",
      "outDir": "dist-playground",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.playground.ts",
      "tsconfig": "tsconfig.app.json",
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
   ],
   
   . . .
}
```

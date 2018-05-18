###### angular-playground.json
```json
{
  "sourceRoot": "./src",
  "angularCli": {
    "appName": "my-playground-app",
    "port": 9876,
    "cmdPath": "./node-modules/@angular/cli/bin/ng",
    "args": [ "-ssl", "www.place.com" ]
  },
  "checkErrors": false,
  "randomScenario": false,
  "reportPath": "./sandbox.report.json",
  "reportType": "log",
  "timeout": 90,
  "noWatch": false,
  "noServe": false
}
```
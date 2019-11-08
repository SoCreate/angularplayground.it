###### ./angular-playground.json
```json
{
  "sourceRoots": ["./src"],
  "angularCli": {
    "appName": "playground"
  },
  "imageMatcherConfig": {
    "customDiffConfig": {
      threshold: 0.5
    },
    "failureThreshold": 0.1,
    "failureThresholdType": "percent"
  },
  ...,
  "visualRegressionIgnore": [
    {
      "re": "/src/feature-[1-3]/some-component",
      "flags": "i"
    },
    {
      "re": "[a-z]+emoji"
    }
  ]
}
```

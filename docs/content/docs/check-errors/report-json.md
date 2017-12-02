###### sandbox.report.json
```json
{
  "stats": {
    "tests": 4,
    "failures": 1,
    "start": 0,
    "end": 0,
    "suites": 1,
    "pending": 0,
    "duration": 0,
    "time": 0,
    "passes": 3
  },
  "failures": [
    {
      "title": "./app/feature3/star-rating.component.sandbox",
      "err": {
        "message": "Error: Uncaught (in promise): Error: StaticInjectorError[StuffService]:
        StaticInjectorError[StuffService]: NullInjectorError: No provider for StuffService!
        Error: StaticInjectorError[StuffService]: StaticInjectorError[StuffService]: 
        NullInjectorError: No provider for StuffService! at _NullInjector.get >
        ... <additional output omitted>"
      }
    }
  ],
  "passes": [
    {
      "title": "./app/feature1/person-bio.component.other.sandbox: a special case"
    },
    {
      "title": "./app/feature1/person-bio.component.sandbox: default"
    },
    {
      "title": "./app/feature1/person-details.component.sandbox: person with name and twitter"
    }
  ],
  "skips": []
}
```
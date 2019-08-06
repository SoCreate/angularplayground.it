###### my.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class LoadDataService {
    constructor(private httpClient: HttpClient) {
    }

    loadData() {
        return this.httpClient.get('/api/data');
    }
}

@Component({
    selector: 'my-component',
    template: `<pre>{{myData | json}}</pre>`
})
class MyComponent implements OnInit {
    myData: any;
    constructor(private dataService: LoadDataService) {
    }

    ngOnInit(): void {
        this.myData = this.dataService.loadData();
    }
}
```

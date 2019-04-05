###### sandbox.report.json
```xml
<testsuite name="Check Sandbox Errors" tests="5" failures="1" skipped="0">
<testcase classname="./app/feature1/person-bio.component.other.sandbox" name="a special case">
</testcase>
<testcase classname="./app/feature1/person-bio.component.sandbox" name="default">
</testcase>
<testcase classname="./app/feature1/person-details.component.sandbox" name="person with name and twitter">
</testcase>
<testcase classname="./app/feature1/person-details.component.sandbox" name="person with name">
</testcase>
<testcase classname="./app/feature2/info-block.component.sandbox" name="A general example">
<failure message="Scenario Failed">Error: Uncaught (in promise): Error: Template parse errors:
&#39;foo&#39; is not a known element:
1. If &#39;foo&#39; is an Angular component, then verify that it is part of this module.
2. To allow any element add &#39;NO_ERRORS_SCHEMA&#39; to the &#39;@NgModule.schemas&#39; of this component. (&quot;
        This is a general info block example component
        in Playground
        [ERROR -&gt;]&lt;foo&gt;&lt;/foo&gt;
      &lt;/ex-info-block&gt;&quot;): ng:///DynamicModule/DynamicComponent.html@4:8
(error info truncated for brevity)</failure>
</testcase>
</testsuite>
```

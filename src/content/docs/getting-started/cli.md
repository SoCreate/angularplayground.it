# The Angular Playground CLI

Angular Playground is designed to find files in your existing app with 
the `.sandbox.ts` extension that use the Angular Playground API to set up sandboxes
of components. To do this auto-descovery the Angular Playground needs to 
create a static file on the fly (**sandboxes.ts**) to be able to have everything play nice with
Angular's module system. To do that, Angular Playground provides a cli!

The cli for the playground can be run with the command:  
```
angular-playground <config-file>
```

So, you will need a config file! Create an **angular-playground.json** file in 
your project (typically next to your package.json file) with the following content:  

*angular-playground.json*
```json
{
  "sourceRoot": "./src"
}
```
The `sourceRoot` value will be a path relative to the location of your **package.json**
file for your project. This will be the directory that will be looked at (it will go down recursively from there)
to find your **\*.sandbox.ts** files dynamically. It will also be the directory where the **sandboxes.ts**
file will get written to.

This means you will most likely want to add `sandboxes.ts` to your `.gitignore` file:
```
/src/sandboxes.ts
```

You will also want to set up a script in your `package.json` file to handle running the
cli command:
```json
{
  ... 
  "scripts": {
    ...
    "playground": "angular-playground angular-playground.json"
  }
  ... 
}
```

From there you can call:
```
npm run playground
```
This will build your `sandboxes.ts` file and will start a watch that will handle
re-running the file build as you modify/add files with the `*.sandbox.ts` extension
in your project.

Finally, all you need to do from here is to serve your application in a manner in which
your `initializePlayground` and bootstrap of the `PlaygroundModule` call will get run.

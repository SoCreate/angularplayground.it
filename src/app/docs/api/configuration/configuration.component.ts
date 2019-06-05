import { Component } from '@angular/core';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html'
})
export class ConfigurationComponent {
    configurations = [
        {
            name: 'Configuration File Location',
            type: 'string',
            default: 'angular-playground.json',
            cli: '--config, -C',
            description: `The path to the config file (including file name) relative to
                          the package.json file location.`,
            label: 'not available as a CLI command'
        },
        {
            name: 'sourceRoots',
            type: 'string[ ]',
            default: `['./src']`,
            cli: '--src, -S',
            description: `The path to the directory (or directories) of your Angular source code.`
        },
        {
            name: 'noWatch',
            type: 'boolean',
            default: 'false',
            cli: '--no-watch',
            description: `Disables the watch call so the CLI only builds the sandboxes.ts file.
                          Useful for when you want to build Playground to serve it separately
                          (use in conjunction with noServe).`
        },
        {
            name: 'noServe',
            type: 'boolean',
            default: 'false',
            cli: '--no-serve',
            description: `Disables the Angular CLI-integrated ng serve call. Useful for when
                          you want to build Playground to serve it separately (use in
                          conjunction with noWatch).`
        },
        {
            name: 'build',
            type: 'boolean',
            default: 'false',
            cli: '--build',
            description: `Builds Playground in production mode with a service worker. Please
                          refer to docs/how-to/build-prod for more information.`,
            label: 'Requires @angular/cli and @angular/service-worker'
        },
        {
            name: 'checkErrors',
            type: 'boolean',
            default: 'false',
            cli: '--check-errors',
            description: `Runs playground and checks every sandbox for console errors, terminating
                          the build with either a success or failure result. Useful for integrating
                          Playground with a build system.`
        },
        {
            name: 'randomScenario',
            type: 'boolean',
            default: 'false',
            cli: '--random-scenario',
            description: `Used with checkErrors. Instead of visiting every scenario per component,
                          picks one scenario per component at random. Useful for systems that have
                          a large number of components.`
        },
        {
            name: 'timeout',
            type: 'number',
            default: '90',
            cli: '--timeout',
            description: `Used with checkErrors. The amount (in seconds) to allow the checkErrors
                          script to connect to a Playground instance before timing out.`
        },
        {
            name: 'reportPath',
            type: 'string',
            default: './sandbox.report.json',
            cli: '--report-path',
            description: `Used with checkErrors. Publishes to the provided path, if a valid report
                          type is also provided.`
        },
        {
            name: 'reportType',
            type: 'string',
            default: 'log',
            cli: '--report-type',
            possibleValues: ['log', 'json', 'xml'],
            description: `Used with checkErrors. Compiles the checkErrors script into a build-ready
                          report.`
        },
        {
            name: 'angularCli.appName',
            type: 'string',
            default: 'playground',
            cli: '--ng-cli-app',
            description: `The name of the playground app as specified in angular.json.`,
            label: '@angular/cli only'
        },
        {
            name: 'angularCli.host',
            type: 'string',
            default: '127.0.0.1',
            cli: '--ng-cli-host',
            description: `The host @angular/cli uses when serving Playground.`,
            label: '@angular/cli only'
        },
        {
            name: 'angularCli.port',
            type: 'number',
            default: '4201',
            cli: '--ng-cli-port',
            description: `The port number @angular/cli uses when serving Playground.`,
            label: '@angular/cli only'
        },
        {
            name: 'angularCli.cmdPath',
            type: 'string',
            default: 'node_modules/@angular/cli/bin/ng',
            cli: '--ng-cli-cmd',
            description: `The path to the @angular/cli command. Useful if you are using alternative
                          package management solutions (e.g. lerna, yarn).`,
            label: '@angular/cli only'
        },
        {
            name: 'angularCli.args',
            type: 'string[ ]',
            default: '[ ]',
            cli: null,
            description: `Additional arguments that can be provided to @angular/cli.`,
            label: '@angular/cli only, not available as a CLI command'
        }
    ];
}

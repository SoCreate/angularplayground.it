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
                        the package.json file location.`
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
        description: `Builds Playground in production mode with service workers disabled.`,
      },
      {
        name: 'buildWithServiceWorker',
        type: 'boolean',
        default: 'false',
        cli: '--build-with-service-worker',
        description: `Builds Playground in production mode with a service worker. Please
                          refer to docs/how-to/build-prod for more information.`,
        label: 'Requires @angular/service-worker'
      },
        {
            name: 'checkErrors',
            type: 'boolean',
            default: 'false',
            cli: '--check-errors',
            description: `Runs playground and checks every sandbox for console errors, terminating
                          the build with either a success or failure result. Useful for integrating
                          Playground with a build system.`,
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
            default: `' '`,
            cli: '--report-path',
            description: `Used with checkErrors. Publishes to the provided path, if a valid report
                          type is also provided. If reportType is provided and it is not log, and
                          no value is provided for reportPath, reportPath will default to
                          './sandbox.report.[reportType]'`
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
            name: 'checkVisualRegressions',
            type: 'boolean',
            default: 'false',
            cli: '--check-visual-regressions',
            description: `Runs playground and takes a snapshot of each scenario, then compares
                          the snapshot to the saved snapshot of that scenario. On first run, it
                          simply populates the directory of image snapshots to compare against.`,
        },
        {
            name: 'snapshotDirectory',
            type: 'string',
            default: 'src/__images_snapshots__',
            cli: '--snapshot-directory',
            description: `The directory in which to store scenario image snapshots.`
        },
        {
            name: 'diffDirectory',
            type: 'string',
            default: 'src/__diff_output__',
            cli: '--diff-directory',
            description: `The directory in which to store visual regression diffs (diffs are only generated if a
                          difference exceeding the matcher threshold is found).`
        },
        {
          name: 'viewportSizes',
          type: 'Array<{ width: number, height: number, deviceScaleFactor?: number, isMobile?: boolean, hasTouch?: boolean, isLandscape?: boolean }>',
          default: '[ ]',
          description: `A list of viewport sizes at which to take screenshots for visual regression. If list is empty (default), screenshots will capture the entirety of the visible page content. Viewport options are the same as the ones seen here: https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagesetviewportviewport`
        },
        {
            name: 'updateSnapshots',
            type: 'boolean',
            default: 'false',
            cli: '--update-snapshots',
            description: `Runs playground and takes a snapshot of each scenario, saving them all
                          in the snapshot directory, replacing any existing snapshot of those
                          scenarios.`
        },
        {
            name: 'deleteSnapshots',
            type: 'boolean',
            default: 'false',
            cli: '--delete-snapshots',
            description: `Delete visual regression snapshots of scenarios based on the sandboxes filtered down to using
                          the --path-to-sandboxes flag.`
        },
        {
          name: 'pathToSandboxes',
          type: 'string',
          default: `' '`,
          cli: '--path-to-sandboxes',
          description: `For use with the --check-errors, --update-snapshots or --delete-snapshots flag. Used to filter
                        down to sandboxes within a given directory. Expects a relative path from the /src directory.`
        },
        {
          name: 'imageSnapshotConfig',
          type: 'object',
          default: `{ }`,
          description: `Config options to be passed to the visual regression matcher. See full list at:
                        https://github.com/americanexpress/jest-image-snapshot#optional-configuration`
        },
        {
            name: 'visualRegressionIgnore',
            type: 'Array<{ regex: string, flags: string }>',
            default: `[ ]`,
            description: `A list of RegExps to match paths of sandboxes to be excluded from visual regression testing.
                          Pass in the regex pattern and flags as strings, just as in the RegExp constructor.`
        },
        {
            name: 'visualRegressionMockDate',
            type: 'number',
            default: `Date.now()`,
            cli: '--visual-regression-mock-date',
            description: `The time (in ms from epoch) to set in the browser while running visual regression tests.
                          Useful for components that render date/time info. Defaults to the current time.`
        },
        {
          name: 'visualRegressionSleepDuration',
          type: 'number',
          default: `100`,
          cli: '--visual-regression-sleep-duration',
          description: `Milliseconds to wait for sandbox scenario to load before capturing screenshot.`
        },
        {
            name: 'angularCli.appName',
            type: 'string',
            default: 'playground',
            cli: '--ng-cli-app',
            description: `The name of the playground app as specified in angular.json.`,
        },
        {
            name: 'angularCli.host',
            type: 'string',
            default: '127.0.0.1',
            cli: '--ng-cli-host',
            description: `The host @angular/cli uses when serving Playground.`,
        },
        {
            name: 'angularCli.port',
            type: 'number',
            default: '4201',
            cli: '--ng-cli-port',
            description: `The port number @angular/cli uses when serving Playground.`,
        },
        {
            name: 'angularCli.cmdPath',
            type: 'string',
            default: 'node_modules/@angular/cli/bin/ng',
            cli: '--ng-cli-cmd',
            description: `The path to the @angular/cli command. Useful if you are using alternative
                          package management solutions (e.g. lerna, yarn).`,
        },
        {
            name: 'angularCli.args',
            type: 'string[ ]',
            default: '[ ]',
            cli: null,
            description: `Additional arguments that can be provided to @angular/cli.`,
            label: 'Not available as a CLI command'
        }
    ];
}

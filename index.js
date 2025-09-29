import { buildForBrowser } from '@jsheaven/easybuild';

await buildForBrowser({
  entryPoint: './node_modules/@wysimark/standalone/.dist/browser/index.iife.js', // still having import statements
  outfile: './bunlde/index.js', // imports are resolved/bundled in now; this file can be used directly via <script> inject; but still needs to be shipped via a CDN or webserver
  dts: false,
  debug: process.argv.indexOf('--dev') > -1,
  esBuildOptions: {
    logLevel: 'error',
  },
})

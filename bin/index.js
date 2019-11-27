#!/usr/bin/env node

const ngqr = require('../lib/main');

const argv = require('minimist')(process.argv.slice(2));
ngqr.ngqr(argv.authtoken);
'use strict';

const exportArchive = require('../handlers/export.js');

exports.command = ['export-assignment', 'ea'];
exports.description = 'Alias for "export --mode assignment"';
exports.handler = (argv) =>
    exportArchive(Object.assign({ mode: 'export' }, argv));
exports.builder = (yargs) => {
    yargs
        .option('output', require('../options/output'))
        .option('assignment', require('../options/assignment'));
};
module.exports = (version, callback, pre, post) => { if (version === '2.1.15') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.15')); post && post(); } }, 'linq-js-2.1.15'); else if (version === '2.1.16') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.16')); post && post(); } }, 'linq-js-2.1.16'); else if (version === '2.1.17') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.17')); post && post(); } }, 'linq-js-2.1.17'); else if (version === '2.1.18') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.18')); post && post(); } }, 'linq-js-2.1.18'); else if (version === '2.1.19') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.19')); post && post(); } }, 'linq-js-2.1.19'); else if (version === '2.1.20') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.20')); post && post(); } }, 'linq-js-2.1.20'); else if (version === '2.1.21') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-2.1.21')); post && post(); } }, 'linq-js-2.1.21'); else if (version === '2.1.22.pre') return require.ensure([], function(require) { if (callback) { pre && pre(); callback(require('linq-js-pre')); post && post(); } }, 'linq-js-pre'); };
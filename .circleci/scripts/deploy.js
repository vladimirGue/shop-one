const themeKit = require('@shopify/themekit');

themeKit.command('deploy', {
  env: 'staging',
  files: ['devNew/newSections.js','devNew/newSections.scss']
});
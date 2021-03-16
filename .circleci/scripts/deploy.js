const themeKit = require('@shopify/themekit');

themeKit.command('deploy', {
  env: 'development',
  files: ['devNew/newSections.js','devNew/newSections.scss']
});
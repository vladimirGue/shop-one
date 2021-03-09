const fs = require('fs');

module.exports.getPrData = () => {
  return JSON.parse(fs.readFileSync('/home/runner/work/_temp/_github_workflow/event.json'));
};
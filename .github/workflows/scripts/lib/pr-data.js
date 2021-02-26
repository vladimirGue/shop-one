const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
} = process.env;

module.exports.getPrData = async() => {
    const event_path= await octokit.request('https://api.github.com/repos/{owner}/{repo}/pulls/', {
        owner: 'vladimirGue',
        repo: 'shop-one',
        head: 'head',
        base: 'base'
      })
    return JSON.parse(fs.readFileSync(event_path));
};
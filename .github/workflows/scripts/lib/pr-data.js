const { Octokit } = require("@octokit/core");
const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
    GITHUB_AUTH_TOKEN,
} = process.env;
const octokit = new Octokit({ auth: GITHUB_AUTH_TOKEN });

module.exports.getPrData = async() => {
    const event_path= await octokit.request('GET /repos/{owner}/{repo}/pulls/', {
        owner: 'vladimirGue',
        repo: 'shop-one',
      });
    return JSON.parse(fs.readFileSync(event_path));
};
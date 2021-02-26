const { Octokit } = require("@octokit/core");
const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
    GITHUB_AUTH_TOKEN,
} = process.env;
const octokit = new Octokit({ auth:`cd9e9f9cbce4742c495ec206c735d16e18f12481`});

module.exports.getPrData = async() => {
    try {
        const event_path= await octokit.request("GET /repos/{owner}/{repo}/pulls", {
            owner: 'vladimirGue',
            repo: 'shop-one',
          });
        return JSON.parse(fs.readFileSync(event_path));
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    
};
const { Octokit } = require("@octokit/core");
const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
    GITHUB_AUTH_TOKEN,
} = process.env;


module.exports.getPrData = async() => {
    try {
        const octokit = new Octokit({ auth:`cd9e9f9cbce4742c495ec206c735d16e18f12481`});
        const event_path= await octokit.request("GET /repos/{owner}/{repo}/", {
            owner: 'vladimirGue',
            repo: 'shop-one',
          });
        return JSON.parse(fs.readFileSync(event_path));
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    
};
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
} = process.env;
const octokit = new Octokit({ auth: `eba18bb794e016f37a1763ae91bd13dd7c27bcf3` });

module.exports.getPrData = async() => {
    const event_path= await octokit.request('GET /repos/{owner}/{repo}/pulls/', {
        owner: 'vladimirGue',
        repo: 'shop-one',
      })
    return JSON.parse(fs.readFileSync(event_path));
};
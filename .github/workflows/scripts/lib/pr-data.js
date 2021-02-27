const { Octokit } = require("@octokit/core");
const { createAppAuth } = require("@octokit/auth-app");
const fs = require('fs');
require('dotenv').config();

const {
    GITHUB_EVENT_PATH,
    GITHUB_AUTH_TOKEN,
} = process.env;

getPrData = async() => {
const appOctokit = new Octokit();
  
  const { data } = await appOctokit.request("GET /repos/vladimirGue/shop-one/pulls");
  console.log(data[0].number+' + '+data[0].action);
}
/*getPrData = async() => {
    //return JSON.parse(fs.readFileSync('/home/runner/work/_temp/_github_workflow/event.json'));
    try {
        const octokit = new Octokit({ auth:"cd9e9f9cbce4742c495ec206c735d16e18f12481v",});
        const data= await octokit.request("/user");
        console.log(data);
        //return data;//JSON.parse(fs.readFileSync(event_path));
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    
};*/
getPrData();
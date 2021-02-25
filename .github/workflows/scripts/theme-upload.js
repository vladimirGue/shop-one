#!/usr/bin/env node

const ngrok = require('ngrok');
const liveServer = require("live-server");
/*
    🌈 Create New Theme Based on Build
*/

const uploadTheme = async () => {
    try {
        const port = 8181;
        const params = {
            port, // Defaults to 8080
            host: "0.0.0.0",
            open: false, // don't load browser
            logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        };
        liveServer.start(params);

        const ngrokUrl = await ngrok.connect({
            addr: 8181, // port or network address, defaults to 80
            authtoken: '1ooEih8OBnBaqG2A8mmlG1pVV3T_2CFdNyLHHHn9a25jSE2FM', // your authtoken from ngrok.com
        });
        console.log(ngrokUrl);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

uploadTheme();
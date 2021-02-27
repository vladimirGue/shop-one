#!/usr/bin/env node

//const shopifyClient = require('./lib/shopify-client');
const prData = require('./lib/pr-data');
const theme = require('./lib/theme');
const Shopify = require('shopify-api-node');
require('dotenv').config();

/*
💪 Get Environment Variables
*/
const {
    SHOP_NAME,
    API_KEY,
    API_PASSWORD,
} = process.env;

const listTheme = async () => {
    const data = prData.getPrData();
    
    console.log(data.action);
    console.log('~~~~~~~~~')
    console.log(data);
    
    if (data.action !== 'synchronize') {
        // we only need to delete PR theme when it's a PR synchronization
        return;
    }
    
    const newThemeName = theme.getThemeName({ prNumber: data.number });
    const themeNameRegex = `GITHUB-PR-${data.number}`;
    const shopify = new Shopify({
        shopName: SHOP_NAME,
        apiKey: API_KEY,
        password: API_PASSWORD
    });
    shopify.theme
        .list({ limit: 5 })
        .then((themes) => console.log(themes))
        .catch((err) => console.error(err));
    /*await shopifyClient.theme.list()
        .then(themes => {
            themes.map(existingTheme => {
                if (existingTheme.name.includes(themeNameRegex)) {
                    if (existingTheme.name !== newThemeName && existingTheme.role !== 'main') {
                        console.log(`Deleting ${existingTheme.name}`);
                        shopifyClient.theme.delete(existingTheme.id);
                    }
                }
            })
        }, err => console.error(err)); */
};

listTheme();
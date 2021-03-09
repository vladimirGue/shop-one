const Shopify = require('shopify-api-node');

if (!'pc-for-you.myshopify.com' || !'62f09bf245624bb27fcbc6266f245e7d' || !'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') {
    console.log('\x1b[31m%s\x1b[0m \x1b[1m%s\x1b[0m', '🔔 Missing required ENV variables. Make sure the following exist:', 'SHOP_NAME, API_KEY, API_PASSWORD');
    process.exit(1);
}

/*
    📡 Initialize Shopify API Creds
*/
const shopify = new Shopify({
    shopName: 'pc-for-you.myshopify.com',
    apiKey: '62f09bf245624bb27fcbc6266f245e7d',
    password: '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'
});

module.exports = shopify;
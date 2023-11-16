// links
let { _config : c_links, ...links} = require("../public/data/links.json");

// Payments
let { _config : c_payments, ...payments } = require("../public/data/payments.json");

// i18n
let { _config : c_i18n, ...i18n } = require("../public/data/i18n.json");

// Meta
// let { _config : c_meta, ...meta } = require("../public/meta.json");

// Public Static
let publicStaticAssets = {}

// Router (db, {options})
const db = {
    ...links,
    ...i18n,
    ...payments,
    // meta: {
    //     ...meta
    // }
}

module.exports = db;

// module.exports = () => db;

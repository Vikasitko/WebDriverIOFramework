//merge parent conf object + add new changes in uat conf (base url , connection time out etc)

const merge = require('deepmerge')     //deepmerge is java script module which will use for merge 
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {
    //baseUrl: 'https://rahulshettyacademyUAT.com',
    baseUrl: 'https://rahulshettyacademy.com',
    waitforTimeout: 2000,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep : "Sanity"
    },

})
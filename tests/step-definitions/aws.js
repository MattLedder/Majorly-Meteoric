const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;

AWS = require('../../helpers/s3_getObject');

Given('I have the Majorly Meteoric dataset', async function () {
    // console.log('Starting Test...');

    // Get a copy of the meteor data from AWS
    this.meteorData = await JSON.parse(await AWS.s3Download('majorly-meteoric', 'data0.json'));

    assert.exists(this.meteorData, "Meteor data was not downloaded properly")


});
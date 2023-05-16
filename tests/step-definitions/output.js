const { Given, When, Then } = require('@cucumber/cucumber');

Then('I output the data', function () {
    console.log(this.outputData);
});
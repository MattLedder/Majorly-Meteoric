const {After, Before} = require('@cucumber/cucumber');

// Run before each test
Before(function() {
    // console.log('Hooks Active')
    let world = this;
});

// Run after each test
After(function () {

});
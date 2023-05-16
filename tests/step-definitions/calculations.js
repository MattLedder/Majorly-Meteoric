const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I calculate the average mass of all meteors', function () {
    // console.log('Calculating...');

    let meteorCount = 0;
    let massSum = 0;
    let meteorAverageMass = 0;

    // Iterate through the data
    this.meteorData.forEach((meteor) => {

        // Check if each meteor has a valid "mass" value
        if (meteor.hasOwnProperty("mass")) {
            if (parseFloat(meteor.mass) > 0) {

                // Count a new meteor and add the mass to the existing sum
                meteorCount++;
                massSum += parseFloat(meteor.mass);
            }
        }
    });

    // console.log('Meteors Found: ' + meteorCount);
    // console.log('Total Weight: ' + massSum);

    // Save values to the variable world
    this.meteorAverageMass = massSum / meteorCount;

    // Validate that the average meteor mass is greater than zero
    expect(this.meteorAverageMass).to.be.greaterThan(0, "Average size data was not calculated correctly");

    this.outputData = "The average mass of the meteor data is " + this.meteorAverageMass + " grams.";

});

When('I calculate the largest and smallest meteors', function () {
    // console.log('Calculating...');

    let biggestMeteorName = '';
    let biggestMeteorMass = 0;
    let smallestMeteorName = '';
    let smallestMeteorMass = 9999999;

    // Iterate through the data
    this.meteorData.forEach((meteor) => {

        // Check if each meteor has a valid "mass" value
        if (meteor.hasOwnProperty("mass")) {

            // Check if the meteor is bigger than the existing one
            if (parseFloat(meteor.mass) > biggestMeteorMass) {

                // Record the new biggest meteor details
                biggestMeteorName = meteor.name;
                biggestMeteorMass = parseFloat(meteor.mass);

                // console.log('New biggest meteor: ' + biggestMeteorName + ': ' + biggestMeteorMass);
            }

            // Check if the meteor is smaller than the existing one
            if (parseFloat(meteor.mass) < smallestMeteorMass) {

                // Record the new smallest meteor details
                smallestMeteorName = meteor.name;
                smallestMeteorMass = parseFloat(meteor.mass);

                // console.log('New smallest meteor: ' + smallestMeteorName + ': ' + smallestMeteorMass);
            }
        }
    });

    // Save values to the variable world
    this.biggestMeteorName = biggestMeteorName;
    this.biggestMeteorMass = biggestMeteorMass;
    this.smallestMeteorName = smallestMeteorName;
    this.smallestMeteorMass = smallestMeteorMass;

    // Validate that the biggest and smallest meteor masses are greater than zero
    expect(this.biggestMeteorMass).to.be.greaterThan(0, "Meteor size data was not calculated correctly: Biggest meteor has zero mass");
    expect(this.smallestMeteorMass).to.be.greaterThan(0, "Meteor size data was not calculated correctly: Smallest meteor has zero mass");
    expect(this.biggestMeteorMass).to.be.greaterThan(smallestMeteorMass, "Meteor size data was not calculated correctly: Biggest meteor does not have more mass than smallest meteor");

    // Validate that the names are recorded properly
    expect(this.biggestMeteorName).to.not.be.empty;
    expect(this.smallestMeteorName).to.not.be.empty;

    this.outputData = "The biggest meteor in the data is '" + biggestMeteorName + "' with a mass of " + this.biggestMeteorMass + " grams. \n" +
        "The smallest meteor in the data is '" + smallestMeteorName + "' with a mass of " + this.smallestMeteorMass + " grams.";

});
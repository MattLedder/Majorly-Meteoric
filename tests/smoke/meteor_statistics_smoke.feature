@smoke
Feature: Meteor Mass Statistics

  Scenario: Calculate the average mass of all meteors
    Given I have the Majorly Meteoric dataset
    When I calculate the average mass of all meteors
    Then I output the data

  Scenario: Calculate the largest and smallest meteors
    Given I have the Majorly Meteoric dataset
    When I calculate the largest and smallest meteors
    Then I output the data
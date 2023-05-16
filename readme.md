# Majorly Meteoric Test Automation

This is a sample test automation framework which is designed to run tests against the data found at:

`s3://majorly-meteoric`

The automation framework uses Cucumber. Feature files are located in the 'tests' folder.

## Installation

These tests require Node and NPM to be installed. Please refer to the installation guides if you do not already have them on your system:

https://nodejs.org/en/download

## Configuration

Add your credentials for AWS to the `.env` file in the following format. NOTE: Do not add this file to the code repository

```
accessKeyId=[YOUR ACCESS KEY]
secretAccessKey=[YOUR SECRET ACCESS KEY]
```

## Run Commands

To start a test run, execute the following in terminal:

```javascript
// Run All Test Cases
> npm test
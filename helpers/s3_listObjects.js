const readCredentials = require('../helpers/readCredentials');

// Set configuration parameters
let SESConfig = {
    apiVersion: "2010-12-01",
    accessKeyId: readCredentials.getKey('accessKeyId'),
    secretAccessKey: readCredentials.getKey('secretAccessKey'),
    region: "us-west-2"
}

module.exports = {

    /**
     * Lists the files of an s3 bucket
     * @param bucketName Bucket to search
     * @returns string
     */
    async s3List(bucketName) {
        let AWS = require('aws-sdk');

        // Create S3 service object
        let s3 = new AWS.S3(SESConfig);

        // Create the parameters for calling listObjects
        let bucketParams = {
            Bucket: bucketName,
        };

        // Call S3 to obtain a list of the objects in the bucket
        s3.listObjects(bucketParams, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
            }
        });
    }
}
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const readCredentials = require('../helpers/readCredentials');

// Set configuration parameters
let SESConfig = {
    credentials: {
        accessKeyId: readCredentials.getKey('accessKeyId'),
        secretAccessKey: readCredentials.getKey('secretAccessKey'),
    },
    region: "us-west-2",
    httpOptions: {
        timeout: 6000,
        agent: false
    }
}

module.exports = {

    /**
     * Download a file of a specific name from the s3 bucket
     * @param bucketName Bucket to search
     * @param fileName File to return
     * @returns file S3 Bucket File
     */
    async s3Download(bucketName, fileName) {

        // Create a new S3 Client
        const client = new S3Client(SESConfig)

        // Build request command to get the file from the proper bucket
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: fileName
        });

        try {
            // Send command and await response
            const response = await client.send(command);

            // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
            const file = await response.Body.transformToString();

            return file;

        } catch (err) {
            console.error(err);
        }

    }
}
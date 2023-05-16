require('dotenv').config();

module.exports = {

    /**
     * Reads the credentials and passes the values back the designated key value
     * All credentials are saved in the .env file and should not be checked into code repository
     * @param keyName Credential key name
     * @returns value Credential value
     **/
    getKey(keyName) {

        // Get key value
        return process.env[keyName];
    }
}
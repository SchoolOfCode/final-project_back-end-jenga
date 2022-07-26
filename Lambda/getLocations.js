"use strict";
// Load the AWS SDK for JS
const AWS = require("aws-sdk");

// Set a region to interact with (make sure it's the same as the region of your table)
AWS.config.update({ region: "eu-west-1" });

exports.handler = async function (event, context) {
  //Declaring the DocumentClient to use for communication
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-west-1",
  });

  let responseBody = "";
  let statusCode = 0;

  //Try and Catch block. Try to scan (get everything) the table and set the responseBody to the result.
  //If it is a success, set the statuscode to 200, if it is failed, set the statuscode to 403 and the response body to an error string
  try {
    const data = await documentClient.scan({ TableName: "location" }).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
    console.log(data);
  } catch (error) {
    responseBody = `Unable to get user data`;
    statusCode = 403;
    console.log(error);
  }

  //Return the statusCode and the responseBody to the caller (frontend)
  const response = {
    statusCode: statusCode,
    headers: {
      myHeader: "Locations",
    },
    body: responseBody,
  };
  return response;
};

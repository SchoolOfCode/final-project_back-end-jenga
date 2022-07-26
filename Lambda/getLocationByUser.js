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

  //Unpacking the id from the props object (address bar)
  const { id } = event.pathParameters;

  //Try and Catch block. Try to query the table and set the responseBody to the result.
  //If it is a success, set the statuscode to 200, if it is failed, set the statuscode to 403 and the response body to an error string
  try {
    const params = {
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": id,
      },
      TableName: "location",
    };

    const data = await documentClient.query(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
  } catch (err) {
    responseBody = `Unable to get user data`;
    statusCode = 403;
    console.error(err);
  }

  //Return the statusCode and the responseBody to the caller (frontend)
  const response = {
    statusCode: statusCode,
    headers: {
      myHeader: "LocationByUser",
    },
    body: responseBody,
  };
  return response;
};

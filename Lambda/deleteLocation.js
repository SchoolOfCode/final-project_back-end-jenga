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
  let partitionKey = "";

  //Unpacking the id from the props object (address bar)
  const { id } = event.pathParameters;

  //Trying to scan the database for all the data we have there
  //Then finding the partition key part of the primary index by filtering the data on the locationId
  //If it is a success, set the statuscode to 201, if it is failed, set the statuscode to 403 and the response body to an error string
  try {
    const body = await documentClient.scan({ TableName: "location" }).promise();
    partitionKey = body.Items.filter((r) => r.locationId === id);
    console.log(partitionKey[0].userId);

    const params = {
      Key: {
        locationId: id,
        userId: partitionKey[0].userId,
      },
      TableName: "location",
    };

    const data = await documentClient.delete(params).promise();
    responseBody = `Deleted item ${id}`;
    statusCode = 200;
  } catch (err) {
    responseBody = `Unable to get location data`;
    statusCode = 403;
    console.error(err);
  }

  //Return the statusCode and the responseBody to the caller (frontend)
  const response = {
    statusCode: statusCode,
    headers: {
      myHeader: "deleteLocation",
    },
    body: responseBody,
  };
  console.log(response);
  return response;
};

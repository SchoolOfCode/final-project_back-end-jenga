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

  //Unpacking the variables from the props object (body)
  const {
    userId,
    locationId,
    longitude,
    latitude,
    locationName,
    locationImage,
  } = JSON.parse(event.body);

  //Construct the body to send to the database
  const params = {
    TableName: "location",
    Item: {
      userId: userId,
      locationId: locationId,
      longitude: longitude,
      latitude: latitude,
      locationName: locationName,
      locationImage: locationImage,
    },
  };

  //Try and Catch block. Try to put the request to the table and set the responseBody to the result.
  //If it is a success, set the statuscode to 201, if it is failed, set the statuscode to 403 and the response body to a string
  try {
    const data = await documentClient.put(params).promise();
    responseBody = `Posted ${nalocationNameme} item into the database`;
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to put user data`;
    statusCode = 403;
  }

  //Return the statusCode and the responseBody to the caller (frontend)
  const response = {
    statusCode: statusCode,
    headers: {
      myHeader: "postLocation",
    },
    body: responseBody,
  };

  return response;
};

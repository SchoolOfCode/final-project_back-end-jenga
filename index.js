"use strict";
//this part is to indicate that the code should be executed in “strict mode”. With strict mode, you can not, for example, use undeclared variables.

const AWS = require("aws-sdk");

let responseBody = "";
let statusCode = 0;

//declaring and exporting the function below

exports.handler = async function (event, context, callback) {
    //async function location (event, context, callback) {
  console.log(JSON.stringify(`Event: event`));

  const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-west-2",});
  //equivalent of Pool
  try {
    const data = await documentClient.scan({ TableName: "location" }).promise();
    //this is the equivalent of get router
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
    console.log(data);
  } catch (error) {
    responseBody = "Unable to get location";
    statusCode = 403;
  }
  let response = {
    statusCode: statusCode,
    headers: {
      myHeader: "Location",
    },
    body: responseBody,
  };
  console.log(response);
  return response;
};

//location();
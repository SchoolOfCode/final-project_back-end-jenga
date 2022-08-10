"use strict";
//this part is to indicate that the code should be executed in “strict mode”. With strict mode, you can not, for example, use undeclared variables.

const AWS = require("aws-sdk");

let responseBody = "";
let statusCode = 0;

//declaring and exporting the function below

exports.handler = async function (event, context, callback) {
  //async function location(id) {
  console.log(JSON.stringify(`Event: event`));

  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-west-2",
  });

  const { id } = event.pathParameters;
  //comment this if you want test in node

  //equivalent of Pool
  try {
    const data = await documentClient.scan({ TableName: "location" }).promise();
    //this is the equivalent of get router

    let partitionKey = data.Items.filter((e) => e.locationId === id);
    // e represents each element of the array as it filters
    //and keeps only the elements where id = to the location id we want
    let userId = partitionKey[0].userId;

    const params = {
      Key: { locationId: id, userId: userId },
      TableName: "location",
    };

    const body = await documentClient.delete(params).promise();

    responseBody = "Deleted item successful";
    statusCode = 200;
    // console.log(data);
  } catch (error) {
    responseBody = "Unable to delete location";
    statusCode = 403;
  }
  let response = {
    statusCode: statusCode,
    headers: {
      myHeader: "Delete Location",
    },
    body: responseBody,
  };
  console.log(response);
  return response;
};

// location("45");

/*to be able to run the code on VS Code, we need to uncomment "async function location" and uncomment the line that is calling the function name.
as well as commenting out the line "exports.handler = async function ..."*/

/* to run it on AWS, do the reverse of above */

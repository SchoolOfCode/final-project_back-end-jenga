"use strict";
//this part is to indicate that the code should be executed in “strict mode”. With strict mode, you can not, for example, use undeclared variables.

const AWS = require("aws-sdk");

let responseBody = "";
let statusCode = 0;

//declaring and exporting the function below

exports.handler = async function (event, context, callback) {
  // async function putLocation({
  //   userId,
  //   locationId,
  //   latitude,
  //   longitude,
  //   locationName,
  //   locationImage,
  // }) {
  console.log(JSON.stringify(`Event: event`));
  //console.log(userId);
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-west-2",
  });

  const {
    userId,
    locationId,
    latitude,
    longitude,
    locationName,
    locationImage,
  } = JSON.parse(event.body); // uncomment when testing the code on your VScode.

  const params = {
    Item: {
      userId: userId,
      locationId: locationId,
      latitude: latitude,
      longitude: longitude,
      locationName: locationName,
      locationImage: locationImage,
    },
    TableName: "location",
  };
  console.log(params.TableName);
  //equivalent of Pool
  try {
    // .query get multiple items but not all items from the database
    const data = await documentClient.put(params).promise();
    //this is the equivalent of get router
    responseBody = "location was added";
    statusCode = 200;
    console.log(data);
  } catch (error) {
    responseBody = "Unable to create new location";
    statusCode = 403;
  }
  let response = {
    statusCode: statusCode,
    headers: {
      myHeader: "Created a new location",
    },
    body: responseBody,
  };
  console.log(response);
  return response;
};

// putLocation({
//   userId: "23",
//   locationId: "88",
//   latitude: "4535",
//   longitude: "4534",
//   locationName: "564",
//   locationImage: "5456",
// });

/*to be able to run the code on VS Code, we need to uncomment "async function locationByUser" and uncomment the line that is calling the function name.
as well as commenting out the line "exports.handler = async function ..." we also need to comment the line that gets the id from event.pathParameters*/

/* to run it on AWS, do the reverse of above */
// put is a post method

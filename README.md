# Keepers Finders by JENGA

A brief description of what this project does and who it's for



## Tech Stack

We decided to chose a serverless backend model mainly because we recognised that cloud computing is becaming a future of backend development. 
We treated this Final project as our best chance to learn a new tech and apply this knowledge in a real world scenario.  

 - AWS API Gateway (REST API)
 - DynamoDB
 - Lambda functions (GET, PUT and DELETE request handling)

 Our language of choice was JavaScript (Node.JS).
 
## Diagram

Our serverless backend diagram:

![Backend Diagram](https://i.ibb.co/zQjr6XT/diagram.png)




## API Reference

#### Get saved locations

```
  GET /location/${id}
```

| Parameter | Type     | Description                       | Response 
| :-------- | :------- | :-------------------------------- | :-------------------- |
| `id`      | `string` |  List all the favourite location of the user | [{userId, locationId, latitude , longitude, locationName, locationImage }]} | 

---

#### Save a location

```
  POST /location
```

| Parameter | Type     | Description                       | Response 
| :-------- | :------- | :-------------------------------- | :-------------------- |
| {userId}      | `string` |  Post a new saved location for the user |  {data: string, status: integer, statusText: string, header{...}} | 

---

#### Delete a location

```
  DELETE /location/${id}
```

| Parameter | Type     | Description                       | Response 
| :-------- | :------- | :-------------------------------- | :-------------------- |
| `id`      | `string` |  Delete the selected location from favourites |  {data: string, status: integer, statusText: string, header{...}} | 


## Authors

- [@Nafiso Aden](https://github.com/nafisoaden97)
- [@Eda Burns](https://github.com/smurfeda)
- [@Gabor Havasi](https://github.com/Szfinx5)
- [@Arian Moossavi](https://github.com/Dinomouse)
- [@Josh Pattison](https://github.com/pattisoj)


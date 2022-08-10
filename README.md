<div align="center">
    <img src="https://i.ibb.co/d5K6SD6/logo.png" alt="logo" width="200"/>
</div>
<h1 align="center">Finders Keepers by JENGA - Backend repository</h1>


## Tech Stack

We decided to chose a serverless backend model mainly because we recognised that Serverless cloud computing model is becaming the future of backend development. 
We treated this Final project as our chance to learn a new tech and apply this knowledge in a real world scenario.  

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

## Repositories

Frontend:https://github.com/SchoolOfCode/final-project_front-end-jenga   
Backend: https://github.com/SchoolOfCode/final-project_back-end-jenga

## Authors

- [@Nafiso Aden](https://github.com/nafisoaden97)
- [@Eda Burns](https://github.com/smurfeda)
- [@Gabor Havasi](https://github.com/Szfinx5)
- [@Arian Moossavi](https://github.com/Dinomouse)
- [@Josh Pattison](https://github.com/pattisoj)



# Keepers Finders by JENGA

A brief description of what this project does and who it's for


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




## Diagram

Our serverless backend diagram:

![Backend Diagram](https://i.ibb.co/zQjr6XT/diagram.png)


## Authors

- [@Nafiso Aden](https://github.com/nafisoaden97)
- [@Eda Burns](https://github.com/smurfeda)
- [@Gabor Havasi](https://github.com/Szfinx5)
- [@Arian Moossavi](https://github.com/Dinomouse)
- [@Josh Pattison](https://github.com/pattisoj)


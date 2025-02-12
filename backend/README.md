# User Registration API

## Endpoint

`POST /users/register`

## Description

This endpoint allows new users to register by providing their full name, email, and password. The password is hashed before being stored in the database, and an authentication token is generated upon successful registration.

## Request Body

The request must contain the following JSON object:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Required Fields

- `fullname`: An object containing:
  - `firstname`: The first name of the user (string).
  - `lastname`: The last name of the user (string).
- `email`: The email address of the user (string).
- `password`: The password for the user account (string).

## Status Codes

- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
POST /users/register
Content-Type: application/json

{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

## Example Responses

### Success Response

```json
{
  "token": "generatedAuthToken",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    }
  ]
}
```

# User Login API

## Endpoint

`POST /users/login`

## Description

This endpoint allows existing users to log in by providing their email and password. An authentication token is generated upon successful login.

## Request Body

The request must contain the following JSON object:

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

- `email`: The email address of the user (string).
- `password`: The password for the user account (string).

## Status Codes

- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).
- `401 Unauthorized`: Invalid email or password.

## Example Request

```http
POST /users/login
Content-Type: application/json

{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

## Example Responses

### Success Response

```json
{
  "token": "generatedAuthToken",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Unauthorized Response

```json
{
  "message": "Invalid Email or Password"
}
```

# User Profile API

## Endpoint

`GET /users/profile`

## Description

This endpoint allows authenticated users to retrieve their profile information.

## Headers

- `Authorization`: Bearer token (required)

## Status Codes

- `200 OK`: User profile retrieved successfully.
- `401 Unauthorized`: Invalid or missing authentication token.

## Example Request

```http
GET /users/profile
Authorization: Bearer generatedAuthToken
```

## Example Responses

### Success Response

```json
{
  "_id": "userId",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

# User Logout API

## Endpoint

`GET /users/logout`

## Description

This endpoint allows authenticated users to log out by invalidating their authentication token.

## Headers

- `Authorization`: Bearer token (required)

## Status Codes

- `200 OK`: User successfully logged out.
- `401 Unauthorized`: Invalid or missing authentication token.

## Example Request

```http
GET /users/logout
Authorization: Bearer generatedAuthToken
```

## Example Responses

### Success Response

```json
{
  "message": "Logged out"
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

# Captain Registration API

## Endpoint

`POST /captains/register`

## Description

This endpoint allows new captains to register by providing their full name, email, password, and vehicle details. The password is hashed before being stored in the database, and an authentication token is generated upon successful registration.

## Request Body

The request must contain the following JSON object:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vechile": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vechileType": "string"
  }
}
```

### Required Fields

- `fullname`: An object containing:
  - `firstname`: The first name of the captain (string).
  - `lastname`: The last name of the captain (string).
- `email`: The email address of the captain (string).
- `password`: The password for the captain account (string).
- `vechile`: An object containing:
  - `color`: The color of the vehicle (string).
  - `plate`: The plate number of the vehicle (string).
  - `capacity`: The capacity of the vehicle (number).
  - `vechileType`: The type of the vehicle (string, one of 'car', 'motorcycle', 'auto').

## Status Codes

- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
POST /captains/register
Content-Type: application/json

{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "securePassword123",
    "vechile": {
        "color": "red",
        "plate": "XYZ123",
        "capacity": 4,
        "vechileType": "car"
    }
}
```

## Example Responses

### Success Response

```json
{
  "token": "generatedAuthToken",
  "captain": {
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jane.doe@example.com",
    "vechile": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vechileType": "car"
    }
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    }
  ]
}
```

# Captain Login API

## Endpoint

`POST /captains/login`

## Description

This endpoint allows existing captains to log in by providing their email and password. An authentication token is generated upon successful login.

## Request Body

The request must contain the following JSON object:

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

- `email`: The email address of the captain (string).
- `password`: The password for the captain account (string).

## Status Codes

- `200 OK`: Captain successfully logged in.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).
- `401 Unauthorized`: Invalid email or password.

## Example Request

```http
POST /captains/login
Content-Type: application/json

{
    "email": "jane.doe@example.com",
    "password": "securePassword123"
}
```

## Example Responses

### Success Response

```json
{
  "token": "generatedAuthToken",
  "captain": {
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jane.doe@example.com"
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Unauthorized Response

```json
{
  "message": "Invalid Email or Password"
}
```

# Captain Profile API

## Endpoint

`GET /captains/profile`

## Description

This endpoint allows authenticated captains to retrieve their profile information.

## Headers

- `Authorization`: Bearer token (required)

## Status Codes

- `200 OK`: Captain profile retrieved successfully.
- `401 Unauthorized`: Invalid or missing authentication token.

## Example Request

```http
GET /captains/profile
Authorization: Bearer generatedAuthToken
```

## Example Responses

### Success Response

```json
{
  "_id": "captainId",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vechile": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vechileType": "car"
  }
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

# Captain Logout API

## Endpoint

`GET /captains/logout`

## Description

This endpoint allows authenticated captains to log out by invalidating their authentication token.

## Headers

- `Authorization`: Bearer token (required)

## Status Codes

- `200 OK`: Captain successfully logged out.
- `401 Unauthorized`: Invalid or missing authentication token.

## Example Request

```http
GET /captains/logout
Authorization: Bearer generatedAuthToken
```

## Example Responses

### Success Response

```json
{
  "message": "Logged out"
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

# Ride Creation API

## Endpoint

`POST /rides/create`

## Description

This endpoint allows authenticated users to create a new ride by providing pickup and destination addresses, and vehicle type.

## Request Body

The request must contain the following JSON object:

```json
{
  "pickup": "string",
  "destination": "string",
  "vehicleType": "string"
}
```

### Required Fields

- `pickup`: The pickup address (string).
- `destination`: The destination address (string).
- `vehicleType`: The type of the vehicle (string, one of 'auto', 'car', 'moto').

## Status Codes

- `201 Created`: Ride successfully created.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
POST /rides/create
Content-Type: application/json

{
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "vehicleType": "car"
}
```

## Example Responses

### Success Response

```json
{
  "rideId": "rideId",
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car",
  "status": "pending"
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "pickup",
      "location": "body"
    }
  ]
}
```

# Ride Fare API

## Endpoint

`GET /rides/get-fare`

## Description

This endpoint allows authenticated users to get the fare estimate for a ride by providing pickup and destination addresses.

## Query Parameters

- `pickup`: The pickup address (string).
- `destination`: The destination address (string).

## Status Codes

- `200 OK`: Fare estimate retrieved successfully.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
GET /rides/get-fare?pickup=123+Main+St&destination=456+Elm+St
```

## Example Responses

### Success Response

```json
{
  "fare": 25.50
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "pickup",
      "location": "query"
    }
  ]
}
```

# Ride Confirmation API

## Endpoint

`POST /rides/confirm`

## Description

This endpoint allows authenticated captains to confirm a ride by providing the ride ID.

## Request Body

The request must contain the following JSON object:

```json
{
  "rideId": "string"
}
```

### Required Fields

- `rideId`: The ID of the ride (string).

## Status Codes

- `200 OK`: Ride successfully confirmed.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
POST /rides/confirm
Content-Type: application/json

{
    "rideId": "rideId"
}
```

## Example Responses

### Success Response

```json
{
  "rideId": "rideId",
  "status": "confirmed"
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "rideId",
      "location": "body"
    }
  ]
}
```

# Ride Start API

## Endpoint

`GET /rides/start-ride`

## Description

This endpoint allows authenticated captains to start a ride by providing the ride ID and OTP.

## Query Parameters

- `rideId`: The ID of the ride (string).
- `otp`: The OTP for the ride (string).

## Status Codes

- `200 OK`: Ride successfully started.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
GET /rides/start-ride?rideId=rideId&otp=123456
```

## Example Responses

### Success Response

```json
{
  "rideId": "rideId",
  "status": "in-progress"
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "rideId",
      "location": "query"
    }
  ]
}
```

# Ride End API

## Endpoint

`POST /rides/end-ride`

## Description

This endpoint allows authenticated captains to end a ride by providing the ride ID.

## Request Body

The request must contain the following JSON object:

```json
{
  "rideId": "string"
}
```

### Required Fields

- `rideId`: The ID of the ride (string).

## Status Codes

- `200 OK`: Ride successfully ended.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
POST /rides/end-ride
Content-Type: application/json

{
    "rideId": "rideId"
}
```

## Example Responses

### Success Response

```json
{
  "rideId": "rideId",
  "status": "completed"
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "rideId",
      "location": "body"
    }
  ]
}
```

# Get Coordinates API

## Endpoint

`GET /maps/get-coordinates`

## Description

This endpoint allows authenticated users to get the coordinates of an address.

## Query Parameters

- `address`: The address to get coordinates for (string).

## Status Codes

- `200 OK`: Coordinates retrieved successfully.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
GET /maps/get-coordinates?address=123+Main+St
```

## Example Responses

### Success Response

```json
{
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "address",
      "location": "query"
    }
  ]
}
```

# Get Distance and Time API

## Endpoint

`GET /maps/get-distance-time`

## Description

This endpoint allows authenticated users to get the distance and time between two addresses.

## Query Parameters

- `origin`: The origin address (string).
- `destination`: The destination address (string).

## Status Codes

- `200 OK`: Distance and time retrieved successfully.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
GET /maps/get-distance-time?origin=123+Main+St&destination=456+Elm+St
```

## Example Responses

### Success Response

```json
{
  "distance": "5 miles",
  "time": "15 minutes"
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "origin",
      "location": "query"
    }
  ]
}
```

# Get Suggestions API

## Endpoint

`GET /maps/get-suggestions`

## Description

This endpoint allows authenticated users to get autocomplete suggestions for an address input.

## Query Parameters

- `input`: The address input to get suggestions for (string).

## Status Codes

- `200 OK`: Suggestions retrieved successfully.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid data).

## Example Request

```http
GET /maps/get-suggestions?input=123+Main+St
```

## Example Responses

### Success Response

```json
{
  "suggestions": [
    "123 Main St, New York, NY",
    "123 Main St, Los Angeles, CA"
  ]
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "input",
      "location": "query"
    }
  ]
}
```
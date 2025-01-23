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

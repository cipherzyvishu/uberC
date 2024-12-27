# Backend API Documentation

# /users/register

## Description

Endpoint to register a new user with first name, last name, email, and password.

## Request Body

- `fullname.firstname` (required, minimum 3 characters)
- `fullname.lastname` (required, minimum 3 characters)
- `email` (required, must be a valid email format)
- `password` (required, minimum 5 characters)

## Status Codes

- `200` – Request succeeded, returns a token and user data
- `400` – Validation error (e.g., missing or invalid fields)
- `500` – Internal server error

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# /users/login

## Description

Endpoint to authenticate a user with email and password.

## Request Body

- `email` (required, must be a valid email format)
- `password` (required, minimum 5 characters)

## Status Codes

- `200` – Request succeeded, returns a token and user data
- `400` – Validation error (e.g., missing or invalid fields)
- `401` – Unauthorized (invalid email or password)
- `500` – Internal server error

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# /users/profile

## Description

Endpoint to retrieve the authenticated user's profile information.

## Request Headers

- `Authorization`: Bearer `<token>`

## Status Codes

- `200` – Request succeeded, returns user data
- `401` – Unauthorized (missing or invalid token)
- `500` – Internal server error

## Example Response

```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

# /users/logout

## Description

Endpoint to log out the authenticated user by invalidating the token.

## Request Headers

- `Authorization`: Bearer `<token>`

## Status Codes

- `200` – Logged out successfully
- `401` – Unauthorized (missing or invalid token)
- `500` – Internal server error

## Example Response

```json
{
  "message": "Logged out successfully"
}
```

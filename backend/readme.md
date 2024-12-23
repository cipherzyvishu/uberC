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

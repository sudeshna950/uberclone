# Backend API Documentation

## Overview
This document provides an overview of the backend API for user registration and management. The API is built using Node.js and Express, and it interacts with a user model for data management.

## Endpoints

### User Registration
- **Endpoint**: `POST /users/register`
- **Description**: Allows a new user to register by providing their personal details. Upon successful registration, the server responds with an authentication token and user details.

#### Request Body
The request must be in JSON format and include the following fields:
- `fullname`: An object containing the user's full name.
  - `firstname`: The first name of the user (string, required).
  - `lastname`: The last name of the user (string, required).
- `email`: The email address of the user (string, required).
- `password`: The password for the user account (string, required).

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

{
  "token": "generatedAuthToken",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}

{
  "errors": [
    {
      "msg": "Error message describing what went wrong",
      "param": "parameterName",
      "location": "body"
    }
  ]
}

### Request Body
The request must be in JSON format and include the following fields:

- `fullname`: An object containing the user's full name.
- `firstname`: The first name of the user (string, required).
- `lastname`: The last name of the user (string, required).
- `email`: The email address of the user (string, required).
- `password`: The password for the user account (string, required).



### Example response

- 'user' (object):
- `firstname`: The first name of the user (string, required).
- `lastname`: The last name of the user (string, required).
- `email`: The email address of the user (string, required).
- `token`: The authentication token for the user (string, required).







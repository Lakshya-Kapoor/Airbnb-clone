# Airbnb Clone

## Description

Welcome to the Airbnb Clone project! This repository contains a simplified version of the Airbnb platform, built using Node.js and Express. You can find the hosted website [here](https://airbnb-clone-ol1y.onrender.com/listings).

## Table of contents

- [Description](#description)
- [Motivation behind project](#goals)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API reference](#api-reference)

## Goals

The leaning goals behind making this clone:

1. Learning how to handle forms with files as inputs

2. Saving image files (.jpg, .png, .jpeg)

3. Creating a project with **MVC** architecture

4. Learning how to host a fullstack website

5. Schema design for one to many type relationships

6. Creating APIs adhering to REST guidlines

## Tech Stack

1. **Frontend:**
    - EJS
    - Vanilla CSS
    - Bootstrap

2. **Backend:**
    - Node.js
    - Express.js

3. **Database:**
    - MongoDB

4. **Authentication:**
    - Passport.js (Local authentication strategy)

5. **Hosting:**
    - Cloudinary (To host uploaded images)
    - Render (To host the frontend and backend)

## Installation

To run the project locally, ensure you have completed the following steps:

1. **Node.js and npm**: Ensure you have Node.js and npm installed. If not [click here](https://nodejs.org/).

2. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/Lakshya-Kapoor/Airbnb-clone.git
    ```

3. **Install Dependencies**: Install the necessary dependencies by running:

    ```bash
    npm install
    ```

4. **Run the Express Server**: Start the Express server using Node:

    ```bash
    node app.js
    ```

5. **Environment variables**: Configure the floowing environment variables in a .env file:

    - **SESSION_SECRET**: For the express session.

    - **MONGO_URL**: Your mongoose connection link.

    - **CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET**: All the cloudinary variables to store images on the cloud.

## API reference

- `GET /listings` All listings page
- `POST /listings` Creating a new listing
- `GET /listings/new` Form to create a new listing
- `GET /listings/:id` Specific listing page
- `GET /listings/:id/edit` Editing details of a listing
- `PUT /listings/:id` Updating details of a listing
- `DELETE /listings/:id` Deleting a listing
- `POST /listings/:id/reviews` Posting a new review
- `DELETE /listings/:id/reviews` Deleting a review
- `GET /login` Login page
- `POST /login` logging into an account
- `GET /logout` logging out of an account
- `GET /signup` Signup page
- `POST /signup` Creating a new account

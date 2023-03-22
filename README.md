# 12-oaks-restautant API

This is an API that serves the 12-oaks-restautant-react app.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Architecture

MVC

## Recommended Node Version

v17.0.1

## Technologies

1. [Node](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)

## How to Setup and Run

1. Clone project `git clone git@github.com:King-Benx/12-oaks-restaurant-api.git`
2. Navigate to root directory.
3. Build dependencies using `npm i`
4. Set up respective environment variables in your `.env` file in your root directory.
5. Set up your port number
6. Run the project using `npm start`

NOTE: Ensure that you have redis-server installed and running before starting your application.

## Level 2 folder structure

```
app
   |-- config 
   |   |-- env.js           (Manages environment variables)
   |   |-- winston.js       (Manage Logging within the application)
   |-- controllers 
   |   |-- controllers      (Handle business logic)
   |-- helpers
   |   |-- environments.js  (Checks required environment variables before start of server)
   |-- middleware
   |   |-- index.js         (Check environment variables on start)
   |-- routes
   |   |-- restaurants.js   (The different end points accessible)
   |-- server
   |   |-- index.js (Entry point of server)
   |-- index.js (Entry point of application)
```

## End Points

1. Fetch all restaurants with support to ```location``` and ```term``` queries.

```
    GET: api/restaurants 
```

2. Fetch restaurant details by id.

```
    GET: api/restaurants/{id} 
```

## Contributing to this project

Follow development conventions of ticket assignment, branch naming, meaningful atomic commits, creation of pull requests. Avoid free-style problem solving, take time and learn how other contributors have solved for similar issues within this project before breaking rhythm.

### Pull Request Notes

1. Prior to creating your pull request, ensure that your code is not breaking any previous functionality and patterns.
2. Ensure that your code captures all edge cases and is rock solid.
3. Ensure that your work is fully optimized.
4. Test your code more than twice before requesting for reviews on your work.
5. Incase of any known loose ends, kindly make it known within your pr description and why it is and what strategies will be needed to mitigate.
6. Make sure any recommendations and valid requested changes are done before re-requesting for a second review.

## Contributors

[Recent contributors](https://github.com/King-Benx/12-oaks-restaurant-api/graphs/contributors)

# Weather Party

It's a service that suggests a playlist according the current
temperature.

## Business Requirements

- If temperature is above 30 degrees, suggest tracks of party

- In case temperature is above 15 and below 30 degrees, 
  suggest pop music tracks

- If it's a bit chilly (between 10 and 14 degrees), suggest
  rock music tracks

- Otherwise, if it's freezing outside, suggest
  classical music tracks

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

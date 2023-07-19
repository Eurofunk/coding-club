# HTTP API integration example

In this example a simple HTTP API should be integrated into a simple AngularJS frontend.
The API has a description written in OpenAPI and an API mock created with Mockoon.

## Prerequisites

You should have NodeJS, Postman or any other API client and VSCode or any other IDE of your choice available.

Install the Mockoon CLI with

```
npm install -g @mockoon/cli
```

Install the Angular CLI with

```
npm install -g @angular/cli
```

## Running the API mock

To start the API mock run

```
mockoon-cli start --data api_mock.json
```

and stop it with

```
mockoon-cli stop
```

The API is available at port 3001.

## Running the Angular app

To run the app and open it in your default browser execute

```
ng serve -o
```

The app is available on port 4200.
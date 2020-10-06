# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Frontend Docker image

Make sure you’re in the directory nodesql/frontend in a terminal or PowerShell using the cd command.

Run `docker build -t nodesql/frontend-multistage .` to install all the components and build your frontend docker image.

You’ll see Docker step through each instruction in your Dockerfile, building up your image as it goes. If successful, the build process should end with a message Successfully tagged nodesql/frontend-multistage:latest.

Run the following command to start a container based on your new image:
`docker run --name nodesql-frontend-multistage-container -d -p 8888:80 nodesql/frontend-multistage`

Visit your application in a browser at localhost:8080. You should see your nodesql frontend application up and running.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

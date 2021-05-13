# Vehicle History web app

This app allows a user to track the services they have done to
their car and stores it in a database and displays it on the
frontend.

*This app is still a work in progress

## Before you run the app
```npm i -g sequelize-cli gulp-cli```

## To Run

```
cd backend
npm install

cd ../frontend
npm install
```
To start up the DB,

```
cd backend
docker-compose up
npm run migrate-up
gulp dev
```

This will start running the server.
to view the API docs, go to ```localhost:8080/docs```

To run the frontend:

```cd frontend && npm run start```

The frontend will be running on
```localhost:3000```

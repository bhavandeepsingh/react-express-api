# Kinde Starter Kit - React with Express API

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Setup your local environment

Clone this repo and install dependencies by running `npm i` in both the `client` and `server` directories.

The React frontend of the application lives in the `client` folder and the Express API backend in the `server` folder.

In the `client` make a copy of `.env_sample` and name it simply `.env`. Set the following variable with the `Token host` value from the Kinde `App Keys` page

folder make a copy of `.env_sample` and name it simply `.env`. Rename the value of `REACT_APP_KINDE_DOMAIN` environment variable to be the subdomain you set up on Kinde.

e.g

```
REACT_APP_KINDE_DOMAIN=https://your_kinde_subdomain.kinde.com
```

## Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your React application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the App Keys page set `Redirect url` to `http://localhost:3000`

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the `Logout url` to http://localhost:3000.

## Start the app

`npm start` and navigate to `http://localhost:3000`.

Click on `Sign up` and register your first user for your business!

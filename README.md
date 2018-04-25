# WTFUmass

> ("What to fix") WTFUMass is a website that provides a ranking system for what students want to see fixed. This site is made by Ryan Mahan, UMass Amherst '19, for the Student Government Association, as a method to collect semi-anonymous feedback from students and to help the SGA prioritize where and what it should be working on.

## Setup for git

``` bash
# clone repsitory
git clone http://github.com/ryanmahan/WTFUMass

# set upstream to develop
git remote --set-upstream origin develop

# how to push all changes on local
git add .
git commit -m ''
git pull
git push
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

#start backend node server
node ./backend/server.js

# build for production with minification
npm run build
```
## Project Layout

# src
Holds the frontend code, assets, and Vue components under the components folder.
App.vue and main.js initialize the frontend and router/index.js is the frontend Vue Router.

# backend
Holds the backend code, models in the model folder and routes in the routes folder. 
Routes in user.js start with /user/, as defined in server.js in the root of the project.

## Contributing

Email Ryan Mahan (ryanmahan97@gmail.com) to get involved and become a contributor.

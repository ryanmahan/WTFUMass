# WTFUmass

> ("What to fix") WTFUMass is a website that provides a ranking system for what students want to see fixed.

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
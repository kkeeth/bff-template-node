# BFF Template Node

This repository is a bff template by using [node.js](https://nodejs.org/en/)([express](https://expressjs.com/))

# Usage

## case: using `Node.js`

```
# install yarn globally
$ npm install -g yarn

# install node modules
$ yarn install

# BOOT this app in local env
$ yarn dev

# BOOT this app in env(develop, staging, production)
$ yarn start:develop

# STOP this app
# At first, we should check pid
$ yarn status
$ yarn stop {pid}
```

## case: using `Docker`

It is assumed that `Docker` works with [Docker for mac](https://docs.docker.com/docker-for-mac/)).
If you want to run an application built with `Docker`, please install it in advance.

The image of docker is `lts-alpine` of `nodejs`.
Please execute commands below.

```
# BOOT by daemon
$ docker-compose up -d

# BOOT(show log on your terminal)
$ docker-compose up

# STOP only
$ docker-compose stop

# STOP and REMOVE
$ docker-compose down
```

Once started, you can access http://localhost:8180, so call each endpoint. You can also run it with the `curl` command.

# LICENSE
[MIT](https://github.com/k-kuwahara/bff-template-node/blob/master/LICENSE)

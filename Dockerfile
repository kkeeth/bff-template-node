FROM node:lts-alpine

ENV API /var/api

RUN mkdir $API
WORKDIR $API
COPY ./ $API

RUN npm i -g yarn
RUN yarn
EXPOSE 3000
CMD yarn start:$API_ENVIRONMENT

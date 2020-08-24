FROM node:latest

ENV TIME_ZONE=Asia/Tehran
ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm i -g typescript

ADD . /usr/src/app
RUN tsc


CMD [ "npm", "start" ]
# build environment
FROM node:12alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn build — silent
RUN yarn build react-scripts@3.0.1 -g — silent
COPY . /app
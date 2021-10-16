FROM node:16-alpine3.11

RUN apk update

WORKDIR /app

COPY *.json ./

RUN npm install

COPY . .

RUN npm run build


CMD [ "node", "./dist/server.js" ]
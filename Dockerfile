FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

RUN npm i nodemon -g

COPY . .

# Now comes the production step
FROM base as production

ENV NODE_PATH=./build

RUN npm run build
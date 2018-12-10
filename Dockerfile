FROM node:8.11-alpine

ARG LINE_NOTIFY_ACCESS_TOKEN
ENV LINE_NOTIFY_ACCESS_TOKEN=${LINE_NOTIFY_ACCESS_TOKEN}

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install --pure-lockfil && yarn cache clean

COPY . /app
CMD [ "yarn", "start" ]

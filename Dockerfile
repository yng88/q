FROM node:23-alpine

ENV APP /app

WORKDIR $APP

RUN apk add --no-cache \
    git

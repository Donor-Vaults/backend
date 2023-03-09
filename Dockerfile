FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache openssl1.1-compat-dev

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY dist ./dist
COPY prisma ./prisma


WORKDIR /app

RUN yarn 
EXPOSE 3000
CMD [ "yarn", "start:prod" ]

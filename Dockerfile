FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
#ENV NODE_ENV production
RUN npm install
COPY . .
RUN npm run build
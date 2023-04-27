FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
#ENV NODE_ENV production
RUN npm install
COPY . .
RUN npm run build
CMD ["sh", "-c", "cp -r /app/build/. /shared"]

# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
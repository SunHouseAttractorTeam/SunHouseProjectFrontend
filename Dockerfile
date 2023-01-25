FROM node:16.15.0-alpine as builder

RUN npm i -g npm
RUN mkdir -p /src/app/
COPY ./package.json ./package-lock.json /src/app/
WORKDIR /src/app/
RUN npm install --force --production
COPY ./ /src/app/

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
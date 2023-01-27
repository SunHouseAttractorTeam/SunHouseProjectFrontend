FROM node:16.15.0-alpine as builder

ARG REACT_APP_GOOGLE_APP_ID
ARG REACT_APP_FACEBOOK_APP_ID
ARG REACT_APP_VK_APP_ID

ENV REACT_APP_GOOGLE_APP_ID="858735562314-upa9e77tqab4inapvtk3j25a8vaci6r6.apps.googleusercontent.com"
ENV REACT_APP_FACEBOOK_APP_ID='3482259702097118'
ENV REACT_APP_VK_APP_ID='51471263'

RUN npm i -g npm
RUN mkdir -p /src/app/
COPY ./package.json ./package-lock.json /src/app/
WORKDIR /src/app/
RUN npm install --force --production
COPY ./ /src/app/

RUN npm run build

FROM nginx:1.18.0-alpine
COPY --from=builder /src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-proxy/nginx.conf /etc/nginx/conf.d
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]
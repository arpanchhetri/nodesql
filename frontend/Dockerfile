### STAGE 1: Build ###
FROM node:12.18.4 AS compile-image

RUN npm install -g yarn --force

WORKDIR /opt/ng
COPY package.json yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build

### STAGE 2: Run ###
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/frontend /usr/share/nginx/html
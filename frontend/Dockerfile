FROM node:20.11.1-alpine AS build

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
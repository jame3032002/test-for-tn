FROM node:20.11.1-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20.11.1-alpine AS runner
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json .
RUN npm install --production

EXPOSE 2000

CMD [ "node", "./dist/server.js" ]
FROM node:22-alpine

WORKDIR /app

COPY server/package*.json ./server/

WORKDIR /app/server

RUN npm install

WORKDIR /app

COPY . .

WORKDIR /app/server

EXPOSE 5000

CMD ["npm", "start"]
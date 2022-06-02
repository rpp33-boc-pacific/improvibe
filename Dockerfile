FROM node:alpine

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npx", "next", "build", "&&", "npx", "next", "start" ]
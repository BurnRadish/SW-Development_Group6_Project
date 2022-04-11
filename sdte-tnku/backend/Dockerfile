FROM node:lts-alpine

WORKDIR /sdte-tnku/backend/

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "node", "index.js" ]

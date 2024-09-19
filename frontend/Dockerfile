FROM node:20

WORKDIR /app

EXPOSE 80

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
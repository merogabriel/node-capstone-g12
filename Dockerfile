FROM node:18.2.0
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
ENV NODE_PATH=./src
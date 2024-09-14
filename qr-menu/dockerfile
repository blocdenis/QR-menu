FROM node:20-alpine AS builder
WORKDIR /react
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "run", "build"]




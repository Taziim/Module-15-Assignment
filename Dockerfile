FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i 
COPY src ./src
EXPOSE 3000
USER node
CMD ["node", "src/server.js"]
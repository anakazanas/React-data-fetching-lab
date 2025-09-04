FROM node:20-alpine
WORKDIR /app
COPY ./react-api-lab/package*.json .
RUN npm install
COPY ./react-api-lab/* .
EXPOSE 5173
CMD ["npm", "run","dev"]

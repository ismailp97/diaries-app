FROM node:16
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV DB_USER=postgres
ENV DB_HOST=diaries-db
ENV DB_NAME=diaries
ENV DB_PASSWORD=docker
ENV DB_PORT=5432
EXPOSE 3000
CMD ["node", "index.js"]
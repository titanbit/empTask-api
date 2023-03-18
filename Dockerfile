FROM node:16-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 3322
CMD ["node","app.js"]

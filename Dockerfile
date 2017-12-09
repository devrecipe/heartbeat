FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
COPY config.json .
COPY index.js .
COPY public .
RUN npm install
ENV PORT 80
EXPOSE 80
CMD ["node", "index.js"]
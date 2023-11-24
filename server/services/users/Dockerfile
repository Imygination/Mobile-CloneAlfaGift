FROM node:latest

WORKDIR /usr/local/app

ENV MONGO_PASS=ksamXrZXK2FAFyAo \
    jwtSecret=qwertyuiop \
    NODE_ENV=production \
    PORT=4001

COPY package.json package-lock.json /usr/local/app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]
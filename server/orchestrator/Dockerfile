FROM node:latest

WORKDIR /usr/local/app

ENV NODE_ENV=production \
    REDIS_PASS=ZCBm5QWr5FlqssdFkgcE5BnKvpNJ90eF \
    PORT=4000

COPY package.json package-lock.json /usr/local/app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]
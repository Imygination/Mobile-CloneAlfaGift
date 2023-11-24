FROM node:latest

WORKDIR /usr/local/app

ENV NODE_ENV=production \
    PORT=4002 \
    DATABASE_URL=postgresql://postgres:vGM6FXXeX1Jikait@db.copsgaxiwejotmgxwfww.supabase.co:5432/postgres

COPY package.json package-lock.json /usr/local/app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]
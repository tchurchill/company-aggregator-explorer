FROM node:14-alpine

WORKDIR /opt/sps/app

COPY src src
COPY .eslintrc .eslintrc
COPY index.html index.html
COPY jest.config.js jest.config.js
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY tsconfig.json tsconfig.json
COPY vite.config.js vite.config.js

RUN npm i -g pnpm
RUN pnpm i

EXPOSE 8100
ENV BROWSER=none
CMD ["pnpm", "dev"]

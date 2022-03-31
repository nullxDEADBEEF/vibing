ARG APP_ENV=dev

FROM node:17-alpine as base

WORKDIR /usr/src/app

COPY package.json yarn.lock* ./

RUN yarn install && yarn cache clean

COPY . .

EXPOSE 7001
EXPOSE 24678


FROM base as dev

RUN echo "starting frontend as development"
CMD yarn dev


FROM base as prod

RUN echo "starting frontend as production"
CMD node ./build

FROM node:alpine as builder

ENV APP=/app
ENV BUILD=$APP/lib SRC=$APP/src

WORKDIR $APP

COPY ["./tsconfig.json", "./package.json", "./yarn.lock", "${APP}/"]
RUN yarn global add typescript && yarn install

COPY ["./src", "${SRC}"]

RUN tsc


FROM node:alpine

ENV APP=/app
ENV BUILD=$APP/lib SRC=$APP/src

WORKDIR $APP

COPY ["./package.json", "./yarn.lock", "${APP}/"]
RUN yarn install --production=true

COPY --from=0 /app/lib ./lib

ENTRYPOINT ["node"]
CMD ["lib"]

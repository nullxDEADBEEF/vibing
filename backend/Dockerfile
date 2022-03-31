ARG APP_ENVIRONMENT=dev

FROM golang:alpine as base

WORKDIR /app

EXPOSE 9900 

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./src/*.go ./src/

RUN CGO_ENABLED=0 go build -o vibing_backend ./src/*

FROM base as dev

WORKDIR /app/src

RUN go install github.com/cosmtrek/air@latest
CMD air

FROM scratch as prod

WORKDIR /app

ENV GIN_MODE=release

COPY --from=base  /app/vibing_backend /usr/bin/
CMD ["vibing_backend"]

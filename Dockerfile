FROM node:17.9.0-alpine3.15

ARG VERSION=v1.0
LABEL maintainer="https://github.com/tampadevs"

WORKDIR /app
ENTRYPOINT ["sh", "-c", "npm i && npm run dev"]
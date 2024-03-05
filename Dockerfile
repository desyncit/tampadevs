FROM node:18.19.1-alpine3.18

ARG VERSION=v1.0
LABEL maintainer="https://github.com/tampadevs"

WORKDIR /app
ENTRYPOINT ["sh", "-c", "npm i && npm run dev"]

FROM alpine
MAINTAINER kev <noreply@easypi.pro>

WORKDIR /db
RUN set -xe \
    && apk add --no-cache nodejs nodejs-npm \
    && npm install -g json-server \
    && rm -rf /tmp/npm* /var/cache/apk/*

COPY . .
VOLUME [ "/db" ]

EXPOSE 3000

ENTRYPOINT ["json-server"]
CMD ["-H", "0.0.0.0", "-w", "db.json"]
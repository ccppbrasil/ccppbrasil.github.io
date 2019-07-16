FROM matheuscastello/binutils-deb AS Build

# copy project source 
COPY hello.c hello.c

# compile
RUN gcc -o hello hello.c

FROM arm32v7/debian:buster-slim AS Deploy

COPY --from=Build /hello /hello

CMD [ "./hello" ]

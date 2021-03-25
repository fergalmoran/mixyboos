#!/usr/bin/env bash

docker create \
    --name postgres-mixyboos \
    -e POSTGRES_PASSWORD=postgres \
    -p 5432:5432 \
    -v $HOME/working/pg_data/mixyboos:/var/lib/postgresql/data \
    postgres

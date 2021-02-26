#!/usr/bin/env bash

docker run \
    -e POSTGRES_PASSWORD=postgres \
    -p 5432:5432 \
    -v $HOME/working/pg_data/mixyboos:/var/lib/postgresql/data \
    -d postgres

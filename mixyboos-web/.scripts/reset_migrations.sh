#!/usr/bin/env bash

if [ -d prisma/migrations ] ; then
    rm -rf prisma/migrations
fi
npx prisma migrate dev --name Initial

#!/bin/bash

if [[ $1 = "web" ]]; then
  echo "Running Django develop web-server"
  pkill -f runserver
  python manage.py runserver 0.0.0.0:8000
  exit 1
fi

if [[ $1 = "schema" ]]; then
  python manage.py graphql_schema --indent 2
  mv schema.json /data/.
  exit 1
fi

# DEFAULT COMMANDS WITHOUT ARGUMENTS
./run.sh web

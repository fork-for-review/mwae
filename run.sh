#!/bin/bash

if [[ $1 = "init" ]]; then
  docker-compose up -d
  exit 1
fi

if [[ $1 = "build" ]]; then
  docker-compose build
  exit 1
fi

if [[ $1 = "back" ]]; then
  docker exec -it mwae_core_container /bin/bash
  exit 1
fi

if [[ $1 = "front" ]]; then
  docker exec -it mwae_client_container /bin/bash
  exit 1
fi

if [[ $1 = "github-service" ]]; then
  docker exec -it mwae_go_github_service_container /bin/bash
  exit 1
fi

# DEFAULT
./run.sh init

#!/bin/bash

service_run () {
  if [[ $2 = "logs" ]]; then
    ./manage.sh d logs -f $1
  elif [[ $2 = "build" ]]; then
    ./manage.sh dc build $1
  else
    ./manage.sh d exec -it $1 ${@:2}
  fi
}

help() {
  echo -e "Usage: ./manage.sh [SERVICE | DOCKER | DOCKER-COMPOSE] COMMAND" "\n"
  echo -e "Containers managment util" "\n"
  echo -e "Docker:"
  echo -e "  d" " \t" "run docker (see ./manage.sh d --help)" "\n"
  echo -e "Docker-Compose:"
  echo -e "  dc" " \t" "run docker-compose (see ./manage.sh dc --help)" "\n"
  echo -e "Service:"
  echo -e "  Usage: ./manage.sh [SERVICE] [BUILD | LOGS | COMMAND]" "\n"
  echo -e "  build" "\t" "build or rebuild docker-container"
  echo -e "  logs" "\t\t" "see real time logs of docker-container" "\n"
  echo -e "Available services:"
  echo -e "  core" "\t\t\t" "Django app"
  echo -e "  client" "\t\t" "React app"
  echo -e "  db" "\t\t\t" "PostgreSQL database"
  echo -e "  rabbitmq" "\t\t" "RabbitMQ Server"
  echo -e "  celery_worker" "\t" "Celery worker container"
  echo -e "  celery_beat" "\t\t" "Celery beat container"
  echo -e "  flower" "\t\t" "Flower app"
  echo -e "  go_github_service" "\t" "Go microservice container"
}

if [[ $1 = "d" ]]; then
  docker ${@:2}
  exit 1
fi

if [[ $1 = "dc" ]]; then
  docker-compose ${@:2}
  exit 1
fi

if [[ $1 = "core" ]]; then
  service_run mwae_core ${@:2}
  exit 1
fi

if [[ $1 = "client" ]]; then
  service_run mwae_client ${@:2}
  exit 1
fi

if [[ $1 = "db" ]]; then
  service_run mwae_db ${@:2}
  exit 1
fi

if [[ $1 = "rabbitmq" ]]; then
  service_run mwae_rabbitmq ${@:2}
  exit 1
fi

if [[ $1 = "celery_worker" ]]; then
  service_run mwae_celery_worker ${@:2}
  exit 1
fi

if [[ $1 = "celery_beat" ]]; then
  service_run mwae_celery_beat ${@:2}
  exit 1
fi

if [[ $1 = "flower" ]]; then
  service_run mwae_flower ${@:2}
  exit 1
fi

if [[ $1 = "go_github_service" ]]; then
  service_run mwae_go_github_service ${@:2}
  exit 1
fi

if [[ $1 = "--help" ]]; then
  help
  exit 1
fi

if [[ $1 = "-h" ]]; then
  help
  exit 1
fi

help

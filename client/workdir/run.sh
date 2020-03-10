#!/bin/bash

# Make link to node modules files:
if [[ $1 = "makelink" ]]; then
  ln -sf /opt/node_modules /workdir/node_modules >> /dev/null
  clear
  exit 1
fi

if [[ $1 = "dev" ]]; then
  echo "Running develop web-server"
  pkill node
  yarn
  yarn run relay-compiler --src ./src --schema /data/schema.json
  yarn start
  exit 1
fi

if [[ $1 = "relay" ]]; then
  clear
  yarn run relay-compiler --src ./src --schema /data/schema.json
  exit 1
fi

if [[ $1 = "init" ]]; then
  clear
  ./run.sh makelink
  ./run.sh relay
  exit 1
fi

# DEFAULT COMMAND WITHOUT ARGUMENS
./run.sh dev

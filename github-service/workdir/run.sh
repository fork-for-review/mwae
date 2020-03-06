#!/bin/bash

if [[ $1 = "web" ]]; then
  go run main.go
  exit 1
fi

# DEFAULT COMMANDS WITHOUT ARGUMENTS
./run.sh web

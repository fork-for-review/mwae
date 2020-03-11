#!/bin/bash


if [[ $1 = "--help" ]]; then
  echo ""
  exit 1
fi

if [[ $1 = "dump" ]]; then
  # Getting current date
  now=$(date +"%Y%m%d")
  # Generate filename with full path in postres container
  filename="/backup/full_$now.dump"
  pg_dump -O -F c -d $POSTGRES_DB -U $POSTGRES_USER -f $filename
  echo ""
  exit 1
fi

if [[ $1 = "load" ]]; then

  if [[ $2 != "" ]]; then
    pg_restore -U $POSTGRES_USER -c -v -d $POSTGRES_DB $2
  else
    echo "You are an idiot"
  fi

fi

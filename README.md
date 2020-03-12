# Modern Web-Application Example

To launch application you need to install [Docker](https://docs.docker.com/install/)
and [docker-compose](https://docs.docker.com/compose/install/).

Clone this project:

```bash
git clone https://github.com/makridenko/mwae.git && cd mwae
```

Then in your terminal run:

```bash
./manage.sh dc build
```

Next:

```bash
./manage.sh dc up -d
```

Run migrate:

```bash
./manage.sh core ./manage.py migrate
```

Create superuser:

```bash
./manage.sh core ./manage.py createsuperuser
```

Open [admin page](http://127.0.0.1:21080/admin) in browser and add some data.

Now you can play around with [client page](http://127.0.0.1:21030/) or [GraphQL api](http://127.0.0.1:21080/api).

To see logs of service run:
```bash
./manage.sh core logs
```

More info:
```bash
./manage.sh --help
```

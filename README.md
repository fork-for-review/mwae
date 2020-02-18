# Modern Web-Application Example

To launch application you need to install [Docker](https://docs.docker.com/install/)
and [docker-compose](https://docs.docker.com/compose/install/).

Clone this project:

```bash
git clone https://github.com/makridenko/mwae.git && cd mwae
```

Then in your terminal run:

```bash
./run.sh init
```

To run bash in `mwae_client_container`:

```bash
./run.sh front
```

To run bash in `mwae_core_container`:

```bash
./run.sh back
```

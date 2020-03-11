FROM python:3.7.2

# PRE CONFIGURATION, optimization for docker-compose building
RUN mkdir /data
RUN mkdir /workdir

# Installing modules needed by Python
COPY /docker/django/requirements.txt /tmp/
RUN pip install --upgrade pip
RUN pip install -r /tmp/requirements.txt

# SUFFIX CONFIGURATION
RUN echo "Europe/Moscow" > /etc/timezone
WORKDIR /workdir

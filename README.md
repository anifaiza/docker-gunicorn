# docker-gunicorn
This is a simple service combined with two different microservices, 'create' and 'show' and containerized using Docker.
## Technologies used:
* Python flask framework
* Mongodb
* Docker
* Gunicorn
* Postman

## Model URI
>http://localhost/api/show Method: GET

>http://localhost/api/create Method: POST

here, 'localhost' should be replaced with the container's ip address followed by ':' followed by the port number.

## Use Case diagram 

![docker-ps](screenshots/usecase)

## Some screenshots from my system
To build and run the docker container we do

$ docker-compose up

![docker-compose-up](screenshots/DockerComposeUp)

to check the list of running containers

$ docker ps

and to inspect the overall state of the container

$ docker inspect <container_id>

![docker-ps](screenshots/runningContainers)

testing if the two services are running

![docker-ps](screenshots/postman_create)

![docker-ps](screenshots/postman_show)